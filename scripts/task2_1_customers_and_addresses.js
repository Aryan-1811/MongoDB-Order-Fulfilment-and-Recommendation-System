// Task 2.1 – Customers and Addresses

db.Customer.insertMany([
  { _id: 1, name: "Anna", gender: "f", age: 22 },
  { _id: 2, name: "Ben", gender: "m", age: 27 },
  { _id: 3, name: "Charlotte", gender: "f", age: 32 },
  { _id: 4, name: "Darrin", gender: "m", age: 37 },
  { _id: 5, name: "Eloise", gender: "f", age: 42 },
  { _id: 6, name: "Fred", gender: "m", age: 47 },
  { _id: 7, name: "Ginger", gender: "f", age: 52 },
  { _id: 8, name: "Henry", gender: "m", age: 57 },
  { _id: 9, name: "Isla", gender: "f", age: 62 },
  { _id: 10, name: "Josh", gender: "m", age: 67 },
  { _id: 11, name: "Kayla", gender: "f", age: 72 },
  { _id: 12, name: "Liam", gender: "m", age: 77 },
  { _id: 13, name: "Morgan", gender: "f", age: 82 },
  { _id: 14, name: "Nathan", gender: "m", age: 87 },
  { _id: 15, name: "Olive", gender: "f", age: 33 },
  { _id: 16, name: "Percy", gender: "m", age: 44 },
  { _id: 17, name: "Rosie", gender: "f", age: 44 },
  { _id: 18, name: "Steven", gender: "m", age: 55 },
  { _id: 19, name: "Tricia", gender: "f", age: 66 },
  { _id: 20, name: "William", gender: "m", age: 77 }
]);

db.CustomerAddress.insertMany([
  {
    customer_id: 1,
    address_type: "shipping",
    number: 1,
    street: "Oxford Road",
    city: "Manchester",
    postcode: "M1 4PB",
    long: -2.237294,
    lat: 53.470197
  },
  {
    customer_id: 2,
    address_type: "shipping",
    number: 6,
    street: "Oxford Road",
    city: "Manchester",
    postcode: "M1 5QA",
    long: -2.239274,
    lat: 53.472578
  }
  // Add remaining customer addresses similarly if needed
]);
