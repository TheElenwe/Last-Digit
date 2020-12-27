let prompt = require('prompt-sync')({sigint: true});
 let number = prompt ("Give me number:");

 number = parseFloat(number);

 let lastDigit = number %10;

 console.log(`The last digit of ${number} is: ${lastDigit}`)


 
