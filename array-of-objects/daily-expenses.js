var expenses = [
  { id: 1, title: "Dosa and Tea", amount: 40, category: "food", owner: "jazeel", payment_method: "upi", priority: "need" },
  { id: 2, title: "Bus Fare", amount: 25, category: "transport", owner: "jazeel", payment_method: "cash", priority: "need" },
  { id: 3, title: "Mobile Recharge", amount: 299, category: "utilities", owner: "jazeel", payment_method: "upi", priority: "need" },
  { id: 4, title: "Movie Ticket", amount: 150, category: "entertainment", owner: "jazeel", payment_method: "card", priority: "want" },
  { id: 5, title: "Snacks", amount: 60, category: "food", owner: "jazeel", payment_method: "cash", priority: "want" },
  { id: 6, title: "Gym Membership", amount: 1200, category: "health", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 7, title: "Coffee", amount: 120, category: "food", owner: "sarah", payment_method: "card", priority: "want" },
  { id: 8, title: "Books", amount: 450, category: "education", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 9, title: "Uber Ride", amount: 200, category: "transport", owner: "sarah", payment_method: "upi", priority: "want" },
  { id: 10, title: "Internet Bill", amount: 799, category: "utilities", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 11, title: "Petrol", amount: 500, category: "transport", owner: "rahul", payment_method: "cash", priority: "need" },
  { id: 12, title: "Dinner Out", amount: 850, category: "food", owner: "rahul", payment_method: "card", priority: "want" },
  { id: 13, title: "Rent", amount: 8000, category: "housing", owner: "rahul", payment_method: "bank_transfer", priority: "need" },
  { id: 14, title: "Netflix Subscription", amount: 199, category: "entertainment", owner: "rahul", payment_method: "upi", priority: "want" },
  { id: 15, title: "Groceries", amount: 1200, category: "food", owner: "rahul", payment_method: "cash", priority: "need" },
  { id: 16, title: "Laundry", amount: 100, category: "services", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 17, title: "Pizza", amount: 400, category: "food", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 18, title: "Medicine", amount: 250, category: "health", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 19, title: "Gaming Skin", amount: 80, category: "entertainment", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 20, title: "New Shirt", amount: 900, category: "shopping", owner: "amit", payment_method: "card", priority: "want" }
];

// Owner summary

ownerSum = {};

for(let e of expenses){
    owner = e.owner;
    amount = e.amount;
    if(owner in ownerSum){
        ownerSum[owner] += amount;
    }
    else{
        ownerSum[owner] = amount;
    }
}

// console.log(ownerSum);

// Transaction with the highest amount

expMax = expenses.reduce((e1,e2) => e1.amount > e2.amount? e1 : e2);
// console.log(expMax);

// Cash transactions

cashTrans = expenses.filter(e => e.payment_method == "cash").map(e => [e.title,e.amount]);
// console.log(cashTrans);

// Transactions with more  than 1000

transGt1000 = expenses.filter(e => e.amount > 1000).map(e => [e.title,e.amount]);
// console.log(transGt1000);

// Total expense

total = expenses.reduce((sum,e) => sum + e.amount, 0);
// console.log(total);

// Most used payment method

mostPayMet = {};

for(let e of expenses){
    payMethod = e.payment_method;
    if(payMethod in mostPayMet){
        mostPayMet[payMethod] += 1
    }
    else{
        mostPayMet[payMethod] = 1
    }
}

console.log(mostPayMet);

// amount of food by sara

amountFoodSara = expenses.filter(e => e.category == "food" && e.owner == "sarah").reduce((s,e) => s + e.amount, 0);
// console.log(amountFoodSara);

// priority summary (amount spend in each priority)

priorSum = {};

for(let e of expenses){
    prior = e.priority;
    amunt = e.amount;
    if(prior in priorSum){
        priorSum[prior] += amunt
    }
    else{
        priorSum[prior] = amunt;
    }
}

// console.log(priorSum);

// Transactions of Jazeel

transJazeel = expenses.filter(e => e.owner == "jazeel");
// console.log(transJazeel);

// Highest paid category

catgrySum = {};

for(let e of expenses){
    category = e.category;
    amunt = e.amount;
    if(category in catgrySum){
        catgrySum[category] += amunt;
    }
    else{
        catgrySum[category] = amunt;
    }
}

// console.log(catgrySum);

sortCategory = Object.entries(catgrySum).sort((e1,e2) => e2[1] - e1[1]);
// console.log(sortCategory);

// priority summary wrt owner

ownerName = {};
for(let e of expenses){
    owner = e.owner;
    priority = e.priority;
    // need = e.priority == "need"? "need" : null;
    // want = e.priority == "want"? "want" : null;
    if(!(owner in ownerName)){
        ownerName[owner] = {need : 0, want : 0};
    }
    ownerName[owner][e.priority]++; 
    
}
console.log(ownerName);

// payment methods

payMethod = [];

for (let e of expenses) {
    if (!payMethod.includes(e.payment_method)) {
        payMethod.push(e.payment_method);
    }
}

console.log(payMethod);

// let payMethod = {};

// for (let e of expenses) {
//     let payType = e.payment_method;

//     if (!(payType in payMethod)) {
//         payMethod[payType] = true; // just a marker
//     }
// }

// console.log(Object.keys(payMethod));























