import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, email, password } = body;
    console.log("Username: " + username + " Email: " + email);

    // const newUser = await prisma.user.create({
    //   data: {
    //     username,
    //     email,
    //     password,
    //   },
    // });
    // console.log(newUser)

    return NextResponse.json({ success: true});
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ success: false, error: "Error creating user" }, { status: 500 });
  }
}
