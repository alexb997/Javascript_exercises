//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leap_year_gregorian(year) 
  {
      return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  }

console.log(leap_year_gregorian(1820));
