var char = '$';

if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
    console.log("It is a letter");

}
else if (char >= '0' && char <= '9') {
    console.log("It is a digit");

}
else {
    console.log("It is a special character");  
}