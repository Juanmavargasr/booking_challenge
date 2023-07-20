const User = require("../models/bookingModel");
const db = require("../db");

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

const validateBookingGetting = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (!id) {
      res.status(404).json({ error: "id is mandatory" });
    } else {
      next();
    }
  } catch (error) {
    console.error("Error getting booking info:", error);
    res.status(500).json({ error: "error getting booking info" });
  }
};

module.exports = { validateBookingCreation, validateBookingGetting };
