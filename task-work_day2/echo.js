var sent = "hello world"

console.log("Enter a sentence:");
console.log(`${sent}`);

if(sent != "bye"){
    console.log("You said:",sent);
    console.log("Enter a sentence:");
}
else{
    console.log("Conversation ended.");
    
}

