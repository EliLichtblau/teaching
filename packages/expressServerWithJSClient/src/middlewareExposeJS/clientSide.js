// this code does the same as the code before
// But see how its a log more convenient!

// Importantly this is also essentially what your react code eventually does
// calling document.createElement and making html appear in the dom purely from js

const div = document.createElement("div")
div.appendChild(document.createTextNode("Hello world!"))
document.body.appendChild(div)