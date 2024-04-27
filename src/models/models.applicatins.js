import mongoose from "mongoose";

// Define the schema for the job listing
const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  job_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Jobs",
    required: true,
  },
});

const Application =
  mongoose.models.applications ||
  mongoose.model("applications", applicationSchema);

export default Application;
