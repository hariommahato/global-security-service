import Services from "../models/services";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();

export const createServices = catchAsyncErrors(async (req, res, next) => {
  const { description, images, title } = req.body;

  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "globalSecurity",
    
  });

  const services = await Services.create({
    description,
    title,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({ success: true });
});
// get Details
export const getServicesDetails = catchAsyncErrors(async (req, res, next) => {
  const services = await Services.findById(req.query.id);
  res.status(200).json({
    success: true,
    services,
  });
});

export const getAllServices = catchAsyncErrors(async (req, res, next) => {
  const services = await Services.find();
  res.status(200).json({
    success: true,
    services,
  });
});

export const updateServices = catchAsyncErrors(async (req, res, next) => {
  const data = await Services.findById(req.query.id);
  const { description, images, title } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.description = description;
    data.title = title;
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

export const deleteServices = catchAsyncErrors(async (req, res, next) => {
  const services = await Services.findById(req.query.id);
  if (!services) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
  const imageId = services.images.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
  await Services.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
