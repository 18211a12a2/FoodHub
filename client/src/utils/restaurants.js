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
                    "image":"https://thechutneylife.com/wp-content/uploads/2018/05/Chana-Masala-Wraps-The-Chutney-Life-2-683x1024.jpg"
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
        "menuHeaders":[],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
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
        "menuHeaders":[],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
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
        "menuHeaders":[],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
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
        "menuHeaders":[],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
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
        "menuHeaders":[],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
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
        "menuHeaders":[],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
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
        "menuHeaders":[],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
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
        "menuHeaders":[],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
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
        "menuHeaders":[],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
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
        "menuHeaders":[],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
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
        "menuHeaders":[],
        "menu": {
            "Popular Items" : [
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                },
                {
                    "itemName" : "",
                    "description" : "",
                    "price" : "$",
                    "image" : ""
                }
            ]
        }
    },
]

export default restaurants;