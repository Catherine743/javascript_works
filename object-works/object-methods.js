var expenses = {
    jazeel : 780,
    nazim : 680,
    arun : 1000,
    mahin : 500,
    amal : 750,
    thusar : 1500
}

// Object.keys(object) => return all keys as array

for(let key of Object.keys(expenses)){
    console.log(key);
    
}

// Object.values(object) => return all values as array

for(let value of Object.values(expenses)){
    console.log(value);
    
}

// Object.entries(object) => array [[jazeel,780],[nazim,680]]

console.log(Object.entries(expenses));
