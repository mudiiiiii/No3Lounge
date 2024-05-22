const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  job: {
    type: String,
    required: true,
  },

  first_name: { 
    type: String,
     required: true 
    },
  last_name: {
     type: String,
      required: true 
    },
  email: { 
    type: String,
     required: true 
    },
  phone: {
     type: String, 
     required: true 
    },
  previous_role: {
     type: String,
      required: true 
    },
  years_worked: { 
    type: Number,
     required: true, min: 0 
    },
  work_summary: {
     type: String, 
     required: true
     },
  cv: { 
    type: String,
     required: true 
    },
});

const applications = mongoose.model('applications', applicationSchema);

module.exports = applications;
