// // app/api/auth/login/route.ts
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const { username, password } = await request.json();

//   if (
//     username === process.env.ADMIN_USERNAME &&
//     password === process.env.ADMIN_PASSWORD
//   ) {
//     // On success, create a response and set a secure cookie.
//     const response = NextResponse.json({ message: "Success" });
//     response.cookies.set("admin-auth", "true", {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       path: "/",
//       maxAge: 60 * 60 * 24, // 1 day expiration
//     });
//     return response;
//   } else {
//     return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
//   }
// }

///******************************************* */

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Validate .env values exist
  const storedUsername = process.env.ADMIN_USERNAME;
  const storedHash = process.env.ADMIN_PASSWORD_HASH;

  if (!storedUsername || !storedHash) {
    return NextResponse.json({ message: "Server misconfiguration" }, { status: 500 });
  }

  // Logging for dev purposes only
  // console.log("Received username:", username);
  // console.log("Received password:", password);
  // console.log("Expected username:", storedUsername);
  // console.log("Stored hash:", storedHash);

  // Username check
  if (username !== storedUsername) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  // Password check
  const isPasswordValid = await bcrypt.compare(password, storedHash);
  if (!isPasswordValid) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  // Success response with secure cookie
  const response = NextResponse.json({ message: "Login success" });
  response.cookies.set("admin-auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}

