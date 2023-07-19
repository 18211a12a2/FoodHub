const restaurants = [
    {
        "id":'0',
        "name":"Silver Coin Indian Grill",
        "image":"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto,width=800,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/8a67b035-81f7-4a02-9fa6-8e4e126baee6.jpg",
        "distance":"1.7 mi",
        "deliveryTime":"34 min",
        "rating":"4.5",
        "type":"Seafood, Chicken, Indian",
        "cuisine":"Indian",
        "menuHeaders":[ "Popular Items","Specials", "Drinks"],
        "menu" : {
            "Popular Items" : [
                {
                    "itemName" : "Rice Bowl",
                    "description" : "Gluten free. Pulao. White rice, with peas and carrots, served with raita and cucumber.",
                    "price" : "$14.99",
                    "image":"https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=50/media/photos/5272ec4b-455f-4d8a-be8c-0ffc8889bcb8-retina-large-jpeg"
                },
                {
                    "itemName" : "Samosa",
                    "description" : "A fried or baked pastry with a savory filling, such as spiced potatoes, onions, peas.",
                    "price" : "$3.00",
                    "image":"https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=50/media/photos/937b98e5-fed1-4c62-a148-cb05fd3237c8-retina-large-jpeg "
                },
                {
                    "itemName" : "Kati Roll",
                    "description" : "Indian bread rolled, with onions and cilantro served with rice and raita.",
                    "price" : "$14.99",
                    "image":"https://frommybowl.com/wp-content/uploads/2020/12/chana-kathi-rolls-landscape.jpg"
                },
                {
                    "itemName" : "Samosa Chaat",
                    "description" : "Samosa topped with cholo (garbanzo beans) and chutneys.",
                    "price" : "$7.99",
                    "image":"https://www.whiskaffair.com/wp-content/uploads/2021/04/Samosa-Chaat-2-3.jpg"
                }
            ],
            "Specials":[
                {
                    "itemName" : "Paneer Veg Roll",
                    "description" : "Indian cheese sauteed with bell peppers and onions.",
                    "price" : "$14.99",
                    "image":"https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-6.jpg"
                },
                {
                    "itemName" : "Aloo Masala Roll",
                    "description" : "Croquette made with potatoes and mixed veggies.",
                    "price" : "$14.99",
                    "image":"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/ruby_pathak-yahoo.com/Aloo_Gobi_Kathi_Roll.jpg"
                },
                {
                    "itemName" : "Chole Masala Roll",
                    "description" : "Croquette made with potatoes and mixed veggies.",
                    "price" : "$14.99",
                    "image":"https://frommybowl.com/wp-content/uploads/2020/12/chana-kathi-rolls-landscape-320x180.jpg"
                }
            ],
            "Drinks":[
                {
                    "itemName" : "Mango Lassi",
                    "description" : "Fresh chilled yogurt with mango pulp.",
                    "price" : "$4.25",
                    "image":"https://www.theflavorbender.com/wp-content/uploads/2021/05/Mango-Lassi-4620-2.jpg"
                },
                {
                    "itemName" : "Chai",
                    "description" : "Indian tea. Masala cardamom.",
                    "price" : "$3.00",
                    "image":"https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022.jpg"
                },
                {
                    "itemName" : "Thumbs up",
                    "description" : "Indian cola",
                    "price" : "$3.00",
                    "image":"https://cdna.artstation.com/p/assets/images/images/061/021/506/large/sai-sarath-thumbs-up-2.jpg?1679850783"
                }
            ]
        }
    },
    {
        "id":'1',
        "name":"BLUEROOT",
        "image":"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto,width=800,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/ce951829-a01b-4369-8ccb-8b23cdb7ee31.jpg",
        "distance":"2.1 mi",
        "deliveryTime":"23 min",
        "rating":"4.8",
        "type":"Lunch, Healthy",
        "cuisine":"American",
        "menuHeaders":["Popular Items","Beyond Burgers","Beverages"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "SANTA FE with CHIPOTLE CHICKEN",
                    "description" : "The fan favorite. Spring mix, quinoa, black beans, sweet potatoes, cherry tomatoes, goat cheese, pumpkin seeds, and (spicy) chipotle vinaigrette",
                    "price" : "$20.32",
                    "image" : "https://iamfitnessa.com/wp-content/uploads/2016/08/Edits-111-1024x683.jpg"
                },
                {
                    "itemName" : "FARMSTAND with GRILLED CHICKEN",
                    "description" : "Our signature salad. Spinach, roasted + raw seasonal vegetables, cheddar, spiced pecans, creamy dill dressing",
                    "price" : "$19.05",
                    "image" : "https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2008/09/farm-stand-gr-i-l-led.jpg?itok=giFNB6OU"
                },
                {
                    "itemName" : "CALIFORNIA COBB with GRILLED CHICKEN",
                    "description" : "West coast vibes. Arugula, grilled chicken, avocado, crispy bacon, tomatoes, cucumbers, cheddar, soft-boiled farm egg, creamy dill dressing.",
                    "price" : "$18.73",
                    "image" : "https://www.urbanfoodiekitchen.com/wp-content/uploads/2019/07/Grilled-Chicken-Cobb-Salad2.jpg"
                }
            ],
            "Beyond Burgers" : [
                {
                    "itemName" : "CHIPOTLE BURGER",
                    "description" : "Plant-based burger stacked with pickled onion, arugula, pepper jack cheese, avocado, and house-made chipotle mayo on a toasted brioche bun. Served with baked kettle chips. Add side salad for additional charge.",
                    "price" : "$15.00",
                    "image" : "https://www.goya.com/media/3214/chipotle-cheeseburger.jpg?quality=80"
                },
                {
                    "itemName" : "BLUEROOT BURGER",
                    "description" : "Plant-based burger stacked with pickled onion, cucumber, arugula, and creamy dill dressing on a toasted bun. Served with baked kettle chips",
                    "price" : "$15.00",
                    "image" : "https://bluerootco.com/wp-content/uploads/2023/04/ts-1.png"
                },
                {
                    "itemName" : "CLASSIC BURGER",
                    "description" : "The classic! Creamy dill, tomato jam, house-made pickles, arugula, cheddar on a brioche bun.",
                    "price" : "$15.00",
                    "image" : "https://olo-images-live.imgix.net/1a/1ae3d77e75214fe3bba884fdec09872d.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=d8c3fa6b69f3b12430be6e37b6dbbf12"
                }
            ],
            "Beverages" : [
                {
                    "itemName" : "CLEAN GREEN SMOOTHIE",
                    "description" : "Get your greens in! No sugar, no additives, no BS. Just plants",
                    "price" : "$12.64",
                    "image" : "https://cdn-prd.healthymealplans.com/recipe/Clean-Green-Smoothie_16x9_Healthy-Meal-Plans.jpg"
                },
                {
                    "itemName" : "BERRY UPBEET SMOOTHIE",
                    "description" : "We've combined antioxidant-rich berries + mango with inflammation-busting beetroot for a scrumptious, sippable power play",
                    "price" : "$12.64",
                    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9PdRJCjvaRFGPIGAWE62xDhQFKsOhrI_STurdd6v0exzOTKZT8yC-kOEmHNsmooWT_E&usqp=CAU"
                }
            ]
        }
    },
    {
        "id":'2',
        "name":"BayLeaf",
        "image":"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto,width=800,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/d2a6ebfa-4969-4448-bd6b-de2ec25d210e.0 (1)",
        "distance":"1.1 mi",
        "deliveryTime":"29 min",
        "rating":"4.6",
        "type":"Indian",
        "cuisine":"Indian",
        "menuHeaders":["Popular Items","Indian Street Appetizers","Desserts"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "Chicken Tikka Masala",
                    "description" : "The Indian favorite curry. chicken, Rich and creamy tomato based sauce with selected earthy spices.",
                    "price" : "$19.99",
                    "image" : "https://bellyfull.net/wp-content/uploads/2021/05/Chicken-Tikka-Masala-blog.jpg"
                },
                {
                    "itemName" : "Butter Chicken",
                    "description" : "The most popular Punjabi curry awesomeness.",
                    "price" : "$20.70",
                    "image" : "https://norecipes.com/wp-content/uploads/2013/11/butter-chicken-recipe-002.jpg"
                },
                {
                    "itemName" : "Bombay Onion Fritters",
                    "description" : "Onions dredged in spiced chickpea batter, fried until golden brown and served with tamarind chutney.",
                    "price" : "$9.20",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=50/media/photosV2/78415951-ef20-45a2-9552-8fff365be91f-retina-large.JPG"
                }
            ],
            "Indian Street Appetizers" : [
                {
                    "itemName" : "Street Dosa",
                    "description" : "Indian rice and lentil crepes stuffed with mashed vegetables. Served with coconut chutney and lentil curry.",
                    "price" : "$13.80",
                    "image" : "https://media.istockphoto.com/id/1318600400/photo/plain-dosa-dish.jpg?s=612x612&w=0&k=20&c=ExWRLLprQU-QDM1r7oaIvUH9N7ZvhBFYn8lWRoUQ_9M="
                },
                {
                    "itemName" : "Gol Gappa Shots",
                    "description" : "Semolina puffs filled with black garbanzo, potato and mint cilantro water.",
                    "price" : "$6.99",
                    "image" : "https://i.ytimg.com/vi/x07ognuIgds/maxresdefault.jpg"
                }
            ],
            "Desserts":[
                {
                    "itemName" : "Caramelized Jamun and Rabdi",
                    "description" : "Gulab jamun served with sweet, condensed-milk based dish rabdi, made by boiling milk on low heat for a long time",
                    "price" : "$10.35",
                    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-RfQFsZvl30x8CF37kZzJa0RY2rzwKNYbsA&usqp=CAU"
                }
            ]
        }
    },
    {
        "id":'3',
        "name":"City Bowls",
        "image":"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto,width=800,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/d9879e4a-a70d-4a30-9140-8f40c4bec328.jpg",
        "distance":"5.8 mi",
        "deliveryTime":"47 min",
        "rating":"4.9",
        "type":"Healthy, Acal Bowls",
        "cuisine":"American",
        "menuHeaders":["Popular Items", "Acai", "Pitaya", "Green"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "Powerhouse Bowl",
                    "description" : "Toppings: bananas, strawberries, blueberries, granola, peanut butter, nutella. Base: acai, bananas, almond milk, peanut butter, vanilla protein (40g).",
                    "price" : "$9.25",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/5352db66-4a14-4ef2-bf74-c0a6681d276d-retina-large.jpg"
                },
                {
                    "itemName" : "Bham Bowl",
                    "description" : "Toppings: bananas, strawberries, blueberries, granola, nutella, peanut butter. Base: pitaya, almond milk, peanut butter, protein, strawberries.",
                    "price" : "$9.25",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/5c2a2e15-ab2e-4613-ace4-9dc548f2b3df-retina-large.JPG"
                },
                {
                    "itemName" : "Og Bowl",
                    "description" : "Toppings: bananas, strawberries, granola, honey. Base: acai, apple juice, bananas, strawberries.",
                    "price" : "$8.00",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/46155a41-df96-4a06-bb80-bfecf2ae8bd1-retina-large.JPG"
                },
                {
                    "itemName" : "City Bowl",
                    "description" : "Toppings: pineapple, strawberries, honey, granola, bee pollen. Base: acai, apple juice, bananas, strawberries.",
                    "price" : "$9.50",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/397e8747-4240-4657-ae3c-911c3cbea023-retina-large-jpeg"
                },
                {
                    "itemName" : "Blazer Bowl",
                    "description" : "Toppings: blackberries, mango, kiwi, granola, coconut flakes, honey, chia seeds. Base: acai, apple juice, bananas, strawberries.",
                    "price" : "$9.25",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/7db390c6-7829-41fe-9bff-77a1cce6e8ca-retina-large.jpg"
                }
            ],
            "Acai" : [
                {
                    "itemName" : "Ah-Sigh-Ee Bowl",
                    "description" : "Toppings: bananas, blueberries, granola, peanut butter. Base: acai, apple juice, bananas, strawberries.",
                    "price" : "$9.25",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/d80409d0-3d6d-467c-9699-e8c5fe3c0f91-retina-large.jpg"
                },
                {
                    "itemName" : "Vulcan Bowl",
                    "description" : "Toppings: raspberries, pineapple, goji berries, nutella, granola. Base: acai, bananas, strawberries, almond milk, peanut butter, vanilla protein (40g).",
                    "price" : "$9.25",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/612fbd61-08ba-4061-a4d8-0499c58c7828-retina-large.jpg"
                },
                {
                    "itemName" : "Iron Bowl",
                    "description" : "Toppings: blueberries, strawberries, granola, coconut flakes. Base: acai, apple juice, bananas, strawberries.",
                    "price" : "9.25$",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/a3c702ec-9055-443e-872a-187aa6d7fbee-retina-large.jpg"
                }
            ],
            "Pitaya" : [
                {
                    "itemName" : "Island Bowl",
                    "description" : "Toppings: pineapples, kiwi, strawberries, coconut flakes, granola, bee pollen, honey. Base: pitaya, strawberries, apple juice.",
                    "price" : "$9.25",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/a7a2bbf1-853a-46db-8f1e-ee4a9c7c512d-retina-large.jpg"
                },
                {
                    "itemName" : "Nutty by Nature Bowl",
                    "description" : "Toppings: blueberries, pineapple, granola, nutella. Base: pitaya, almond milk, pineapple, protein.",
                    "price" : "$9.25",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/d6d64fb7-21b8-48a4-9600-331323a74fa8-retina-large.jpg"
                }
            ],
            "Green" : [
                {
                    "itemName" : "The Hawaiian",
                    "description" : "Toppings: kiwi, strawberries, chia seeds, coconut flakes, honey, granola. Base: spinach, apple juice, bananas, pineapple.",
                    "price" : "$9.25",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/2fc9443e-bd81-4a7e-9472-fe605223531c-retina-large.jpg"
                },
                {
                    "itemName" : "The Hulk",
                    "description" : "Toppings: bananas, pineapple, cacao nibs, peanut butter, granola. Base: spinach, apple juice, bananas, pineapple.",
                    "price" : "$9.25",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/0a1a7dc6-ce87-475c-abe0-eb790f14cfa8-retina-large.jpg"
                }
            ]
        }
    },
    {
        "id":'4',
        "name":"Yummy Bowl",
        "image":"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto,width=800,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/1ebf3e4c-70da-4e63-b1b1-ce232d30ca63.jpg",
        "distance":"2.9 mi",
        "deliveryTime":"31 min",
        "rating":"4.7",
        "type":"Chinese, Sushi Bars",
        "cuisine":"Chinese",
        "menuHeaders":["Popular Items", "Appetizer", "Salad/Soup", "Regular Roll", "Sushi", "Drinks", "Dessert Ice Cream Cake"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "Spring Roll (4pc)",
                    "description" : "Asian vegetable roll served w. Sweet chili sauce. All ingredients are cooked.",
                    "price" : "$4.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/e3a30f21-f3c9-47d2-b623-ff7b541083af-retina-large-jpeg"
                },
                {
                    "itemName" : "Cream Cheese Puff (6pc)",
                    "description" : "Philadelphia cream cheese and crab meat, green onion served w. Sweet and sour sauce. All ingredients are cooked.",
                    "price" : "$5.75",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/0dc2accd-b5a4-40f3-aa0c-9c6d7d0624df-retina-large-jpeg"
                },
                {
                    "itemName" : "Steam Gyoza (6pcs)",
                    "description" : "Pork Dumplings. All ingredients are cooked.",
                    "price" : "$5.95",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/88386199-3720-4a9e-8a69-dfe48474626a-retina-large-jpeg"
                }
            ],
            "Appetizer" : [
                {
                    "itemName" : "Steam Gyoza (6pcs)",
                    "description" : "Pork Dumplings. All ingredients are cooked.",
                    "price" : "$5.95",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/88386199-3720-4a9e-8a69-dfe48474626a-retina-large-jpeg"
                },
                {
                    "itemName" : "Edamame",
                    "description" : "Steamed soy bean sprinkled w. sea salt. All ingredients are cooked.",
                    "price" : "$5.75",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/8a43bbda-1c10-4733-a05a-e994a9a45fbe-retina-large-jpeg"
                },
                {
                    "itemName" : "Asparagus Tempura",
                    "description" : "Lightly battered and deep fried asparagus drizzled w. Spicy mayo and eel sauce. All ingredients are cooked.",
                    "price" : "$6.75",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/06cbce26-ce8b-4a63-aa28-eaa1a3a9bdfa-retina-large-jpeg"
                }
            ],
            "Salad/Soup" : [
                {
                    "itemName" : "Egg Drop Soup",
                    "description" : "Soup that is made from beaten eggs and broth.",
                    "price" : "$2.25",
                    "image" : "https://static.onecms.io/wp-content/uploads/sites/43/2023/01/31/45515-restaurant-style-egg-drop-soup-ddmfs-Beauty-3x4-1.jpg"
                },
                {
                    "itemName" : "Black Pepper Tuna Tataki Salad",
                    "description" : "Seared pepper crusted tuna in a special dressing.",
                    "price" : "$8.25",
                    "image" : "https://sammywongskitchen.com/wp-content/uploads/2022/04/IMG_6417.jpg"
                }
            ],
            "Regular Roll" : [
                {
                    "itemName" : "Spicy Tuna Roll",
                    "description" : "All ingredients are raw.",
                    "price" : "$5.95",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/85c036c1-db9d-43ed-a23f-cfde684106cb-retina-large-jpeg"
                },
                {
                    "itemName" : "Spicy Shrimp Cucumber Roll",
                    "description" : "All ingredients are cooked.",
                    "price" : "$5.95",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/a492d694-67c6-4c5b-9516-df62cb06fa86-retina-large-jpeg"
                }
            ],
            "Sushi" : [
                {
                    "itemName" : "Sashimi Regular",
                    "description" : "12 pieces in total",
                    "price" : "$17.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/62b426a3-da3f-402f-aff2-0ed70a944ced-retina-large-jpeg"
                },
                {
                    "itemName" : "Sushi Regular",
                    "description" : "Seven pieces of sushi and one spicy tuna roll.",
                    "price" : "$15.99",
                    "image" : "https://sushiwin.com/wp-content/uploads/2021/11/Menu-regular-roll-left.png"
                }
            ],
            "Drinks" : [
                {
                    "itemName" : "Sprite",
                    "description" : "Chilled Sprite",
                    "price" : "$2.29",
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sprite_Logo.svg/2560px-Sprite_Logo.svg.png"
                },
                {
                    "itemName" : "Coca Cola",
                    "description" : "Chilled Coca Cola",
                    "price" : "$2.29",
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/640px-Coca-Cola_bottle_cap.svg.png"
                }
            ],
            "Dessert Ice Cream Cake" : [
                {
                    "itemName" : "New York Cheese Cake",
                    "description" : "Cheese Cake",
                    "price" : "$5.25",
                    "image" : "https://www.carnaldish.com/wp-content/uploads/2012/04/strawberryvanillacheesecake4.jpg"
                },
                {
                    "itemName" : "Fried Ice Cream",
                    "description" : "Ice Cream",
                    "price" : "$5.95",
                    "image" : "https://www.thegunnysack.com/wp-content/uploads/2020/08/Fried-Ice-Cream-Bite-Angle.jpg"
                }
            ]
        }
    },
    {
        "id":'5',
        "name":"Wayback Burgers",
        "image":"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto,width=800,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/eb159650-228b-471f-92a2-3a7c4c08a356.jpg",
        "distance":"1.3 mi",
        "deliveryTime":"20 min",
        "rating":"4.6",
        "type":"American Hot Dogs",
        "cuisine":"American",
        "menuHeaders":["Popular Items","Burgers", "Hot Dogs", "Hand-Dipped Milkshakes", "Refreshing Drinks", "Kiddos" ],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "CHEEEESY BURGER",
                    "description" : "We encourage you to pronounce all four E's when you order. Four slices of melted American cheese and two beef patties, sandwiched between an inverted, grilled, and buttered bun.",
                    "price" : "$8.39",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/28ed73e5-046b-447c-8477-a5eec94b55a1-retina-large.png"
                },
                {
                    "itemName" : "DOUBLE BACON BURGER",
                    "description" : "'Hold the bacon,' said no one ever. Our Wayback Classic topped with four slices of crispy bacon for mouthwatering perfection. American cheese, lettuce, tomato, pickles, onions, mustard, and the rich taste of America’s Favorite Ketchup® from Heinz® to complete this masterpiece.",
                    "price" : "$10.19",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/b295e321-3472-4b49-a7cd-5dc8ffe85be0-retina-large.jpg"
                },
                {
                    "itemName" : "O'FRIES",
                    "description" : "Making a decision can be hard. We'll take that pressure off your hands with this combo order of fries and onion rings.",
                    "price" : "$4.59",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/1183ce82-b157-46b7-a01a-5489f3d6a053-retina-large.png"
                }
            ],
            "Burgers" : [
                {
                    "itemName" : "CLASSIC",
                    "description" : "A classic never goes out of style. Two beef patties, American cheese, lettuce, tomato, pickles, onions, mustard, and the rich taste of America’s Favorite Ketchup® from Heinz®.",
                    "price" : "$8.69",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/20353854-a14f-4d81-aa28-02af39898c78-retina-large.png"
                },
                {
                    "itemName" : "THE BIG EASY",
                    "description" : "Two mouthwatering, all-beef patties stacked with lettuce, tomato, bacon and pepper jack cheese—all jazzed up with a Cajun Remoulade.",
                    "price" : "$9.59",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/fcac3d38-5600-409c-ba57-886d05decff8-retina-large.jpg"
                },
                {
                    "itemName" : "THE NINE PATTY BURGER",
                    "description" : "Nine (That's Right, Nine!) Fresh, 100% all-beef Patties, Nine slices of American Cheese, Lettuce and Tomato.",
                    "price" : "$34.49",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/7d3d1197-7185-4094-bddb-f028ca6beb33-retina-large.jpg"
                }
            ],
            "Hot Dogs" : [
                {
                    "itemName" : "HOT DOG - CRAFT YOUR OWN",
                    "description" : "Start with an all-beef frankfurter and top it your way! Go ahead and try to think up an order we haven't heard yet. We double-dog dare you.",
                    "price" : "$5.29",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/67a9147f-6ed2-4fce-9903-f2e316a8402c-retina-large.png"
                },
                {
                    "itemName" : "WAYBACK DOG",
                    "description" : "Bacon, cheese, grilled onions, Wayback gold sauce",
                    "price" : "$5.29",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/67a9147f-6ed2-4fce-9903-f2e316a8402c-retina-large.png"
                }
            ],
            "Hand-Dipped Milkshakes" : [
                {
                    "itemName" : "REGULAR MILKSHAKE",
                    "description" : "What's a burger without a shake? These hand-dipped delights, crafted to order with Blue Bunny ice cream and milk, are the perfect complement to any meal you choose. All milkshake selections include whip cream unless the option is unchecked below.",
                    "price" : "$7.89",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/22fd7966-1f16-4298-b69f-c064e82aa4eb-retina-large.png"
                }
            ],
            "Refreshing Drinks" : [
                {
                    "itemName" : "Sprite",
                    "description" : "Chilled Sprite",
                    "price" : "$2.29",
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sprite_Logo.svg/2560px-Sprite_Logo.svg.png"
                },
                {
                    "itemName" : "Coca Cola",
                    "description" : "Chilled Coca Cola",
                    "price" : "$2.29",
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/640px-Coca-Cola_bottle_cap.svg.png"
                }
            ],
            "Kiddos" : [
                {
                    "itemName" : "KIDS MEAL - KIDS' CHEESEBURGER",
                    "description" : "Kids'Cheeseburger, Kids Fry, and Kids drink.",
                    "price" : "$8.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/2cb43a65-dc45-4b5d-a3fe-5bbb3e992082-retina-large.png"
                },
                {
                    "itemName" : "KIDS MEAL - CHICKEN TENDERS (2 PC)",
                    "description" : "Two Chicken Tenders, Kids Fry, and Kids drink.",
                    "price" : "$8.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/105e2dcb-acd0-45da-a4c0-ff8c618f179f-924b6776-ec76-4add-a4e4-4af2142c67be-retina-large.JPG"
                }
            ]
        }
    },
    {
        "id":'6',
        "name":"Best Wings & Deli",
        "image":"https://img.cdn4dd.com/p/fit=cover,width=1200,format=auto,quality=50/media/store/header/fc4743e9-df24-4a64-b76e-be2accb86c99.jpg ",
        "distance":"3.9 mi",
        "deliveryTime":"33 min",
        "rating":"4.5",
        "type":"Deli, Chicken Wings",
        "cuisine":"Mexican",
        "menuHeaders":["Popular Items", "Breakfast", "Wings", "Best Dinners", "Drinks"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "Philly Cheesesteak",
                    "description" : "Yellow american cheese, mushrooms, onions, bell peppers and mayo.",
                    "price" : "$5.49",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photos/c5e64c35-a2ca-41d6-b9d0-bad3b5a74c78-retina-large.jpg"
                },
                {
                    "itemName" : "Grilled Chicken Salad",
                    "description" : "This grilled chicken salad is tender marinated chicken that’s grilled to perfection then served over lettuce with bacon, avocado, corn, blue cheese and tomatoes.",
                    "price" : "$8.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photos/550c7841-37f7-4d7c-b72b-f51cc3bce033-retina-large.jpg"
                },
                {
                    "itemName" : "Breakfast Plate",
                    "description" : "Grits, Egg, 2 Toast, 2 Sausage or Smoke Sausage",
                    "price" : "$6.99",
                    "image" : "https://pbs.twimg.com/media/FH8dI99WUAMGD-7.jpg"
                }
            ],
            "Breakfast" : [
                {
                    "itemName" : "Chicken and Waffle",
                    "description" : "2 whole wings or 4 buffalo wings",
                    "price" : "$8.99",
                    "image" : "https://grandbaby-cakes.com/wp-content/uploads/2018/06/chicken-and-waffles-recipe-2-scaled.jpg"
                },
                {
                    "itemName" : "Grits",
                    "description" : "Choose one: Shrimp, Fish, Smoke Sausage, Tender or whole wing)",
                    "price" : "$8.99",
                    "image" : "https://iheartumami.com/wp-content/uploads/2021/10/Cheesy-Shrimp-and-Grits-Recipe-Keto-I-Heart-Umami.jpg"
                },
                {
                    "itemName" : "Grill Smoke Sausage",
                    "description" : "Smoke Sausage",
                    "price" : "$3.99",
                    "image" : "https://www.homemaderecipesfromscratch.com/wp-content/uploads/2021/07/grilled-sausage-rosemary-1-1-official.webp"
                }
            ],
            "Wings" : [
                {
                    "itemName" : "10 Pieces Combo",
                    "description" : "Wings",
                    "price" : "$13.99",
                    "image" : "https://www.fastfoodmenuprices.com/wp-content/uploads/2020/11/Wingstop.jpg"
                },
                {
                    "itemName" : "15 Pieces Combo",
                    "description" : "Wings",
                    "price" : "$18.99",
                    "image" : "https://www.fastfoodmenuprices.com/wp-content/uploads/2020/11/Wingstop.jpg"
                }
            ],
            "Best Dinners" : [
                {
                    "itemName" : "3 Piece Pork Chop Dinner",
                    "description" : "Pork Chop Dinner",
                    "price" : "$10.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/5c48235e-9d1d-4ce3-b35a-cdc66f5b7df1-retina-large.JPG"
                },
                {
                    "itemName" : "7 Piece Jumbo Shrimp Dinner",
                    "description" : "Shrimp Dinner",
                    "price" : "$9.99",
                    "image" : "https://www.gritsandpinecones.com/wp-content/uploads/2022/01/buffalo-shrimp-final.jpeg"
                }
            ],
            "Drinks" : [
                {
                    "itemName" : "Sprite",
                    "description" : "Chilled Sprite",
                    "price" : "$2.29",
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sprite_Logo.svg/2560px-Sprite_Logo.svg.png"
                },
                {
                    "itemName" : "Coca Cola",
                    "description" : "Chilled Coca Cola",
                    "price" : "$2.29",
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/640px-Coca-Cola_bottle_cap.svg.png"
                }
            ]
        }
    },
    {
        "id":'7',
        "name":"Pizza passion chicken & Fish",
        "image":"https://img.cdn4dd.com/p/fit=cover,width=1200,format=auto,quality=50/media/store/header/94a9e5ee-f625-479b-8147-ad60f4190135.jpg ",
        "distance":"5.9 mi",
        "deliveryTime":"35 min",
        "rating":"4.6",
        "type":"Pizza, Sandwiches",
        "cuisine":"American",
        "menuHeaders":["Popular Items", "Hot Sandwiches", "Pizza", "Salads", "Drinks"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "Philly Steak, Fries and Drink",
                    "description" : "Philly steak, mushrooms, onions, peppers and mozzarella.",
                    "price" : "$10.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/5bc3b112-f7bf-47b1-82c5-b574efdbc760-retina-large-jpeg"
                },
                {
                    "itemName" : "6 Whole Wings combo",
                    "description" : "Fries and drink.",
                    "price" : "$10.49",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/942a40db-def3-4837-8b94-7d002a6a70d4-retina-large-jpeg"
                },
                {
                    "itemName" : "Philly Steak, 3 Cut Wings, Fries and Drink",
                    "description" : "Philly steak, mushrooms, onions, peppers and mozzarella.",
                    "price" : "$12.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/88a5d9cb-bffd-478f-b39d-fc367e72f947-retina-large-jpeg"
                }
            ],
            "Hot Sandwiches" : [
                {
                    "itemName" : "Chicken Philly, 6 Cut Wings, Fries and Drink",
                    "description" : "Chicken Philly, 6 Cut Wings, Fries and Drink",
                    "price" : "$16.99",
                    "image" : "https://slicelife.imgix.net/19149/photos/original/WingsCity_Combo_2-3PCChickenTenders_Fries_ChoiceOfDrink.jpg?auto=compress&auto=format"
                },
                {
                    "itemName" : "Cheese burger combo",
                    "description" : "Cheese burger combo",
                    "price" : "$10.49",
                    "image" : "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ldmkfrsi/e926e244-bacf-40df-a4df-8de77f739398.jpg"
                }
            ],
            "Pizza" : [
                {
                    "itemName" : "14' Cheese Pizza",
                    "description" : "Cheese Pizza",
                    "price" : "$9.99",
                    "image" : "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1-500x375.jpg"
                },
                {
                    "itemName" : "16' Supreme Pizza",
                    "description" : "Supreme Pizza",
                    "price" : "$17.99",
                    "image" : "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sl_supremepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg"
                },
                {
                    "itemName" : "Pepperoni (Slice)",
                    "description" : "Pepperoni",
                    "price" : "$4.49",
                    "image" : "https://images.eatthismuch.com/img/177582_s6504_2e399cfd-fe0c-4ca1-aff5-600993bab60a.jpg"
                }
            ],
            "Salads" : [
                {
                    "itemName" : "Hawaiian Salad",
                    "description" : "Tomatoes onions green olives black olives ham pineapple mozzarella cheese on top.",
                    "price" : "$9.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/09947229-d4b7-4e04-919b-4082af67195b-retina-large-jpeg"
                },
                {
                    "itemName" : "Grilled Chicken Salad",
                    "description" : "Lettuce onions tomatoes green olives",
                    "price" : "$10.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/58c9e766-8e76-4234-a17a-76adb95310f8-retina-large-jpeg"
                },
                {
                    "itemName" : "Garden Salad",
                    "description" : "Fresh lettuce tomatoes green peppers onions banana peppers mushrooms and green olives.",
                    "price" : "8.99$",  
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/ad25a51c-d21f-4b43-992a-41a1085061f4-retina-large-jpeg"
                }
            ],
            "Drinks" : [
                {
                    "itemName" : "Sprite",
                    "description" : "Chilled Sprite",
                    "price" : "$2.29",
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sprite_Logo.svg/2560px-Sprite_Logo.svg.png"
                },
                {
                    "itemName" : "Coca Cola",
                    "description" : "Chilled Coca Cola",
                    "price" : "$2.29",
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/640px-Coca-Cola_bottle_cap.svg.png"
                }
            ]
        }
    },
    {
        "id":'8',
        "name":"Chick-fil-A",
        "image":"https://img.cdn4dd.com/p/fit=cover,width=400,format=auto,quality=50/media/photosV2/69c56cd8-d694-4fbf-a757-95980f33470f-retina-large.JPG",
        "distance":"1.1 mi",
        "deliveryTime":"32 min",
        "rating":"4.6",
        "type":"Chicken, American",
        "cuisine":"American",
        "menuHeaders":["Popular Items", "Breakfast","Meals","Drinks"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "Chick-fil-A® Chicken Biscuit",
                    "description" : "A breakfast portion of our famous boneless breast of chicken, seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a buttermilk biscuit baked fresh at each Restaurant.",
                    "price" : "$4.79",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/5237e32c-3e59-400b-9c33-3768a0fcec54-retina-large.png"
                },
                {
                    "itemName" : "Chick-fil-A Chick-n-Minis™",
                    "description" : "Bite-sized Chick-fil-A® Nuggets nestled in warm, mini yeast rolls that are lightly brushed with a honey butter spread.",
                    "price" : "$6.19",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/0b5c97c1-9fdf-4271-ade0-ac049c8be0a6-retina-large.png"
                },
                {
                    "itemName" : "Chick-fil-A® Chicken Biscuit Meal",
                    "description" : "A breakfast portion of our famous boneless breast of chicken, seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a buttermilk biscuit baked fresh at each Restaurant.",
                    "price" : "$8.79",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/511a05ca-71ac-42a0-aa46-3479fb728247-retina-large.png"
                },
                {
                    "itemName" : "Hash Brown Scramble Burrito Meal",
                    "description" : "A hearty morning meal of sliced grilled chicken, crispy Hash Browns, scrambled eggs and a blend of Monterey Jack and Cheddar cheeses. Made fresh each morning. Rolled in a warm flour tortilla. Served with Jalapeño Salsa.",
                    "price" : "$10.85",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/f19344a5-d44f-4152-8f25-a5ea55ea4a66-retina-large.png"
                }
            ],
            "Breakfast" : [
                {
                    "itemName" : "Chick-fil-A Chick-n-Minis™ Meal",
                    "description" : "Chick-fil-A Chick-n-Minis™ Meal.",
                    "price" : "$10.39",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/989d6e51-8aa4-4e82-9b4e-8a956375543c-retina-large.JPG"
                },
                {
                    "itemName" : "Spicy Chicken Biscuit Meal",
                    "description" : "A breakfast portion of our boneless breast of chicken, seasoned with a spicy blend of peppers, freshly-breaded, pressure-cooked in 100% refined peanut oil and served on a buttermilk biscuit baked fresh at each Restaurant.",
                    "price" : "$9.35",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/f3eb05cb-f305-431a-8c66-5a71457b6459-retina-large.JPG"
                },
                {
                    "itemName" : "Hash Brown Scramble Burrito",
                    "description" : "A hearty morning meal of sliced Chick-fil-A Nuggets, crispy Hash Browns, scrambled eggs and a blend of Monterey Jack and Cheddar cheeses. Made fresh each morning. Rolled in a warm flour tortilla. Served with Jalapeño Salsa.",
                    "price" : "$6.49",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/43528d6c-0307-450b-963f-88ffa025bde4-retina-large.png"
                }
            ],
            "Meals" : [
                {
                    "itemName" : "Chick-fil-A® Nuggets Meal",
                    "description" : "Bite-sized pieces of tender all breast meat chicken, seasoned to perfection, freshly breaded and pressure cooked in 100% refined peanut oil. Available in 8-count, 12-count, or 30-count entrées with choice of dipping sauce.",
                    "price" : "$11.69",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/67c1f594-9931-4962-8624-eda2ad41025b-retina-large.png"
                },
                {
                    "itemName" : "Chick-fil-A® Cool Wrap Meal",
                    "description" : "Sliced grilled chicken breast, nestled in a fresh mix of Green Leaf lettuce, petite red and green lettuce, and shredded green cabbage with a blend of shredded Monterey Jack and Cheddar cheeses, tightly rolled in a flaxseed flour flat bread. Made fresh daily. Served with Avocado Lime Ranch dressing (or guest’s choice of dressing).",
                    "price" : "$15.85",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/c33fecdb-339e-4e0a-86a4-c4d0ecf5ee81-retina-large.png"
                }
            ],
            "Drinks" : [
                {
                    "itemName" : "Sprite",
                    "description" : "Chilled Sprite",
                    "price" : "$2.29",
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sprite_Logo.svg/2560px-Sprite_Logo.svg.png"
                },
                {
                    "itemName" : "Coca Cola",
                    "description" : "Chilled Coca Cola",
                    "price" : "$2.29",
                    "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/640px-Coca-Cola_bottle_cap.svg.png"
                }
            ]
        }
    },
    {
        "id":'9',
        "name":"Chipotle",
        "image":"https://img.cdn4dd.com/p/fit=cover,width=1200,format=auto,quality=50/media/photosV2/81006ae4-874c-445a-a4a4-35e5b645179a-retina-large.png ",
        "distance":"1.4 mi",
        "deliveryTime":"27 min",
        "rating":"4.3",
        "type":"Mexican, Burritos",
        "cuisine":"Mexican",
        "menuHeaders":["Popular Items", "Entree","Drink"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "Burrito Bowl",
                    "description" : "Your choice of freshly grilled meat or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese",
                    "price" : "$11.90",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/42dcfbba-72ca-4d5a-b3c1-cc05600bceaa-retina-large.jpg"
                },
                {
                    "itemName" : "Burrito",
                    "description" : "Your choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.",
                    "price" : "$11.70",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/b17154e5-c7e0-4397-bef2-d56b41b2d88b-retina-large.png"
                },
                {
                    "itemName" : "Blackberry Izze",
                    "description" : "Blackberry Izze",
                    "price" : "$4.19",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/48bac2b6-923c-42c9-abc4-037be7a0b150-retina-large.png"
                }
            ],
            "Entree" : [
                {
                    "itemName" : "Quesadilla",
                    "description" : "Cheese in a Flour Tortilla with your choice of meat, sofritas or fajita veggies and three included sides.",
                    "price" : "$12.40",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/e591669d-4af1-41c9-bd0a-b06ecebe0fa7-retina-large.png"
                },
                {
                    "itemName" : "Three Tacos",
                    "description" : "Your choice of freshly grilled meat, sofritas, or guacamole, and up to five toppings served in a soft or hard-shell tortilla.",
                    "price" : "$11.70",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/7fb0b81e-f6e2-4d44-8644-e6aa66cd71e4-retina-large.jpg"
                },
                {
                    "itemName" : "Salad",
                    "description" : "Your choice of meat or sofritas served with our fresh supergreens lettuce blend made of Romaine, Baby Kale, and Baby Spinach. Add beans, queso blanco, salsa, guacamole, sour cream or cheese and top it off with our signature Chipotle-Honey Vinaigrette.",
                    "price" : "$11.70",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/90c64fa7-6536-4fd2-8b06-4cccb1f0975d-retina-large.jpg"
                }
            ],
            "Drink" : [
                {
                    "itemName" : "Mexican Sprite",
                    "description" : "Mexican Sprite",
                    "price" : "$4.10",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/0a3fa25d-2134-45f1-ac91-762bca239d12-retina-large.png"
                },
                {
                    "itemName" : "Tractor Organic Black Tea",
                    "description" : "Tractor Organic Black Tea",
                    "price" : "$4.10",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/27d02db9-a0f2-42ae-8c56-12bddb3abf34-retina-large.png"
                },
                {
                    "itemName" : "Mexican Coca-Cola",
                    "description" : "Mexican Coca-Cola",
                    "price" : "$4.10",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/a957f709-9520-440c-b3bf-5c88b8aff28d-retina-large.png"
                }
            ]
        }
    },
    {
        "id":'10',
        "name":"McDonald's",
        "image":"https://img.cdn4dd.com/p/fit=cover,width=1200,format=auto,quality=50/media/photos/98a6f342-aa36-453e-ab97-33e377f52cfb-retina-large-png ",
        "distance":"1.0 mi",
        "deliveryTime":"16 min",
        "rating":"4.2",
        "type":"American, Burgers",
        "cuisine":"American",
        "menuHeaders":["Popular Items", "Homestyle breakfast","Mc cafe coffees"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "Hash Browns",
                    "description" : "Our Hash Browns are deliciously tasty and perfectly crispy. This crispy Hash Brown recipe features shredded potato hash brown patties that are prepared so they’re fluffy on the inside and crispy and toasty on the outside.",
                    "price" : "$3.59",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/6a680712-5b8d-40e9-9cb5-117378813b36-retina-large.jpg"
                },
                {
                    "itemName" : "Sausage Egg Cheese McGriddle",
                    "description" : "Sausage, Egg & Cheese McGriddles® feature soft, warm griddle cakes—with the sweet taste of maple—that hold a fluffy folded egg, savory sausage, and melty American cheese. McGriddles® cakes have no artificial preservatives or flavors and no colors from artificial sources",
                    "price" : "$5.36",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/5225729a-ebc4-489c-b0e6-c46730f28796-retina-large.jpg"
                },
                {
                    "itemName" : "Big Breakfast with Hotcakes",
                    "description" : "McDonald’s Big Breakfast® with Hotcakes satisfies with both sweet and savory breakfast favorites. Fill up with a warm biscuit, savory hot sausage, fluffy scrambled eggs, crispy hash browns, and golden brown hotcakes with a side of real butter and the sweet flavor of maple",
                    "price" : "$7.19",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/7651d704-8343-4138-bd96-50bc6d5dd139-retina-large.jpg"
                }
            ],
            "Homestyle breakfast" : [
                {
                    "itemName" : "Hotcakes and Sausage",
                    "description" : "When you're craving pancakes and sausage, McDonald's has you covered with our Hotcakes and Sausage breakfast. Featuring 3 golden brown hotcakes and real butter, topped with sweet maple flavored hotcake syrup. On the side, you get a hot McDonald's sausage patty.",
                    "price" : "$4.49",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/a3ba29d9-fc34-4075-af5f-8f93a0bfb46f-retina-large.jpg"
                },
                {
                    "itemName" : "Hotcakes",
                    "description" : "If you love pancakes, you've got to try McDonald's hotcakes with a side of real butter and sweet maple flavored hotcake syrup. This McDonald's breakfast comes with 3 golden brown hotcakes",
                    "price" : "$3.69",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/6371ac23-d570-4673-bf92-78fb64489f0d-retina-large.jpg"
                },
                {
                    "itemName" : "Big Breakfast",
                    "description" : "Our full, satisfying Big Breakfast® is perfect for any morning. Wake up to a breakfast meal with a warm biscuit, fluffy scrambled eggs, savory McDonald's sausage, and crispy golden hash browns.",
                    "price" : "$5.19",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/c74bade7-ecc7-4a1b-a004-f232cd6a9398-retina-large.jpg"
                }
            ],
            "Mc cafe coffees" : [
                {
                    "itemName" : "Caramel Frappé",
                    "description" : "McDonald's Caramel Frappé recipe is made with rich caramel flavor and a hint of coffee, blended with ice, and topped with whipped topping and caramel drizzle.",
                    "price" : "$3.08",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/64cbf926-823f-4cff-87c0-ad40f483727c-retina-large.jpg"
                },
                {
                    "itemName" : "Mocha Frappé",
                    "description" : "Enjoy McCafé®'s cold and creamy Mocha Frappé. Wondering what’s in a Mocha Frappé from McDonald’s? Made with rich chocolate flavor and a hint of coffee, our Mocha Frappé recipe is blended with ice and topped with whipped light cream and chocolatey drizzle.",
                    "price" : "$3.04",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/19245278-bece-4fd2-aa42-2a17c6db4f8d-retina-large.jpg"
                },
                {
                    "itemName" : "Iced French Vanilla Coffee",
                    "description" : "Our McCafé® French Vanilla Iced Coffee is a refreshingly cool iced coffee made with 100% Arabica beans. McDonald’s Vanilla Iced Coffee recipe features our premium roast coffee and smooth French vanilla syrup.",
                    "price" : "$2.49",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/77b4c5e3-3f34-464c-8971-454c8d504be4-retina-large.jpg"
                }
            ]
        }
    },
    {
        "id":'11',
        "name":"Frutta Bowls",
        "image":"https://img.cdn4dd.com/p/fit=cover,width=1200,format=auto,quality=50/media/store/header/addd6447-3c8d-4ac1-b433-00a806c2726a.jpg",
        "distance":"5.5 mi",
        "deliveryTime":"32 min",
        "rating":"4.7",
        "type":"Smoothies, Acal Bowls",
        "cuisine":"American",
        "menuHeaders":["Popular Items","Bowls","Smoothies"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "Bowl & Toast",
                    "description" : "Bowl & Toast",
                    "price" : "$17.09",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/a369d3c0-c6b8-4c1d-92bb-aa3d41b2ca6e-8138f43c-a27d-4fd3-addc-6261eab41876-retina-large.JPG"
                },
                {
                    "itemName" : "Frutella",
                    "description" : "Choose your base, granola, banana, strawberry, Nutella, peanut butter, coconut flakes",
                    "price" : "$10.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/589478f5-4272-4ecb-8d2b-c720e2b82a02-edee9fb4-6c2d-422f-afeb-cc13c6e8d492-retina-large.JPG"
                },
                {
                    "itemName" : "Bowl & Smoothie",
                    "description" : "Bowl & Smoothie",
                    "price" : "$17.09",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/80b6fa24-9012-4688-8307-a27239e9e47e-feed02e9-a028-4a2c-9b78-04183cf3f7ac-retina-large.JPG"
                }
            ],
            "Bowls" : [
                {
                    "itemName" : "Frutta",
                    "description" : "Choose your base, granola, strawberry, pineapple, kiwi, Nutella, peanut butter, honey, coconut flakes",
                    "price" : "$15.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/7b722c2c-dee8-4cd8-9d70-a2fdabc9a32e-3ff552ba-08a6-4fb1-b3ec-26b74de5cb0a-retina-large.JPG"
                },
                {
                    "itemName" : "Classic",
                    "description" : "Choose your base, granola, banana, strawberry, blueberry, honey, peanut butter, cacao nibs",
                    "price" : "$16.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/9bb19a45-5bfb-4bb8-972b-ea64a8cf9a07-279480b1-f59e-437f-8b6d-e187e81551e2-retina-large.JPG"
                },
                {
                    "itemName" : "Peanutella",
                    "description" : "Choose your base, granola, banana, Nutella, chocolate whey protein, cacao nibs, peanut butter, strawberry",
                    "price" : "$17.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/f414ae93-b0c7-4c6b-b45a-84d0b5624e2e-73012a2d-a1f4-4d3a-bbdc-3dc65a2b62af-retina-large.JPG"
                }
            ],
            "Smoothies" : [
                {
                    "itemName" : "Chocolate Explosion",
                    "description" : "Chocolate whey protein, banana, Nutella, peanut butter, almond milk",
                    "price" : "$10.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/b5c1304d-9043-4c2b-bf67-b755ac1081cc-92dc3dfe-f337-4a4e-9c22-93222e7e70e2-retina-large.JPG"
                },
                {
                    "itemName" : "The Green Machine",
                    "description" : "Avocado, kale, coconut milk, pineapple, honey",
                    "price" : "$11.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/cda91c01-0ea0-4fbc-bef9-e13dafaf8dfc-0d6d3426-5086-4f47-86e1-94cfa5c82faf-retina-large.JPG"
                },
                {
                    "itemName" : "Tropical",
                    "description" : "Pineapple, mango, banana, water",
                    "price" : "$6.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/d5cbbee7-4949-445f-adc4-bf49354fe51f-7df9a918-2121-4fad-890a-0b32b409dd1b-retina-large.JPG"
                }
            ]
        }
    },
    {
        "id":'12',
        "name":"Biryani Bowl",
        "image":"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto,width=800,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/79075a06-0402-4e94-aec3-41474353b21a.",
        "distance":"1.5 mi",
        "deliveryTime":"33 min",
        "rating":"4.5",
        "type":"Indian, Biryani",
        "cuisine":"Indian",
        "menuHeaders":["Popular Items","Dum Biryanis","Veg Biryanis"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "Boneless Chicken Biryani",
                    "description" : "Fragrant basmati rice cooked with aromatic biryani spices, herbs & boneless chicken to yield a delicious one pot dish.",
                    "price" : "$13.74",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/3aa80cd7-f772-4314-afbb-dbc4fc20d0d4-26ff705d-b948-47ac-a598-2ee02d94fcf2-retina-large.JPG"
                },
                {
                    "itemName" : "Veg Samosa (2pcs)",
                    "description" : "Samosas are fried pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas.",
                    "price" : "$6.24",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/502dbd19-879d-4896-8cfa-9f472a2d9645-45e6c408-933a-41f5-9e9c-3ad01f03962f-retina-large.JPG"
                },
                {
                    "itemName" : "Chicken Tikka Masala",
                    "description" : "Chicken tikka masala consists of roasted marinated chicken chunks (chicken tikka) in a creamy and tangy sauce.",
                    "price" : "$14.95",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/44b6e808-256b-49aa-a4a8-049fd9947408-e9d5d7b8-d834-4764-a187-1eb01e91768a-retina-large.JPG"
                }
            ],
            "Dum Biryanis" : [
                {
                    "itemName" : "Avakai Chicken Dum Biryani",
                    "description" : "Avakai Chicken Biryani is a tangy tasting savory chicken and rice dish that includes chicken, raw mango pickle, rice, and spices that are steamed together.",
                    "price" : "$13.74",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/d6acffc2-dc4c-4f0a-b133-f468b4630eef-1d3265d4-9bae-443a-86c6-c5ad560bbef7-retina-large.JPG"
                },
                {
                    "itemName" : "Temper Chicken Dum Biryani",
                    "description" : "Temper Chicken Biryani spicy savory chicken and rice dish that includes chicken, rice, and spices that are steamed together.",
                    "price" : "$13.74",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/8740d1e5-b7e1-40e5-9cb6-82f364612877-e4b4d375-d7f0-4d77-9f24-d7df21e6f7b5-retina-large.JPG"
                },
                {
                    "itemName" : "Ulavacharu Chicken Dum Biryani",
                    "description" : "Ulavacharu Chicken Biryani is uniquely favoured savory chicken and rice dish that includes chicken, thick lentil soup (Ulavacharu), rice, and spices that are steamed together",
                    "price" : "$13.74",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/c8843f9a-030b-4320-bfde-6fc9ece394a9-64524165-2d0b-418f-a122-cc917fe8b637-retina-large.JPG"
                }
            ],
            "Veg Biryanis" : [
                {
                    "itemName" : "Paneer Biryani",
                    "description" : "Fragrant basmati rice cooked with aromatic biryani spices, herbs & Paneer to yield a delicious one pot paneer biryani.",
                    "price" : "$14.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/00deaf79-7b19-450c-a09b-1bc988509cad-8215f5f1-a8a3-4320-b796-3c480580dff0-retina-large.JPG"
                },
                {
                    "itemName" : "Gongura Veg Biryani",
                    "description" : "Gongura Vegetable Biryani is a sour-tasting savory vegetable-rice dish that includes vegetables, Gongura leaves, rice, and spices that are steamed together",
                    "price" : "$12.49",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/8746d074-ad43-4155-b85f-b274022d1fc8-09cc60c5-91cd-4917-bcf5-0ce597fe73d5-retina-large.JPG"
                },
                {
                    "itemName" : "Veg Biryani",
                    "description" : "Vegetable Biryani is a savory vegetable and rice dish that includes various vegetables, rice, and spices that are steamed together.",
                    "price" : "$11.49",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/1639eee8-3c8d-4151-8158-71878d5d2ae6-7c9ab951-e99c-46b3-9cd0-cb47b664bea4-retina-large.jpg"
                }
            ]
        }
    },
    {
        "id":'13',
        "name":"Sitar Indian Restaurant",
        "image":"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto,width=800,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/a96623c3-7f71-43db-8557-e1526d8178ca.jpg",
        "distance":"1.2 mi",
        "deliveryTime":"22 min",
        "rating":"4.7",
        "type":"Indian",
        "menuHeaders":["Popular Items","Appetizers","Chicken","Vegetarian","Drinks"],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "Garlic Naan",
                    "description" : "Naan topped with garlic and cilantro",
                    "price" : "$3.99",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/d10cfc9d-bcc0-4559-85fa-eb2377bb293f-40d6cf5d-1509-4102-a746-ee11ca0503bc-retina-large.JPG"
                },
                {
                    "itemName" : "Chicken Tikka Masala",
                    "description" : "Chicken tikka masala is a dish of chunks of roasted marinated chicken in a spiced curry sauce. The sauce is usually creamy and orange-coloured. There are multiple claims to its place of origin such as the Indian subcontinent and the United Kingdom. It is among the most popular dish in the menu",
                    "price" : "$18.55",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/92094c4b-ceb3-41f0-9e6f-f9addef3005e-retina-large.jpeg"
                },
                {
                    "itemName" : "Panner Masala",
                    "description" : "Cubes of homemade Indian cottage cheese cooked in a creamy sauce with fresh tomatoes and exotic spices.",
                    "price" : "$18.55",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/c2812aca-853f-4ec6-a7c3-8c5bc3ae7100-retina-large.jpeg"
                },
                {
                    "itemName" : "Mango Lassi",
                    "description" : "Mango lassi recipe (Indian mango yogurt drink).",
                    "price" : "$5.35",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/7c307f1b-c6a8-473f-a38c-72044fc552e8-e8074995-ac69-4fdb-91d2-68240022bc87-retina-large.JPG"
                }
            ],
            "Appetizers" : [
                {
                    "itemName" : "Samosa Chat",
                    "description" : "Samosa chaat. Hints of sweet, tangy, and spicy flavors combined with the robust chaat masala make this classic street food downright addicting. Vegetable Samosa topped with chana masala, onions, yogurt, mint, and tamarind sauce",
                    "price" : "$11.90",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/173c7021-0fb5-49f9-84d0-a7b5262dfeab-6cfaeb77-e41c-4693-a86a-f368c6f28e45-retina-large.JPG"
                },
                {
                    "itemName" : "Shrimp Pakora",
                    "description" : "Fresh shrimp marinated in exotic spices and batter fried.",
                    "price" : "$9.25",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/7c36b909-6149-4cb4-805d-06cea95a40a9-retina-large.jpeg"
                }
            ],
            "Chicken":[
                {
                    "itemName" : "Chicken Korma",
                    "description" : "A rare delicacy from northwest India. Juicy pieces of chicken especially prepared with yogurt, onions, tomatoes and mild spices.",
                    "price" : "$18.55",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/6172eca6-712d-4e2e-b846-14fb036a40c4-retina-large.jpeg"
                },
                {
                    "itemName" : "Chicken Chilli Fry",
                    "description" : "Boneless chicken cooked in Indian and Chinese style",
                    "price" : "$18.55",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/b3906a30-a5ab-4656-a441-1689b76a61a1-e73a9119-70c0-4926-8459-b99ee4be4b98-retina-large.JPG"
                }
            ],
            "Vegetarian":[
                {
                    "itemName" : "Sag Paneer",
                    "description" : "Saag Paneer is a delicious Indian curry made using a mix of green leafy vegetables and fried cubes of paneer. It is easy to make and goes well with Indian breads like Naan or Paratha",
                    "price" : "$17.55",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/773e72a1-3828-4468-aea1-71718794be96-12314c9d-73c5-4303-ad4f-8899862e2f19-retina-large.JPG"
                },
                {
                    "itemName" : "Vegetable Korma",
                    "description" : "Mixed vegetables marinated in yogurt and cooked in a creamy sauce with exotic Indian spices",
                    "price" : "$17.25",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/e85db267-e388-43b2-9945-05d5468d8fb8-retina-large.jpeg"
                }
            ],
            "Drinks":[
                {
                    "itemName" : "Mango Lassi",
                    "description" : "Mango lassi recipe (Indian mango yogurt drink).",
                    "price" : "$5.35",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/7c307f1b-c6a8-473f-a38c-72044fc552e8-e8074995-ac69-4fdb-91d2-68240022bc87-retina-large.JPG"
                },
                {
                    "itemName" : "Sprite",
                    "description" : "Sprite.",
                    "price" : "$2.65",
                    "image" : "https://img.cdn4dd.com/p/fit=cover,width=1000,format=auto,quality=50/media/photosV2/b82fcdfc-7993-445b-be46-6b5ddb8e170d-retina-large.jpeg"
                }
            ]
        }
    },
]

export default restaurants;