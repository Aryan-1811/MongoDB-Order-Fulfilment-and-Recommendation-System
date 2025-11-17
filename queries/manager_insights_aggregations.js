// Manager insights – revenue, ratings, profit

// Revenue vs ratings (all products)
db.CustomerPastOrders.aggregate([
  { $unwind: "$product" },
  {
    $group: {
      _id: "$product.product_id",
      total_revenue: { $sum: "$product.cost" },
      average_rating: { $avg: "$product.rating" },
      total_quantity: { $sum: "$product.quantity" }
    }
  },
  {
    $lookup: {
      from: "FreshProduct",
      localField: "_id",
      foreignField: "product_id",
      as: "product_info"
    }
  },
  { $unwind: { path: "$product_info", preserveNullAndEmptyArrays: true } },
  {
    $lookup: {
      from: "OtherProduct",
      localField: "_id",
      foreignField: "product_id",
      as: "other_product_info"
    }
  },
  { $unwind: { path: "$other_product_info", preserveNullAndEmptyArrays: true } },
  {
    $project: {
      _id: 1,
      total_revenue: 1,
      average_rating: 1,
      total_quantity: 1,
      product_name_from_fresh: "$product_info.name",
      product_type_from_fresh: "$product_info.type",
      product_name_from_other: "$other_product_info.name",
      product_type_from_other: "$other_product_info.type"
    }
  },
  { $sort: { total_revenue: -1 } }
]);

// Fresh products – revenue by product and number sold
db.CustomerPastOrders.aggregate([
  { $unwind: "$product" },
  {
    $lookup: {
      from: "FreshProduct",
      localField: "product.product_id",
      foreignField: "product_id",
      as: "product_info"
    }
  },
  { $match: { product_info: { $ne: [] } } },
  {
    $group: {
      _id: "$product.product_id",
      total_revenue: {
        $sum: { $multiply: ["$product.quantity", "$product.cost"] }
      },
      total_quantity: { $sum: "$product.quantity" },
      product_name: { $first: "$product_info.name" },
      product_type: { $first: "$product_info.type" }
    }
  },
  { $sort: { total_revenue: -1 } }
]);

// Top and bottom fresh products by profit
db.CustomerPastOrders.aggregate([
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
    $addFields: {
      total_profit: {
        $multiply: [
          "$product.quantity",
          { $subtract: ["$product_details.standard_price", "$product_details.retail_price"] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$product.product_id",
      total_revenue: {
        $sum: { $multiply: ["$product.quantity", "$product.cost"] }
      },
      total_quantity_sold: { $sum: "$product.quantity" },
      total_profit: { $sum: "$total_profit" }
    }
  },
  { $sort: { total_profit: -1 } },
  { $limit: 5 }
]);

// Bottom 5 fresh products by profit
db.CustomerPastOrders.aggregate([
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
    $addFields: {
      total_profit: {
        $multiply: [
          "$product.quantity",
          { $subtract: ["$product_details.standard_price", "$product_details.retail_price"] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$product.product_id",
      total_revenue: {
        $sum: { $multiply: ["$product.quantity", "$product.cost"] }
      },
      total_quantity_sold: { $sum: "$product.quantity" },
      total_profit: { $sum: "$total_profit" }
    }
  },
  { $sort: { total_profit: 1 } },
  { $limit: 5 }
]);

// Profit of Other products by type
db.CustomerPastOrders.aggregate([
  { $unwind: "$product" },
  {
    $lookup: {
      from: "OtherProduct",
      localField: "product.product_id",
      foreignField: "product_id",
      as: "product_info"
    }
  },
  { $match: { product_info: { $ne: [] } } },
  {
    $group: {
      _id: "$product.product_id",
      total_revenue: {
        $sum: { $multiply: ["$product.quantity", "$product.cost"] }
      },
      total_quantity: { $sum: "$product.quantity" },
      product_name: { $first: "$product_info.name" },
      product_type: { $first: "$product_info.type" },
      standard_price: { $first: "$product_info.standard_price" },
      retail_price: { $first: "$product_info.retail_price" }
    }
  },
  {
    $project: {
      _id: 1,
      product_name: 1,
      product_type: 1,
      total_revenue: 1,
      total_quantity: 1,
      profit: {
        $subtract: [
          "$total_revenue",
          { $multiply: ["$total_quantity", "$standard_price"] }
        ]
      }
    }
  },
  { $sort: { profit: -1 } }
]);

// Total revenue from current orders
db.CustomerCurrentOrders.aggregate([
  {
    $group: {
      _id: null,
      total_revenue: { $sum: "$total_cost" }
    }
  },
  { $project: { _id: 0, total_revenue: 1 } }
]);
