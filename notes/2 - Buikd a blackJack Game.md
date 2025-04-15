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
> - Use `switch` to specify many alternative blocks of code to be executed

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

> **`Math.floor()`** static method always rounds down and returns the largest integer less than or equal to a given number. Removes the decimal
> 

```jsx
console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6
```

---

```jsx
let randomNumber = Math.floor( Math.random() * 6 )

console.log(randomNumber)
```

This snippet will generate random number with a range 0 → 5 

## Logical Operators

> Logical operators are used to determine the logic between variables or values.
> 
> 
> Given that `x = 6` and `y = 3`
> 

| **Operator** | **Description** | **Example** |
| --- | --- | --- |
| && | and | (x < 10 && y > 1) is true |
| || | or | (x == 5 || y == 5) is false |
| ! | not | !(x == y) is true |

### **Conditional (Ternary) Operator**

> JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
> 
> 
> `*variablename* = (*condition*) ? *value1*:*value2*`
> 

```jsx
  let voteable = (age < 18) ? "Too young":"Old enough"
  
  /*If the variable age is a value below 18, 
  the value of the variable voteable will be "Too young", 
  otherwise the value of voteable will be "Old enough". */
```

### The Nullish Coalescing Operator (??)

> The `??` operator returns the first argument if it is not **nullish** (`null` or `undefined`).
> 
> 
> Otherwise it returns the second argument.
> 

```jsx
let name = null;
let text = "missing";
let result = name ?? text;
```

## OBJECTS

> Objects are variables too. But objects can contain many values.
> 
> 
> <aside>
> 
> It is a common practice to declare objects with the const keyword.
> 
> </aside>
> 
> An object literal is a list of **name:value** pairs inside curly braces **{}**.
> 
> <aside>
> 
> **name:value pairs** are also called **key:value pairs**.
> 
> **object literals** are also called **object initializers**.
> 
> </aside>
> 

These examples create a JavaScript object with 4 properties:

```jsx
// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

This example creates an empty JavaScript object, and then adds 4 properties:

```jsx
// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

This example create a new JavaScript object using `new Object()`, and then adds 4 properties:

```jsx
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

### Accessing Object Properties

> You can access object properties in two ways:
> 
> 
> `objectName.propertyName`
> 
> `objectName["propertyName"]`
> 

`this` refers to the **person object**:

**this.firstName** means the **firstName** property of **person**.

**this.lastName** means the **lastName** property of **person**.

```jsx
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

### Deleting properties

> The `delete` keyword deletes a property from an object:
> 

```jsx
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
```

### Nested Objects

```jsx
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
```

You can access nested objects using the dot notation or the bracket notation:

```jsx
myObj.myCars.car2;

myObj.myCars["car2"];

let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];
```

### Methods on object

```jsx
let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}

player.sayHello()
```

### JavaScript Object Methods and Properties

| Name | Description |
| --- | --- |
| [assign()](https://www.w3schools.com/jsref/jsref_object_assign.asp) | Copies properties from a source object to a target object |
| [constructor](https://www.w3schools.com/jsref/jsref_object_constructor.asp) | Returns the function that created an object's prototype |
| [create()](https://www.w3schools.com/jsref/jsref_object_create.asp) | Returns an object created from an existing object |
| [defineProperties()](https://www.w3schools.com/jsref/jsref_object_defineproperties.asp) | Adds or changes properties |
| [defineProperty()](https://www.w3schools.com/jsref/jsref_object_defineproperty.asp) | Adds or changes a property |
| [entries()](https://www.w3schools.com/jsref/jsref_object_entries.asp) | Returns an array of the key/value pairs of an object |
| [freeze()](https://www.w3schools.com/jsref/jsref_object_freeze.asp) | Prevents any changes to an object |
| [fromEntries()](https://www.w3schools.com/jsref/jsref_object_fromentries.asp) | Returns an object created from an iterable list of key/value pairs |
| [getOwnPropertyDescriptor()](https://www.w3schools.com/jsref/jsref_object_getownpropertydescriptor.asp) | Returns an array of the keys of an object |
| [getOwnPropertyDescriptors()](https://www.w3schools.com/jsref/jsref_object_getownpropertydescriptors.asp) | Returns an array of the keys of an object |
| [getOwnPropertyNames()](https://www.w3schools.com/jsref/jsref_object_getownpropertynames.asp) | Returns an array of the keys of an object |
| [groupBy()](https://www.w3schools.com/jsref/jsref_object_groupby.asp) | Groups object elements according to returned callback values |
| [isExtensible()](https://www.w3schools.com/jsref/jsref_object_isextensible.asp) | Returns true if an object is extensible |
| [isFrozen()](https://www.w3schools.com/jsref/jsref_object_isfrozen.asp) | Returns true if an object is frozen |
| [isSealed()](https://www.w3schools.com/jsref/jsref_object_issealed.asp) | Returns true if an object is sealed |
| [keys()](https://www.w3schools.com/jsref/jsref_object_keys.asp) | Returns an array of the keys of an object |
| [preventExtensions()](https://www.w3schools.com/jsref/jsref_object_preventextensions.asp) | Prevents adding new properties to an object |
| [prototype](https://www.w3schools.com/jsref/jsref_object_prototype.asp) | Let you to add properties and methods to JavaScript objects |
| [seal()](https://www.w3schools.com/jsref/jsref_object_seal.asp) | Prevents adding new or deleting existing object properties |
| [toString()](https://www.w3schools.com/jsref/jsref_object_tostring.asp) | Converts an object to a string and returns the result |
| [valueOf()](https://www.w3schools.com/jsref/jsref_object_valueof.asp) | Returns the primitive value of an object |
| [values()](https://www.w3schools.com/jsref/jsref_object_values.asp) | Returns an array of the property values of an object |