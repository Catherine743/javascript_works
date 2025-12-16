var text = "hello,world,javascript";
var words = text.split(",");
console.log(words);
var news = "we will be having regular session";
var text = news.split(" ") // always return array
console.log(text);

var test = "hello ";
var newTest = test.repeat(3);
console.log(newTest);

var text = "hai#all#good#morning";
var newText = text.replace("all","team"); // replace -> it replace only the first occurrence
console.log(newText);
var newTxt = text.replaceAll("#"," "); // replace all it wherever "#" is seen
console.log(newTxt);

//indexOf



