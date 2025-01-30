import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  // Here you would typically validate the user credentials against your database
  // For this example, we'll use a mock user
  if (email === "user@example.com" && password === "password") {
    const cookieStore = await cookies();
    cookieStore.set("user", JSON.stringify({ email }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return NextResponse.redirect(new URL("/", request.url));
  } else {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
}
