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
    
    // alert the Hello Name !
    alert(greetingString);
}