var num = 4; // input num = 4

if (num % 15 == 0){ // 4 % 15 == 0 => FALSE
    console.log("PINGPONG");  // does not print this 
}
else if(num % 5 == 0){ // 4 % 5 == 0 => FALSE
    console.log("PONG"); // does not print this
}
else if (num % 3 == 0){ // 4 % 3 == 0 => FALSE
    console.log("PING");  // does not print this
}
else{                     
    console.log("Invalid");   // print this
}