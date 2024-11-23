import express from "express";
const router = express.Router();
import { HandleRegister } from "../controllers/RegisterControllers.js";
import { ZapUrl } from "../controllers/ZapUrl.js";
import {RedirectURL} from '../controllers/RedirectURL.js';

router.route("/register").post(HandleRegister);
router.route("/api/zapurl").post(ZapUrl);
router.route("/api/redirect").post(RedirectURL);

export default router;
