// Task 2.10 – Indexes on Store and CustomerPastOrders

db.Store.createIndex({ "product.product_id": 1 });
db.CustomerPastOrders.createIndex({ "product.product_id": 1 });

// Aggregation pipeline for payout and distance calculation for a single order (e.g. order_id: 101)

db.CustomerCurrentOrders.aggregate([
  { $match: { order_id: 101 } },
  {
    $lookup: {
      from: "Partners",
      localField: "partner_id",
      foreignField: "partner_id",
      as: "partner_details"
    }
  },
  {
    $lookup: {
      from: "DailyInventoryLevel",
      localField: "product.product_id",
      foreignField: "product_id",
      as: "inventory_details"
    }
  },
  {
    $lookup: {
      from: "CustomerAddress",
      localField: "cust_id",
      foreignField: "customer_id",
      as: "customer_address"
    }
  },
  { $unwind: "$partner_details" },
  { $unwind: "$inventory_details" },
  { $unwind: "$customer_address" },
  {
    $addFields: {
      distance_partner_to_store: {
        $sqrt: {
          $add: [
            { $pow: [{ $subtract: ["$partner_details.current_loc_lat", "$inventory_details.lat"] }, 2] },
            { $pow: [{ $subtract: ["$partner_details.current_loc_long", "$inventory_details.long"] }, 2] }
          ]
        }
      }
    }
  },
  {
    $addFields: {
      distance_store_to_customer: {
        $sqrt: {
          $add: [
            { $pow: [{ $subtract: ["$inventory_details.lat", "$customer_address.lat"] }, 2] },
            { $pow: [{ $subtract: ["$inventory_details.long", "$customer_address.long"] }, 2] }
          ]
        }
      }
    }
  },
  {
    $addFields: {
      total_payout: {
        $add: [
          { $sum: "$product.quantity" },
          "$distance_partner_to_store",
          "$distance_store_to_customer"
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      order_id: 1,
      partner_id: 1,
      partner_name: "$partner_details.name",
      number_of_products: { $sum: "$product.quantity" },
      distance_partner_to_store: 1,
      distance_store_to_customer: 1,
      total_payout: 1
    }
  }
]);
