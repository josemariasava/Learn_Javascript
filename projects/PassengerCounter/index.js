// Comment 
/**
 * Steps : 
 * 1 - initialize the count to 0 
 * 2 - listen for clicks on the increment button 
 * 3 - increment the count variable when the button is clicked 
 * 4 - change id="count-el" in the HTML to view new count value 
 */

// DOM = Document Object Model 

// camelCase for javascript variables 
let countEl = document.getElementById("count-el")
                                // pass arguments - giving the function dome data to work with 
let saveEl = document.getElementById("save-el")

// Store the count 
let count = 0 //declare variable count  

// definition of function 
function increment(){
    count ++
    countEl.textContent = count
}

// Reset the count to 0 
function reset(){
    count = 0
    countEl.textContent = count
}

function save(){

    let countString = count + " - "

    saveEl.textContent += countString

    reset()

}
// Debugging purpose, to print inside browser console 
// console.log(count) 