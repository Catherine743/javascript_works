const foods = [
  {
    id: 1,
    name: "Chicken Biriyani",
    category: "Main Course",
    cuisine: "Indian",
    isVeg: false,
    price: 180,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Chicken", quantity: "150g" },
      { item: "Spices", quantity: "20g" }
    ]
  },
  {
    id: 2,
    name: "Veg Biriyani",
    category: "Main Course",
    cuisine: "Indian",
    isVeg: true,
    price: 150,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Vegetables", quantity: "150g" },
      { item: "Spices", quantity: "20g" }
    ]
  },
  {
    id: 3,
    name: "Masala Dosa",
    category: "Breakfast",
    cuisine: "South Indian",
    isVeg: true,
    price: 80,
    ingredients: [
      { item: "Rice Batter", quantity: "150g" },
      { item: "Potato", quantity: "100g" }
    ]
  },
  {
    id: 4,
    name: "Idli",
    category: "Breakfast",
    cuisine: "South Indian",
    isVeg: true,
    price: 50,
    ingredients: [
      { item: "Rice Batter", quantity: "120g" }
    ]
  },
  {
    id: 5,
    name: "Vada",
    category: "Snack",
    cuisine: "South Indian",
    isVeg: true,
    price: 40,
    ingredients: [
      { item: "Urad Dal", quantity: "100g" }
    ]
  },
  {
    id: 6,
    name: "Paneer Butter Masala",
    category: "Main Course",
    cuisine: "North Indian",
    isVeg: true,
    price: 170,
    ingredients: [
      { item: "Paneer", quantity: "150g" },
      { item: "Butter", quantity: "30g" }
    ]
  },
  {
    id: 7,
    name: "Chicken Curry",
    category: "Main Course",
    cuisine: "Indian",
    isVeg: false,
    price: 160,
    ingredients: [
      { item: "Chicken", quantity: "150g" }
    ]
  },
  {
    id: 8,
    name: "Fish Curry",
    category: "Main Course",
    cuisine: "Kerala",
    isVeg: false,
    price: 190,
    ingredients: [
      { item: "Fish", quantity: "150g" }
    ]
  },
  {
    id: 9,
    name: "Veg Fried Rice",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: true,
    price: 120,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Vegetables", quantity: "100g" }
    ]
  },
  {
    id: 10,
    name: "Chicken Fried Rice",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: false,
    price: 150,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Chicken", quantity: "120g" }
    ]
  },

  {
    id: 11,
    name: "Veg Noodles",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: true,
    price: 110,
    ingredients: [
      { item: "Noodles", quantity: "200g" }
    ]
  },
  {
    id: 12,
    name: "Chicken Noodles",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: false,
    price: 140,
    ingredients: [
      { item: "Noodles", quantity: "200g" },
      { item: "Chicken", quantity: "120g" }
    ]
  },
  {
    id: 13,
    name: "Burger",
    category: "Fast Food",
    cuisine: "American",
    isVeg: false,
    price: 130,
    ingredients: [
      { item: "Bun", quantity: "1 pc" },
      { item: "Patty", quantity: "1 pc" }
    ]
  },
  {
    id: 14,
    name: "Veg Burger",
    category: "Fast Food",
    cuisine: "American",
    isVeg: true,
    price: 110,
    ingredients: [
      { item: "Bun", quantity: "1 pc" },
      { item: "Veg Patty", quantity: "1 pc" }
    ]
  },
  {
    id: 15,
    name: "Pizza",
    category: "Fast Food",
    cuisine: "Italian",
    isVeg: true,
    price: 200,
    ingredients: [
      { item: "Cheese", quantity: "100g" },
      { item: "Flour", quantity: "200g" }
    ]
  },

  {
    id: 16,
    name: "Chicken Pizza",
    category: "Fast Food",
    cuisine: "Italian",
    isVeg: false,
    price: 250,
    ingredients: [
      { item: "Chicken", quantity: "120g" },
      { item: "Cheese", quantity: "100g" }
    ]
  },
  {
    id: 17,
    name: "Pasta",
    category: "Main Course",
    cuisine: "Italian",
    isVeg: true,
    price: 160,
    ingredients: [
      { item: "Pasta", quantity: "200g" }
    ]
  },
  {
    id: 18,
    name: "Chicken Pasta",
    category: "Main Course",
    cuisine: "Italian",
    isVeg: false,
    price: 190,
    ingredients: [
      { item: "Pasta", quantity: "200g" },
      { item: "Chicken", quantity: "120g" }
    ]
  },
  {
    id: 19,
    name: "Samosa",
    category: "Snack",
    cuisine: "Indian",
    isVeg: true,
    price: 20,
    ingredients: [
      { item: "Potato", quantity: "80g" }
    ]
  },
  {
    id: 20,
    name: "Pani Puri",
    category: "Snack",
    cuisine: "Indian",
    isVeg: true,
    price: 40,
    ingredients: [
      { item: "Puri", quantity: "6 pcs" }
    ]
  },

  {
    id: 21,
    name: "Falafel",
    category: "Snack",
    cuisine: "Middle Eastern",
    isVeg: true,
    price: 90,
    ingredients: [
      { item: "Chickpeas", quantity: "100g" }
    ]
  },
  {
    id: 22,
    name: "Shawarma",
    category: "Fast Food",
    cuisine: "Arabic",
    isVeg: false,
    price: 150,
    ingredients: [
      { item: "Chicken", quantity: "120g" }
    ]
  },
  {
    id: 23,
    name: "Hummus",
    category: "Dip",
    cuisine: "Middle Eastern",
    isVeg: true,
    price: 80,
    ingredients: [
      { item: "Chickpeas", quantity: "150g" }
    ]
  },
  {
    id: 24,
    name: "Grilled Chicken",
    category: "Main Course",
    cuisine: "Continental",
    isVeg: false,
    price: 220,
    ingredients: [
      { item: "Chicken", quantity: "200g" }
    ]
  },
  {
    id: 25,
    name: "Salad",
    category: "Healthy",
    cuisine: "Global",
    isVeg: true,
    price: 90,
    ingredients: [
      { item: "Vegetables", quantity: "150g" }
    ]
  },

];

// 1. display all food names

foodNames = foods.map(food => food.name);
// console.log(foodNames);

// 2. display food names with price in the format: "Masala Dosa - $80"

foodPrice = foods.map(food => `${food.name} - $${food.price}`);
// console.log(foodPrice);

// 3. All cuisines in uppercase

cuisine = [];

for(let food of foods){
    cuis = food.cuisine.toUpperCase();
    if (!(cuisine.includes(cuis))){
        cuisine.push(cuis);
    }
}
// console.log(cuisine);

// 4. array of objects containing id and name only

foodIDName = foods.map(food => ({id : food.id , name : food.name}));
// console.log(foodIDName);

// 5. Shows only the prices of all foods

prices = foods.map(food => [food.name,food.price]);
// console.log(prices);

// 6. List all vegetarian foods

vegFoods = foods.filter(food => food.isVeg).map(food => food.name);
// console.log(vegFoods);

// 7. All foods that belong to the "Main Course" category.

mainCourse = foods.filter(food => food.category == "Main Course").map(food => food.name);
// console.log(mainCourse);

// 8.  All foods with price less than 100

priceLt100 = foods.filter(food => food.price < 100).map(food => food.name);
// console.log(priceLt100);

// 9. list all foods whose cuisine is "Indian"

indianCuis = foods.filter(food => food.cuisine == "Indian").map(food => food.name);
// console.log(indianCuis);

// 10. Find all foods that contain "Chicken" as an ingredient

chickenFoods  = foods.filter(food => food.ingredients.some(ing => ing.item == "Chicken")).map(food => food.name);
// console.log(chickenFoods);

// 11. Total price

total = foods.reduce((sum,i) => sum + i.price, 0);
// console.log(total);

// 12. average price of vegetarian foods.

vegPrice = foods.filter(food => food.isVeg).reduce((sum,i) => sum + i.price, 0);
avgPrice = vegPrice / foods.filter(food => food.isVeg).length;
// console.log(avgPrice);

// 13. object that shows total number of foods by category. Example: { Breakfast: 4, Snack: 6 }

foodCategory = {};

for(let f of foods){
    category = f.category;
    if(category in foodCategory){
        foodCategory[category]++;
    }
    else{
        foodCategory[category] = 1;
    }
}

// console.log(foodCategory);

// 14. object that shows total price by cuisine.

priceCuisine = {};


for(let f of foods){
    cuis = f.cuisine;
    if(cuis in priceCuisine){
        priceCuisine[cuis] += f.price
    }
    else{
        priceCuisine[cuis] = f.price
    }
}

// console.log(priceCuisine);

// 15. most expensive food item.

maxPrice = foods.reduce((item1,item2) => item1.price > item2.price? item1 : item2).price;
expFood = foods.filter(food => food.price == maxPrice).map(food => food.name);
// console.log(expFood);

// 16. Sort all foods by price (ascending order).

sortPriceAsc = foods.sort((item1,item2) => item1.price - item2.price).map(food => [food.name,food.price]);
// console.log(sortPriceAsc);

// 17. sort all foods by price (dscending order).

sortPriceDesc = foods.sort((item1,item2) => item2.price - item1.price).map(food => [food.name,food.price]);
// console.log(sortPriceDesc);

// 18. Sort foods by name alphabetically (A–Z).

sortName = foods.sort((item1,item2) => item1.name.localeCompare(item2.name)).map(food => food.name);
// console.log(sortName);

// 19. Sort foods by category alphabetically.

sortCategory = foods.sort((item1,item2) => item1.category.localeCompare(item2.category)).map(food => [food.name,food.category]);
// console.log(sortCategory);

// 20. Sort foods by cuisine in reverse alphabetical order

sortCuisine = foods.sort((item1,item2) => item2.cuisine.localeCompare(item1.cuisine)).map(food => [food.name,food.cuisine]);
console.log(sortCuisine);
