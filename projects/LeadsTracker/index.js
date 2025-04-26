import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js"
import {
    getDatabase, 
    ref,
    push,
    onValue,
    remove
 } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js"

const firebaseConfig = {

    databaseURL: "your_DB"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "leads") 

const inputEl = document.getElementById("input-el") // const : cannot be reassigned
const inputBtn = document.getElementById("input-btn") // grap button element from html
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href="${leads[i]}" target="_blank">
                    ${leads[i]}
                </a>
            </li>`;
    }
    ulEl.innerHTML = listItems
}

onValue(referenceInDB, function (snapshot) {

    if (snapshot.exists()) {
        const snapshotValues = snapshot.val()
        //const called 'leads' which is an array containing the values inside of the snapshotValues object
        const leads = Object.values(snapshotValues)
        // call render 
        render(leads)
    }
})

// Delete button 
deleteBtn.addEventListener("dblclick", function () {
    remove(referenceInDB)
    ulEl.innerHTML = ""
})


inputBtn.addEventListener("click", function () {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
})



