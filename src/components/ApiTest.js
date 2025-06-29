"use client"
import React, { useState } from "react"

const siteUrl = "spincityagora.my.id"

const ApiTest = () => {
  const [testResult, setTestResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const testApi = async () => {
    setIsLoading(true)
    setTestResult("")

    try {
      const response = await fetch("/api/search-console")
      const data = await response.json()

      const result = {
        success: data.success,
        source: data.source,
        dataCount: data.data?.length || 0,
        lastUpdated: data.lastUpdated,
        message: data.message,
        sampleData: data.data?.slice(0, 3) || [],
      }

      setTestResult(JSON.stringify(result, null, 2))
    } catch (error) {
      setTestResult(
        JSON.stringify(
          {
            error: error.message,
            status: "API Test Failed",
          },
          null,
          2
        )
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
      <h3 className="font-semibold text-green-800 mb-2">
        🔧 API Test - Google Search Console
      </h3>
      <button
        onClick={testApi}
        disabled={isLoading}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mb-2 disabled:opacity-50"
      >
        {isLoading ? "Testing..." : "Test API Connection"}
      </button>
      {testResult && (
        <pre className="text-xs bg-white p-2 rounded border overflow-auto">
          {testResult}
        </pre>
      )}
    </div>
  )
}

export default ApiTest
