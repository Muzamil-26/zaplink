import { ZapLinkSchema } from "../models/shorturl.js";

export const HandleHistory = async(req,res)=>{

    try {
        // const session = req.body;
        const email = req.body.session.user.email;

        console.log("emailllllllll",email);

        if (!email) {
            return res.status(400).json({
              message: "Please provide a session",
              success: false,
            });
          }
        const response = await ZapLinkSchema.find({email});

        console.log(response);
        if(!response){
            return res.json({
                message:"Reponse Error In Mongo DB",
                success:false,
            });
        }

        return res.json({
            response
        });



        
    } catch (error){
        console.log("Error While Fetching History Data");
        return res.json({
            Message:"Error while Fetching History Data",
        })
        
    }

}

export const Handleget = async(req,res)=>{
    res.json({
        message:"Hello bhai ! from handleget request."
    });
}

