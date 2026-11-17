const express = require("express");
const app = express();

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
app.get("/users",(req,res)=>{
    res.json({
        message:"users fetched",
        users:users
    })
})

const PORT = 3000;
//server create
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
