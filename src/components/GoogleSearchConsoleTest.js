"use client"

import { useState, useEffect } from "react"
import {
  FiRefreshCw,
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle,
  FiInfo,
} from "react-icons/fi"

export default function GoogleSearchConsoleTest() {
  const [status, setStatus] = useState("idle")
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [lastTest, setLastTest] = useState(null)
  const [guidance, setGuidance] = useState(null)

  const testConnection = async () => {
    setStatus("testing")
    setError(null)
    setGuidance(null)

    try {
      const response = await fetch("/api/search-console")
      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setData(result)
      } else {
        setStatus("error")
        setError(result.error || "Unknown error occurred")
        setData(result) // Still set data if it's fallback data

        // Check if there's guidance for permission issues
        if (result.guidance && Array.isArray(result.guidance)) {
          setGuidance(result.guidance)
        }
      }
    } catch (err) {
      setStatus("error")
      setError(err.message)
    }

    setLastTest(new Date())
  }

  useEffect(() => {
    testConnection()
  }, [])

  const getStatusIcon = () => {
    switch (status) {
      case "testing":
        return <FiRefreshCw className="animate-spin text-blue-500" />
      case "success":
        return <FiCheckCircle className="text-green-500" />
      case "error":
        return <FiXCircle className="text-red-500" />
      default:
        return <FiAlertCircle className="text-gray-500" />
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "testing":
        return "Testing connection..."
      case "success":
        return "Connected successfully"
      case "error":
        return "Connection failed"
      default:
        return "Ready to test"
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case "success":
        return "text-green-600"
      case "error":
        return "text-red-600"
      case "testing":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Google Search Console Connection Test
        </h3>
        <button
          onClick={testConnection}
          disabled={status === "testing"}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <FiRefreshCw className={status === "testing" ? "animate-spin" : ""} />
          Test Connection
        </button>
      </div>

      <div className="space-y-4">
        {/* Status Display */}
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
          {getStatusIcon()}
          <span className={`font-medium ${getStatusColor()}`}>
            {getStatusText()}
          </span>
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-700 text-sm">
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}

        {/* Permission Guidance */}
        {guidance && (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <div className="flex items-start gap-3">
              <FiInfo className="text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-yellow-800 mb-2">
                  Permission Setup Required
                </h4>
                <p className="text-yellow-700 text-sm mb-3">
                  The service account needs proper permissions in Google Search
                  Console. Follow these steps:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-700">
                  {guidance.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
                <div className="mt-3 p-2 bg-yellow-100 rounded text-xs text-yellow-800">
                  <strong>Service Account Email:</strong>{" "}
                  spincityagoraseo@spincity-agora-seo.iam.gserviceaccount.com
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Data Source Info */}
        {data && (
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-blue-700 text-sm">
                <strong>Data Source:</strong>{" "}
                {data.source === "google_search_console"
                  ? "Google Search Console (Real Data)"
                  : "Mock Data (Fallback)"}
              </p>
              {data.dateRange && (
                <p className="text-blue-700 text-sm mt-1">
                  <strong>Date Range:</strong> {data.dateRange.startDate} to{" "}
                  {data.dateRange.endDate}
                </p>
              )}
              {data.totalRows && (
                <p className="text-blue-700 text-sm mt-1">
                  <strong>Total Keywords:</strong> {data.totalRows}
                </p>
              )}
              <p className="text-blue-700 text-sm mt-1">
                <strong>Last Updated:</strong>{" "}
                {new Date(data.lastUpdated).toLocaleString()}
              </p>
            </div>

            {/* Sample Data Preview */}
            {data.data && data.data.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Sample Data (Top 5):
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-md">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          Query
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          Clicks
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          Impressions
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          CTR (%)
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          Position
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {data.data.slice(0, 5).map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-3 py-2 text-sm text-gray-900">
                            {item.query}
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-900">
                            {item.clicks}
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-900">
                            {item.impressions}
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-900">
                            {item.ctr}%
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-900">
                            {item.position}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Last Test Time */}
        {lastTest && (
          <div className="text-xs text-gray-500">
            Last tested: {lastTest.toLocaleString()}
          </div>
        )}
      </div>
    </div>
  )
}
