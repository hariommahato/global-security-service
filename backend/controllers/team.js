import Team from "../models/team";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();

export const createTeamData = catchAsyncErrors(async (req, res, next) => {
  const { images, fullname, post, description } = req.body;

  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "globalSecurity",
    width: "150",
    crop: "scale",
  });

  const teamdata = await Team.create({
    fullname,
    post,
    description,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({ success: true });
});
// get Details
export const getTeamDetails = catchAsyncErrors(async (req, res, next) => {
  const teamdata = await Team.findById(req.query.id);
  res.status(200).json({
    success: true,
    teamdata,
  });
});
export const getAllTeam = catchAsyncErrors(async (req, res, next) => {
  const teamdata = await Team.find();
  res.status(200).json({
    success: true,
    teamdata,
  });
});

export const updateTeam = catchAsyncErrors(async (req, res, next) => {
  const data = await Team.findById(req.query.id);
  const { fullname,post,description, images } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.fullname = fullname;
    data.post=post,
    data.description=description
  }

  if (images !== "") {
    const result = await cloudinary.v2.uploader.upload(images, {
      folder: "globalsecurity",
      width: "150",
      crop: "scale",
    });
    await cloudinary.v2.uploader.destroy(data?.images?.public_id);
    data.images = { public_id: result.public_id, url: result.secure_url };
  }

  await data.save();

  res.status(200).json({
    success: true,
  });
});

export const deleteTeam = catchAsyncErrors(async (req, res, next) => {
  const teamdata = await Team.findById(req.query.id);
  if (!teamdata) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
  const imageId = teamdata.images.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
  await Team.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
