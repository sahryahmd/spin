import { NextResponse } from "next/server"
import { google } from "googleapis"

export async function GET(request) {
  try {
    console.log("Testing Google APIs availability...")

    // Check what APIs are available
    const availableApis = Object.keys(google)
    console.log("Available Google APIs:", availableApis)

    // Test Search Console API
    let searchConsoleStatus = "Not available"
    try {
      const searchConsole = google.searchconsole("v1")
      searchConsoleStatus = "Available"
      console.log("Search Console API methods:", Object.keys(searchConsole))
    } catch (error) {
      searchConsoleStatus = `Error: ${error.message}`
    }

    // Test Webmasters API
    let webmastersStatus = "Not available"
    try {
      const webmasters = google.webmasters("v3")
      webmastersStatus = "Available"
      console.log("Webmasters API methods:", Object.keys(webmasters))
    } catch (error) {
      webmastersStatus = `Error: ${error.message}`
    }

    return NextResponse.json({
      success: true,
      data: {
        availableApis,
        searchConsoleStatus,
        webmastersStatus,
        googleapisVersion: google.VERSION || "Unknown",
      },
      message: "Google APIs availability check completed",
    })
  } catch (error) {
    console.error("Error testing Google APIs:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        message: "Failed to test Google APIs",
      },
      { status: 500 }
    )
  }
}
