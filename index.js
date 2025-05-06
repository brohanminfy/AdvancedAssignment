import express from "express"
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello")
})

// By Midhilesh - Contacts issue solved
app.get('/Contacts',(req,res)=>{
    res.send("Contacts page")
})


// By Rohan - Home issue done
app.get('/home',(req,res)=>{
    res.send("This is Home Page")
})
// By samrath - About issue solved
app.get('/about',(req,res)=>{
    res.send("About")

})


app.listen(3000,()=>{
    console.log("Running")
})
