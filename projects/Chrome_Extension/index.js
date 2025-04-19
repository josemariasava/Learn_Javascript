let myLeads = []
const inputEl = document.getElementById("input-el") // const : cannot be reassigned
const inputBtn = document.getElementById("input-btn") // grap button element from html
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function () {
    // here the code for the function 
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )

    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href="${myLeads[i]}" target="_blank">
                    ${myLeads[i]}
                </a>
            </li>`;
    }
    ulEl.innerHTML = listItems
}