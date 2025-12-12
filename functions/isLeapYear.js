function leapYear(year){
    return (year % 100 == 0 && year % 400 == 0 || year % 100 != 0 && year % 4 == 0)? `${year} -> leap year` : `${year} -> not leap year`
           
}

console.log(leapYear(1900));
console.log(leapYear(2000));
 