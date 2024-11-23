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
    clicks:{
        type:Number,
        default:0,
    },


});

export const ZapLinkSchema = mongoose.model("ShortURlData",ShortUrl);