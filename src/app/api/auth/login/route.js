import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { username, password } = await request.json()

    // Credentials disimpan di server-side (aman)
    const ADMIN_CREDENTIALS = {
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
    }

    if (!ADMIN_CREDENTIALS.username || !ADMIN_CREDENTIALS.password) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin credentials are not set in environment variables.",
        },
        { status: 500 }
      )
    }

    // Verifikasi credentials
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      // Generate session token (dalam production, gunakan JWT)
      const sessionToken = `admin_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`

      return NextResponse.json({
        success: true,
        message: "Login berhasil",
        sessionToken: sessionToken,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Username atau password salah",
        },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server",
      },
      { status: 500 }
    )
  }
}
