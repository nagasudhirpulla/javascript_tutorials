// this function is triggered by button click
function sayHello() {
    // capture the input text into a variable named inputName
    var inputName = document.getElementById('nameInput').value;

    // derive greeting from inputName variable
    var greetingText = 'Hello ' + inputName + '! ';

    // capture the number of required iterations into a variable named numIterations
    var numIterations = document.getElementById('numIterations').value;

    // clear the paragraph with id 'outputPara'
    document.getElementById('outputPara').innerHTML = '';

    // loop for numIterations to print greeting in the paragraph by id outputPara
    for (var iter = 0; iter < numIterations; iter++) {
        // this code inside this for loop will run 'numIterations' times

        // add greeting text in the paragraph by id outputPara
        document.getElementById('outputPara').innerHTML = document.getElementById('outputPara').innerHTML + greetingText;
    }
}