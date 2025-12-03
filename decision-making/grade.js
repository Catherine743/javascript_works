var mark1 = 50; //  mark1 = 40
var mark2 = 45; // mark2 = 35
var mark3 = 48; // mark3 = 45

var total = mark1 + mark2 + mark3; // total = 40+35+45=120

if (total >= 140 && total <=150){ // 120 >=140 && 120 <= 150 =>false
    console.log("Grade A");
    
}
else if(total >= 130 && total <=140){ // 120 >= 130 && 120 <=140 => false
    console.log("Grade B");
    
}
else if(total >= 120 && total <=130){ // 120 >=120 && 120 <=130 => true
    console.log("Grade C"); // print this
    
}
else{
    console.log("FAIL");
    
}