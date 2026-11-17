const express = require("express");
const app = express();
const DbConnection = require("./src/utils/DBConnection")
DbConnection() //function call

const userSchema = require("./src/models/UserModel")
//userSchema == db.users

//localhost:3000/userdb
app.get("/userdb",async(req,res)=>{

    //db.users.find()
    const users = await userSchema.find()
    res.json({
        message:"data fetched from db",
        data:users
    })

})





const user = {
  id: 1,
  name: "ram",
  age: 23,
  status: true,
};
const users = [
  {
    id: 1,
    name: "ram",
    age: 23,
    status: true,
  },
  {
    id: 2,
    name: "lakshman",
    age: 24,
    status: true,
  },
  {
    id: 3,
    name: "sita",
    age: 21,
    status: true,
  },
  {
    id: 4,
    name: "ravan",
    age: 25,
    status: false,
  },
];

//localhost:3000/test
app.get("/test", (req, res) => {
  console.log("test api called...");
  res.send("test api called..");
});

//localhost:3000/user
app.get("/user", (req, res) => {
  //res.json(user)
  res.json({ message: "user fetched", data: user });
});

//localhost:3000/users
app.get("/users", (req, res) => {
  res.json({
    message: "users fetched",
    users: users,
  });
});

//localhost:3000/student/ram
app.get("/student/:name", (req, res) => {
  //req.params
  const name = req.params.name;
  res.json({ message: "student api called..", name: name });
});

//localhost:3000/student1/ram/78/gtu
app.get("/student1/:name/:marks/:uni", (req, res) => {
  const name = req.params.name;
  const marks = req.params.marks;
  const uni = req.params.uni;
  res.json({
    message: "student fetched.",
    data: `${name} is studing in ${uni} and get ${marks} marks`,
  });
});

//localhost:3000/finduser/1
app.get("/finduser/:id", (req, res) => {
  const id = req.params.id; //3
  //js find
  const foundUser = users.find((u) => {
    return u.id == id;
  });
  if (foundUser) {
    res.json({
      message: "user found",
      data: foundUser,
    });
  }
  else{
    res.json({message:"user not found"})
  }
});

const PORT = 3000;
//server create
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
