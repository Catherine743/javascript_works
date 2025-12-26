productSales = {
    Laptop : 120,
    Mobile : 250,
    Headphones : 400,
    Smartwatch : 180,
    Tablet : 90,
    Camera : 60,
    Printer : 45,
    Keyboard : 210,
    Mouse : 320,
    Speaker : 150
}

// Trending product

trend = Object.entries(productSales).reduce((it1,it2) => it1[1] > it2[1]? it1 : it2)
console.log(trend);

// Lowest sale product

lowSale = Object.entries(productSales).reduce((it1,it2) => it1[1] < it2[1]? it1 : it2)
console.log(lowSale);

// Product with sales count > 200

salesGt200 = Object.entries(productSales).filter(item => item[1] > 200)
console.log(salesGt200);

// Total number of products sold

// total = Object.entries(productSales).length
// console.log(total);

total = Object.entries(productSales).reduce((sum,item) => sum + item[1],0);
console.log(total);


// Sort products wrt sales order by desc

sortProduct = Object.entries(productSales).sort((it1,it2) => it2[1] - it1[1])
console.log(sortProduct);

