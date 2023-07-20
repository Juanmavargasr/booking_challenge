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
  const bookingID = req.params.bookingID;
  const { name, email, origin, destination, departureDate, timeDuration } =
    req.body;
  var updatedBooking = new Booking({
    bookingID: bookingID,
    name,
    email,
    origin,
    destination,
    departureDate,
    timeDuration,
  });
};

module.exports = { createBooking, getBooking };
