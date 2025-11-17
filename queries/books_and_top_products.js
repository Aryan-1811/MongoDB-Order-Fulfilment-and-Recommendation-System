// 5.1 – Books with avg rating >= 4.5 published since 2019

db.OtherProduct.aggregate([
  { $match: { type: "book" } },
  { $match: { "type_specific_attribute.year_of_publication": { $gte: 2019 } } },
  { $match: { avg_rating: { $gte: 4.5 } } },
  {
    $project: {
      _id: 0,
      name: 1,
      "type_specific_attribute.author_name": 1,
      avg_rating: 1
    }
  },
  { $sort: { avg_rating: -1 } }
]);

// 5.2 – Top 20 most frequently purchased products in past orders with product details

db.CustomerPastOrders.aggregate([
  { $unwind: "$product" },
  {
    $group: {
      _id: "$product.product_id",
      total_quantity: { $sum: "$product.quantity" }
    }
  },
  { $sort: { total_quantity: -1 } },
  { $limit: 20 },
  {
    $lookup: {
      from: "OtherProduct",
      localField: "_id",
      foreignField: "product_id",
      as: "other_product_details"
    }
  },
  {
    $lookup: {
      from: "FreshProduct",
      localField: "_id",
      foreignField: "product_id",
      as: "fresh_product_details"
    }
  },
  {
    $project: {
      _id: 1,
      total_quantity: 1,
      product_details: {
        $cond: {
          if: { $gt: [{ $size: "$other_product_details" }, 0] },
          then: { $arrayElemAt: ["$other_product_details", 0] },
          else: { $arrayElemAt: ["$fresh_product_details", 0] }
        }
      }
    }
  }
]);

// 5.3 – Stores where product_id 51 is available
db.Store.find({ "product.product_id": 51 });

// 5.4 – Past orders where product_id 42 is present
db.CustomerPastOrders.find({ "product.product_id": 42 });
