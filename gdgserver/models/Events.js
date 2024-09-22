const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  venue: { type: String, required: true },
  description: { type: String, required: true },
  organizer: { type: String, required: true },
});

module.exports = mongoose.model("Event", eventSchema);
