//01. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.

let num1 =+prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");

// Add the numbers together
let sum = num1 + num2;

// Display the result in the browser
document.write("The sum of " + num1 + " and " + num2 + " is " + sum);



//02. Repeat task1 for subtraction, multiplication, division & modulus.

let numb1 =+prompt("Enter the first number:");
let numb2 = +prompt("Enter the second number:");


 // Perform arithmetic operations

let subtraction = numb1 - numb2;
let multiplication = numb1 * numb2;
let division = numb1 / numb2;
let modulus = numb1 % numb2;

 // Display the results in the browser
document.write("<h2>Arithmetic Operations:</h2>"); 
document.write("Subtraction: " + numb1 + " - " + numb2 + " = " + subtraction + "<br>");
document.write("Multiplication: " + numb1 + " * " + numb2 + " = " + multiplication + "<br>");
document.write("Division: " + numb1 + " / " + numb2 + " = " + division + "<br>");
document.write("Modulus: " + numb1 + " % " + numb2 + " = " + modulus + "<br/> <br/>");

// 03. Do the following using JS Mathematic Expressions

let myVariable;
document.write("Value after variable declaration is: " + myVariable + "<br/>");

let my_Variable = 5;
document.write("Initial Value : " + my_Variable + "<br/>");

  // Initialize the variable with a number
  let myvariable = 5;

  // Increment the variable
  myvariable++;

  // Display the value after incrementing the variable in the browser
  document.write("Value after increment is: " + myvariable + "<br/>");

  // Initialize the variable with a number
  let myNum = 5;

  // Add 7 to the variable
  myNum += 7;

  // Display the value after adding 7 to the variable in the browser
  document.write("Value after addition is: " + myNum + "<br/>");

  // Initialize the variable with a number
  let myNumb = 12;

  // Decrement the variable
  myNumb--;

  // Display the value after decrementing the variable in the browser
  document.write("Value after decrement is: " + myNumb + "<br/>");

  // Initialize the variable with a number
  let myModulus = 12;

  // Calculate the remainder after dividing the variable's value by 3
  let remainder = myModulus % 3;

  // Display the remainder in the browser
  document.write("The remainder is: " + remainder+ "<br/> <br/>");

//04. Cost of one movie ticket is 600 PKR. Write a script to store
//ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

  let ticketPrice = 600;

 // Calculate the cost of buying 5 tickets
  let totalCost = ticketPrice * 5;

 // Display the output
 document.write("Cost of one movie ticket is " + ticketPrice + " PKR.<br>");
 document.write("Cost of buying 5 tickets to a movie is " + totalCost + " PKR.");

 //5. Write a script to display multiplication table of any number in your browser. E.g

  // Prompt the user to enter a number
  var number = +prompt("Enter a number to display its multiplication table:");

  // Display the multiplication table in the browser

  document.write("<h2>Multiplication Table of " + number + ":</h2>");
  for (var i = 1; i <= 10; i++) {
      document.write(number + " x " + i + " = " + (number * i) + "<br/> <br/>" );
  }

//6. The Temperature Converter: It’s hot out! Let’s make a
//converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.


// Store a Celsius temperature into a variable
let celsiusTemperature = 30;

// Convert Celsius to Fahrenheit
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

// Output the conversion result
document.write(celsiusTemperature + "°C is equal to " + fahrenheitTemperature + "°F <br/> <br/>");

// Store a Fahrenheit temperature into a variable
let fahrenheitTemperature2 = 86;

// Convert Fahrenheit to Celsius
let celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;

// Output the conversion result
document.write(fahrenheitTemperature2 + "°F is equal to " + celsiusTemperature2 + "°C <br/>");

//7. Write a program to implement checkout process of a
//shopping cart system for an e-commerce website. Store
//the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges


// Define variables for items in the cart
let item1Name = "T-Shirt";
let item1Price = 20;
let item1Quantity = 2;

let item2Name = "Jeans";
let item2Price = 40;
let item2Quantity = 1;

let item3Name = "Shoes";
let item3Price = 50;
let item3Quantity = 1;

// Calculate total cost
let totalCosting = (item1Price * item1Quantity) + (item2Price * item2Quantity) + (item3Price * item3Quantity);

// Display checkout details
document.write("<h2>Shopping Cart:</h2>");
document.write("<p>Item 1: " + item1Name + ", Price: $" + item1Price + ", Quantity: " + item1Quantity + "</p>");
document.write("<p>Item 2: " + item2Name + ", Price: $" + item2Price + ", Quantity: " + item2Quantity + "</p>");
document.write("<p>Item 3: " + item3Name + ", Price: $" + item3Price + ", Quantity: " + item3Quantity + "</p>");
document.write("<p>Total Cost: $" + totalCosting + "</p>");

//8. Store total marks & marks obtained by a student in 2
//variables. Compute the percentage & show the result in your browser

 // Define variables for total marks and marks obtained
 let totalMarks = +prompt("Enter Your TotalMarks:");
 let marksObtained = +prompt("Enter the Obtained Marks:");

 // Calculate percentage
 let percentage = (marksObtained / totalMarks) * 100;

 // Display the result in the browser
 document.write("<h2>Mark Sheet:</h2>");
 document.write("Total Marks: " + totalMarks + "<br>");
 document.write("Marks Obtained: " + marksObtained + "<br>");
 document.write("Percentage: " + percentage + "%");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
//script to convert the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
//and 1 Saudi Riyal = 28 Pakistani Rupee)

// Define variables for amount in US dollars and Saudi Riyals
let usDollars = +prompt("Enter US Dollar");
let saudiRiyals = +prompt("Enter Saudi Riyals")

// Define exchange rates
let usdToPkrRate = 104.80;
let saudiToPkrRate = 28;

// Convert total currency to Pakistani Rupees using a single expression
let totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * saudiToPkrRate);

// Display the result in the browser
document.write("<h2>Currency Conversion:</h2>");
document.write("Total amount in US dollars: $" + usDollars + "<br>");
document.write("Total amount in Saudi Riyals: " + saudiRiyals + "Riyal<br>");
document.write("Total amount in Pakistani Rupees: PKR " + totalPkr + "<br/>");

//10. Write a program to initialize a variable with some
//number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

// Initialize the variable with some number
let numbe = 10;

// Perform the arithmetic sequence in a single expression
let result = (((numbe + 5) * 10) / 2);

// Display the result
console.log("Result of the arithmetic sequence:", result);


//11. The Age Calculator: Forgot how old someone is? Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored values.

let currentYear = +prompt("enter your currentyear");
let birthYear = +prompt("enter your birthyear");

let age =currentYear-birthYear

document.write("<h1>Age Calculator</h1>");
document.write("Your Age Is"   + age + "<br/>");

//13. The Lifetime Supply Calculator: Ever wonder how
//much a “lifetime supply” of your favorite snack is? Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.

// Store your favorite snack into a variable
let favorite_snack = "chocolate bars";

// Store your current age into a variable
let current_age = 30;

// Store a maximum age into a variable
let maximum_age = 80;

// Store an estimated amount per day (as a number)
let amount_per_day = 1;

// Calculate remaining years
let years_remaining = maximum_age - current_age;

// Calculate total days remaining
let days_remaining = years_remaining * 365;

// Calculate total amount you would eat for the rest of your life
let total_amount = days_remaining * amount_per_day;

// Output the result
document.write("If you live until the age of " + maximum_age + ", you will eat a total of " + total_amount + " " + favorite_snack + " in your lifetime.");

