"use client"
import React, { useState, useEffect } from "react"
import KeywordManager from "@/components/KeywordManager"
import SEOAnalyzer from "@/components/SEOAnalyzer"
import AdminAuth from "@/components/AdminAuth"
import ApiTest from "@/components/ApiTest"
import GoogleSearchConsoleTest from "@/components/GoogleSearchConsoleTest"
import Navbar from "@/components/Navbar"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("keywords")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      const authenticated = sessionStorage.getItem("adminAuthenticated")
      const loginTime = sessionStorage.getItem("adminLoginTime")

      if (authenticated && loginTime) {
        // Check if session is still valid (1 hour)
        const loginDate = new Date(loginTime)
        const now = new Date()
        const hoursDiff = (now - loginDate) / (1000 * 60 * 60)

        if (hoursDiff < 1) {
          setIsAuthenticated(true)
        } else {
          // Session expired
          sessionStorage.removeItem("adminAuthenticated")
          sessionStorage.removeItem("adminLoginTime")
          setIsAuthenticated(false)
        }
      } else {
        setIsAuthenticated(false)
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuthenticated")
    sessionStorage.removeItem("adminLoginTime")
    setIsAuthenticated(false)
  }

  const handleLogin = (success) => {
    setIsAuthenticated(success)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <AdminAuth onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header dengan Logout */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* API Test Component */}
          <ApiTest />

          {/* Google Search Console Test Component */}
          <div className="mb-6">
            <GoogleSearchConsoleTest />
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-white rounded-lg p-1 mb-6 shadow-sm">
            <button
              onClick={() => setActiveTab("keywords")}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "keywords"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              Keyword Manager
            </button>
            <button
              onClick={() => setActiveTab("seo")}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "seo"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              SEO Analyzer
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "keywords" && <KeywordManager />}
          {activeTab === "seo" && <SEOAnalyzer />}
        </div>
      </div>
    </div>
  )
}
