const mongoose=require("mongoose");

mongoose.set('strictQuery', false);                  
mongoose.connect("mongodb://127.0.0.1/dynamicproject").then(()=> {
   console.log("connected successfully ");
   
}).catch((err)=> {

    console.log("error occured")
});