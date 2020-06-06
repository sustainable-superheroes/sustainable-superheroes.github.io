// 1. Find and store the element we want to listen to events on.
    var welcome = document.getElementById("header");
    // 2. Define the function that will respond to the event.
    // callback 
    var onHeaderMouseOver = function() {
        welcome.textContent = "Welcome to Sustainable Superheroes!!!";
    };
    // 3. Add the event listener for the element and function
    // anonymous "inline"
    welcome.addEventListener("onHeaderMouseOver", onMouseOver);
