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

router.get("/:id", validateBookingGetting, getBooking);

router.put("/:id", putBooking);

router.delete("/:id", validateBookingGetting, deleteBooking);

module.exports = router;
