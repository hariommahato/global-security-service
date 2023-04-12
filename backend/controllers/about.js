import About from "../models/about";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();

export const createAboutData = catchAsyncErrors(async (req, res, next) => {
  const { images,message } = req.body;

  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "globalSecurity",
   
  });

  const aboutdata = await About.create({
    message,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({ success: true });
});
// get Details
export const getAboutDetails = catchAsyncErrors(async (req, res, next) => {
  const aboutdata = await About.findById(req.query.id);
  res.status(200).json({
    success: true,
    aboutdata,
  });
});
export const getAllAbout = catchAsyncErrors(async (req, res, next) => {
  const aboutdata = await About.find();
  res.status(200).json({
    success: true,
    aboutdata,
  });
});

export const updateAbout = catchAsyncErrors(async (req, res, next) => {
  const data = await About.findById(req.query.id);
  const { message, images } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.message = message;
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

export const deleteAbout = catchAsyncErrors(async (req, res, next) => {
  const aboutdata = await About.findById(req.query.id);
  if (!aboutdata) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
  const imageId = aboutdata.images.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
  await About.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
