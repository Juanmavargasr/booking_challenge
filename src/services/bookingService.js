const User = require("../models/bookingModel");
const db = require("../db");

//middleware to check all data is complete to create the user.
const validateBookingCreation = async (req, res, next) => {
  const { name, email, origin, destination, departureDate, timeDuration } =
    req.body;
  try {
    if (
      !name ||
      !email ||
      !origin ||
      !destination ||
      !departureDate ||
      !timeDuration
    ) {
      res.status(400).json({ error: "all data is mandatory" });
    } else {
      console.log("Succesfully booking creation");
      next();
    }
  } catch (error) {
    console.error("Error validating create info:", error);
    res.status(500).json({ error: "error validating create info" });
  }
};

//middleware to check the url contains an BooingID number.
const validateBookingGetting = async (req, res, next) => {
  const bookingID = req.params.bookingID;
  try {
    if (!bookingID) {
      res.status(404).json({ error: "bookingID is mandatory" });
    } else {
      next();
    }
  } catch (error) {
    console.error("Error getting booking info:", error);
    res.status(500).json({ error: "error getting booking info" });
  }
};

module.exports = { validateBookingCreation, validateBookingGetting };
