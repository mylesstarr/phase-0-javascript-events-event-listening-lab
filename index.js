const input = document.getElementById('input');

function addingEventListener(event, addEventListener) {
    
input.addEventListener(event, function() {
  alert('I was clicked!');
}); 

}

addingEventListener("keydown")