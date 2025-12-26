colors = ["red","green","blue","black","purple","blue","red","black","red"]

color_count = {};

for(let c of colors){
    if(c in color_count){
        color_count[c] += 1;
    }
    else{
        color_count[c] = 1;
    }
}

console.log(color_count);
