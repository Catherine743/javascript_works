var companyName = "Luminar Technolab";
               //  01234567890123456
                           // -3-2-1 

console.log(companyName.length); 

console.log(companyName.toUpperCase());

console.log(companyName.toLowerCase());

console.log(companyName.charAt(5));

console.log(companyName.at(-5));

console.log(companyName.concat(".com")); // added value at end
console.log(companyName.concat(".com", ".edu")); 
console.log(companyName.concat(123));

console.log(companyName.slice(0,7));
console.log(companyName.slice(8));
console.log(companyName.slice(-3,));

console.log(companyName.substring(8,17));

var company = " Luminar Technolab "
console.log(`New string:${company.trim()}...`);

var companyTab = "\tLuminar Technolab\t"
console.log(`New string:${companyTab.trimStart()}...`);
console.log(`New string:${companyTab.trimEnd()}...`);

console.log(companyName.padEnd(25,"$"));
console.log(companyName.padStart(25,"$"));




