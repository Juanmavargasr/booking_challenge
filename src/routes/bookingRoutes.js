const express = require("express");
const {
  createBooking,
  getBooking,
} = require("../controllers/bookingController");
const {
  validateBookingCreation,
  validateBookingGetting,
} = require("../services/bookingService");

const router = express.Router();

router.post("/", validateBookingCreation, createBooking);

router.get("/:bookingID", validateBookingGetting, getBooking);

module.exports = router;
