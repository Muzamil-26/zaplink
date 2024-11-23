import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    username:{
        type:String,
        required:true,
        minLength:6,
        unique:true,
    },
    name:{
        type:String,
        default:'',
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    image:[
        {
            type:String,
            default:'',
        }
    ],


},{
    timestamps:true,
});



export const Userschema = mongoose.model("User",UserSchema);