// this is triggered by a button click
function sayHello(){
    // get the input field text value
    var input = document.getElementById("nameInput").value;
    
    // derive the pop-up text
    var outputGreeting = "Hello " + input + " !";
    
    // show the pop-up
    alert(outputGreeting);
}