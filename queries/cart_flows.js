// Cart flows – Temp InCart and moving to CustomerCurrentOrders

// InCart as array of products
db.InCart.updateOne(
  { customer_id: 1 },
  {
    $push: {
      product: {
        product_id: 41,
        quantity: 2,
        cost: 1.8
      }
    }
  },
  { upsert: true }
);

db.InCart.updateOne(
  { customer_id: 1 },
  {
    $push: {
      product: {
        product_id: 8,
        quantity: 1,
        cost: 80
      }
    }
  },
  { upsert: true }
);

// Customer pays – move cart to current order and delete cart
const cartItem1 = db.InCart.findOne({ customer_id: 1 });

db.CustomerCurrentOrders.insertOne({
  order_id: 126,
  cust_id: cartItem1.customer_id,
  partner_id: 54,
  product: cartItem1.product,
  total_cost: 83.6,
  order_status: "Order Confirmed",
  eta: "2 days"
});

db.InCart.deleteOne({ customer_id: 1 });

// Alternative simple InCart schema (one product per document)
db.InCart.insertMany([
  {
    customer_id: 2,
    product_id: 10,
    quantity: 1,
    total_cost: 120,
    status: "In Cart"
  },
  {
    customer_id: 2,
    product_id: 11,
    quantity: 1,
    total_cost: 6.5,
    status: "In Cart"
  }
]);

const cartItem2 = db.InCart.find({ customer_id: 2 }).toArray();

db.CustomerCurrentOrders.insertOne({
  order_id: 128,
  cust_id: 2,
  partner_id: 53,
  product: cartItem2.map(c => ({
    product_id: c.product_id,
    quantity: c.quantity,
    cost: c.total_cost
  })),
  total_cost: 126.5,
  order_status: "Order Confirmed",
  eta: "2 days"
});

db.InCart.deleteMany({ customer_id: 2 });
