import mongoose from "mongoose";

// Define the schema for the job listing
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  companyDescription: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  skillsRequired: {
    type: [String],
    required: true,
  },
  educationLevel: {
    type: String,
    required: true,
  },
  experienceLevel: {
    type: String,
  },
  applicationDeadline: {
    type: Date,
    required: true,
  },
  applicationMethod: {
    type: String,
    required: true,
  },
  jobTags: {
    type: [String],
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  additionalInformation: String,
  responsibilities: {
    type: [String],
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const Job = mongoose.models.jobs || mongoose.model("jobs", jobSchema);

export default Job;
