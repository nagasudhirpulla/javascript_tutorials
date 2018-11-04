// get the text from input field and display in the paragraph inside this function
function sayHello(){
    // access the input text
    var inputText = document.getElementById("nameInput").value;
    
    // derive the output Text
    var outputText = "Hello " + inputText + " !";

    // output the derived text to paragraph element using its id
    document.getElementById("outputParagraph").innerHTML = outputText;
}