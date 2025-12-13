function reverse(word){
    reverse = "";
    for(i = word.length - 1; i >= 0; i--){
        reverse = reverse + word[i];
    }
    return `Reverse of ${word} is ${reverse}`
}

console.log(reverse("hello"));
