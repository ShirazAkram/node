const express = require("express")

const app = express()
const port = 8080
app.listen(port, () => {
    console.log("App listen on" , port)
})

app.get("/home", (req, resp) => {
    console.log("Browser requested")
    resp.send("<h1>Hello Browser</h1>")
})

app.post("/home", (req, resp) => {
    console.log("Browser requested" , "POST API")
    resp.send("Hello Request")
})

app.delete("/home", (req, resp) => {
    console.log("Adding delete req by govind")
    resp.send("asdfghjkl")
})