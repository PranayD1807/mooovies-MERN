import express from "express";
import userRoute from "./user.route.js";
import mediaRoute from "./media.route.js";
import personRoute from "./person.route.js";
import reviewRoute from "./review.route.js";
import responseHandler from "../handlers/response.handler.js";

const router = express.Router();

router.use("/user", userRoute);
router.use("/person", personRoute);
router.use("/reviews", reviewRoute);
router.use("/:mediaType", mediaRoute);
router.all("*", (req, res, next) => {
  console.log(req.url);
  responseHandler.notfound(res);
});
export default router;
