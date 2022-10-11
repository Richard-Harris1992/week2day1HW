/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
function sayHello() {
  console.log('Hello World')
}
sayHello();
/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
const print = (message) => console.log(message);
print(`Living life without fear, putting five karats in my baby girls ear, lunches brunches, 
      interviews by the pool, considered a fool cuz I dropped out of high school.`);

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
const printMessage = message => console.log(`Today's message is: ${message}`);
printMessage('I like it when they call me BIG POPPA');

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
function numberSquarer(a) {
  return a ** 2
}
numberSquarer(4);
/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */
const reverseMessage = (string) => {
  let stringArray = string.split('').reverse().join('');
  console.log(stringArray);
}
reverseMessage('Join the navy');


/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */
const multiply = (a, b = 2) => a * b;
console.log(multiply(4, 5));
console.log(multiply(4));

/*
 * Prompt 7:
 *
 * Fix the following code. HINT: Think Objects :)
 */

/** Starter Code */
function makePerson(firstname, lastname) {
  let person = {
    firstname: firstname,
    lastname: lastname
  }
  return person;
}

const zakk = makePerson('Zakk', 'F')
const jimmy = makePerson('Jimmy', 'B')
console.log(zakk);
console.log(jimmy);


/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */
const carMaker = (year, color, make, model) => {
  let car = {
    year: year,
    color: color,
    make: make,
    model: model
  }
  return car;
}
let ford = carMaker(2022, 'Blue', 'Ford', 'F-150');
let toyota = carMaker(2022, 'Red', 'Toyota', '4Runner');
console.log(ford);
console.log(toyota);

/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */
const spliterator = (string) => string.split('');
console.log(spliterator('Well Well Well'));

/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
let sum = 0
const addToSum = (number) => sum += number;
console.log(addToSum(1234));
console.log(addToSum(766));


/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */
const arrayNumberSummer = (array) => {
  let sumOfTotal = 0;
  array.forEach(element => sumOfTotal += element);
  return sumOfTotal
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18];
console.log(arrayNumberSummer(array1));
console.log(arrayNumberSummer(array2));

/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */
console.log(spliterator('It was all a dream, I used to read word up magazine, salt and peppa and heavy d up in tha limousine'));

/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
const testFunc = () => console.log('this works!')
testFunc();



/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
function add(a, b) {
  return a + b
}
const addPrinter = (a, b) => console.log(add(a, b));
addPrinter(2, 4);

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */

const printHelloWorld = () => sayHello()
printHelloWorld();
