const express = require("express")

const app = express()

// Go to localhost:5001 to see this
app.get("/", (request, response)=>{

    response.send("Hello world")
})
// Go to localhost:5001/named to see this
app.get("/named", (request, response)=>{

    response.send("Hello named")
})


// localhost:5001/wild/_whateveryouwant_
// in fact localhost:5001/wild/anythign/evenmore
app.get("/wild/*", (request, response)=>{

    response.send("Hello wild")
})


// You can also conveniently use capture groups!
// You can grab the routes in params
app.get("/capture/:id", (request, response)=>{
    response.send(`Hello ${request.params.id}`)
})



app.listen(5001, ()=>{
    console.log("This callback is invoked immediately on server sarting")
})