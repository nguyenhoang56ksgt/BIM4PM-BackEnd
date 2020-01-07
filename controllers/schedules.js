const async = require('async');
const ErrorResponse = require('../utils/errorReponse');
const asyncHandler = require('../middleware/asyncHandler');
const Schedule = require('./../models/Schedule.js');
const RevitElement = require('../models/RevitElement');

//@desc     Create Revit schedule
//@route    POST /api/v1/projects/:projectId/schedules
//@access   Private
exports.createSchedule = asyncHandler(async (req, res, next) => {
  const { projectId } = req.params;

  req.body.user = req.user._id;

  const schedule = await Schedule.create(req.body);

  res.status(201).json({
    success: true,
    data: schedule
  });
});

