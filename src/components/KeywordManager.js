"use client"
import React, { useState, useEffect } from "react"

const KeywordManager = () => {
  const [keywords, setKeywords] = useState([])
  const [newKeyword, setNewKeyword] = useState("")
  const [searchConsoleData, setSearchConsoleData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [dataSource, setDataSource] = useState("")

  useEffect(() => {
    // Load existing keywords from localStorage
    const savedKeywords = localStorage.getItem("websiteKeywords")
    if (savedKeywords) {
      setKeywords(JSON.parse(savedKeywords))
    }

    // Load real data from Google Search Console API
    fetchSearchConsoleData()
  }, [])

  const fetchSearchConsoleData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/search-console")
      const result = await response.json()

      if (result.data && result.data.length > 0) {
        setSearchConsoleData(result.data)
        setLastUpdated(result.lastUpdated)
        setDataSource(result.source)
        if (!result.success) {
          console.info("API returned error, but with data:", result.message)
        }
      } else {
        setSearchConsoleData([])
        setDataSource("")
        // Tampilkan error jika data kosong
        // console.error("No data received from API.")
      }
    } catch (error) {
      console.error("Error fetching Search Console data:", error)
      setSearchConsoleData([])
      setDataSource("")
    } finally {
      setIsLoading(false)
    }
  }

  const addKeyword = () => {
    if (newKeyword.trim()) {
      const keywordObj = {
        id: Date.now(),
        keyword: newKeyword.trim(),
        addedAt: new Date().toISOString(),
        source: "manual",
      }

      const updatedKeywords = [...keywords, keywordObj]
      setKeywords(updatedKeywords)
      localStorage.setItem("websiteKeywords", JSON.stringify(updatedKeywords))
      setNewKeyword("")
    }
  }

  const addFromSearchConsole = (query) => {
    const keywordObj = {
      id: Date.now(),
      keyword: query,
      addedAt: new Date().toISOString(),
      source: "search_console",
      performance: searchConsoleData.find((item) => item.query === query),
    }

    const updatedKeywords = [...keywords, keywordObj]
    setKeywords(updatedKeywords)
    localStorage.setItem("websiteKeywords", JSON.stringify(updatedKeywords))
  }

  const removeKeyword = (id) => {
    const updatedKeywords = keywords.filter((k) => k.id !== id)
    setKeywords(updatedKeywords)
    localStorage.setItem("websiteKeywords", JSON.stringify(updatedKeywords))
  }

  const exportKeywords = () => {
    const dataStr = JSON.stringify(keywords, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = "keywords.json"
    link.click()
  }

  const refreshData = () => {
    fetchSearchConsoleData()
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Keyword Manager</h2>

      {/* Data Source Info */}
      <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-orange-800">Data Source</h3>
            <p className="text-sm text-orange-600">
              {dataSource === "google_search_console"
                ? "✅ Real data from Google Search Console"
                : "⚠️ Tidak ada data (cek koneksi API atau data Search Console)"}
            </p>
            {lastUpdated && (
              <p className="text-xs text-orange-500 mt-1">
                Last updated: {new Date(lastUpdated).toLocaleString("id-ID")}
              </p>
            )}
          </div>
          <button
            onClick={refreshData}
            disabled={isLoading}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? "Loading..." : "🔄 Refresh Data"}
          </button>
        </div>
      </div>

      {/* Pesan jika data kosong */}
      {!isLoading && searchConsoleData.length === 0 && (
        <div className="text-orange-700 text-center py-4 bg-orange-100 rounded-lg border border-orange-200 mb-6">
          Belum ada data dari Google Search Console untuk periode ini.
          <br />
          Silakan cek kembali property di Search Console atau tunggu data masuk.
        </div>
      )}

      {/* Add New Keyword */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Tambah Keyword Baru</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            placeholder="Masukkan keyword baru..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyPress={(e) => e.key === "Enter" && addKeyword()}
          />
          <button
            onClick={addKeyword}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tambah
          </button>
        </div>
      </div>

      {/* Google Search Console Data */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">
          Query dari Google Search Console
        </h3>
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600">Loading data...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Query
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Clicks
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Impressions
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    CTR (%)
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Position
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchConsoleData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {item.query}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.clicks}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.impressions}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.ctr}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.position}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <button
                        onClick={() => addFromSearchConsole(item.query)}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                      >
                        Tambah
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Current Keywords */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            Keyword yang Sudah Ditambahkan
          </h3>
          <button
            onClick={exportKeywords}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Export Keywords
          </button>
        </div>

        {keywords.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            Belum ada keyword yang ditambahkan
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keywords.map((keyword) => (
              <div
                key={keyword.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-gray-800">
                    {keyword.keyword}
                  </span>
                  <button
                    onClick={() => removeKeyword(keyword.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    ✕
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  <p>
                    Ditambahkan:{" "}
                    {new Date(keyword.addedAt).toLocaleDateString("id-ID")}
                  </p>
                  <p>
                    Sumber:{" "}
                    {keyword.source === "search_console"
                      ? "Google Search Console"
                      : "Manual"}
                  </p>
                  {keyword.performance && (
                    <div className="mt-2 text-xs">
                      <p>Clicks: {keyword.performance.clicks}</p>
                      <p>Position: {keyword.performance.position}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SEO Recommendations */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 text-blue-800">
          Rekomendasi SEO
        </h3>
        <ul className="text-sm text-blue-700 space-y-2">
          <li>
            • Tambahkan keyword dengan performa tinggi dari Search Console
          </li>
          <li>• Fokus pada keyword dengan CTR tinggi dan posisi rendah</li>
          <li>• Gunakan keyword dalam meta tags, heading, dan konten</li>
          <li>• Update meta description dengan keyword target</li>
          <li>• Optimalkan URL dan internal linking</li>
        </ul>
      </div>
    </div>
  )
}

export default KeywordManager
