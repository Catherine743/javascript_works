var countries = [
  { code: "IND", name: "India", alpha2cod: "IN", population: 1420000000, language: ["Hindi", "English"], currency: "INR", borders: ["PAK", "CHN", "NPL", "BTN", "BGD", "MMR"] },
  { code: "USA", name: "United States", alpha2cod: "US", population: 331000000, language: ["English"], currency: "USD", borders: ["CAN", "MEX"] },
  { code: "CAN", name: "Canada", alpha2cod: "CA", population: 38000000, language: ["English", "French"], currency: "CAD", borders: ["USA"] },
  { code: "MEX", name: "Mexico", alpha2cod: "MX", population: 128000000, language: ["Spanish"], currency: "MXN", borders: ["USA", "GTM", "BLZ"] },
  { code: "BRA", name: "Brazil", alpha2cod: "BR", population: 213000000, language: ["Portuguese"], currency: "BRL", borders: ["ARG", "BOL", "PER", "COL"] },
  { code: "ARG", name: "Argentina", alpha2cod: "AR", population: 45000000, language: ["Spanish"], currency: "ARS", borders: ["BRA", "CHL", "URY"] },
  { code: "CHN", name: "China", alpha2cod: "CN", population: 1410000000, language: ["Mandarin"], currency: "CNY", borders: ["IND", "RUS", "MNG", "NPL"] },
  { code: "JPN", name: "Japan", alpha2cod: "JP", population: 125000000, language: ["Japanese"], currency: "JPY", borders: [] },
  { code: "KOR", name: "South Korea", alpha2cod: "KR", population: 52000000, language: ["Korean"], currency: "KRW", borders: ["PRK"] },
  { code: "PRK", name: "North Korea", alpha2cod: "KP", population: 26000000, language: ["Korean"], currency: "KPW", borders: ["KOR", "CHN"] },
  { code: "GBR", name: "United Kingdom", alpha2cod: "GB", population: 67000000, language: ["English"], currency: "GBP", borders: ["IRL"] },
  { code: "FRA", name: "France", alpha2cod: "FR", population: 65000000, language: ["French"], currency: "EUR", borders: ["ESP", "DEU", "ITA"] },
  { code: "DEU", name: "Germany", alpha2cod: "DE", population: 83000000, language: ["German"], currency: "EUR", borders: ["FRA", "POL", "CHE"] },
  { code: "ITA", name: "Italy", alpha2cod: "IT", population: 60000000, language: ["Italian"], currency: "EUR", borders: ["FRA", "CHE", "AUT"] },
  { code: "ESP", name: "Spain", alpha2cod: "ES", population: 47000000, language: ["Spanish"], currency: "EUR", borders: ["FRA", "PRT"] },
  { code: "RUS", name: "Russia", alpha2cod: "RU", population: 145000000, language: ["Russian"], currency: "RUB", borders: ["CHN", "MNG", "UKR"] },
  { code: "UKR", name: "Ukraine", alpha2cod: "UA", population: 44000000, language: ["Ukrainian"], currency: "UAH", borders: ["RUS", "POL"] },
  { code: "POL", name: "Poland", alpha2cod: "PL", population: 38000000, language: ["Polish"], currency: "PLN", borders: ["DEU", "UKR"] },
  { code: "CHE", name: "Switzerland", alpha2cod: "CH", population: 8600000, language: ["German", "French", "Italian"], currency: "CHF", borders: ["DEU", "FRA", "ITA"] },
  { code: "AUT", name: "Austria", alpha2cod: "AT", population: 9000000, language: ["German"], currency: "EUR", borders: ["DEU", "ITA"] },
  { code: "AUS", name: "Australia", alpha2cod: "AU", population: 26000000, language: ["English"], currency: "AUD", borders: [] },
  { code: "NZL", name: "New Zealand", alpha2cod: "NZ", population: 5000000, language: ["English", "Maori"], currency: "NZD", borders: [] },
  { code: "ZAF", name: "South Africa", alpha2cod: "ZA", population: 60000000, language: ["English", "Zulu"], currency: "ZAR", borders: ["NAM", "BWA"] },
  { code: "NGA", name: "Nigeria", alpha2cod: "NG", population: 220000000, language: ["English"], currency: "NGN", borders: ["NER", "BEN"] },
  { code: "EGY", name: "Egypt", alpha2cod: "EG", population: 110000000, language: ["Arabic"], currency: "EGP", borders: ["ISR", "SDN"] },
  { code: "SAU", name: "Saudi Arabia", alpha2cod: "SA", population: 36000000, language: ["Arabic"], currency: "SAR", borders: ["JOR", "IRQ"] },
  { code: "ARE", name: "United Arab Emirates", alpha2cod: "AE", population: 10000000, language: ["Arabic"], currency: "AED", borders: ["SAU", "OMN"] },
  { code: "QAT", name: "Qatar", alpha2cod: "QA", population: 2900000, language: ["Arabic"], currency: "QAR", borders: ["SAU"] },
  { code: "IRN", name: "Iran", alpha2cod: "IR", population: 86000000, language: ["Persian"], currency: "IRR", borders: ["IRQ", "AFG"] },
  { code: "IRQ", name: "Iraq", alpha2cod: "IQ", population: 42000000, language: ["Arabic", "Kurdish"], currency: "IQD", borders: ["IRN", "SAU"] },
  { code: "PAK", name: "Pakistan", alpha2cod: "PK", population: 240000000, language: ["Urdu", "English"], currency: "PKR", borders: ["IND", "AFG"] },
  { code: "AFG", name: "Afghanistan", alpha2cod: "AF", population: 41000000, language: ["Pashto", "Dari"], currency: "AFN", borders: ["PAK", "IRN"] },
  { code: "BGD", name: "Bangladesh", alpha2cod: "BD", population: 170000000, language: ["Bengali"], currency: "BDT", borders: ["IND", "MMR"] },
  { code: "NPL", name: "Nepal", alpha2cod: "NP", population: 30000000, language: ["Nepali"], currency: "NPR", borders: ["IND", "CHN"] },
  { code: "LKA", name: "Sri Lanka", alpha2cod: "LK", population: 22000000, language: ["Sinhala", "Tamil"], currency: "LKR", borders: ["IND"] },
  { code: "THA", name: "Thailand", alpha2cod: "TH", population: 70000000, language: ["Thai"], currency: "THB", borders: ["MMR", "KHM"] },
  { code: "MMR", name: "Myanmar", alpha2cod: "MM", population: 55000000, language: ["Burmese"], currency: "MMK", borders: ["IND", "THA"] },
  { code: "VNM", name: "Vietnam", alpha2cod: "VN", population: 98000000, language: ["Vietnamese"], currency: "VND", borders: ["CHN", "LAO"] },
  { code: "SGP", name: "Singapore", alpha2cod: "SG", population: 5600000, language: ["English", "Malay", "Tamil"], currency: "SGD", borders: [] },
  { code: "MYS", name: "Malaysia", alpha2cod: "MY", population: 33000000, language: ["Malay"], currency: "MYR", borders: ["THA", "IDN"] },
  { code: "IDN", name: "Indonesia", alpha2cod: "ID", population: 275000000, language: ["Indonesian"], currency: "IDR", borders: ["MYS"] },
  { code: "PHL", name: "Philippines", alpha2cod: "PH", population: 115000000, language: ["Filipino", "English"], currency: "PHP", borders: [] }
];

// some

isExist = countries.some(c => c.population < 275000001);
// console.log(isExist);

// is there any country with more than 2 language

lang2More = countries.some(c => c.language.length > 2);
// console.log(lang2More);

// is there any country with more than 3 borders

cou3Bor = countries.some(c => c.borders.length > 3);
// console.log(cou3Bor);

// find

indiaDet = countries.find(c => c.name == "India");
// console.log(indiaDet);

detIQ = countries.find(c => c.alpha2cod == "IQ");
// console.log(detIQ);

detCN = countries.find(c => c.alpha2cod.toLowerCase() == "cn");
// console.log(detCN);

// forEach
// countries.forEach(c => console.log(c.name));

// names of countries with more than 2 borders

// countries.filter(c => c.borders.length > 2).forEach(c => console.log(c.name));

// names of countries with currency as eur

countries.filter(c => c.currency == "EUR").forEach(c => console.log(c.name));

// 1. Total population

totalPop = countries.reduce((sum,c) => sum + c.population, 0);
// console.log(totalPop);

// Filter and list countries that have the same currency

curWise = {};

for(let c of countries){
    curr = c.currency;
    // couName = c.name;
    if(curr in curWise){
        curWise[curr] += ", " + c.name;
        // or curWise[curr].push(couName);
    }
    else{
        curWise[curr] = c.name; 
        // or curWise[curr] = [couName];
    }
}
// console.log(curWise);

// count of countries based on currency

// curSum = {};

// for(let c of countries){
//     curr = c.currency;
//     if(curr in curSum){
//         curSum[curr] += 1;
//     }
//     else{
//         curSum[curr] = 1;
//     }
// }
// console.log(curSum); // without sorting

// or console.log(Object.entries(curSum).sort((c1,c2) => c2[1] - c1[1]));

// sort countries in alphabetical order

sortCou = countries.sort((c1,c2) => c1.name.localeCompare(c2.name)).map(c => c.name);
// console.log(sortCou);

// language count

lanCount = countries
// highest population country
// Categorize the countries based on language 
// list countries more than one language
// average population of all countries
// display all languages
// countries which can touch the higher number of borders
// countries which does not touch the borders
// list countries that have euro currency

// <!--------!>
// some - almost same as includes()[works only in strings] but used in complex array like array of objects
// includes can not use arrow fun
// includes does not apply any condition
// some - return true or false

// find - retrieve only one object from array, returns object(similar to filter)
// filter gives all matching objects but find gives the first matching one object
// filter retuns array of object

// forEach does not return nothing as array, do not want to assign it to a variable 
// same purpose as map method
// forEach method can be applied on arrays