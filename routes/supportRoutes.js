const express = require("express");
const {
  createSupportInquiry,
  getAllSupportInquiries,
  getSupportInquiryById,
  updateSupportInquiryStatus,
  deleteSupportInquiry,
} = require("../controllers/supportController");

const router = express.Router();

// Routes
router.post("/", createSupportInquiry); // Create a new inquiry
router.get("/", getAllSupportInquiries); // Get all inquiries
router.get("/:id", getSupportInquiryById); // Get a specific inquiry
router.patch("/:id/status", updateSupportInquiryStatus); // Update inquiry status
router.delete("/:id", deleteSupportInquiry); // Delete an inquiry

module.exports = router;
