import express from "express"
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello")
})

// By samrath - About issue solved
app.get('/about',(req,res)=>{
    res.send("About")
})

app.listen(3000,()=>{
    console.log("Running")
})