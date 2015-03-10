var elList, addLink, newEl, newText, counter, listItems, newItem; // Declare variables

elList  = document.getElementById('list');               // Get list
addLink = document.querySelector('a');                   // Get add item button
counter = document.getElementById('counter');            // Get item counter


function addItem(e) {                                    // Declare function
  e.preventDefault();                                    // Prevent link action
  newEl = document.createElement('li');                  // New <li> element
  newItem = document.getElementById("newItem").value;    //New item is Text Box
    
  newText = document.createTextNode(newItem);            // New text node
  newEl.appendChild(newText);                            // Add text to <li>
    listItems = list.getElementsByTagName('li').length; 
    
  elList.appendChild(newEl);                             // Add <li> to list
  newItem = document.getElementById("newItem").value = "Type List Item"; //Reset the Textbox
}

function updateCount() {                                 // Declare function
  listitems = list.getElementsByTagName('li').length;    // Get total of <li>s
  counter.innerHTML = listitems;                         // Update counter
}

function removeItem(){ 
    // Store the element to be removed in a variable.
    var removeEl = document.getElementById('rmItem');
   
    // Find the element which contains the element to be removed.
    var containerEl = removeEl.parentNode;
    // Remove the element.
    containerEl.removeChild(removeEl);    
    updateCount();
}

addLink.addEventListener('click', addItem, false);       // Click on button
elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM updated

//REMOVING ITEM EVENT HANDLING
    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
    }
    var ul = document.getElementById('list'); //Finds the text of the item clicked
    ul.onclick = function(event) {
        var target = getEventTarget(event);
        target.setAttribute("id", "rmItem"); //Adds temp Id to the item clicked
        removeItem(); //Calls remove function
    };



    