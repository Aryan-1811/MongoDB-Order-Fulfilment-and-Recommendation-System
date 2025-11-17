// Task 2.6 – CustomerCurrentOrders
// Full dataset based on coursework description (orders 101–140)

db.CustomerCurrentOrders.insertMany([
  // Customer 1
  {
    order_id: 101,
    customer_id: 1,
    partner_id: 54,
    product: [
      { product_id: 1, quantity: 2, cost: 12.0 }
    ],
    total_cost: 24.0,
    order_status: "Packaging",
    eta: "2 days"
  },
  {
    order_id: 102,
    customer_id: 1,
    partner_id: 54,
    product: [
      { product_id: 47, quantity: 10, cost: 0.49 } // coffee
    ],
    total_cost: 4.9,
    order_status: "Order Confirmed",
    eta: "4 days"
  },

  // Customer 2
  {
    order_id: 103,
    customer_id: 2,
    partner_id: 51,
    product: [
      { product_id: 22, quantity: 1, cost: 330.0 }, // mobile phone
      { product_id: 48, quantity: 5, cost: 0.29 }   // soda
    ],
    total_cost: 331.45,
    order_status: "On its way",
    eta: "1 day"
  },
  {
    order_id: 104,
    customer_id: 2,
    partner_id: 54,
    product: [
      { product_id: 8, quantity: 1, cost: 96.0 },   // book
      { product_id: 4, quantity: 1, cost: 48.0 }    // book
    ],
    total_cost: 144.0,
    order_status: "Order Confirmed",
    eta: "4 days"
  },

  // Customer 3
  {
    order_id: 105,
    customer_id: 3,
    partner_id: 51,
    product: [
      { product_id: 46, quantity: 20, cost: 0.9 }   // black tea
    ],
    total_cost: 18.0,
    order_status: "On its way",
    eta: "1 day"
  },
  {
    order_id: 106,
    customer_id: 3,
    partner_id: 51,
    product: [
      { product_id: 43, quantity: 3, cost: 0.29 },  // donut
      { product_id: 42, quantity: 2, cost: 0.49 }   // croissant
    ],
    total_cost: 1.85,
    order_status: "Order Confirmed",
    eta: "4 days"
  },

  // Customer 4
  {
    order_id: 107,
    customer_id: 4,
    partner_id: 50,
    product: [
      { product_id: 44, quantity: 2, cost: 0.65 },
      { product_id: 53, quantity: 5, cost: 0.29 }
    ],
    total_cost: 2.75,
    order_status: "Order Confirmed",
    eta: "2 days"
  },
  {
    order_id: 108,
    customer_id: 4,
    partner_id: 51,
    product: [
      { product_id: 48, quantity: 10, cost: 0.29 },
      { product_id: 42, quantity: 3, cost: 0.49 }
    ],
    total_cost: 4.37,
    order_status: "On its way",
    eta: "1 day"
  },

  // Customer 5
  {
    order_id: 109,
    customer_id: 5,
    partner_id: 52,
    product: [
      { product_id: 50, quantity: 6, cost: 0.29 },
      { product_id: 45, quantity: 3, cost: 0.19 }
    ],
    total_cost: 2.31,
    order_status: "Dispatched",
    eta: "2 days"
  },
  {
    order_id: 110,
    customer_id: 5,
    partner_id: 53,
    product: [
      { product_id: 46, quantity: 5, cost: 0.9 },
      { product_id: 41, quantity: 2, cost: 0.9 }
    ],
    total_cost: 6.3,
    order_status: "Packaging",
    eta: "3 days"
  },

  // Customer 6
  {
    order_id: 111,
    customer_id: 6,
    partner_id: 54,
    product: [
      { product_id: 49, quantity: 1, cost: 0.65 },
      { product_id: 47, quantity: 3, cost: 0.49 }
    ],
    total_cost: 2.12,
    order_status: "Order Confirmed",
    eta: "1 day"
  },
  {
    order_id: 112,
    customer_id: 6,
    partner_id: 50,
    product: [
      { product_id: 31, quantity: 1, cost: 120.0 },
      { product_id: 43, quantity: 2, cost: 0.29 }
    ],
    total_cost: 120.58,
    order_status: "On its way",
    eta: "3 days"
  },

  // Customer 7
  {
    order_id: 113,
    customer_id: 7,
    partner_id: 51,
    product: [
      { product_id: 55, quantity: 2, cost: 0.19 }
    ],
    total_cost: 0.38,
    order_status: "On its way",
    eta: "1 day"
  },
  {
    order_id: 114,
    customer_id: 7,
    partner_id: 52,
    product: [
      { product_id: 44, quantity: 6, cost: 0.75 },
      { product_id: 42, quantity: 2, cost: 0.49 }
    ],
    total_cost: 5.48,
    order_status: "Packaging",
    eta: "2 days"
  },

  // Customer 8
  {
    order_id: 115,
    customer_id: 8,
    partner_id: 53,
    product: [
      { product_id: 50, quantity: 3, cost: 0.19 },
      { product_id: 41, quantity: 1, cost: 0.45 },
      { product_id: 19, quantity: 1, cost: 58.5 }
    ],
    total_cost: 59.52,
    order_status: "Dispatched",
    eta: "3 days"
  },
  {
    order_id: 116,
    customer_id: 8,
    partner_id: 54,
    product: [
      { product_id: 46, quantity: 2, cost: 0.9 },
      { product_id: 53, quantity: 4, cost: 0.29 }
    ],
    total_cost: 2.96,
    order_status: "On its way",
    eta: "1 day"
  },

  // Customer 9
  {
    order_id: 117,
    customer_id: 9,
    partner_id: 50,
    product: [
      { product_id: 44, quantity: 3, cost: 0.65 },
      { product_id: 51, quantity: 1, cost: 0.9 }
    ],
    total_cost: 2.85,
    order_status: "Order Confirmed",
    eta: "3 days"
  },
  {
    order_id: 118,
    customer_id: 9,
    partner_id: 51,
    product: [
      { product_id: 48, quantity: 5, cost: 0.29 },
      { product_id: 42, quantity: 2, cost: 0.49 },
      { product_id: 23, quantity: 1, cost: 440.0 },
      { product_id: 6, quantity: 1, cost: 72.0 }
    ],
    total_cost: 514.43,
    order_status: "On its way",
    eta: "1 day"
  },

  // Customer 10
  {
    order_id: 119,
    customer_id: 10,
    partner_id: 52,
    product: [
      { product_id: 1, quantity: 2, cost: 12.0 },
      { product_id: 46, quantity: 1, cost: 0.9 }
    ],
    total_cost: 24.9,
    order_status: "Order Confirmed",
    eta: "1 day"
  },
  {
    order_id: 120,
    customer_id: 10,
    partner_id: 53,
    product: [
      { product_id: 2, quantity: 1, cost: 24.0 },
      { product_id: 55, quantity: 3, cost: 0.29 }
    ],
    total_cost: 24.87,
    order_status: "Dispatched",
    eta: "2 days"
  },

  // Customer 11
  {
    order_id: 121,
    customer_id: 11,
    partner_id: 50,
    product: [
      { product_id: 12, quantity: 1, cost: 13.0 },
      { product_id: 42, quantity: 3, cost: 0.49 }
    ],
    total_cost: 14.47,
    order_status: "On its way",
    eta: "3 days"
  },
  {
    order_id: 122,
    customer_id: 11,
    partner_id: 51,
    product: [
      { product_id: 31, quantity: 2, cost: 120.0 },
      { product_id: 50, quantity: 1, cost: 0.19 }
    ],
    total_cost: 240.19,
    order_status: "Order Confirmed",
    eta: "4 days"
  },

  // Customer 12
  {
    order_id: 123,
    customer_id: 12,
    partner_id: 52,
    product: [
      { product_id: 23, quantity: 1, cost: 440.0 },
      { product_id: 49, quantity: 2, cost: 0.65 }
    ],
    total_cost: 441.3,
    order_status: "Dispatched",
    eta: "2 days"
  },
  {
    order_id: 124,
    customer_id: 12,
    partner_id: 53,
    product: [
      { product_id: 5, quantity: 1, cost: 60.0 },
      { product_id: 43, quantity: 4, cost: 0.29 }
    ],
    total_cost: 61.16,
    order_status: "Dispatched",
    eta: "3 days"
  },

  // Customer 13
  {
    order_id: 125,
    customer_id: 13,
    partner_id: 54,
    product: [
      { product_id: 15, quantity: 3, cost: 32.5 },
      { product_id: 53, quantity: 2, cost: 0.29 }
    ],
    total_cost: 98.87,
    order_status: "On its way",
    eta: "1 day"
  },
  {
    order_id: 126,
    customer_id: 13,
    partner_id: 50,
    product: [
      { product_id: 39, quantity: 1, cost: 1080.0 },
      { product_id: 54, quantity: 3, cost: 0.65 }
    ],
    total_cost: 1081.95,
    order_status: "Packaging",
    eta: "2 days"
  },

  // Customer 14
  {
    order_id: 127,
    customer_id: 14,
    partner_id: 52,
    product: [
      { product_id: 2, quantity: 1, cost: 24.0 },
      { product_id: 44, quantity: 3, cost: 0.79 }
    ],
    total_cost: 26.37,
    order_status: "Order Confirmed",
    eta: "2 days"
  },
  {
    order_id: 128,
    customer_id: 14,
    partner_id: 53,
    product: [
      { product_id: 13, quantity: 2, cost: 19.5 },
      { product_id: 50, quantity: 1, cost: 0.29 },
      { product_id: 54, quantity: 2, cost: 0.65 }
    ],
    total_cost: 40.94,
    order_status: "Dispatched",
    eta: "3 days"
  },

  // Customer 15
  {
    order_id: 129,
    customer_id: 15,
    partner_id: 54,
    product: [
      { product_id: 7, quantity: 1, cost: 84.0 },
      { product_id: 45, quantity: 4, cost: 0.29 }
    ],
    total_cost: 85.16,
    order_status: "Shipped",
    eta: "1 day"
  },
  {
    order_id: 130,
    customer_id: 15,
    partner_id: 50,
    product: [
      { product_id: 24, quantity: 1, cost: 550.0 },
      { product_id: 49, quantity: 2, cost: 0.79 }
    ],
    total_cost: 551.58,
    order_status: "On its way",
    eta: "2 days"
  },

  // Customer 16
  {
    order_id: 131,
    customer_id: 16,
    partner_id: 51,
    product: [
      { product_id: 32, quantity: 1, cost: 240.0 },
      { product_id: 46, quantity: 1, cost: 0.9 },
      { product_id: 55, quantity: 2, cost: 0.29 }
    ],
    total_cost: 241.48,
    order_status: "Order Confirmed",
    eta: "3 days"
  },
  {
    order_id: 132,
    customer_id: 16,
    partner_id: 52,
    product: [
      { product_id: 14, quantity: 3, cost: 26.0 },
      { product_id: 51, quantity: 1, cost: 0.9 }
    ],
    total_cost: 78.9,
    order_status: "Delivered",
    eta: "1 day"
  },

  // Customer 17
  {
    order_id: 133,
    customer_id: 17,
    partner_id: 53,
    product: [
      { product_id: 33, quantity: 1, cost: 360.0 },
      { product_id: 44, quantity: 2, cost: 0.79 },
      { product_id: 48, quantity: 4, cost: 0.29 }
    ],
    total_cost: 362.94,
    order_status: "Packaging",
    eta: "2 days"
  },
  {
    order_id: 134,
    customer_id: 17,
    partner_id: 54,
    product: [
      { product_id: 19, quantity: 1, cost: 58.5 },
      { product_id: 43, quantity: 1, cost: 0.29 }
    ],
    total_cost: 58.79,
    order_status: "Dispatched",
    eta: "1 day"
  },

  // Customer 18
  {
    order_id: 135,
    customer_id: 18,
    partner_id: 50,
    product: [
      { product_id: 8, quantity: 2, cost: 96.0 },
      { product_id: 54, quantity: 3, cost: 0.65 }
    ],
    total_cost: 193.95,
    order_status: "Shipped",
    eta: "2 days"
  },
  {
    order_id: 136,
    customer_id: 18,
    partner_id: 51,
    product: [
      { product_id: 35, quantity: 1, cost: 600.0 },
      { product_id: 50, quantity: 1, cost: 0.29 }
    ],
    total_cost: 600.29,
    order_status: "Order Confirmed",
    eta: "3 days"
  },

  // Customer 19
  {
    order_id: 137,
    customer_id: 19,
    partner_id: 52,
    product: [
      { product_id: 4, quantity: 1, cost: 48.0 },
      { product_id: 45, quantity: 3, cost: 0.29 },
      { product_id: 51, quantity: 2, cost: 0.9 }
    ],
    total_cost: 50.67,
    order_status: "On its way",
    eta: "2 days"
  },
  {
    order_id: 138,
    customer_id: 19,
    partner_id: 53,
    product: [
      { product_id: 27, quantity: 1, cost: 800.0 },
      { product_id: 44, quantity: 2, cost: 0.79 }
    ],
    total_cost: 801.58,
    order_status: "Dispatched",
    eta: "1 day"
  },

  // Customer 20
  {
    order_id: 139,
    customer_id: 20,
    partner_id: 54,
    product: [
      { product_id: 17, quantity: 3, cost: 45.5 },
      { product_id: 49, quantity: 1, cost: 0.79 },
      { product_id: 55, quantity: 4, cost: 0.29 }
    ],
    total_cost: 137.75,
    order_status: "Packaging",
    eta: "2 days"
  },
  {
    order_id: 140,
    customer_id: 20,
    partner_id: 50,
    product: [
      { product_id: 40, quantity: 1, cost: 1200.0 },
      { product_id: 42, quantity: 3, cost: 0.49 }
    ],
    total_cost: 1201.47,
    order_status: "On its way",
    eta: "1 day"
  }
]);
