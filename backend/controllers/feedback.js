import Feedback from "../models/feedback";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
cloudinaryConfig();

export const createFeedback = catchAsyncErrors(async (req, res, next) => {
  const { fullname, message } = req.body;

  const feedbackData = await Feedback.create({
    fullname,
    message,
  });

  res.status(200).json({ success: true });
});
// get Details
export const getFeedbackDetails = catchAsyncErrors(async (req, res, next) => {
  const feedbackdata = await Feedback.findById(req.query.id);
  res.status(200).json({
    success: true,
    feedbackdata,
  });
});
export const getAllFeedback = catchAsyncErrors(async (req, res, next) => {
  const feedbackdata = await Feedback.find();
  res.status(200).json({
    success: true,
    feedbackdata,
  });
});

export const updateFeedback = catchAsyncErrors(async (req, res, next) => {
  const data = await Feedback.findById(req.query.id);
  const { fullname, message } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.fullname = fullname;
    data.message = message;
  }

  await data.save();

  res.status(200).json({
    success: true,
  });
});

export const deleteFeedback = catchAsyncErrors(async (req, res, next) => {
  const feedbackdata = await Feedback.findById(req.query.id);
  if (!feedbackdata) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }

  await Feedback.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
