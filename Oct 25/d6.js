// 1. Browser Object Model (BOM)

// 1a. Window Object
window.open("https://example.com", "_blank", "width=500,height=500"); // Opens a new window
setTimeout(() => alert("Hello!"), 2000); // Shows alert after 2 seconds
const intervalId = setInterval(() => console.log("Repeating message"), 1000); // Repeats every second

// 1b. Navigator Object
console.log(navigator.userAgent); // Logs browser info
console.log(navigator.language); // Logs browser language
navigator.geolocation.getCurrentPosition(position => console.log(position.coords.latitude)); // Gets current position

// 1c. Screen Object
console.log(screen.width, screen.height); // Logs screen width and height
console.log(screen.colorDepth); // Logs color depth of the screen
console.log(screen.orientation.type); // Logs screen orientation

// 1d. Location Object
console.log(location.href); // Logs current URL
location.assign("https://anotherpage.com"); // Navigates to a new page
location.reload(); // Reloads the current page

// 1e. History Object
history.back(); // Goes back in history
history.forward(); // Goes forward in history
history.go(-2); // Goes back two pages

// 2. JavaScript Web APIs

// 2a. DOM API
document.getElementById("myElement").innerText = "Updated Text"; // Updates text
document.querySelector(".myClass").style.color = "blue"; // Changes text color
document.body.appendChild(document.createElement("p")).innerText = "New Paragraph"; // Adds a new element

// 2b. Fetch API
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data)); // Fetches and logs data

fetch("https://jsonplaceholder.typicode.com/posts", { method: "POST", body: JSON.stringify({ title: "Hello" }) })
    .then(response => response.json())
    .then(data => console.log(data)); // Sends a POST request

fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "DELETE" })
    .then(response => response.json())
    .then(data => console.log("Deleted:", data)); // Sends a DELETE request

// 2c. Geolocation API
navigator.geolocation.getCurrentPosition(pos => console.log("Latitude:", pos.coords.latitude)); // Current position
navigator.geolocation.watchPosition(pos => console.log("Tracking position:", pos.coords)); // Tracks position
navigator.geolocation.getCurrentPosition(pos => console.log("Longitude:", pos.coords.longitude)); // Logs longitude

// 2d. Canvas API
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 50); // Draws rectangle
ctx.strokeStyle = "red";
ctx.strokeRect(20, 20, 150, 75); // Draws outlined rectangle
ctx.font = "20px Arial";
ctx.fillText("Hello Canvas", 50, 50); // Draws text

// 2e. Web Storage API
localStorage.setItem("username", "JohnDoe"); // Sets an item in localStorage
console.log(localStorage.getItem("username")); // Gets an item from localStorage
sessionStorage.setItem("sessionData", "Session Example"); // Sets an item in sessionStorage

// 2f. Notification API
Notification.requestPermission().then(permission => {
    if (permission === "granted") new Notification("Hello, user!"); // Shows notification if permitted
});
new Notification("New Message", { body: "You have a new message!" }); // Shows notification with body
new Notification("Reminder", { icon: "reminder.png", body: "Check your calendar!" }); // Shows notification with icon

// 2g. Device Orientation and Motion API
window.addEventListener("deviceorientation", event => console.log("Alpha:", event.alpha)); // Logs device orientation
window.addEventListener("devicemotion", event => console.log("Acceleration:", event.acceleration)); // Logs motion data
window.addEventListener("deviceorientation", event => console.log("Beta:", event.beta)); // Logs device beta

// 2h. IndexedDB API
const request = indexedDB.open("myDatabase", 1);
request.onsuccess = event => console.log("Database opened");
request.onupgradeneeded = event => {
    const db = event.target.result;
    db.createObjectStore("myStore", { keyPath: "id" }); // Creates object store
};
request.onerror = event => console.error("Error opening DB:", event.target.error); // Logs error

// 2i. Service Workers and Cache API
navigator.serviceWorker.register("/sw.js").then(reg => console.log("Service Worker registered:", reg)); // Registers service worker
caches.open("my-cache").then(cache => cache.add("/offline-page.html")); // Adds item to cache
navigator.serviceWorker.ready.then(sw => console.log("Service Worker ready:", sw)); // Checks if service worker is ready

// 2j. WebRTC API
const peer = new RTCPeerConnection();
peer.createOffer().then(offer => peer.setLocalDescription(offer)); // Creates a WebRTC offer
peer.onicecandidate = event => console.log("ICE Candidate:", event.candidate); // Logs ICE candidate
peer.ontrack = event => console.log("Remote stream added:", event.streams[0]); // Logs added stream

// 2k. Push API
navigator.serviceWorker.register("/sw.js").then(reg => reg.pushManager.subscribe({ userVisibleOnly: true })); // Subscribes to push
Notification.requestPermission().then(permission => console.log("Push Permission:", permission)); // Requests push permission
navigator.serviceWorker.ready.then(sw => console.log("Service Worker Push Ready:", sw)); // Checks push readiness

// 2l. Bluetooth API
navigator.bluetooth.requestDevice({ filters: [{ services: ["battery_service"] }] })
    .then(device => console.log("Device found:", device))
    .catch(error => console.error("Error:", error)); // Connects to a Bluetooth device

navigator.bluetooth.requestDevice({ filters: [{ name: "MyDevice" }] })
    .then(device => console.log("Connecting to:", device.name)); // Filters by device name

navigator.bluetooth.requestDevice({ acceptAllDevices: true })
    .then(device => console.log("Found device:", device)); // Connects to any nearby Bluetooth device
