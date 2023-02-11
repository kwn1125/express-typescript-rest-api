import { Router } from "express";
import * as sampleController from "../controllers/sample.controller";

const sampleRouter = Router();

sampleRouter.route("/").get(sampleController.getSample);

export default sampleRouter;
