import mongoose from "mongoose";

const ConnectDB =(DB_URI)=>{

    try {

        mongoose.connect(`${DB_URI}`).then(()=>{
            console.log(`DB Running On Port ${DB_URI}`);
        }).catch((err)=>{
            console.log("Error While Connecting",err);        })


    } catch (error) {
        console.log("Error While Connecting to DB");
    }



}

export {ConnectDB};