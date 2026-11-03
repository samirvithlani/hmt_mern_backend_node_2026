const express = require("express")
//create a referance of express 
const app = express()


//GET API CREATE...

//localhost:3000/test
app.get("/test",(req,res)=>{

    console.log("test api called...")
    res.send("test call...")
})

const user ={
    id:1,
    name:"raj",
    age:23,
    salary:23000
}
//localhost:3000/user
app.get("/user",(req,res)=>{

  //  res.json(user)
  res.json({message:"user fetched",data:user})
})

var users =[
    {id:1,name:"raj",age:23},
    {id:2,name:"rajvi",age:21},
    {id:3,name:"jay",age:22},
    {id:4,name:"parth",age:25},

]

//localhost:3000/users
app.get("/users",(req,res)=>{
    res.json({
        message:"users fetched",
        data:users
    })
})


//server creation
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})