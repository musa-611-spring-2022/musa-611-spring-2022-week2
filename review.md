## Codecademy Review:

## Statements vs Expressions

The distinction between statements and expressions wasn't spelled out by Codecademy, but I think it's worth making explicit. Every individual instruction to do something in JS is a **"statement"**.

```js
var x = 'hello';
```
```js
if (name === 'Mjumbe') { ... }
```
```js
function greet() { ... }
```
```js
x ? console.log('1st message') : console.log('2nd message');
```
```js
'just a string';
```
```js
7;
```

Every "statement" that _generates a value_ in JS is an **"expression"**.

```js
x ? console.log('1st message') : console.log('2nd message')
```
```js
'just a string'
```
```js
7
```

Note that the set of all expressions is a subset of the set of all statements. You can read more about the different categories of statements and expressions in the article [JavaScript Expressions and Statements](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74).

### Variables
```js
// Definition & Assignment
const firstName = 'Mjumbe';
const lastName = 'Poe';
let temerature = 15;
let pictures;

// Math Assignment/Increment/Decrement
temperature += 5;
temperature++;

// String Concatenation & Interpolation
// NOTE: Prefer template strings unless there is a strong reason not to.
console.log('My name is ' + firstName + ' ' + lastName + '.');
console.log(`My name is ${firstName} ${lastName}.`);

// Variable Types
// NOTE: Even though Codecademy introduces the typeof keyword, and even though
//       it can be used sometimes, it is important to know that it is very
//       limited. https://bonsaiden.github.io/JavaScript-Garden/#types.typeof
const name = 'Mjumbe';
const temperature = 15;

typeof name === 'string';
typeof temperature === 'number';
```

### Conditionals
```js
// If/Else If/Else
let itIsSnowing = true;
let temerature = 15;

if (isItSnowing) {
  console.log('It is snowing! How lovely. Grab your sled!');
} else if (temperature < 50) {
  console.log('Seems a little chilly. Find the nearest heater and curl up with a book.')
} else {
  console.log('It might be nice outside! Maybe you should go for a walk.')
}

// Comparisons
const name = 'Mjumbe Poe';

if (name === 'Sly Stone') {
  console.log('You are a funky mofo!');
} else {
  console.log('Well, everybody is a star.');
}

// Logical Operators (And & Or)
let bad = false;
let boujee = true;

if (bad && boujee) {
  console.log('Woo, woo, woo, woo, woo!');
} else if (bad || boujee) {
  console.log('Maybe question your life choices?');
} else {
  console.log('This is probably for the best.');
}

// Truthy-ness & Short-circuiting
let santa;
let myParents = 'Evelyn & Zizwe';
const giftGiver = santa || myParents;

// Ternary Operator
console.log(`🎅 Santa Claus ${santa ? 'is real!' : 'does not exist 😞.'}`);
```

### Functions

```js
// Declaring a Function
function greetPerson(name) {
  console.log(`Hello, ${name}!`)
}

// Calling a Function
const name = 'Mjumbe';
greetPerson(name);

const otherName = 'Priyanka';
greetPerson(otherName);

greetPerson('Chris');
```

### Scope
```js
// Global: Everything can access the global scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';

const logNightSky = () => {
  console.log(`${satellite} and ${galaxy}`);
};

logNightSky();

// Block: Only code in the same curly braces can access block scope
const logSkyColor = () => {
  let color = 'blue';
  console.log(color); // blue
};

logSkyColor(); // blue
console.log(color); // ReferenceError
```

## Running tests on your code

All of the tests are going to be available to you when you are modifying your code on your computer. You can run those tests yourself. This is how you might do that:

```
npx jest
```

However, in order to use the `npx` command you will have to have a program called Node.js installed.

## Checking your code style

```
npx eslint exercise
```

Many people are very opinionated about certain aspects of their code style. There are a few interesting choices in AirBnB's style:
- Always use trailing comma for multi-line statements
- Require semi-colons
- Don't allow the increment (++) and decrement (--) operators
