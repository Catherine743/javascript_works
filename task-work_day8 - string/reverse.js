words = "hello world";
result = "";
temp = "";

for (i = 0; i < words.length; i++) {
    if (words[i] != ' ') {
        temp = words[i] + temp;   
    } else {
        result = result + temp + " ";
        temp = "";
    }
}

result = result + temp;

console.log(result);




