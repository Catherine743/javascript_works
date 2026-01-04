str = "hello"

function reverse(str){
    rev = "";
    for(n = str.length - 1; n >= 0; n--){
        rev += str[n]
    }
    return rev;
}

console.log(reverse(str));