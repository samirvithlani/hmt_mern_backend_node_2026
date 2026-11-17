const mongoose = require("mongoose")

//function
const DbConnection = ()=>{

    mongoose.connect("mongodb://127.0.0.1:27017/hmt_node").then(()=>{
        console.log(`db connected...`)
    }).catch((err)=>{
        console.log("error in db connection",err)
    })

}
module.exports = DbConnection