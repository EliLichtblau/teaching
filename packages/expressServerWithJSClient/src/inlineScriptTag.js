const express = require("express")

const app = express()

app.get("/alert", (req, res)=>{
    // You can send html from the server to the client
    // This is where like terms like multi page app come from
    // each route sending entirely new "pages" of html
    res.send(`
<html>
    <head>
        <script>
        function globalScopedButtonClick() {
            alert("omg I was clicked - notice how my name is in the global scope!")
        }
        
        </script>
    </head>

    <body>

    <button onclick="globalScopedButtonClick()">Hello clicking me triggers javascript :)</button>

    </body>

</html>
    `)
})



app.get("/createHTMLfromJS", (req, res)=>{
    // You can send html from the server to the client
    // This is where like terms like multi page app come from
    // each route sending entirely new "pages" of html
    res.send(`
<html>
    <body>

    </body>
    
    <script>
        const div = document.createElement("div")
        div.appendChild(document.createTextNode("Hello world!"))
        document.body.appendChild(div)
    </script>
</html>
    `)
})




app.listen(5001, ()=>{
    console.log("Server starting http://localhost:5001")
})