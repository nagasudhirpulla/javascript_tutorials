/**
 * This is the button click function that 
 * alerts Hello Name! using a text input
 */
function sayHello() {
    // get the input text from input field with id 'nameInput' 
    // and assign it to a variable named inputName
    var inputName = document.getElementById('nameInput').value;
    
    // derive the greeting to be alerted 
    // and assign it to a variable named greetingString
    var greetingString = 'Hello ' + inputName + ' !';
    
    // Set the span text to the derived greeting which is based on the input
    document.getElementById('outputSpan').innerHTML = greetingString;
}