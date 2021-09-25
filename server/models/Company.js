const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedCompanies` array in User.js
const companySchema = new Schema({
  // ID number given by the API.
  companyId: {
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
  environmentGrade: {
    type: String,
  },
  environmentLevel: {
    type: String,
  },
  socialGrade: {
    type: String,
  },
  socialLevel: {
    type: String,
  },
  governanceGrade: {
    type: String,
  },
  governanceLevel: {
    type: String,
  },
  totalGrade: {
    type: String,
  },
  totalLevel: {
    type: String,
  },
  lastProcessingDate: {
    type: String,
  },
  environmentScore: {
    type: Number,
  },
  socialScore: {
    type: Number,
  },
  governanceScore: {
    type: Number,
  },
  total: {
    type: Number,
  },
  goals: [goalsSchema],
});

module.exports = companySchema;