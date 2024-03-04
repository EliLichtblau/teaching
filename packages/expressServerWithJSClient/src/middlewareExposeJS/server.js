// Boy sending javascript like that sure is awful
// we don't get any syntax highlighting and its all in a string
// thankfully we can use the middleware concept we learned before
// to send javascript to the client

const path = require("node:path")

const express = require("express")
const app = express()


// Go to localhost:5001/javascript to see our source code :D
app.use("/javascript", express.static(path.join(__dirname, "clientSide.js")))
// You could also expose this using a route!
// The express.static is convenient however because you
// can expose folders! but please try to use routes as an exercise


app.get("/", (req, res)=>{

    res.send(`
    
<html>
<head>
    <!--Note the defer attribute is important - the <body></body> must mount before our js since we access document.body :D-->
    <script src="/javascript" type="text/javascript" defer></script>
</head>

<body>
</body>

</html>

    
    
    `)

})


app.listen(5001, ()=>{
    console.log("Server starting http://localhost:5001")
})