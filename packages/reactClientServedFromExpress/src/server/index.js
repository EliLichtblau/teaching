// Don't worry about this - its jsut convenient to avoid build systems as much as possible
import { createRequire } from "node:module"
const require = createRequire(import.meta.url)


const path = require("node:path")
const express = require('express')
const app = express()

const clientAssetsPath = path.join(process.cwd(), "dist/client")
app.use(express.static(clientAssetsPath)) // Expose javascript just like in the middlewareExposeJS

// And just like before just send the an empty application
app.get("/", (req, res)=>{
    res.send(`
<html>
    <head>
        <script src="/main.js" type="text/javascript" defer></script>
    </head>

    <body>
        <div id="root"></div>

    </body>
</html>    
    
    `)

})

// you need to use this middleware to send json - don't worry about it
app.use(express.json())
app.post("/api/proxiedExample", (req, res)=>{
    res.setHeader("content-type", "text/json")
    res.send(JSON.stringify({
        "hello": "world"
    }))
})

app.listen(5001, ()=>{
    console.log("Server starting http://localhost:5001")
})