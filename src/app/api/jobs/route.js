import Job from "@/models/models.jobs";
import { NextResponse } from "next/server";

const { connect } = require("@/db/dbConfig");

connect();

export async function GET(req, res) {
  try {
    const url = new URL(req.url);
    const query = url.searchParams.get("q");
    const page = parseInt(url.searchParams.get("page")) || 1;
    const limit = parseInt(url.searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    let searchQuery = {};

    if (query) {
      searchQuery = {
        $or: [
          { title: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
        ],
      };
    }

    const jobs = await Job.find({ ...searchQuery })
      .skip(skip)
      .limit(limit);

    const count = await Job.countDocuments({ ...searchQuery });

    return NextResponse.json({
      success: true,
      data: jobs,
      count: count,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
