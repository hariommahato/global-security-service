import homeWelcome from "../models/homewelcome";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();

export const createWelcomeData = catchAsyncErrors(async (req, res, next) => {
  const { description, images } = req.body;

  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "globalSecurity",
  });

  const welcomedata = await homeWelcome.create({
    description,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({ success: true });
});
// get Details
export const getWelcomeDetails = catchAsyncErrors(async (req, res, next) => {
  const welcomedata = await homeWelcome.findById(req.query.id);
  res.status(200).json({
    success: true,
    welcomedata,
  });
});
export const getAllWelcomeData = catchAsyncErrors(async (req, res, next) => {
  const welcomedata = await homeWelcome.find();
  res.status(200).json({
    success: true,
    welcomedata,
  });
});

export const updatelWelcomeData = catchAsyncErrors(async (req, res, next) => {
  const data = await homeWelcome.findById(req.query.id);
  const { description, images } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.description = description;
  }

  if (images !== "") {
    const result = await cloudinary.v2.uploader.upload(images, {
      folder: "globalsecurity",
    
    });
    await cloudinary.v2.uploader.destroy(data?.images?.public_id);
    data.images = { public_id: result.public_id, url: result.secure_url };
  }

  await data.save();

  res.status(200).json({
    success: true,
  });
});

export const deleteWelcomeData = catchAsyncErrors(async (req, res, next) => {
  const welcomedata = await homeWelcome.findById(req.query.id);
  if (!welcomedata) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
  const imageId = welcomedata.images.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
  await homeWelcome.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
