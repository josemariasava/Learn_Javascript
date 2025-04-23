let myLeads = []
const inputEl = document.getElementById("input-el") // const : cannot be reassigned
const inputBtn = document.getElementById("input-btn") // grap button element from html
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function () {
    // Grab the url of the current tab -- chrome API
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

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

// Delete button 
deleteBtn.addEventListener("dblclick", function () {
    // Clear the localstorage   
    localStorage.clear()
    // Clear the array of leads
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function () {
    // here the code for the function 
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})



