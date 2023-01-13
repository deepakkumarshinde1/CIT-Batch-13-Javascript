function testElement(element) {
  if (element === null) {
    console.error("element not available");
  } else {
    console.log(element);
  }
}

// a count app
// weather app
/** DOM => Document object model
        => Logical representation of HTML page 
        => DOM tree os created for traverser 
 */
// if is want to work with HTML element i.e access them => document
/**
 *  document.getElementById();
    document.getElementsByClassName();
    document.getElementsByTagName();
    document.querySelector(); => single element
    document.querySelectorAll(); => multiple element

 class => .className
 id => #idName
 element => elementName
 */

// save the instances
var btn = document.querySelector("button");
var input = document.querySelector("#inputText");
var h1 = document.querySelector("#textChange");

// element or null
/** What are the events ?
 *      Event are user action
 *          keyboards => keypress, keyup, keydown
 *          mouse => click, dblClick, mouseover, change, darg, drop
 *          page => load, unload
 *  Events can be use on any element.
 *  To work wth event => .addEventListener('eventName',function(){})
 */
/** Work with input, select, textarea
 *  I want to get the input text of input => .value
 *  I want to set the text to input => .value
 */
/** Work with other elements
 * I want to get the text/data from html element => .innerHTML
 * I want to set the text/data to html element => .innerHTML
 */
btn.addEventListener("click", function (event) {
  var text = input.value; // get data
  input.value = ""; // to set a data
  h1.innerHTML = text; // to sent a text
  //console.log(text);
});
