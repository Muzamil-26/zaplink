import express from 'express';
import router from './router/user.routes.js';
const app = express();
import cors from 'cors';
import {ConnectDB} from './config/db.config.js';
import cookieparser from 'cookie-parser';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: 'https://zaplink-mu.vercel.app', // Adjust this to the correct frontend origin
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());




app.get("/",(req,res)=>{
    return res.json({
        Message:"Hello Bhai!",
    });

});

app.use("/",router);


app.listen(4000,()=>{
    ConnectDB("mongodb+srv://muzamilkhan2610thc:muzamil___26@muzamilapi.tt0jb.mongodb.net/zaplink");
    console.log(`Server Running On Port 4000`);
})