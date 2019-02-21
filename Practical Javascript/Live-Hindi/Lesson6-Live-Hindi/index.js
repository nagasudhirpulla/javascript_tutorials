function sayHello() {
    // get the name string
    var nameText = document.getElementById("nameInput").value;

    // get the number of iterations
    var numIterations = document.getElementById("numInput").value;

    // get the greeting Div
    var outDiv = document.getElementById("greetingDiv");

    // derive the greeting Text
    var greetingText = "Hello " + nameText + "!";

    // iterate for numIterations times
    for (var i = 0; i < numIterations; i++) {
        // create a span element
        var spanEl = document.createElement("span");
        // set the text of the span element
        spanEl.innerHTML = greetingText;
        // insert the span element into the output div
        outDiv.appendChild(spanEl);
        // create a new line element
        var newLineEl = document.createElement("br");
        // insert the new line element into the div
        outDiv.appendChild(newLineEl);
    }
}