const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    departureDate: { type: Date, required: true },
    timeDuration: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date },
  },
  { collection: "bookings" }
);

bookingSchema.pre("save", function (next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
});

bookingSchema.pre("save", function (next) {
  if (!this.modifiedAt) {
    this.modifiedAt = new Date();
  }
  next();
});

bookingSchema.pre("updateOne", function (next) {
  this.update({}, { $set: { modifiedAt: new Date() } });
  next();
});

bookingSchema.post("updateOne", function () {
  this.findOneAndUpdate({}, { $set: { modifiedAt: new Date() } });
});

const Booking = mongoose.model("booking", bookingSchema);

module.exports = Booking;
