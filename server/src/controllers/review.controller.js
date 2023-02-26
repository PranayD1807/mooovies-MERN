import responseHandler from "../handlers/response.handler";

import reviewModel from "../models/review.model";
const create = async (req, res) => {
  try {
    const { movieId } = req.params;
    const review = new reviewModel({
      user: req.user.id,
      movieId,
      ...req.body,
    });
    await review.save();
    responseHandler.created(res, {
      ...review._doc,
      id: review.id,
      user: req.user,
    });
  } catch (error) {
    responseHandler.error(res);
  }
};

const remove = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const review = await reviewModel.findOne({
      _id: reviewId,
      user: req.user.id,
    });
    if (!review) return responseHandler.notfound(res);
    await review.remove();
    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};

const getReviewsOfUser = async (req, res) => {
  try {
    const reviews = await reviewModel
      .find({
        user: req.user.id,
      })
      .sort("-createdAt");

    responseHandler.ok(res, reviews);
  } catch (error) {
    responseHandler.error(res);
  }
};

export default { create, remove, getReviewsOfUser };
