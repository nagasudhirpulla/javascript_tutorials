// this function is triggered by a button click
function sayHelloNTimes() {

    // extract the input name from the input field with id nameInput
    var inputName = document.getElementById('nameInput').value;

    // extract the number of iterations from the numeric input element with id numIter
    var n = document.getElementById("numIter").value;

    // derive the output greeting text
    var greetingText = "Hello " + inputName + "! ";

    // clear the output paragraph
    document.getElementById("outPara").innerHTML = "";

    // use for loop to iterate and attach greeting text to output paragraph
    for (var iter = 0; iter < n; iter++) {
		
        // attach greetingText to outPara element
        document.getElementById("outPara").innerHTML = document.getElementById("outPara").innerHTML + greetingText;
		
    }
}