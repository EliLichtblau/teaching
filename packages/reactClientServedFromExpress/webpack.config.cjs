const path = require("node:path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const fastRefresh = require("@pmmmwh/react-refresh-webpack-plugin")
/**
 * Webpack can get *very* involved I try to distill this into
 * the simplest webpack example possible - the docs are pretty 
 * fantastic as docs go - far from perfect but like very decent
 * I encourage everyone to read them
 */


/** @type {import("webpack").Configuration} */
module.exports = {
    // This is different from before so I put it at the top
    devServer: {
        // Ok your probably wondering what the hell this is
        // so in prod builds express is responsible for 
        // exposing the client bundle - but I assure you
        // using express hot middlware and the link is more confusing than this
        // and also worse in my experience. 
        // What this does is say hey for all routes that begin with /api send those requests
        // to the actual server but I webpack in dev builds am responsible for serving everything else
        // This forces the consmer to prefix to the patterns defined here but this is fine
        proxy: [
            {
                context: ["/api"],
                target: "http://localhost:5001",
                changeOrigin: true,
            }
        ]
    },

    // Tell webpack what platform we are compiling to
    target: "web",
    mode: process.env.mode ?? "development",
    // Where the "entry point" file lives - note this changed from before if you look at the path
    entry: path.join(__dirname, "./src/client/index.jsx"),
    // see what enabling and disabling this does when inspecting
    // sources in console
    devtool: "source-map", 

    output: {
        path: path.join(__dirname, "dist/client"),
        filename: "main.js", // this is the name webpack html 
    },
    resolve: {
        extensions: [".js", ".jsx"],

    },
    module: {
        // So a lot of the time especially in frontend
        // We write code that isn't just pure javascript
        // these rules tell webpack how to preprocess 
        // these files to go from what they are to pure js
        rules: [
            {
                test: /(.jsx?)|(.tsx?)/, // files to use this loader
                loader: "ts-loader", // we could use babel/swc here but ts-loader is the simplest for this exampel
                options: {
                    // Use the tsconfig we have written instead of default
                    // settings when using ts-loader
                    configFile: path.join(__dirname, "tsconfig.json"),
                    // You will see this set a lot - setting transpileOnly: true
                    // disables typechecking for faster compilation speed
                    // You will sometimes see this with the plugin
                    // forkTSTypechecker - that plugin type checks on the side
                    // it doesn't actually affect emit :D
                    // transpileOnly: true
                },
                exclude: /node_modules/ // things to explicitly excluse
            }
        ]
    },
    
    // Plugins are ways to add functionality to webpack
    // In this case we just use it to add one
    // wrap our js and ask for it from html 
    // and then two dev server reasons 
    plugins: [
        // We could configure the html we send but
        // we will just use the default for now
        new HtmlWebpackPlugin(), 
        // this also has optiosn we can play with
        // advanced: react refresh has its own overlay so 
        // if you every confused why you are getting an overlay
        // after disabling it in devserver options - this is why
        new fastRefresh()
    ]
}