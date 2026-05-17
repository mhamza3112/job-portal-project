const Application = require('../models/Application');

const applyJob = async (req, res) => {
  try {
    const application = await Application.create(req.body);

    res.status(201).json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate('jobId');

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  applyJob,
  getApplications
};