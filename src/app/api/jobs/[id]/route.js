import Job from "@/models/models.jobs";
import { NextResponse } from "next/server";

const { connect } = require("@/db/dbConfig");

connect();

export async function GET(req, res) {
  try {
    const url = req.url.split("/");
    const id = url[url.length - 1];

    const job = await Job.findOne({ _id: id });

    return NextResponse.json({
      message: "Job found",
      success: true,
      data: job,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
