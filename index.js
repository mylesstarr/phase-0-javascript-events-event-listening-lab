

// function called "addingEventListner" takes an event as a variable. This vabiable is simply the event that will always happen to input becuase input is in the body of our code and is connected to the built in function "addEventListener" this also takes the event function, and a function() HERE this function is BUILTIN in line and is 
// function() {alert('I was clicked!')}

const input = document.getElementById('input');

function addingEventListener(event){ 
  input.addEventListener(event, function() {
    alert('I was clicked!')
    }
  ) 
}













// input.addEventListenerToThisFunction("click", ()=> console.log("event")) This is just an example I wrote about adding an event lister