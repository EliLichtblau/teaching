import React from "react"
import ReactDomClient from "react-dom/client"
import { App } from "./app.jsx"


// React needs a place to take its representation
// and render it to the dom - we can either take from
// a place we know exists in the html we sent
// usually called "root" so document.getElementById("root")
// or we can create it - either work
const root = document.createElement("div")
document.body.appendChild(root)

// Once we have a place to render to we can just 
// ask react to render it - there are much better
// tutorials that i can write on how all this works
// But for us it can just magically convert the virtual dom in 
// react to html 
ReactDomClient.createRoot(root).render(<App/>)
