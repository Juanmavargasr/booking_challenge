const Booking = require("../models/bookingModel");
const db = require("../db");
require("dotenv").config();

const createBooking = async (req, res) => {
  const { name, email, origin, destination, departureDate, timeDuration } =
    req.body;

  try {
    const newBooking = new Booking({
      name,
      email,
      origin,
      destination,
      departureDate,
      timeDuration,
    });

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

const getBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const booking = await Booking.findById({ _id: id });
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

const putBooking = async (req, res) => {
  try {
    const id = req.params.id;
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
    const saveUpdatedBooking = await Booking.findByIdAndUpdate(
      { _id: id },
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

const deleteBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const BookingDeleted = await Booking.findByIdAndRemove({
      _id: id,
    });
    console.log("Succesfully Booking delete");
    res.status(200).json({
      Message: "succesfully booking update",
      Deleted_booking: BookingDeleted,
    });
  } catch (error) {
    console.error("error deleting booking", error);
    res.status(500).json({
      error: "error deleting booking",
    });
  }
};

module.exports = { createBooking, getBooking, putBooking, deleteBooking };
