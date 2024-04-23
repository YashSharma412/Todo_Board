const express = require("express");
const app = express();
const port = 3500;

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
    console.log(`http://localhost:${port}`);
})

app.get("/", (req, res)=>{
    return res.send("Hello World");
})