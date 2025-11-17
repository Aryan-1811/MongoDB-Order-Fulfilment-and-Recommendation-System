// Task 2.9 – DailyInventoryLevel
// Sample subset for a couple of days and products; extend with full list if needed.

db.DailyInventoryLevel.insertMany([
  {
    product_id: 41,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1150,
    storage_location: "1 Empress Street, Old Trafford, Manchester, M16 9EN",
    storage_name: "Warehouse A"
  },
  {
    product_id: 41,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1140,
    storage_location: "1 Empress Street, Old Trafford, Manchester, M16 9EN",
    storage_name: "Warehouse A"
  },
  {
    product_id: 42,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1068,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 42,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1054,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 43,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1200,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 43,
    date: ISODate("2025-02-13"),
    inventory_quantity: 980,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 44,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1230,
    storage_location: "15 Clarion St, Manchester, M4 5HE",
    storage_name: "Warehouse D"
  },
  {
    product_id: 44,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1218,
    storage_location: "15 Clarion St, Manchester, M4 5HE",
    storage_name: "Warehouse D"
  },
  {
    product_id: 45,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1088,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 45,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1070,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 46,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1145,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 46,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1003,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 47,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1102,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 47,
    date: ISODate("2025-02-13"),
    inventory_quantity: 890,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 48,
    date: ISODate("2025-02-12"),
    inventory_quantity: 2150,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 48,
    date: ISODate("2025-02-13"),
    inventory_quantity: 2120,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 49,
    date: ISODate("2025-02-12"),
    inventory_quantity: 2100,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 49,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1085,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 50,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1077,
    storage_location: "15 Clarion St, Manchester, M4 5HE",
    storage_name: "Warehouse D"
  },
  {
    product_id: 50,
    date: ISODate("2025-02-13"),
    inventory_quantity: 867,
    storage_location: "15 Clarion St, Manchester, M4 5HE",
    storage_name: "Warehouse D"
  },
  {
    product_id: 51,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1123,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 51,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1111,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 52,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1065,
    storage_location: "15 Clarion St, Manchester, M4 5HE",
    storage_name: "Warehouse D"
  },
  {
    product_id: 52,
    date: ISODate("2025-02-13"),
    inventory_quantity: 935,
    storage_location: "15 Clarion St, Manchester, M4 5HE",
    storage_name: "Warehouse D"
  },
  {
    product_id: 53,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1180,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 53,
    date: ISODate("2025-02-13"),
    inventory_quantity: 780,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 54,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1159,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 54,
    date: ISODate("2025-02-13"),
    inventory_quantity: 832,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 55,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1168,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 55,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1104,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 1,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1055,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 1,
    date: ISODate("2025-02-13"),
    inventory_quantity: 844,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 2,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1150,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 2,
    date: ISODate("2025-02-13"),
    inventory_quantity: 721,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 3,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1077,
    storage_location: "15 Clarion St, Manchester, M4 5HE",
    storage_name: "Warehouse D"
  },
  {
    product_id: 3,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1064,
    storage_location: "15 Clarion St, Manchester, M4 5HE",
    storage_name: "Warehouse D"
  },
  {
    product_id: 4,
    date: ISODate("2025-02-12"),
    inventory_quantity: 2132,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 4,
    date: ISODate("2025-02-13"),
    inventory_quantity: 2106,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 5,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1098,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 5,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1081,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 6,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1101,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 6,
    date: ISODate("2025-02-13"),
    inventory_quantity: 882,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 7,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1089,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 7,
    date: ISODate("2025-02-13"),
    inventory_quantity: 970,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 8,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1122,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 8,
    date: ISODate("2025-02-13"),
    inventory_quantity: 905,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 9,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1110,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 9,
    date: ISODate("2025-02-13"),
    inventory_quantity: 995,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 10,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1115,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 10,
    date: ISODate("2025-02-13"),
    inventory_quantity: 990,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 11,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1078,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 11,
    date: ISODate("2025-02-13"),
    inventory_quantity: 967,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 12,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1095,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 12,
    date: ISODate("2025-02-13"),
    inventory_quantity: 985,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 13,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1102,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 13,
    date: ISODate("2025-02-13"),
    inventory_quantity: 990,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 14,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1130,
    storage_location: "15 Clarion St, Manchester, M4 5HE",
    storage_name: "Warehouse D"
  },
  {
    product_id: 14,
    date: ISODate("2025-02-13"),
    inventory_quantity: 910,
    storage_location: "15 Clarion St, Manchester, M4 5HE",
    storage_name: "Warehouse D"
  },
  {
    product_id: 15,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1077,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 15,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1068,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 16,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1105,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 16,
    date: ISODate("2025-02-13"),
    inventory_quantity: 992,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 17,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1110,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 17,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1095,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 18,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1115,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 18,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1052,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 19,
    date: ISODate("2025-02-12"),
    inventory_quantity: 2098,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 19,
    date: ISODate("2025-02-13"),
    inventory_quantity: 2085,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 20,
    date: ISODate("2025-02-12"),
    inventory_quantity: 2122,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 20,
    date: ISODate("2025-02-13"),
    inventory_quantity: 2010,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 21,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1075,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 21,
    date: ISODate("2025-02-13"),
    inventory_quantity: 962,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 22,
    date: ISODate("2025-02-12"),
    inventory_quantity: 2110,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 22,
    date: ISODate("2025-02-13"),
    inventory_quantity: 2090,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 23,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1088,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 23,
    date: ISODate("2025-02-13"),
    inventory_quantity: 975,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 24,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1110,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 24,
    date: ISODate("2025-02-13"),
    inventory_quantity: 995,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 25,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1120,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 25,
    date: ISODate("2025-02-13"),
    inventory_quantity: 902,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 26,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1095,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 26,
    date: ISODate("2025-02-13"),
    inventory_quantity: 880,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 27,
    date: ISODate("2025-02-12"),
    inventory_quantity: 2128,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 27,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1110,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 28,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1118,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 28,
    date: ISODate("2025-02-13"),
    inventory_quantity: 998,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 29,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1090,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 29,
    date: ISODate("2025-02-13"),
    inventory_quantity: 875,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 30,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1000,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 30,
    date: ISODate("2025-02-13"),
    inventory_quantity: 888,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 31,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1005,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 31,
    date: ISODate("2025-02-13"),
    inventory_quantity: 992,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 32,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1105,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 32,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1000,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 33,
    date: ISODate("2025-02-12"),
    inventory_quantity: 2130,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 33,
    date: ISODate("2025-02-13"),
    inventory_quantity: 2115,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 34,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1080,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 34,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1065,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 35,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1000,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 35,
    date: ISODate("2025-02-13"),
    inventory_quantity: 787,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 36,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1200,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 36,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1100,
    storage_location: "60 Bury Old Rd, Whitefield, Prestwich, Manchester, M45 6TL",
    storage_name: "Warehouse E"
  },
  {
    product_id: 37,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1125,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 37,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1110,
    storage_location: "1 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 38,
    date: ISODate("2025-02-12"),
    inventory_quantity: 2185,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 38,
    date: ISODate("2025-02-13"),
    inventory_quantity: 2075,
    storage_location: "17 Wellington Road North, Stockport, Manchester, SK4 1HJ",
    storage_name: "Warehouse B"
  },
  {
    product_id: 39,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1900,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 39,
    date: ISODate("2025-02-13"),
    inventory_quantity: 1800,
    storage_location: "1 Empress Street, Old Trafford, Manchester",
    storage_name: "Warehouse A"
  },
  {
    product_id: 40,
    date: ISODate("2025-02-12"),
    inventory_quantity: 1050,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  },
  {
    product_id: 40,
    date: ISODate("2025-02-13"),
    inventory_quantity: 995,
    storage_location: "67 Barking Street, Manchester M40 7BT",
    storage_name: "Warehouse C"
  }
]);
