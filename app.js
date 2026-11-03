const express = require("express")
//create a referance of express 
const app = express()





//server creation
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})