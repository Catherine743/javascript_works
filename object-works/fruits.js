fruits = {
    apple : 250,
    orange : 100,
    mango : 120,
    cherry : 220,
    guava : 90,
    banana : 70
}

// display products whose price > 100

// for(let [name,price] of Object.entries(fruits)){
//     if(price > 100){
//         console.log(name,price);
        
//     }
// }

priceGtHundred = Object.entries(fruits).filter(item => item[1] > 100);
// console.log(priceGtHundred);

// display products available in range of 50 to 150

// for(let [name,price] of Object.entries(fruits)){
//     if(price >= 50 && price <= 150){
//         console.log(name,price);
        
//     }
// }

var priceFilter = Object.entries(fruits).filter(item => item[1] >= 50 && item[1] <= 150);
// console.log(priceFilter);

// display costly product

// max = 0;
// for(let [name,price] of Object.entries(fruits)){
//     if(max < price){
//         max = price
//         fruit = name;
//     }
// }

// console.log(fruit,max);

costlyProduct = Object.entries(fruits).reduce((it1,it2) => it1[1] > it2[1]? it1 : it2)
console.log(costlyProduct);


// display product with low cost

cheapProduct = Object.entries(fruits).reduce((it1,it2) => it1[1] < it2[1]? it1 : it2)
console.log(cheapProduct);

// filter should be used if there is two or more products have max/min price
