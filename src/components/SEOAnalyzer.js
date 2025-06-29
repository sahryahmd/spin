"use client"
import React, { useState, useEffect } from "react"
import {
  analyzeSearchConsoleData,
  generateContentSuggestions,
  exportKeywordsForSEO,
} from "@/utils/seoUtils"

const SEOAnalyzer = () => {
  const [analysis, setAnalysis] = useState(null)
  const [contentSuggestions, setContentSuggestions] = useState([])
  const [seoData, setSeoData] = useState(null)
  const [error, setError] = useState(null)
  const [searchConsoleData, setSearchConsoleData] = useState([])

  useEffect(() => {
    // Ambil data real dari Google Search Console
    const fetchData = async () => {
      try {
        const response = await fetch("/api/search-console")
        const result = await response.json()
        if (result.success && result.data && result.data.length > 0) {
          setSearchConsoleData(result.data)
          // Analisis data Search Console
          const searchConsoleAnalysis = analyzeSearchConsoleData(result.data)
          setAnalysis(searchConsoleAnalysis)
        } else {
          setError("No data from Google Search Console.")
        }
      } catch (err) {
        setError("Failed to fetch data from Google Search Console.")
      }

      // Ambil keyword dari localStorage
      const savedKeywords = JSON.parse(
        localStorage.getItem("websiteKeywords") || "[]"
      )
      const keywordList = savedKeywords.map((k) => k.keyword)

      // Generate content suggestions
      const suggestions = generateContentSuggestions(keywordList)
      setContentSuggestions(suggestions)

      // Generate SEO data
      const seo = exportKeywordsForSEO()
      setSeoData(seo)
    }
    fetchData()
  }, [])

  const exportSEOReport = () => {
    const report = {
      analysis: analysis,
      contentSuggestions: contentSuggestions,
      seoData: seoData,
      generatedAt: new Date().toISOString(),
    }

    const dataStr = JSON.stringify(report, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = "seo-analysis-report.json"
    link.click()
  }

  if (error) {
    return (
      <div className="text-center py-8 bg-orange-100 text-orange-700 rounded-lg border border-orange-200 max-w-xl mx-auto mt-8">
        <strong>Gagal mengambil data dari Google Search Console.</strong>
        <br />
        {error}
        <br />
        Silakan cek koneksi API atau pastikan property sudah ada data.
      </div>
    )
  }

  if (!analysis) {
    return (
      <div className="text-center py-8 bg-orange-50 text-orange-600 rounded-lg border border-orange-200 max-w-xl mx-auto mt-8 flex flex-col items-center gap-2">
        <svg
          className="animate-spin h-6 w-6 text-orange-500 mb-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
        <span>Memuat analisis SEO dari Google Search Console...</span>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">SEO Analyzer</h2>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">
            High Performing Keywords
          </h3>
          <p className="text-2xl font-bold text-green-600">
            {analysis.highPerformingKeywords.length}
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Opportunities</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {analysis.opportunities.length}
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800 mb-2">Low Performing</h3>
          <p className="text-2xl font-bold text-red-600">
            {analysis.lowPerformingKeywords.length}
          </p>
        </div>
      </div>

      {/* High Performing Keywords */}
      {analysis.highPerformingKeywords.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-green-800">
            ✅ High Performing Keywords
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysis.highPerformingKeywords.map((item, index) => (
              <div
                key={index}
                className="border border-green-200 rounded-lg p-4 bg-green-50"
              >
                <h4 className="font-medium text-green-800">{item.keyword}</h4>
                <div className="text-sm text-green-600 mt-2">
                  <p>Clicks: {item.clicks}</p>
                  <p>Position: {item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Opportunities */}
      {analysis.opportunities.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-yellow-800">
            🚀 Optimization Opportunities
          </h3>
          <div className="space-y-4">
            {analysis.opportunities.map((item, index) => (
              <div
                key={index}
                className="border border-yellow-200 rounded-lg p-4 bg-yellow-50"
              >
                <h4 className="font-medium text-yellow-800">{item.keyword}</h4>
                <p className="text-sm text-yellow-700 mt-1">{item.reason}</p>
                <p className="text-sm text-yellow-600 mt-1">
                  <strong>Action:</strong> {item.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Low Performing Keywords */}
      {analysis.lowPerformingKeywords.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-red-800">
            ⚠️ Low Performing Keywords
          </h3>
          <div className="space-y-4">
            {analysis.lowPerformingKeywords.map((item, index) => (
              <div
                key={index}
                className="border border-red-200 rounded-lg p-4 bg-red-50"
              >
                <h4 className="font-medium text-red-800">{item.keyword}</h4>
                <p className="text-sm text-red-700 mt-1">{item.reason}</p>
                <p className="text-sm text-red-600 mt-1">
                  <strong>Action:</strong> {item.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content Suggestions */}
      {contentSuggestions.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-blue-800">
            📝 Content Suggestions
          </h3>
          <div className="space-y-4">
            {contentSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="border border-blue-200 rounded-lg p-4 bg-blue-50"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-blue-800">
                      {suggestion.keyword}
                    </h4>
                    <p className="text-sm text-blue-700 mt-1">
                      {suggestion.suggestion}
                    </p>
                    <span className="inline-block mt-2 px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded">
                      {suggestion.contentType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SEO Recommendations */}
      {analysis.recommendations.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-purple-800">
            💡 SEO Recommendations
          </h3>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <ul className="space-y-2">
              {analysis.recommendations.map((rec, index) => (
                <li key={index} className="text-purple-700 flex items-start">
                  <span className="mr-2">•</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* SEO Data Export */}
      {seoData && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            📊 SEO Data
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">
                  Current Keywords ({seoData.keywords.length})
                </h4>
                <div className="flex flex-wrap gap-2">
                  {seoData.keywords.slice(0, 10).map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                  {seoData.keywords.length > 10 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{seoData.keywords.length - 10} more
                    </span>
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">
                  Content Suggestions ({seoData.recommendations.length})
                </h4>
                <p className="text-sm text-gray-600">
                  {seoData.recommendations.length} content suggestions generated
                  based on your keywords.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Export Button */}
      <div className="flex justify-center">
        <button
          onClick={exportSEOReport}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Export SEO Report
        </button>
      </div>
    </div>
  )
}

export default SEOAnalyzer
