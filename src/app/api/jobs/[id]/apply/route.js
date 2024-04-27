import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";
import Application from "@/models/models.applicatins";

const { connect } = require("@/db/dbConfig");

connect();

export async function POST(req, res) {
  try {
    const url = req.url.split("/");
    const id = url[url.length - 2];
    const file_id = Math.floor(10000 + Math.random() * 90000);
    const formData = await req.formData();

    const file = formData.get("file");
    if (!file) {
      return NextResponse.json(
        { error: "No files received." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");

    if (!fs.existsSync(`${process.cwd()}/public/assets/${id}`)) {
      fs.mkdirSync(`${process.cwd()}/public/assets/${id}`);
    }

    await writeFile(
      path.join(
        process.cwd(),
        "public/assets/" + id + "/" + file_id + "_" + filename
      ),
      buffer
    );
    const newApplication = await Application({
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      url: `${process.cwd()}/public/assets/${id}/${file_id}_${filename}`,
      job_id: id,
    });

    await newApplication.save();

    return NextResponse.json({
      Message: "Success",
      status: 201,
      result: newApplication,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
