//Project Kelvin:
"use strict";
//Create a variable named kelvin, and set it equal to 293. 
const kelvin = 293;

//Create a variable named Celsius. Subtract 273 minus kelvin and store it in the variable Celsius. 
let celsius = 373 - kelvin;
// Create a variable named Fahrenheit, which is calculated from variable Celsius
let fahrenheit = celsius * (9/5) + 32;

//print variable kelvin
console.log(kelvin);
//print variable celsius
console.log(celsius);
//print variable fahrenheit
console.log(fahrenheit);


//Find out how to use the .floor() method. 
console.log(Math.round(fahrenheit));
