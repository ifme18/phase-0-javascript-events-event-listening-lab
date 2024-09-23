function addingEventListener() {
    // Grab the input element by its ID 'button'
    const input = document.getElementById('button');
    
    // Create a named function to handle the click event
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add an event listener to the input element
    input.addEventListener('click', clickAlert);
  }
  
