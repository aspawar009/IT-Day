// 1. Understanding the DOM
console.log(document.documentElement);         // Accessing the document's root (html)
console.log(document.head);                    // Accessing the head element
console.log(document.body);                    // Accessing the body element
console.log(document.body instanceof Element); // Checking if body is an Element

// 2. DOM Tree Structure
let child = document.querySelector("p");
console.log(child.parentNode);                 // Accessing parent node of <p>
let container = document.getElementById("container");
console.log(container.firstChild);             // First child of container
console.log(container.lastChild);              // Last child of container
let listItem = document.querySelector("li");
console.log(listItem.nextSibling);             // Next sibling of <li>

// 3. DOM Elements and Nodes
console.log(document.getElementById("header"));  // Select by ID
console.log(document.getElementsByClassName("card")); // Select by class
console.log(document.getElementsByTagName("div"));    // Select by tag
console.log(document.querySelectorAll(".item"));      // Select all matching query

// 4. Manipulating DOM Elements
let newElement = document.createElement("div");
newElement.textContent = "Hello, DOM!";
document.body.appendChild(newElement);         // Adding element to body
let main = document.getElementById("main");
main.insertBefore(newElement, main.firstChild);// Insert before first child
newElement.textContent = "Updated Text";       // Modify content
document.body.removeChild(newElement);         // Removing element

// 5. DOM Events
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");                  // Click event
});
document.addEventListener("mouseover", function() {
    console.log("Mouse over the document!");   // Mouseover event
});
document.addEventListener("keydown", function(e) {
    console.log(`Key pressed: ${e.key}`);      // Keydown event
});
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();                        // Prevent form submission
    console.log("Form submitted!");
});

// 6. CSS Manipulation with the DOM
let box = document.querySelector(".box");
box.style.backgroundColor = "lightblue";       // Change background color
box.classList.add("highlight");                // Add class
console.log(box.classList.contains("highlight")); // Check class existence
box.classList.toggle("hidden");                // Toggle class visibility

// 7. Working with Forms and Input Elements
let input = document.querySelector("input[name='username']");
console.log(input.value);                      // Access input value
input.setAttribute("placeholder", "Enter Name");// Modify attribute
input.addEventListener("input", () => {
    console.log("Input changed:", input.value);// Handle input change
});
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form data: " + input.value);        // Prevent form submission
});

// 8. Traversing the DOM
let section = document.getElementById("content");
console.log(section.parentNode);               // Parent of #content
console.log(section.childNodes);               // All child nodes of #content
console.log(section.firstElementChild);        // First child element of #content
console.log(section.lastElementChild);         // Last child element of #content

// 9. Dynamic DOM Manipulation Techniques
let template = document.createElement("template");
template.innerHTML = "<p>New paragraph</p>";
document.body.appendChild(template.content.cloneNode(true)); // Clone template

let fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
    let item = document.createElement("li");
    item.textContent = "List item " + (i + 1);
    fragment.appendChild(item);
}
document.getElementById("list").appendChild(fragment);       // Append fragment

let clonedNode = document.getElementById("header").cloneNode(true);
document.body.appendChild(clonedNode);         // Cloning an element

// 10. Advanced DOM Concepts
let shadowHost = document.createElement("div");
shadowHost.setAttribute("id", "shadow-host");
document.body.appendChild(shadowHost);

let shadowRoot = shadowHost.attachShadow({ mode: "open" });
let shadowContent = document.createElement("p");
shadowContent.textContent = "This is in the shadow DOM!";
shadowRoot.appendChild(shadowContent);

class CustomElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<p>Hello, Custom Element!</p>";
    }
}
customElements.define("custom-element", CustomElement);

let observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        console.log(mutation);
    });
});
observer.observe(document.body, { childList: true, subtree: true });

// 11. Browser Compatibility and Performance
document.body.appendChild(document.createElement("div"));
