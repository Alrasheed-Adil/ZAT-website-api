const Support = require("../models/support");

// Create a new support inquiry
const createSupportInquiry = async (req, res) => {
  const { name, email, phone, question } = req.body;

  try {
    const newSupportInquiry = new Support({ name, email, phone, question });
    await newSupportInquiry.save();
    res.status(201).json(newSupportInquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all support inquiries
const getAllSupportInquiries = async (req, res) => {
  try {
    const supportInquiries = await Support.find();
    res.status(200).json(supportInquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific support inquiry by ID
const getSupportInquiryById = async (req, res) => {
  try {
    const supportInquiry = await Support.findById(req.params.id);
    if (!supportInquiry)
      return res.status(404).json({ message: "Support inquiry not found" });
    res.status(200).json(supportInquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update the status of a support inquiry
const updateSupportInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedInquiry = await Support.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedInquiry)
      return res.status(404).json({ message: "Support inquiry not found" });

    res.status(200).json(updatedInquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a support inquiry
const deleteSupportInquiry = async (req, res) => {
  try {
    const deletedInquiry = await Support.findByIdAndDelete(req.params.id);
    if (!deletedInquiry)
      return res.status(404).json({ message: "Support inquiry not found" });
    res.status(200).json({ message: "Support inquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSupportInquiry,
  getAllSupportInquiries,
  getSupportInquiryById,
  updateSupportInquiryStatus,
  deleteSupportInquiry,
};
