const Booking = require("../models/bookingModel");
const db = require("../db");
require("dotenv").config();
const generateBooking = require("../utils/generateBooking");

//Api to create a booking, itself check to don't cloning a booking number, use an imported function to generate the booking number
const createBooking = async (req, res) => {
  const { name, email, origin, destination, departureDate, timeDuration } =
    req.body;

  try {
    searchBook = 0;
    bookingExist = true;

    do {
      var bookingID = generateBooking();
      var newBooking = new Booking({
        bookingID: bookingID,
        name,
        email,
        origin,
        destination,
        departureDate,
        timeDuration,
      });
      const existingBookin = await Booking.findOne({ bookingID });
      if (!existingBookin) {
        bookingExist = false;
      }
    } while (bookingExist === true);
    const savedBooking = await newBooking.save();
    console.log("succesfully booking creation");
    res.status(201).json({
      Message: "succesfully booking creation",
      Booking: newBooking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(400).json({ error: "Error creating booking" });
  }
};

//Api to get a booking
const getBooking = async (req, res) => {
  try {
    const bookingID = req.params.bookingID;
    const booking = await Booking.findOne({ bookingID: bookingID });
    if (!booking) {
      res.status(404).json({ error: "Booking not found" });
    } else {
      console.log("successfully obtaining the booking");
      res.status(200).json({
        Message: "This is your Booking info",
        Booking: booking,
      });
    }
  } catch (error) {
    console.error("Error getting booking:", error);
    res.status(400).json({ error: "Error getting booking" });
  }
};

//Api to update a booking
const putBooking = async (req, res) => {
  try {
    const bookingID = req.params.bookingID;
    const { name, email, origin, destination, departureDate, timeDuration } =
      req.body;
    var updatedBooking = {
      name,
      email,
      origin,
      destination,
      departureDate,
      timeDuration,
    };
    const saveUpdatedBooking = await Booking.findOneAndUpdate(
      { bookingID: bookingID },
      updatedBooking,
      { new: true }
    );
    console.log("Succesfully Booking update");
    res.status(200).json({
      Message: "succesfully booking update",
      Updated_booking: updatedBooking,
    });
  } catch (error) {
    console.error("error updating booking", error);
    res.status(500).json({
      error: "error updating booking",
    });
  }
};

//Api to delete a booking
const deleteBooking = async (req, res) => {
  try {
    const bookingID = req.params.bookingID;
    const bookingDeleted = await Booking.findOneAndDelete({
      bookingID: bookingID,
    });
    console.log("Succesfully Booking delete");
    res.status(200).json({
      Message: "Succesfully Booking delete",
      Deleted_booking: bookingDeleted,
    });
  } catch (error) {
    console.error("error deleting booking", error);
    res.status(500).json({
      error: "error deleting booking",
    });
  }
};

module.exports = { createBooking, getBooking, putBooking, deleteBooking };
