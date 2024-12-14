
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Data from "@/models/data";

export async function POST(req) {
  try {
    const { name, email, day, Paid_amount, Time } = await req.json();
    await connectMongoDB();
    await Data.create({ name, email, car_name, day, Paid_amount, Time });

    return NextResponse.json({ message: "Data is send ." }, { status: 201 });
    
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}