import { ZapLinkSchema } from "../models/shorturl.js";

export const ZapUrl= async(req,res)=>{

    

    try {
        const {longUrl,randomString} = req.body;


        const ifexistshorturl = await ZapLinkSchema.findOne({shorturl:randomString});

        if(ifexistshorturl){
            return res.json({
                message:"URL Already Exist! Try again ?",
            });
        }


        const response = await ZapLinkSchema.create({
            longurl:longUrl,
            shorturl:randomString,
        });

        if(!response){
            return res.json({
                message:"Error while inserting",
            })
        }

        return res.json({
            message:"Data recieved from zap link",
            success:true,
            response,
        });


    } catch (error) {
        console.log("Error while insertig URL in DB");
        return res.json({
            message:"Error while insertig URL in DB",
            data,
            response
        });
    }

}