function isCenturyYear(year){
    return year % 100 == 0? `${year} is a century year` : `${year} is not a century year`;
}

console.log(isCenturyYear(250));
console.log(isCenturyYear(300));

