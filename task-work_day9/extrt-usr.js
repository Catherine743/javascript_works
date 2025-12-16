email = "jhonsmith@gmail.com";
user = "";

for(let ch of email){
    if(ch == "@"){
       break;
    }
    user = user + ch;
}
console.log(`User name is ${user}`);
