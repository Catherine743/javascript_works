str = "JavaScript";
str = str.toLowerCase()
count = str.length;
j = 0;

for(i = 0; i < count; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        j++;
    }
}
console.log(`Count of vowels in a string is ${j}`);
