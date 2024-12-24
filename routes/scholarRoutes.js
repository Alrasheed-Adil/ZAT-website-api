const express = require("express");
const {
  createScholar,
  getAllScholars,
  getScholarById,
  updateScholar,
  deleteScholar,
  updateScholarStatus,
} = require("../controllers/scholarController");

const router = express.Router();

// Routes
router.post("/", createScholar);
router.get("/", getAllScholars);
router.get("/:id", getScholarById);
router.put("/:id", updateScholar);
router.patch("/:id/status", updateScholarStatus);
router.delete("/:id", deleteScholar);

module.exports = router;
