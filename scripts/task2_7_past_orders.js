// Task 2.7 – CustomerPastOrders
// For brevity only a subset is included here; extend using your full coursework data if needed.

db.CustomerPastOrders.insertMany([
  // Customer 1
  {
    order_id: 1,
    customer_id: 1,
    total_cost: 220,
    partner_id: 51,
    partner_rating: 4.3,
    product: [
      { product_id: 21, quantity: 1, cost: 220.0, rating: 4.6 }
    ]
  },
  {
    order_id: 2,
    customer_id: 1,
    total_cost: 84,
    partner_id: 52,
    partner_rating: 4.8,
    product: [
      { product_id: 7, quantity: 1, cost: 84.0 }
    ]
  },
  {
    order_id: 3,
    customer_id: 1,
    total_cost: 13,
    partner_id: 53,
    partner_rating: 4.1,
    product: [
      { product_id: 12, quantity: 1, cost: 13.0 }
    ]
  },
  {
    order_id: 4,
    customer_id: 1,
    total_cost: 904.0,
    partner_id: 54,
    partner_rating: 4.6,
    product: [
      { product_id: 2, quantity: 1, cost: 24.0 },
      { product_id: 27, quantity: 1, cost: 880.0, rating: 4.7 }
    ]
  },
  {
    order_id: 5,
    customer_id: 1,
    total_cost: 32.5,
    partner_id: 50,
    partner_rating: 4.5,
    product: [
      { product_id: 15, quantity: 1, cost: 32.5, rating: 4.3 }
    ]
  },

  // Customer 2
  {
    order_id: 6,
    customer_id: 2,
    total_cost: 0.65,
    partner_id: 51,
    partner_rating: 4.3,
    product: [
      { product_id: 49, quantity: 1, cost: 0.65 } // Milk
    ]
  },
  {
    order_id: 7,
    customer_id: 2,
    total_cost: 880.0,
    partner_id: 52,
    partner_rating: 4.8,
    product: [
      { product_id: 23, quantity: 2, cost: 440.0, rating: 4.8 } // Mobile Phone
    ]
  },
  {
    order_id: 8,
    customer_id: 2,
    total_cost: 96.0,
    partner_id: 53,
    partner_rating: 4.1,
    product: [
      { product_id: 8, quantity: 1, cost: 96.0 } // Book
    ]
  },
  {
    order_id: 9,
    customer_id: 2,
    total_cost: 1800.0,
    partner_id: 54,
    partner_rating: 4.5,
    product: [
      { product_id: 35, quantity: 3, cost: 600.0, rating: 4.4 } // Home Appliance
    ]
  },
  {
    order_id: 10,
    customer_id: 3,
    total_cost: 2.9,
    partner_id: 50,
    partner_rating: 4.7,
    product: [
      { product_id: 55, quantity: 10, cost: 0.29, rating: 3.2 } // Cauliflower
    ]
  },

  // Customer 3
  {
    order_id: 11,
    customer_id: 3,
    total_cost: 7.35,
    partner_id: 51,
    partner_rating: 4.3,
    product: [
      { product_id: 52, quantity: 15, cost: 0.49 }
    ]
  },
  {
    order_id: 12,
    customer_id: 3,
    total_cost: 52.0,
    partner_id: 51,
    partner_rating: 4.8,
    product: [
      { product_id: 14, quantity: 2, cost: 26.0, rating: 4.1 }
    ]
  },
  {
    order_id: 13,
    customer_id: 3,
    total_cost: 19.5,
    partner_id: 53,
    partner_rating: 4.1,
    product: [
      { product_id: 13, quantity: 1, cost: 19.5, rating: 3.9 }
    ]
  },
  {
    order_id: 14,
    customer_id: 3,
    total_cost: 0.87,
    partner_id: 54,
    partner_rating: 4.5,
    product: [
      { product_id: 43, quantity: 3, cost: 0.29, rating: 2.1 }
    ]
  },
  {
    order_id: 15,
    customer_id: 3,
    total_cost: 108.0,
    partner_id: 50,
    partner_rating: 4.7,
    product: [
      { product_id: 9, quantity: 1, cost: 108.0, rating: 4.9 }
    ]
  },

  // Customer 4
  {
    order_id: 16,
    customer_id: 4,
    total_cost: 1080,
    partner_id: 50,
    partner_rating: 4.5,
    product: [
      { product_id: 39, quantity: 1, cost: 1080, rating: 4.8 }
    ]
  },
  {
    order_id: 17,
    customer_id: 4,
    total_cost: 7.35,
    partner_id: 50,
    partner_rating: 4.6,
    product: [
      { product_id: 41, quantity: 5, cost: 0.9 },
      { product_id: 47, quantity: 5, cost: 0.49, rating: 3.9 }
    ]
  },
  {
    order_id: 18,
    customer_id: 4,
    total_cost: 117.0,
    partner_id: 52,
    partner_rating: 4.5,
    product: [
      { product_id: 16, quantity: 3, cost: 39.0, rating: 4.5 }
    ]
  },
  {
    order_id: 19,
    customer_id: 4,
    total_cost: 36.0,
    partner_id: 54,
    partner_rating: 4.2,
    product: [
      { product_id: 3, quantity: 1, cost: 36.0 }
    ]
  },
  {
    order_id: 20,
    customer_id: 4,
    total_cost: 1200.0,
    partner_id: 51,
    partner_rating: 4.7,
    product: [
      { product_id: 40, quantity: 1, cost: 1200.0, rating: 4.9 }
    ]
  },

  // Customer 5
  {
    order_id: 21,
    customer_id: 5,
    total_cost: 252,
    partner_id: 50,
    partner_rating: 4.4,
    product: [
      { product_id: 7, quantity: 3, cost: 84.0, rating: 4.7 }
    ]
  },
  {
    order_id: 22,
    customer_id: 5,
    total_cost: 15.4,
    partner_id: 51,
    partner_rating: 4.9,
    product: [
      { product_id: 50, quantity: 40, cost: 0.19 },
      { product_id: 49, quantity: 2, cost: 0.65 },
      { product_id: 54, quantity: 10, cost: 0.65 }
    ]
  },
  {
    order_id: 23,
    customer_id: 5,
    total_cost: 1100,
    partner_id: 51,
    partner_rating: 4.5,
    product: [
      { product_id: 29, quantity: 1, cost: 1100.0, rating: 4.9 }
    ]
  },
  {
    order_id: 24,
    customer_id: 5,
    total_cost: 360.0,
    partner_id: 54,
    partner_rating: 4.2,
    product: [
      { product_id: 33, quantity: 1, cost: 360.0, rating: 4.2 }
    ]
  },
  {
    order_id: 25,
    customer_id: 5,
    total_cost: 2.9,
    partner_id: 51,
    partner_rating: 4.7,
    product: [
      { product_id: 43, quantity: 10, cost: 0.29, rating: 2.1 }
    ]
  },

  // Customer 6
  {
    order_id: 26,
    customer_id: 6,
    total_cost: 59.8,
    partner_id: 50,
    partner_rating: 4.5,
    product: [
      { product_id: 19, quantity: 1, cost: 58.5, rating: 5.0 },
      { product_id: 44, quantity: 2, cost: 0.65, rating: 4.1 }
    ]
  },
  {
    order_id: 27,
    customer_id: 6,
    total_cost: 240.0,
    partner_id: 52,
    partner_rating: 4.7,
    product: [
      { product_id: 32, quantity: 1, cost: 240.0, rating: 4.1 }
    ]
  },
  {
    order_id: 28,
    customer_id: 6,
    total_cost: 5.35,
    partner_id: 53,
    partner_rating: 4.6,
    product: [
      { product_id: 48, quantity: 10, cost: 0.29, rating: 2.1 },
      { product_id: 47, quantity: 5, cost: 0.49, rating: 3.9 }
    ]
  },
  {
    order_id: 29,
    customer_id: 6,
    total_cost: 1100.0,
    partner_id: 54,
    partner_rating: 4.8,
    product: [
      { product_id: 29, quantity: 1, cost: 1100.0, rating: 4.9 }
    ]
  },
  {
    order_id: 30,
    customer_id: 6,
    total_cost: 96.0,
    partner_id: 51,
    partner_rating: 4.7,
    product: [
      { product_id: 8, quantity: 1, cost: 96.0, rating: 4.8 }
    ]
  },

  // Customer 7
  {
    order_id: 31,
    customer_id: 7,
    total_cost: 2.55,
    partner_id: 50,
    partner_rating: 4.6,
    product: [
      { product_id: 55, quantity: 10, cost: 0.19 },
      { product_id: 49, quantity: 1, cost: 0.65, rating: 4.1 }
    ]
  },
  {
    order_id: 32,
    customer_id: 7,
    total_cost: 800.0,
    partner_id: 51,
    partner_rating: 4.4,
    product: [
      { product_id: 27, quantity: 1, cost: 880.0, rating: 4.7 }
    ]
  },
  {
    order_id: 33,
    customer_id: 7,
    total_cost: 5.35,
    partner_id: 52,
    partner_rating: 4.8,
    product: [
      { product_id: 43, quantity: 10, cost: 0.29 },
      { product_id: 42, quantity: 5, cost: 0.49, rating: 3.9 }
    ]
  },
  {
    order_id: 34,
    customer_id: 7,
    total_cost: 120.0,
    partner_id: 53,
    partner_rating: 4.6,
    product: [
      { product_id: 10, quantity: 1, cost: 120.0, rating: 5.0 }
    ]
  },
  {
    order_id: 35,
    customer_id: 7,
    total_cost: 600.0,
    partner_id: 54,
    partner_rating: 4.5,
    product: [
      { product_id: 35, quantity: 1, cost: 600.0 }
    ]
  },

  // Customer 8
  {
    order_id: 36,
    customer_id: 8,
    total_cost: 360.0,
    partner_id: 50,
    partner_rating: 4.6,
    product: [
      { product_id: 33, quantity: 1, cost: 360.0 }
    ]
  },
  {
    order_id: 37,
    customer_id: 8,
    total_cost: 6.5,
    partner_id: 51,
    partner_rating: 4.8,
    product: [
      { product_id: 44, quantity: 10, cost: 0.65, rating: 4.1 }
    ]
  },
  {
    order_id: 38,
    customer_id: 8,
    total_cost: 52.0,
    partner_id: 51,
    partner_rating: 4.7,
    product: [
      { product_id: 14, quantity: 2, cost: 26.0 }
    ]
  },
  {
    order_id: 39,
    customer_id: 8,
    total_cost: 990.0,
    partner_id: 53,
    partner_rating: 4.5,
    product: [
      { product_id: 28, quantity: 1, cost: 990.0, rating: 4.8 }
    ]
  },
  {
    order_id: 40,
    customer_id: 8,
    total_cost: 240.0,
    partner_id: 54,
    partner_rating: 4.9,
    product: [
      { product_id: 32, quantity: 1, cost: 240.0, rating: 4.1 }
    ]
  },

  // Customer 9
  {
    order_id: 41,
    customer_id: 9,
    total_cost: 1680.0,
    partner_id: 50,
    partner_rating: 4.7,
    product: [
      { product_id: 40, quantity: 1, cost: 1200.0, rating: 4.9 },
      { product_id: 34, quantity: 1, cost: 480.0 }
    ]
  },
  {
    order_id: 42,
    customer_id: 9,
    total_cost: 72.0,
    partner_id: 51,
    partner_rating: 4.5,
    product: [
      { product_id: 6, quantity: 1, cost: 72.0, rating: 4.6 }
    ]
  },
  {
    order_id: 43,
    customer_id: 9,
    total_cost: 0.57,
    partner_id: 52,
    partner_rating: 4.8,
    product: [
      { product_id: 45, quantity: 3, cost: 0.19, rating: 3.2 }
    ]
  },
  {
    order_id: 44,
    customer_id: 9,
    total_cost: 96.0,
    partner_id: 53,
    partner_rating: 4.9,
    product: [
      { product_id: 8, quantity: 1, cost: 96.0 }
    ]
  },
  {
    order_id: 45,
    customer_id: 9,
    total_cost: 660.0,
    partner_id: 54,
    partner_rating: 4.6,
    product: [
      { product_id: 25, quantity: 1, cost: 660.0 }
    ]
  },

  // Customer 10
  {
    order_id: 46,
    customer_id: 10,
    total_cost: 1080.0,
    partner_id: 50,
    partner_rating: 4.7,
    product: [
      { product_id: 39, quantity: 1, cost: 1080.0 }
    ]
  },
  {
    order_id: 47,
    customer_id: 10,
    total_cost: 87.25,
    partner_id: 51,
    partner_rating: 4.5,
    product: [
      { product_id: 7, quantity: 1, cost: 84.0, rating: 4.7 },
      { product_id: 44, quantity: 5, cost: 0.65, rating: 4.1 }
    ]
  },
  {
    order_id: 48,
    customer_id: 10,
    total_cost: 19.5,
    partner_id: 52,
    partner_rating: 4.7,
    product: [
      { product_id: 13, quantity: 1, cost: 19.5 }
    ]
  },
  {
    order_id: 49,
    customer_id: 10,
    total_cost: 880.0,
    partner_id: 53,
    partner_rating: 4.9,
    product: [
      { product_id: 27, quantity: 1, cost: 880.0, rating: 4.7 }
    ]
  },
  {
    order_id: 50,
    customer_id: 10,
    total_cost: 18.0,
    partner_id: 54,
    partner_rating: 4.8,
    product: [
      { product_id: 46, quantity: 20, cost: 0.9 }
    ]
  },

  // Customer 11
  {
    order_id: 51,
    customer_id: 11,
    total_cost: 660.0,
    partner_id: 50,
    partner_rating: 4.5,
    product: [
      { product_id: 25, quantity: 1, cost: 660.0 }
    ]
  },
  {
    order_id: 52,
    customer_id: 11,
    total_cost: 84.0,
    partner_id: 51,
    partner_rating: 4.8,
    product: [
      { product_id: 7, quantity: 1, cost: 84.0, rating: 4.7 }
    ]
  },
  {
    order_id: 53,
    customer_id: 11,
    total_cost: 360.0,
    partner_id: 52,
    partner_rating: 4.7,
    product: [
      { product_id: 33, quantity: 1, cost: 360.0, rating: 4.2 }
    ]
  },
  {
    order_id: 54,
    customer_id: 11,
    total_cost: 65.0,
    partner_id: 53,
    partner_rating: 4.6,
    product: [
      { product_id: 20, quantity: 1, cost: 65.0, rating: 5.0 }
    ]
  },
  {
    order_id: 55,
    customer_id: 11,
    total_cost: 48.0,
    partner_id: 54,
    partner_rating: 4.5,
    product: [
      { product_id: 4, quantity: 1, cost: 48.0 }
    ]
  },

  // Customer 12
  {
    order_id: 56,
    customer_id: 12,
    total_cost: 723.8,
    partner_id: 50,
    partner_rating: 4.5,
    product: [
      { product_id: 36, quantity: 1, cost: 720.0 },
      { product_id: 50, quantity: 20, cost: 0.19, rating: 3.2 }
    ]
  },
  {
    order_id: 57,
    customer_id: 12,
    total_cost: 96.0,
    partner_id: 51,
    partner_rating: 4.6,
    product: [
      { product_id: 8, quantity: 1, cost: 96.0, rating: 4.8 }
    ]
  },
  {
    order_id: 58,
    customer_id: 12,
    total_cost: 880.0,
    partner_id: 52,
    partner_rating: 4.7,
    product: [
      { product_id: 27, quantity: 1, cost: 880.0 }
    ]
  },
  {
    order_id: 59,
    customer_id: 12,
    total_cost: 39.0,
    partner_id: 53,
    partner_rating: 4.4,
    product: [
      { product_id: 16, quantity: 1, cost: 39.0 }
    ]
  },
  {
    order_id: 60,
    customer_id: 12,
    total_cost: 990.0,
    partner_id: 54,
    partner_rating: 4.8,
    product: [
      { product_id: 28, quantity: 1, cost: 990.0, rating: 4.8 }
    ]
  },

  // Customer 13
  {
    order_id: 61,
    customer_id: 13,
    total_cost: 10.21,
    partner_id: 50,
    partner_rating: 4.5,
    product: [
      { product_id: 49, quantity: 2, cost: 0.65, rating: 4.1 },
      { product_id: 46, quantity: 5, cost: 0.9, rating: 4.8 },
      { product_id: 47, quantity: 5, cost: 0.49, rating: 3.9 },
      { product_id: 42, quantity: 4, cost: 0.49, rating: 3.9 }
    ]
  },
  {
    order_id: 62,
    customer_id: 13,
    total_cost: 26.0,
    partner_id: 51,
    partner_rating: 4.7,
    product: [
      { product_id: 12, quantity: 2, cost: 13.0, rating: 3.7 }
    ]
  },
  {
    order_id: 63,
    customer_id: 13,
    total_cost: 240.0,
    partner_id: 52,
    partner_rating: 4.9,
    product: [
      { product_id: 32, quantity: 1, cost: 240.0, rating: 4.1 }
    ]
  },
  {
    order_id: 64,
    customer_id: 13,
    total_cost: 48.0,
    partner_id: 53,
    partner_rating: 4.8,
    product: [
      { product_id: 4, quantity: 1, cost: 48.0, rating: 4.4 }
    ]
  },
  {
    order_id: 65,
    customer_id: 13,
    total_cost: 72.0,
    partner_id: 54,
    partner_rating: 4.7,
    product: [
      { product_id: 6, quantity: 1, cost: 72.0, rating: 4.6 }
    ]
  },

  // Customer 14
  {
    order_id: 66,
    customer_id: 14,
    total_cost: 1200.0,
    partner_id: 50,
    partner_rating: 4.7,
    product: [
      { product_id: 40, quantity: 1, cost: 1200.0 }
    ]
  },
  {
    order_id: 67,
    customer_id: 14,
    total_cost: 240.0,
    partner_id: 51,
    partner_rating: 4.5,
    product: [
      { product_id: 32, quantity: 1, cost: 240.0, rating: 4.1 }
    ]
  },
  {
    order_id: 68,
    customer_id: 14,
    total_cost: 26.0,
    partner_id: 52,
    partner_rating: 4.7,
    product: [
      { product_id: 13, quantity: 1, cost: 19.5, rating: 3.9 },
      { product_id: 11, quantity: 1, cost: 6.5 }
    ]
  },
  {
    order_id: 69,
    customer_id: 14,
    total_cost: 990.0,
    partner_id: 53,
    partner_rating: 4.8,
    product: [
      { product_id: 28, quantity: 1, cost: 990.0 }
    ]
  },
  {
    order_id: 70,
    customer_id: 14,
    total_cost: 9.0,
    partner_id: 54,
    partner_rating: 4.5,
    product: [
      { product_id: 51, quantity: 10, cost: 0.9, rating: 4.8 }
    ]
  },

  // Customer 15
  {
    order_id: 71,
    customer_id: 15,
    total_cost: 660.0,
    partner_id: 50,
    partner_rating: 4.8,
    product: [
      { product_id: 25, quantity: 1, cost: 660.0, rating: 5.0 }
    ]
  },
  {
    order_id: 72,
    customer_id: 15,
    total_cost: 1.95,
    partner_id: 51,
    partner_rating: 4.6,
    product: [
      { product_id: 54, quantity: 3, cost: 0.65 }
    ]
  },
  {
    order_id: 73,
    customer_id: 15,
    total_cost: 720.0,
    partner_id: 52,
    partner_rating: 4.7,
    product: [
      { product_id: 36, quantity: 1, cost: 720.0, rating: 4.5 }
    ]
  },
  {
    order_id: 74,
    customer_id: 15,
    total_cost: 96.0,
    partner_id: 53,
    partner_rating: 4.8,
    product: [
      { product_id: 8, quantity: 1, cost: 96.0 }
    ]
  },
  {
    order_id: 75,
    customer_id: 15,
    total_cost: 21.84,
    partner_id: 54,
    partner_rating: 4.5,
    product: [
      { product_id: 45, quantity: 2, cost: 0.19, rating: 3.2 },
      { product_id: 42, quantity: 4, cost: 0.49, rating: 3.9 },
      { product_id: 13, quantity: 1, cost: 19.5 }
    ]
  },

  // Customer 16
  {
    order_id: 76,
    customer_id: 16,
    total_cost: 1100.0,
    partner_id: 50,
    partner_rating: 4.7,
    product: [
      { product_id: 29, quantity: 1, cost: 1100.0 }
    ]
  },
  {
    order_id: 77,
    customer_id: 16,
    total_cost: 65.0,
    partner_id: 51,
    partner_rating: 4.6,
    product: [
      { product_id: 20, quantity: 1, cost: 65.0, rating: 5.0 }
    ]
  },
  {
    order_id: 78,
    customer_id: 16,
    total_cost: 720.0,
    partner_id: 52,
    partner_rating: 4.8,
    product: [
      { product_id: 36, quantity: 1, cost: 720.0 }
    ]
  },
  {
    order_id: 79,
    customer_id: 16,
    total_cost: 48.0,
    partner_id: 53,
    partner_rating: 4.6,
    product: [
      { product_id: 4, quantity: 1, cost: 48.0, rating: 4.4 }
    ]
  },
  {
    order_id: 80,
    customer_id: 16,
    total_cost: 360.0,
    partner_id: 54,
    partner_rating: 4.7,
    product: [
      { product_id: 33, quantity: 1, cost: 360.0, rating: 4.2 }
    ]
  },

  // Customer 17
  {
    order_id: 81,
    customer_id: 17,
    total_cost: 1120.0,
    partner_id: 50,
    partner_rating: 4.5,
    product: [
      { product_id: 27, quantity: 1, cost: 880.0 },
      { product_id: 32, quantity: 1, cost: 240.0, rating: 4.1 }
    ]
  },
  {
    order_id: 82,
    customer_id: 17,
    total_cost: 72.0,
    partner_id: 51,
    partner_rating: 4.8,
    product: [
      { product_id: 6, quantity: 1, cost: 72.0, rating: 4.6 }
    ]
  },
  {
    order_id: 83,
    customer_id: 17,
    total_cost: 36.0,
    partner_id: 52,
    partner_rating: 4.7,
    product: [
      { product_id: 3, quantity: 1, cost: 36.0 }
    ]
  },
  {
    order_id: 84,
    customer_id: 17,
    total_cost: 2.9,
    partner_id: 53,
    partner_rating: 4.4,
    product: [
      { product_id: 48, quantity: 10, cost: 0.29, rating: 2.1 }
    ]
  },
  {
    order_id: 85,
    customer_id: 17,
    total_cost: 19.5,
    partner_id: 54,
    partner_rating: 4.3,
    product: [
      { product_id: 13, quantity: 1, cost: 19.5, rating: 3.9 }
    ]
  },

  // Customer 18
  {
    order_id: 86,
    customer_id: 18,
    total_cost: 1210.0,
    partner_id: 50,
    partner_rating: 4.6,
    product: [
      { product_id: 30, quantity: 1, cost: 1210.0, rating: 5.0 }
    ]
  },
  {
    order_id: 87,
    customer_id: 18,
    total_cost: 78.0,
    partner_id: 51,
    partner_rating: 4.5,
    product: [
      { product_id: 16, quantity: 2, cost: 39.0 }
    ]
  },
  {
    order_id: 88,
    customer_id: 18,
    total_cost: 185.0,
    partner_id: 52,
    partner_rating: 4.8,
    product: [
      { product_id: 20, quantity: 1, cost: 65.0, rating: 5.0 },
      { product_id: 10, quantity: 1, cost: 120.0, rating: 5.0 }
    ]
  },
  {
    order_id: 89,
    customer_id: 18,
    total_cost: 2.7,
    partner_id: 53,
    partner_rating: 4.6,
    product: [
      { product_id: 41, quantity: 3, cost: 0.9 }
    ]
  },
  {
    order_id: 90,
    customer_id: 18,
    total_cost: 1080.0,
    partner_id: 54,
    partner_rating: 4.7,
    product: [
      { product_id: 39, quantity: 1, cost: 1080.0 }
    ]
  },

  // Customer 19
  {
    order_id: 91,
    customer_id: 19,
    total_cost: 48.0,
    partner_id: 50,
    partner_rating: 4.5,
    product: [
      { product_id: 4, quantity: 1, cost: 48.0, rating: 4.4 }
    ]
  },
  {
    order_id: 92,
    customer_id: 19,
    total_cost: 72.0,
    partner_id: 51,
    partner_rating: 4.7,
    product: [
      { product_id: 6, quantity: 1, cost: 72.0 }
    ]
  },
  {
    order_id: 93,
    customer_id: 19,
    total_cost: 84.0,
    partner_id: 52,
    partner_rating: 4.8,
    product: [
      { product_id: 7, quantity: 1, cost: 84.0 }
    ]
  },
  {
    order_id: 94,
    customer_id: 19,
    total_cost: 52.0,
    partner_id: 53,
    partner_rating: 4.6,
    product: [
      { product_id: 14, quantity: 2, cost: 26.0, rating: 4.1 }
    ]
  },
  {
    order_id: 95,
    customer_id: 19,
    total_cost: 990.0,
    partner_id: 54,
    partner_rating: 4.8,
    product: [
      { product_id: 28, quantity: 1, cost: 990.0, rating: 4.8 }
    ]
  },

  // Customer 20
  {
    order_id: 96,
    customer_id: 20,
    total_cost: 108.0,
    partner_id: 50,
    partner_rating: 4.8,
    product: [
      { product_id: 9, quantity: 1, cost: 108.0, rating: 4.9 }
    ]
  },
  {
    order_id: 97,
    customer_id: 20,
    total_cost: 84.0,
    partner_id: 51,
    partner_rating: 4.7,
    product: [
      { product_id: 7, quantity: 1, cost: 84.0, rating: 4.7 }
    ]
  },
  {
    order_id: 98,
    customer_id: 20,
    total_cost: 32.5,
    partner_id: 52,
    partner_rating: 4.8,
    product: [
      { product_id: 15, quantity: 1, cost: 32.5, rating: 4.3 }
    ]
  },
  {
    order_id: 99,
    customer_id: 20,
    total_cost: 480.0,
    partner_id: 53,
    partner_rating: 4.5,
    product: [
      { product_id: 34, quantity: 1, cost: 480.0, rating: 4.3 }
    ]
  },
  {
    order_id: 100,
    customer_id: 20,
    total_cost: 0.9,
    partner_id: 54,
    partner_rating: 4.6,
    product: [
      { product_id: 46, quantity: 1, cost: 0.9, rating: 4.8 }
    ]
  }
]);
