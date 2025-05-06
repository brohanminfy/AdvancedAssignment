const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get('/Contacts',(req,res)=>{
    res.send("Contacts page")
})


app.listen(3000,()=>{
    console.log("Running")
})