//A constant variable was named kelvin and set it equal to 293
const kelvin = 0 ;

/*
Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.*/
let celsius = kelvin - 273; 

/* Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.*/
let fahrenheit = celsius * (9 / 5) + 32 ;

/*I made use of the .floor() method math object to round down the farenheit temperature*/
fahrenheit = Math.floor(fahrenheit);

//string interpolation occured here.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
