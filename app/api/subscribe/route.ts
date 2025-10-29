import { NextResponse } from "next/server";
import { query } from "@/lib/db";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 255;
const ALLOWED_SOURCES = ["homepage", "event", "footer"];

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    // Validate email type and format
    if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Validate email length
    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json({ error: "Email too long" }, { status: 400 });
    }

    // Validate source if provided
    if (source && !ALLOWED_SOURCES.includes(source)) {
      return NextResponse.json({ error: "Invalid source" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    
    // Insert subscriber into database
    const insertResult = await query(
      `INSERT INTO subscribers (email, source)
       VALUES ($1, $2)
       ON CONFLICT (email) DO NOTHING`,
      [normalizedEmail, source ?? null]
    );

    if (insertResult.rowCount === 0) {
      return NextResponse.json(
        { message: "You're already on the list" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Thanks! We'll keep you updated." },
      { status: 201 }
    );
  } catch (error) {
    // Log error securely without exposing sensitive details
    console.error("Newsletter subscription error:", {
      timestamp: new Date().toISOString(),
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}