const React = require("react")
const reactDomServer = require("react-dom/server")
const express = require("express")
const {Button} = require("./sharedButton")
const app = express()

app.get("/oldWay", (req, res)=>{
    // This converts the entire dom to a string
    // just like the html we saw before and then sends it to the client
    res.send(reactDomServer.renderToString(<Button />))

})


app.get("/streaming", (req, res)=>{
    // This is essentially the same thing but it "streams"
    // the data to the client - you don't have to super worry
    // about why this is better if you don't - but it is
    // and you're more likely to see this nowadays
    const { pipe } = reactDomServer.renderToPipeableStream(<Button />, {
        // Do not worry about the difference between onShellReady
        // and onAllReady unless you plan to look into module federation ssr
        onShellReady() {
          res.setHeader('content-type', 'text/html');
          pipe(res);
        }
      });

})




app.listen(5001, ()=>{
    console.log("Server starting http://localhost:5001")
})