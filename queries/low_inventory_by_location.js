// Low inventory by storage location (threshold < 1000 units)

db.DailyInventoryLevel.aggregate([
  { $match: { inventory_quantity: { $lt: 1000 } } },
  {
    $group: {
      _id: "$storage_location",
      total_items: { $sum: 1 },
      average_inventory: { $avg: "$inventory_quantity" },
      total_inventory: { $sum: "$inventory_quantity" }
    }
  },
  { $sort: { total_items: -1 } }
]);
