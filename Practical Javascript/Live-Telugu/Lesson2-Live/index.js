function greetName(){
    // Create a variable inputName and 
    // assign the value of input field with id "inputField" to it
    var inputName = document.getElementById("inputField").value;
    
    // Create a varible outputGreeting using inputName variable
    var outputGreeting = "Hello " + inputName + " !";
    
    // Pop up the outputGreeting variable
    alert(outputGreeting);
}