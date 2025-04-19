## CreateElement() & append()

Create html element in javascript 

```jsx
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// Let's try a different method!
for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // create element
    // set text content
    // append to ul
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}

```

---

### `document.createElement()`

> It **creates a new HTML element** in JavaScript (but doesn't put it on the page yet).
> 

**Syntax:**

```jsx
let element = document.createElement("tagName");

```

**Example:**

```jsx
let p = document.createElement("p"); // creates a <p> element
p.textContent = "Hello, world!";     // adds text inside it

```

At this point, `p` exists in memory, but it's **not visible** on the page until you **append** it somewhere.

---

### `append()` or `appendChild()`

> It **adds an element** as a child of another element on the page.
> 

**Syntax:**

```jsx
parentElement.append(childElement);

```

**Example (complete):**

```html
<div id="container"></div>

<script>
  let container = document.getElementById("container");
  let p = document.createElement("p");
  p.textContent = "This is a new paragraph!";

  container.append(p); // adds <p> inside the container
</script>

```

This will add:

```html
<div id="container">
  <p>This is a new paragraph!</p>
</div>

```

---

### Bonus Tips

- You can also add classes, IDs, or attributes:
    
    ```jsx
    p.classList.add("fancy");
    p.setAttribute("id", "message");
    
    ```
    
- `append()` can take **multiple elements or strings**:
    
    ```jsx
    div.append("Hello", spanElement);
    
    ```
    

---

## Clear input

To clear out a text input field in JavaScript, you can set its `.value` to an empty string like this:

```jsx
document.getElementById("myInput").value = "";

```

**Example:**

```html
<input type="text" id="myInput" placeholder="Type something..." />
<button onclick="clearInput()">Clear</button>

<script>
  function clearInput() {
    document.getElementById("myInput").value = "";
  }
</script>

```

When the button is clicked, the input field will be cleared.

## Template Strings

> **Template strings** (also called **template literals**) in JavaScript are a way to make strings more powerful and readable — especially when you're working with variables or multiline text.
> 

**Basics of Template Strings**

Instead of using quotes (`'` or `"`), **template strings** use **backticks** (```).

```jsx
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"

```

1. **Embed variables easily** using `${...}`

```jsx
let product = "Book";
let price = 9.99;
let message = `The ${product} costs $${price}`;
console.log(message); // The Book costs $9.99

```

2. **Multiline strings** without needing `\n` or string concatenation

```jsx
let multiline = `This is a
multiline
string!`;

console.log(multiline);
/*
This is a
multiline
string!
*/

```

3. **Embed expressions**, not just variables

```jsx
let a = 5;
let b = 10;
let result = `The sum is ${a + b}`;
console.log(result); // The sum is 15

```

---

**When should you use them?**

- When building HTML with variables (like your `<li><a>` example).
- When you need clean and readable string formatting.
- When writing long strings or multiple lines.

---

### Deploy browser extension

> Here's a clear step-by-step guide to building and deploying a basic extension — let’s focus on **Chrome**, but it's similar for other browsers like Edge and Firefox.
> 

---

## 🧱 STEP 1: Set up your file structure

Create a folder (e.g., `my-extension`) and include these files:

```
my-extension/
├── manifest.json
├── popup.html
├── popup.js
└── style.css

```

---

## 🧾 STEP 2: Create the `manifest.json`

This is the config file that tells the browser how your extension works.

```json
{
  "manifest_version": 3,
  "name": "My Cool Extension",
  "version": "1.0",
  "description": "A simple browser extension!",
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icon16.png",
      "48": "icon48.png",
      "128": "icon128.png"
    }
  },
  "permissions": []
}

```

> 🔸 manifest_version: 3 is required for modern Chrome extensions.
> 

You’ll need some icons (`icon16.png`, `icon48.png`, etc.), but you can use placeholders while testing.

---

## 🖼 STEP 3: Create `popup.html`

This is your extension’s small UI that pops up when the user clicks it.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Extension</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Hello!</h1>
  <button id="click-me">Click Me</button>
  <script src="popup.js"></script>
</body>
</html>

```

---

## ✍️ STEP 4: Add your JavaScript (`popup.js`)

```jsx
document.getElementById("click-me").addEventListener("click", () => {
  alert("You clicked the button!");
});

```

---

## 🎨 STEP 5: Style it with `style.css` (optional)

```css
body {
  font-family: sans-serif;
  padding: 10px;
}
button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

```

---

## 🚀 STEP 6: Load your extension into Chrome

1. Open Chrome and go to: `chrome://extensions`
2. Toggle **Developer Mode** ON (top right)
3. Click **"Load unpacked"**
4. Select your `my-extension` folder

💥 Boom! Your extension is now live in your browser 🎉

You should see the icon in the top-right toolbar — click it and test your UI.

---

---

## LocalStorage

> It's a **built-in JavaScript feature** that lets you store data in the browser.
The data **persists even if the page is refreshed or the browser is closed**.
Think of it as a tiny key-value database in the browser.
> 

### How does it work?

It stores data in **string format** (you can store numbers, arrays, or objects — but you’ll convert them to strings).

### Basic Methods

| Method | Description |
| --- | --- |
| `localStorage.setItem("key", "value")` | Save data |
| `localStorage.getItem("key")` | Get data |
| `localStorage.removeItem("key")` | Delete a specific item |
| `localStorage.clear()` | Clear all data |

### Examples

**1: Storing simple text**

```jsx
localStorage.setItem("username", "Alice");

let user = localStorage.getItem("username");
console.log(user); // Output: Alice

```

**2: Storing arrays or objects (using JSON)**

```jsx
let myLeads = ["https://google.com", "https://github.com"];

// Save it
localStorage.setItem("leads", JSON.stringify(myLeads));

// Get it back
let leadsFromStorage = JSON.parse(localStorage.getItem("leads"));
console.log(leadsFromStorage); // Output: [ 'https://google.com', 'https://github.com' ]

```

> 🔄 Why JSON?
> 
- Because localStorage can only store strings.
- `JSON.stringify()` turns arrays/objects into strings.
- `JSON.parse()` turns them back into usable JavaScript data.

**Clear one or all items**

```jsx
localStorage.removeItem("username"); // Removes 'username'
localStorage.clear(); // Removes everything

```

**Real Use Case Example**

In your browser extension or small web app, you might do something like this:

```jsx
let input = document.getElementById("input-btn");
let saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", function() {
  localStorage.setItem("myInput", input.value);
  input.value = ""; // clear the field
});

window.addEventListener("load", function() {
  let savedValue = localStorage.getItem("myInput");
  if (savedValue) {
    input.value = savedValue;
  }
});

```

**Notes**

- Data stays **even if you reload or close the browser**.
- But it’s specific to the **browser and domain** (you won't see it across other sites)