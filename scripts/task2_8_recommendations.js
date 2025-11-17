// Task 2.8 – Hard‑coded recommendations on Customer

db.Customer.updateOne({ _id: 1 },  { $set: { recommendations: [6, 25] } });
db.Customer.updateOne({ _id: 2 },  { $set: { recommendations: [1, 26] } });
db.Customer.updateOne({ _id: 3 },  { $set: { recommendations: [17, 44] } });
db.Customer.updateOne({ _id: 4 },  { $set: { recommendations: [36, 43] } });
db.Customer.updateOne({ _id: 5 },  { $set: { recommendations: [42, 48] } });
db.Customer.updateOne({ _id: 6 },  { $set: { recommendations: [50, 33] } });
db.Customer.updateOne({ _id: 7 },  { $set: { recommendations: [45, 53] } });
db.Customer.updateOne({ _id: 8 },  { $set: { recommendations: [15, 34] } });
db.Customer.updateOne({ _id: 9 },  { $set: { recommendations: [37, 2] } });
db.Customer.updateOne({ _id: 10 }, { $set: { recommendations: [5, 48] } });
db.Customer.updateOne({ _id: 11 }, { $set: { recommendations: [16, 34] } });
db.Customer.updateOne({ _id: 12 }, { $set: { recommendations: [24, 25] } });
db.Customer.updateOne({ _id: 13 }, { $set: { recommendations: [40, 48] } });
db.Customer.updateOne({ _id: 14 }, { $set: { recommendations: [12, 39] } });
db.Customer.updateOne({ _id: 15 }, { $set: { recommendations: [23, 9] } });
db.Customer.updateOne({ _id: 16 }, { $set: { recommendations: [39, 40] } });
db.Customer.updateOne({ _id: 17 }, { $set: { recommendations: [36, 12] } });
db.Customer.updateOne({ _id: 18 }, { $set: { recommendations: [7, 33] } });
db.Customer.updateOne({ _id: 19 }, { $set: { recommendations: [1, 8] } });
db.Customer.updateOne({ _id: 20 }, { $set: { recommendations: [6, 39] } });
