// this is a much more convenient pattern 
// than sending inline in a script tag

// We get syntax highlighting and can more easily do
// more advanced things than before


// Importantly this is also essentially what your react code eventually does
// calling document.createElement and making html appear in the dom purely from js

const div = document.createElement("div")
div.appendChild(document.createTextNode("Hello world!"))
document.body.appendChild(div)