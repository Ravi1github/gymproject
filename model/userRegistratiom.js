const mongoose=require("mongoose");
const validator=require("validator");

//schema defining
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        reqired:true,
        minlength:2,

    },
   
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
    
        required:true,
        
    },
   
    
});

//creating new collection
const User= new mongoose.model("User",userSchema);

//exporting the collection
module.exports=User;