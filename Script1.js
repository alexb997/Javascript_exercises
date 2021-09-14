/*Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

function weird_date_format() 
  {
    let questionedDate = new Date(Date.now());
    return ("Azi este: "+ questionedDate.toLocaleString('ro', {weekday:'long'}) +'\n'
            + "Timpul curent fiind: "+ questionedDate.toLocaleString('en-US', { hour: 'numeric', hour12: true }) 
                +" : " + questionedDate.getMinutes() + " : " +questionedDate.getSeconds());
  }

console.log(weird_date_format());