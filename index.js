const express = require('express')
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log('server is running on ${PORT}')
})

// End point 1
app.get('/string', (req, res)=>{
    res.send('Hello, World')
})

// End point 2
app.get("/object",(req, res)=>{
    res.json({title: "Object", body:"This is my string request"})
})

// End point 3

app.get("/array",(req, res)=>{
    res.json({[
        "id": 1
        "name": "Gbenga Alabi",
        "username": "Leetech",
        "email": "alagbengae@gmail.com",
        "phone": +2348061284148,
    
   ]}
)
})