//model -->users collection bind
const mongoose =require("mongoose")
const Schema = mongoose.Schema //class 

const userSchema = new Schema({})

//userScheam -->bind --> users -->collection | table
module.exports = mongoose.model("users",userSchema)

//mongoose.model("users",userSchema)
//it will bind users table with userschema so
//db.users.find() ---> userSchema.find()