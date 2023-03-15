import Client from "../models/client";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";

cloudinaryConfig();
export const createClient = catchAsyncErrors(async (req, res, next) => {
  let images = req.body.images;
  let imageLinks = [];

  for (let i = 0; i < images?.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "globalSecurity",
    });
    imageLinks.push({ public_id: result.public_id, url: result.secure_url });
  }
  req.body.images = imageLinks;
  const client = await Client.create(req.body);
  res.status(200).json({
    success: true,
  });
});

// get single carousel details
export const getClientDetails = async (req, res) => {
  try {
    const client = await Client.findById(req.query.id);
    if (!client) {
      res.status(400).json({
        success: false,
        message: "No Client found With this id",
      });
    } else {
      res.status(200).json({
        success: true,
        client,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getAllClient = async (req, res) => {
  try {
    let client = await Client.find();
    res.status(200).json({
      success: true,
      client,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const updateClient = async (req, res) => {
  try {
    let client = await Client.findById(req.query.id);
    if (!client) {
      res.status(404).json({
        success: false,
        message: "Client Not Found",
      });
    } else {
      let images = [];
      if (typeof req.body.images === "string") {
        images.push(req.body.images);
      } else {
        images = req.body.images;
      }

      if (images !== undefined) {
        // Deleting Images From Cloudinary
        for (let i = 0; i < client.images.length; i++) {
          await cloudinary.v2.uploader.destroy(client.images[i].public_id);
        }

        const imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
          const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "globalSecurity",
          });

          imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
          });
        }

        req.body.images = imagesLinks;
      }
      client = await Client.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      res.status(200).json({
        success: true,
        client,
      });
    }
  } catch (error) {}
};

export const deleteClient = catchAsyncErrors(async (req, res, next) => {
  const client = await Client.findById(req.query.id);

  if (!client)
    return res.status(404).json({
      message: "Client Not Found",
    });

  for (let i = 0; i < client.images.length; i++) {
    await cloudinary.v2.uploader.destroy(client.images[i].public_id);
  }
  await Client.findByIdAndDelete(req.query.id);
  res.status(200).json({ success: true });
});
