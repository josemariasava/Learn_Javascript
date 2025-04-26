/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meter = 3.281
const liter = 0.264
const kilogram = 2.204

const inputEl = document.getElementById("input-number")

let lengthEl = document.getElementById("length-result")
let volumeEl = document.getElementById("volume-result")
let massEl = document.getElementById("mass-result")

const convertBtn = document.getElementById("convert-btn")



convertBtn.addEventListener("click", function () {
    
    // Get value from inputEl and convert to number 
    let value = Number(inputEl.value)

    let convertedValues = convertAll(value)

    // Display the values inside the <p> element in html 
    lengthEl.textContent = convertedValues.length

    volumeEl.textContent = convertedValues.volume

    massEl.textContent = convertedValues.mass
})


function convertAll(number) {
    
    // Length
    let length = `${number} meters = ${(number * meter).toFixed(3)} feet | ${number} feet = ${(number / meter).toFixed(3)} meters`

    // Volume
    let volume = `${number} liters = ${(number * liter).toFixed(3)} gallons | ${number} gallons = ${(number / liter).toFixed(3)} liters`

    // Mass
    let mass = `${number} kilos = ${(number * kilogram).toFixed(3)} pounds | ${number} pounds = ${(number / kilogram).toFixed(3)} kilos`

    // Return all of them together inside an object 
    return {
        length: length,
        volume: volume,
        mass: mass
    }
}