// Write a JavaScript program to get the current date.

function data_azi() 
  {
    return new Date(Date.now()).toLocaleDateString();
  }

console.log(data_azi());