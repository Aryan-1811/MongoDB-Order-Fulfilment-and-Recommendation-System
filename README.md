# MongoDB Order Fulfilment & Recommendation System

This project models a simplified e‑commerce grocery and general retail platform using MongoDB. It includes collections for customers, addresses, products (fresh and other), stores, delivery partners, carts, current and past orders, daily inventory snapshots, and basic hard‑coded recommendations.

The repository contains:
- Data load scripts for all collections (Tasks 2.1–2.9)
- Index creation and payout / distance aggregation pipeline (Task 2.10)
- Example application queries for order creation, ETA calculation, cart handling, inventory search, and management dashboards (Tasks 3–5)

## How to use

1. Start `mongosh` and select your database:
   ```js
   use amazone_demo
   ```

2. Run the scripts in this order (from the `scripts` folder):
   1. `task2_1_customers_and_addresses.js`
   2. `task2_2_other_products.js`
   3. `task2_3_fresh_products.js`
   4. `task2_4_store_inventory.js`
   5. `task2_5_partners.js`
   6. `task2_6_current_orders.js`
   7. `task2_7_past_orders.js`
   8. `task2_8_recommendations.js`
   9. `task2_9_daily_inventory.js`
   10. `task2_10_indexes.js`

3. Then run the example pipelines and queries from the `queries` folder:
   - `payout_pipeline_and_geo_queries.js`
   - `cart_flows.js`
   - `manager_insights_aggregations.js`
   - `books_and_top_products.js`
   - `low_inventory_by_location.js`

You can load a script into `mongosh` with:
```bash
mongosh amazone_demo scripts/task2_1_customers_and_addresses.js
```

Feel free to adapt the database name and extend the datasets if you want to run larger experiments.
