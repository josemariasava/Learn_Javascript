## Conditional statements

> In JavaScript we have the following conditional statements:
> 
> - Use `if` to specify a block of code to be executed, if a specified condition is true
> 
> ```jsx
> if (condition) {
>   //  block of code to be executed if the condition is true
> }
> ```
> 
> - Use `else` to specify a block of code to be executed, if the same condition is false
> 
> ```jsx
> if (condition) {
>   //  block of code to be executed if the condition is true
> } else {
>   //  block of code to be executed if the condition is false
> }
> ```
> 
> - Use `else if` to specify a new condition to test, if the first condition is false
> 
> ```jsx
> if (condition1) {
>   //  block of code to be executed if condition1 is true
> } else if (condition2) {
>   //  block of code to be executed if the condition1 is false and condition2 is true
> } else {
>   //  block of code to be executed if the condition1 is false and condition2 is false
> }
> ```
> 


```jsx
let firstCard = 5
let secondCard = 10 

let sum = firstCard + secondCard

// If .. else condition 
if (sum < 21) {

    console.log("Do you want to draw a new card ? ")
} else if (sum === 21) { // === is strictly equal operator 
    
    console.log("You win !")

} else if (sum > 21) { // also you can use else 

    console.log("You are out of the game")
}
```

```jsx
// Boolean values 
let myVar = true 

    function order(){
    if(myVar){
        console.log("The var is true.")
    }
    else{ 
		    console.log("The var is false")
    }
```
---
## **Document querySelector()**

> The `querySelector()` method returns the **first** element that matches a CSS selector.
> 
> 
> To return **all** matches (not only the first), use the `querySelectorAll()` instead.
> 
> Both `querySelector()` and `querySelectorAll()` throw a SYNTAX_ERR exception if the selector(s) is invalid.
> 

```jsx
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#card-el")
```

```html
        <p id="card-el">Cards:</p>
        <p id="sum-el">Sum:</p>
```
---
## Array

> Arrays are a special type of objects. The `typeof` operator in JavaScript returns "object" for arrays.
> 
> 
> Because of this, you can have variables of different types in the same Array.
> 
> You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
> 
> ```jsx
> myArray[0] = Date.now;
> myArray[1] = myFunction;
> myArray[2] = myCars;
> myArray[3] = 27
> ```
> 

```jsx
// Arrays - ordered lists of items

// 0 indexed
let featuredPosts = [
    "Check out my Netflix clone",        // 0 
    "Here's the code for my project",    // 1
    "I've just relaunched my portfolio"  // 2
]

// console.log( featuredPosts[2] )

console.log( featuredPosts.length )//will print 3

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba
console.log(experience[1])
console.log(experience[2])
console.log(experience[0])
```

Add item to array 

```jsx
let cards = [7,4] 

cards.push(6) // will add the number 6 at the end of the array, index 2
// cards will be now = [7,4,6]

cards.pop() // will remove the number 6, last elements/item in an array 
// cards will be now = [7,4]
```
---
## Loops

### `FOR`

> The for statement creates a loop with 3 optional expressions:
> 
> 
> ```jsx
> for (expression 1; expression 2; expression 3) {
> // code block to be executed
> }
> ```
> 
> Expression 1 is executed (one time) before the execution of the code block.
> 
> Expression 2 defines the condition for executing the code block.
> 
> Expression 3 is executed (every time) after the code block has been executed.
> 

```jsx
// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 2 )  {
    
    // Print numbers : 1 - 3 - 5 - 7 -9 
    console.log(count)
}
```
---
## Returning values in functions

> The `return` statement stops the execution of a function and returns a value.
If omitted, it returns `undefined`
> 

```jsx
// Call a function and save the return value in x:
var x = myFunction(4, 3);

function myFunction(a, b) {
  // Return the product of a and b
  return a * b;
}
```
---
## Math.random()

> `Math.random()` returns a random number between 0 (inclusive),  and 1 (exclusive):
> 

```jsx
// Returns a random number:
Math.random();

// 0.0000 --> 0.9999 
```

> `Math.random()` used with `Math.floor()` can be used to return random integers.
> 

```jsx
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
```

```jsx
// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);
```