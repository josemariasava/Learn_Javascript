const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let psw1 = ""
let psw2 = ""


/* var from html */ 
let psw1El = document.querySelector("#psw1-el")
let psw2El = document.querySelector("#psw2-el")



let slider = document.querySelector("#psw-length")
let lengthTxt = document.querySelector("#length-txt")

lengthTxt.innerHTML = slider.value

function generatePassword() {
    
    let psw_tmp = ""

    let pswLength = slider.value

    for (let i = 0; i < pswLength; i++) {
        let index = Math.floor(Math.random() * characters.length)

        psw_tmp += characters[index]
    }

    return psw_tmp
}


function renderPasswords() {
    psw1 = generatePassword()
    psw2 = generatePassword()
    psw1El.textContent = psw1
    psw2El.textContent = psw2 
}

/* Update value of slider */ 
slider.oninput = function() {
    lengthTxt.innerHTML = this.value;
}

/* Copy to clipboard --> id come from html onclick() */
function copyToClipboard(id) {
    const text = document.getElementById(id).textContent.trim()

    /* Check if password is empty and notify */
    if (text === "") {
        showPopUp("No password to copy")
        return
    }
    else {
        navigator.clipboard.writeText(text).then(() => {
            showPopUp("Password copied to clipboard")
        }).catch((err) => {
            showPopUp("Failed to copy")
        })
    }


} 

function showPopUp(message) {
    const popup = document.getElementById('copy-popup')
    popup.textContent = message
    popup.classList.add('show')

    setTimeout(() => {
        popup.classList.remove('show')
    }, 1000) // Show the message for 2 seconds 
}
