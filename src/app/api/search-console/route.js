import { NextResponse } from "next/server"
import { google } from "googleapis"

// Contoh implementasi API untuk Google Search Console
// Untuk implementasi real, Anda perlu setup OAuth2 dan Google Search Console API

export async function GET(request) {
  try {
    console.log("=== GOOGLE SEARCH CONSOLE API DEBUG START ===")

    // Debug environment variables
    console.log("Environment variables check:")
    console.log("GOOGLE_CLIENT_EMAIL:", process.env.GOOGLE_CLIENT_EMAIL)
    console.log(
      "GOOGLE_PRIVATE_KEY:",
      process.env.GOOGLE_PRIVATE_KEY ? "SET" : "NOT SET"
    )
    console.log("GOOGLE_SITE_URL:", process.env.GOOGLE_SITE_URL)

    // Get current date and 30 days ago
    const endDate = new Date().toISOString().split("T")[0]
    const startDate = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0]

    console.log("Date range:", startDate, "to", endDate)

    // Ambil credential dari environment variable
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const siteUrl = process.env.GOOGLE_SITE_URL

    if (!clientEmail || !privateKey || !siteUrl) {
      throw new Error(
        "Google Search Console credentials are not set in environment variables."
      )
    }

    console.log("✅ Using correct service account credentials")
    console.log("✅ Client email:", clientEmail)
    console.log("✅ Private key length:", privateKey.length)
    console.log("✅ Private key starts with:", privateKey.substring(0, 50))
    console.log(
      "✅ Private key ends with:",
      privateKey.substring(privateKey.length - 50)
    )

    // Create service account credentials object
    const credentials = {
      type: "service_account",
      project_id: "spincity-agora-seo",
      private_key_id: "59ae0c7729d6a03413039e921bf4b0cd0e31f4cd",
      private_key: privateKey,
      client_email: clientEmail,
      client_id: "110887208829848386806",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${clientEmail}`,
      universe_domain: "googleapis.com",
    }

    // Create auth client using GoogleAuth
    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
    })

    console.log("✅ GoogleAuth client created, getting authenticated client...")
    const authClient = await auth.getClient()
    console.log("✅ Authenticated client obtained successfully")

    // Use Webmasters (Search Console) API
    const webmasters = google.webmasters("v3")
    console.log("✅ Webmasters client created")

    let response
    try {
      response = await webmasters.searchanalytics.query({
        auth: authClient,
        siteUrl: siteUrl,
        requestBody: {
          startDate: startDate,
          endDate: endDate,
          dimensions: ["query"],
          rowLimit: 100,
          startRow: 0,
        },
      })
      console.log("✅ Webmasters API call succeeded")
    } catch (error) {
      console.log("❌ Webmasters API call failed:", error.message)
      if (error.message.includes("does not have sufficient permission")) {
        console.log(
          "🔒 Permission error detected - service account needs proper permissions"
        )
        return NextResponse.json(
          {
            success: false,
            error: error.message,
            message:
              "Service account permissions issue. Please check Google Search Console settings.",
            guidance: [
              "1. Go to Google Search Console",
              "2. Select your site: https://spincityagora.my.id",
              "3. Go to Settings > Users and permissions",
              "4. Add the service account email: spincityagoraseo@spincity-agora-seo.iam.gserviceaccount.com",
              "5. Grant 'Full' or 'Restricted' permissions",
              "6. Wait a few minutes for permissions to propagate",
            ],
            data: [],
            lastUpdated: new Date().toISOString(),
            source: "mock_data_fallback",
          },
          { status: 200 }
        )
      }
      // Fallback to mock data for other errors
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          message:
            "Gagal mengambil data dari Google Search Console, menggunakan data mock",
          data: [],
          lastUpdated: new Date().toISOString(),
          source: "mock_data_fallback",
        },
        { status: 200 }
      )
    }

    console.log("✅ Webmasters API response received")
    console.log("Response data:", response.data)

    // Transform data
    const data =
      response.data.rows?.map((row) => ({
        query: row.keys[0],
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: parseFloat((row.ctr * 100).toFixed(1)),
        position: parseFloat(row.position.toFixed(1)),
      })) || []

    console.log("✅ Data transformed successfully, rows:", data.length)

    // Jika sukses, return data dari Google Search Console
    return NextResponse.json({
      success: true,
      data: data,
      message: "Data berhasil diambil dari Google Search Console",
      lastUpdated: new Date().toISOString(),
      source: "google_search_console",
      dateRange: { startDate, endDate },
      totalRows: response.data.rows?.length || 0,
    })
  } catch (error) {
    console.error("❌ Google Search Console API Error:", error)
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      status: error.status,
      stack: error.stack,
    })

    console.log("=== GOOGLE SEARCH CONSOLE API DEBUG END ===")

    // Tidak ada lagi fallback ke mock data, langsung return error
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        message: "Gagal mengambil data dari Google Search Console",
      },
      { status: 500 }
    )
  }
}

// Untuk implementasi real dengan Google Search Console API:
/*
import { google } from 'googleapis'

const searchConsole = google.searchconsole('v1')

export async function GET(request) {
  try {
    // Setup authentication
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
    })

    // Get current date and 30 days ago
    const endDate = new Date().toISOString().split('T')[0]
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

    // Fetch data from Google Search Console
    const response = await searchConsole.searchAnalytics.query({
      auth,
      siteUrl: 'https://spincityagora.my.id',
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: ['query'],
        rowLimit: 100,
        startRow: 0
      }
    })

    // Transform data
    const data = response.data.rows?.map(row => ({
      query: row.keys[0],
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: parseFloat((row.ctr * 100).toFixed(1)),
      position: parseFloat(row.position.toFixed(1))
    })) || []

    return NextResponse.json({
      success: true,
      data: data,
      message: "Data berhasil diambil dari Google Search Console",
      lastUpdated: new Date().toISOString(),
      source: "google_search_console",
      dateRange: { startDate, endDate }
    })

  } catch (error) {
    console.error('Google Search Console API Error:', error)
    return NextResponse.json({
      success: false,
      error: error.message,
      message: "Gagal mengambil data dari Google Search Console"
    }, { status: 500 })
  }
}
*/
