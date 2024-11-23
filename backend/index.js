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
    origin: 'http://localhost:3000', // Adjust this to the correct frontend origin
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
    ConnectDB("mongodb://127.0.0.1:27017");
    console.log(`Server Running On Port 4000`);
})