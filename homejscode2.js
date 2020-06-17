// 1. Find and store the element we want to listen to events on.
    var undoWelcome = document.getElementById("text");
    var runned = false;
    /* 2. Define the function that will respond to the event.
     callback*/
    var onHeaderMouseOut = function() {
        undoWelcome.innerHTML = "<h3>Sustainable Superheroes is a website about sustainable eating.</h3>";

    };
    // 3. Add the event listener for the element and function
    // anonymous "inline"

      undoWelcome.addEventListener( "mouseout",onHeaderMouseOut);
  	var welcome = document.getElementById("text");
