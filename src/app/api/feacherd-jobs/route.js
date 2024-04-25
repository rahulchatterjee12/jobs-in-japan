import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    return NextResponse.json({
      message: "Working",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
