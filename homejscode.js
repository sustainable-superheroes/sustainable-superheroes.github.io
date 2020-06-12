// 1. Find and store the element we want to listen to events on.
    var welcome = document.getElementById("text");
    var runned = false;
    /* 2. Define the function that will respond to the event.
     callback*/
    var onHeaderMouseOver = function() {
        welcome.innerHTML = "<h3>Sustainable Superheroes is a website about sustainable eating!</h3><br><h4>Welcome to Sustainable Superheroes!</h4>";

    };
    // 3. Add the event listener for the element and function
    // anonymous "inline"
    if (runned === false) {
      welcome.addEventListener( "mouseover",onHeaderMouseOver);
  	var welcome = document.getElementById("text");
    }
