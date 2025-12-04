var battery = 0 ;

while (battery < 100){
    console.log(`Charging... battery at ${battery}%`);
    battery = battery + 20;
}
console.log("Fully charged!");
