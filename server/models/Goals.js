const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the Company's `goals` array in Company.js
const goalsSchema = new Schema({
  // ID number given by the API.
  goalsId: {
    type: Number,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  exchangeSymbol: {
    type: String,
  },
  stockSymbol: {
    type: String,
  },
  goals: [
    {
      timestamp: {
        type: String,
      },
      score: {
        type: Number,
      },
      sasb: {
        type: String,
      },
      sdg: {
        type: String,
      },
    },
  ],
});

module.exports = goalsSchema;