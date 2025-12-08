str = "HELLO";
count = str.length;
reverse = [];
j = 0;


for(i = count-1; i >= 0; i--){
    reverse[j] = str[i];
    j++;
}


string = reverse.join("");
console.log(`Reverse of ${str} is ${string}`);

// string = str.split("").reverse().join("")







