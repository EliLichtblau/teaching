const express = require("express")

const app = express()


// This is what "middleware" is
// this code will be run before *every*
// get and put request
// In this example we will just log every request
// you can do anything you wnat here
app.use((req, res, next)=>{
    console.log(`Requested url: ${req.url}`)
    // Call the next function to tell express to move to the next middleware
    // if you don't call this function express will infinitely stall
    next()
})

app.use((req, res, next)=>{
    // No Op middleware - note this is run *after* the logger middleware
    next()
})

app.get("/*", (req, res)=>{
    res.send("Hello world")
})

app.listen(5001, ()=>{
    console.log("Server starting http://localhost:5001")
})