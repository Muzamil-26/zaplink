import express from "express";
const router = express.Router();
import { HandleRegister } from "../controllers/RegisterControllers.js";
import { ZapUrl } from "../controllers/ZapUrl.js";
import {RedirectURL} from '../controllers/RedirectURL.js';
import { HandleHistory } from "../controllers/HandleHistory.js";

router.route("/register").post(HandleRegister);
router.route("/api/zapurl").post(ZapUrl);
router.route("/api/redirect").post(RedirectURL);
router.route("/api/history").post(HandleHistory);
router.route("/api/v1/get").get(Handleget);

export default router;
