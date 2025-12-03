var malePassengers = 869;
var femalePassengers = 412;
var survived = 492;

totalNum = malePassengers + femalePassengers;
console.log("Total Passengers:",totalNum);

var unsurvived = totalNum - survived;
console.log("Unsurvived passengers:", unsurvived);

var survivedPer = (survived / totalNum) * 100;
console.log("Survived Percentage:", survivedPer);

var unsurvivedPer = (unsurvived / totalNum) * 100;
console.log("Unsurvived Percentage:", unsurvivedPer);


