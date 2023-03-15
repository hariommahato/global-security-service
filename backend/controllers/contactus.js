import Contact from "../models/contactus";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
cloudinaryConfig();

export const createContact = catchAsyncErrors(async (req, res, next) => {
  const { fullname, number, email, subject, enquiry } = req.body;

  const contactdata = await Contact.create({
    fullname,
    number,
    email,
    subject,
    enquiry,
  });

  res.status(200).json({ success: true });
});
// get Details
export const getContactDetails = catchAsyncErrors(async (req, res, next) => {
  const contactdata = await Contact.findById(req.query.id);
  res.status(200).json({
    success: true,
    contactdata,
  });
});
export const getAllContactData = catchAsyncErrors(async (req, res, next) => {
  const contactdata = await Contact.find();
  res.status(200).json({
    success: true,
    contactdata,
  });
});

export const updateContact = catchAsyncErrors(async (req, res, next) => {
  const data = await Contact.findById(req.query.id);
  const { fullname, email, number, subject, enquiry } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.fullname = fullname;
    (data.email = email),
      (data.number = number),
      (data.subject = subject),
      (data.enquiry = enquiry);
  }

  await data.save();

  res.status(200).json({
    success: true,
  });
});

export const deleteContact = catchAsyncErrors(async (req, res, next) => {
  const contactdata = await Contact.findById(req.query.id);
  if (!contactdata) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }

  await Contact.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
