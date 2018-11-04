// this function is executed by a button click
function sayHello(){
    // store the input text in a vriable called inputText
    var inputText = document.getElementById("nameInput").value;

    // derive the output value and store in a variable
    var outputText = "Hello " + inputText + " !";

    // set the paragraph value to the variable outputText
    document.getElementById("outPara").innerHTML = outputText;
}