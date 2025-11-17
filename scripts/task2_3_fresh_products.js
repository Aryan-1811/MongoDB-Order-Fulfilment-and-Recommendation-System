// Task 2.3 – FreshProduct (Bakery, Drinks, Fruit or Vegetable)

db.FreshProduct.insertMany([
  // Bakery
  { product_id: 41, name: "baguette", type: "bakery", short_description: "baguette description", dimensions: "20x4cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "France", avg_rating: 4.8, standard_price: 1, retail_price: 0.90 },
  { product_id: 42, name: "croissant", type: "bakery", short_description: "croissant description", dimensions: "10x4cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "France", avg_rating: 3.9, standard_price: 0.59, retail_price: 0.49 },
  { product_id: 43, name: "donut", type: "bakery", short_description: "donut description", dimensions: "12x12cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "USA", avg_rating: 2.1, standard_price: 0.39, retail_price: 0.29 },
  { product_id: 44, name: "pain aux raisin", type: "bakery", short_description: "pain aux raisin description", dimensions: "10x10cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "UK", avg_rating: 4.1, standard_price: 0.79, retail_price: 0.65 },
  { product_id: 45, name: "cookie", type: "bakery", short_description: "cookie description", dimensions: "6x6cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "UK", avg_rating: 3.2, standard_price: 0.29, retail_price: 0.19 },

  // Drinks
  { product_id: 46, name: "black tea", type: "drink", short_description: "black tea description", dimensions: "20x4cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "France", avg_rating: 4.8, standard_price: 1, retail_price: 0.90 },
  { product_id: 47, name: "coffee", type: "drink", short_description: "coffee description", dimensions: "10x4cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "France", avg_rating: 3.9, standard_price: 0.59, retail_price: 0.49 },
  { product_id: 48, name: "soda", type: "drink", short_description: "soda description", dimensions: "12x12cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "USA", avg_rating: 2.1, standard_price: 0.39, retail_price: 0.29 },
  { product_id: 49, name: "milk", type: "drink", short_description: "milk description", dimensions: "10x10cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "UK", avg_rating: 4.1, standard_price: 0.79, retail_price: 0.65 },
  { product_id: 50, name: "water", type: "drink", short_description: "water description", dimensions: "6x6cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "UK", avg_rating: 3.2, standard_price: 0.29, retail_price: 0.19 },

  // Fruit or vegetable
  { product_id: 51, name: "apple", type: "fruit or vegetable", short_description: "apple description", dimensions: "20x4cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "France", avg_rating: 4.8, standard_price: 1, retail_price: 0.90 },
  { product_id: 52, name: "mango", type: "fruit or vegetable", short_description: "mango description", dimensions: "10x4cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "France", avg_rating: 3.9, standard_price: 0.59, retail_price: 0.49 },
  { product_id: 53, name: "carrot", type: "fruit or vegetable", short_description: "carrot description", dimensions: "12x12cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "USA", avg_rating: 2.1, standard_price: 0.39, retail_price: 0.29 },
  { product_id: 54, name: "corn", type: "fruit or vegetable", short_description: "corn description", dimensions: "10x10cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "UK", avg_rating: 4.1, standard_price: 0.79, retail_price: 0.65 },
  { product_id: 55, name: "cauliflower", type: "fruit or vegetable", short_description: "cauliflower description", dimensions: "6x6cm", weight_or_quantity: 1, expiry_date: ISODate("2025-04-01"), country_of_origin: "UK", avg_rating: 3.2, standard_price: 0.29, retail_price: 0.19 }
]);
