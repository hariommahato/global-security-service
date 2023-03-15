import Faq from "../models/faq";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
cloudinaryConfig();

export const createFaq = catchAsyncErrors(async (req, res, next) => {
  const { title,description } = req.body;

  const faqdata = await Faq.create({
   title,description
  });

  res.status(200).json({ success: true });
});
// get Details
export const getfaqDetails = catchAsyncErrors(async (req, res, next) => {
  const faqdata = await Faq.findById(req.query.id);
  res.status(200).json({
    success: true,
    faqdata,
  });
});
export const getAllFaq = catchAsyncErrors(async (req, res, next) => {
  const faqdata = await Faq.find();
  res.status(200).json({
    success: true,
    faqdata,
  });
});

export const updateFaq = catchAsyncErrors(async (req, res, next) => {
  const data = await Faq.findById(req.query.id);
  const { title,description} = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.title=title,
    data.description=description
  }

  await data.save();
  res.status(200).json({
    success: true,
  });
});

export const deletFaq = catchAsyncErrors(async (req, res, next) => {
  const faqdata = await Faq.findById(req.query.id);
  if (!faqdata) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }

  await Faq.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
