// Task 2.4 – Store inventory

db.Store.insertMany([
  {
    store_id: 1,
    store_address: "111 King St, Manchester",
    lat: 53.498485,
    long: -2.267117,
    product: [
      { product_id: 41, quantity: 1000, cost: 0.90, rating: 4.8 },
      { product_id: 46, quantity: 500, cost: 0.90, rating: 4.8 },
      { product_id: 51, quantity: 800, cost: 0.90, rating: 4.8 },
      { product_id: 44, quantity: 1700, cost: 0.65, rating: 4.1 },
      { product_id: 48, quantity: 600, cost: 0.29, rating: 2.1 }
    ]
  },
  {
    store_id: 2,
    store_address: "112 Queen St, Manchester",
    lat: 53.487041,
    long: -2.215195,
    product: [
      { product_id: 42, quantity: 90, cost: 0.49, rating: 3.9 },
      { product_id: 51, quantity: 1000, cost: 0.90, rating: 4.8 },
      { product_id: 50, quantity: 1500, cost: 0.19, rating: 3.2 },
      { product_id: 48, quantity: 700, cost: 0.29, rating: 2.1 },
      { product_id: 52, quantity: 400, cost: 0.49, rating: 3.9 }
    ]
  },
  {
    store_id: 3,
    store_address: "113 Prince St, Manchester",
    lat: 53.495165,
    long: -2.217643,
    product: [
      { product_id: 43, quantity: 400, cost: 0.29, rating: 2.1 },
      { product_id: 49, quantity: 800, cost: 0.65, rating: 4.1 },
      { product_id: 53, quantity: 900, cost: 0.29, rating: 2.1 },
      { product_id: 41, quantity: 500, cost: 0.90, rating: 4.8 },
      { product_id: 44, quantity: 700, cost: 0.65, rating: 4.1 }
    ]
  },
  {
    store_id: 4,
    store_address: "114 Princess St, Manchester",
    lat: 53.499115,
    long: -2.291047,
    product: [
      { product_id: 43, quantity: 200, cost: 0.29, rating: 2.1 },
      { product_id: 41, quantity: 300, cost: 0.90, rating: 4.8 },
      { product_id: 47, quantity: 600, cost: 0.49, rating: 3.9 },
      { product_id: 52, quantity: 450, cost: 0.49, rating: 3.9 },
      { product_id: 42, quantity: 750, cost: 0.49, rating: 3.9 }
    ]
  },
  {
    store_id: 5,
    store_address: "115 Oxford St, Manchester",
    lat: 53.466293,
    long: -2.231453,
    product: [
      { product_id: 45, quantity: 1200, cost: 0.19, rating: 3.2 },
      { product_id: 50, quantity: 900, cost: 0.19, rating: 3.2 },
      { product_id: 52, quantity: 700, cost: 0.49, rating: 3.9 },
      { product_id: 51, quantity: 1100, cost: 0.90, rating: 4.8 },
      { product_id: 53, quantity: 500, cost: 0.29, rating: 2.1 }
    ]
  }
]);
