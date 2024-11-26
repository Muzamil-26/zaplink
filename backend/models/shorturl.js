import mongoose from "mongoose";

const ShortUrl = mongoose.Schema({

    shorturl:{
        type:String,
        required:true,
    },
    longurl:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        default:'',
    },
    clicks:{
        type:Number,
        default:0,
    },


},{
    timestamps:true,
});

export const ZapLinkSchema = mongoose.model("ShortURlData",ShortUrl);