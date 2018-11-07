// this function is triggered by the button click
function sayHello() {

    // capture the input text from the input element with id 'nameInput' in the html document
    var inputText = document.getElementById('nameInput').value;

    // derive the greeting text from the variable inputText
    var greetingText = 'Hello ' + inputText + '!';

    // capture the number of iterations from the input element with id 'numIterations' in the html document
    var numIterations = document.getElementById('numIterations').value;

    // access the div Container element and store it in a variable
    var greetingContainer = document.getElementById('greetingContainer');

    // clear the greeting container
    greetingContainer.innerHTML = '';

    // loop numIterations times to add a new span element and new line element
    // in the div container with id 'greetingContainer'
    for (var iter = 0; iter < numIterations; iter++) {
        // this code will run numIterations times

        // create a new span element
        var spanElement = document.createElement('span');

        // set the innerHTML of span to the greetingText
        spanElement.innerHTML = greetingText;

        // create a new line break (br) element
        var brElement = document.createElement('br');

        // append the span element and br element to the greeting container
        greetingContainer.appendChild(spanElement);
        greetingContainer.appendChild(brElement);
    }
}