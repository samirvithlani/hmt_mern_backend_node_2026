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

//localhost:3000/user/10
app.get("/user/:id",(req,res)=>{
    console.log("user api called")

    const id = req.params.id;

    res.json({
        message:"user api called with id"+id
    })
})

//localhost:3000/raj/20000/tcs
app.get("/user/:name/:salary/:compnay",(req,res)=>{

    const name = req.params.name
    const salary = req.params.salary
    const compnay = req.params.compnay

    res.json({
        message:`${name} is working in ${compnay} with salary ${salary}`
    })

})


//server creation
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})