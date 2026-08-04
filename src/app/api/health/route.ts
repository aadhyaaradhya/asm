import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "AadhyaAradhya ASM API Service is running",
    timestamp: new Date().toISOString(),
  });
}
