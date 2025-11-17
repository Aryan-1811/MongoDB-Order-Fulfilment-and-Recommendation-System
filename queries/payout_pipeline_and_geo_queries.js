// Application Query 1 – Create order with nearest store and partner & calculate ETA

// Step 1: Find nearest store with stock for a product
// const customerCoordinates = [LONG, LAT]; // e.g. [-2.237294, 53.470197]
// const productId = 51; // example

// Run this in mongosh with appropriate variables defined:
/*
const nearestStore = db.Store.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: customerCoordinates },
      distanceField: "distanceToCustomer",
      spherical: true,
      query: {
        "product.product_id": productId,
        "product.quantity": { $gt: 0 }
      }
    }
  },
  { $limit: 1 }
]).toArray()[0];

const nearestPartner = db.Partners.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [ nearestStore.long, nearestStore.lat ] },
      distanceField: "distanceToStore",
      spherical: true,
      query: { state: "active" }
    }
  },
  { $limit: 1 }
]).toArray()[0];

const speedMetersPerMinute = 500;
const partnerToStoreTime = Math.round(nearestPartner.distanceToStore / speedMetersPerMinute);
const storeToCustomerTime = Math.round(nearestStore.distanceToCustomer / speedMetersPerMinute);
const totalETA = partnerToStoreTime + storeToCustomerTime;

const order = {
  order_id: 301,
  cust_id: 1,
  partner_id: nearestPartner.partner_id,
  product: [{
    product_id: productId,
    quantity: 1,
    cost: nearestStore.product.find(p => p.product_id === productId).cost
  }],
  total_cost: nearestStore.product.find(p => p.product_id === productId).cost,
  order_status: "Processing",
  eta: totalETA + " minutes",
  store_id: nearestStore.store_id
};

db.CustomerCurrentOrders.insertOne(order);

print({
  Order_Details: order,
  Nearest_Store: {
    address: nearestStore.store_address,
    distanceToCustomer: nearestStore.distanceToCustomer.toFixed(2) + " meters"
  },
  Delivery_Partner: {
    name: nearestPartner.name,
    rating: nearestPartner.rating,
    distanceToStore: nearestPartner.distanceToStore.toFixed(2) + " meters"
  },
  ETA: totalETA + " minutes"
});
*/

// Fetch details for created order_id = 301
db.CustomerCurrentOrders.aggregate([
  { $match: { order_id: 301 } },
  {
    $lookup: {
      from: "Partners",
      localField: "partner_id",
      foreignField: "partner_id",
      as: "partnerDetails"
    }
  },
  {
    $lookup: {
      from: "Store",
      localField: "store_id",
      foreignField: "store_id",
      as: "storeDetails"
    }
  },
  {
    $lookup: {
      from: "FreshProduct",
      localField: "product.product_id",
      foreignField: "product_id",
      as: "productDetails"
    }
  },
  {
    $project: {
      _id: 0,
      Product_Ordered: "$productDetails",
      Delivery_Partner: {
        name: { $arrayElemAt: ["$partnerDetails.name", 0] },
        rating: { $arrayElemAt: ["$partnerDetails.rating", 0] }
      },
      Store_Address: { $arrayElemAt: ["$storeDetails.store_address", 0] },
      ETA: "$eta"
    }
  }
]);

// Application Query 2 – Available fresh products near a specific location

db.Store.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [-2.237294, 53.470197] },
      distanceField: "distance",
      maxDistance: 2000,
      spherical: true
    }
  },
  { $unwind: "$product" },
  {
    $lookup: {
      from: "FreshProduct",
      localField: "product.product_id",
      foreignField: "product_id",
      as: "product_details"
    }
  },
  { $unwind: "$product_details" },
  {
    $project: {
      _id: 0,
      store_address: 1,
      "product_details.name": 1,
      "product_details.type": 1,
      "product_details.avg_rating": 1,
      "product_details.retail_price": 1,
      distance: 1
    }
  }
]);
