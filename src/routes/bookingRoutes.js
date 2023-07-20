const express = require("express");
const {
  createBooking,
  getBooking,
  putBooking,
  deleteBooking,
} = require("../controllers/bookingController");
const {
  validateBookingCreation,
  validateBookingGetting,
} = require("../services/bookingService");

const router = express.Router();

router.post("/", validateBookingCreation, createBooking);

router.get("/:bookingID", validateBookingGetting, getBooking);

router.put("/:bookingID", validateBookingGetting, putBooking);

router.delete("/:bookingID", validateBookingGetting, deleteBooking);

module.exports = router;
