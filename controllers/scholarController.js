const Scholar = require("../models/scholars");

// Create a new scholar
const createScholar = async (req, res) => {
    const { name, email, phone, country, major } = req.body;
  
    try {
      const newScholar = new Scholar({ name, email, phone, country, major });
      await newScholar.save();
      res.status(201).json(newScholar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Get all scholars
const getAllScholars = async (req, res) => {
  try {
    const scholars = await Scholar.find();
    res.status(200).json(scholars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific scholar by ID
const getScholarById = async (req, res) => {
  try {
    const scholar = await Scholar.findById(req.params.id);
    if (!scholar) return res.status(404).json({ message: "Scholar not found" });
    res.status(200).json(scholar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a scholar by ID
const updateScholar = async (req, res) => {
  try {
    const updatedScholar = await Scholar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedScholar) return res.status(404).json({ message: "Scholar not found" });
    res.status(200).json(updatedScholar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateScholarStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
  
      const updatedScholar = await Scholar.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
  
      if (!updatedScholar) {
        return res.status(404).json({ message: "Scholar not found" });
      }
  
      res.status(200).json(updatedScholar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Delete a scholar by ID
const deleteScholar = async (req, res) => {
  try {
    const deletedScholar = await Scholar.findByIdAndDelete(req.params.id);
    if (!deletedScholar) return res.status(404).json({ message: "Scholar not found" });
    res.status(200).json({ message: "Scholar deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createScholar,
  getAllScholars,
  getScholarById,
  updateScholar,
  deleteScholar,
  updateScholarStatus,
};
