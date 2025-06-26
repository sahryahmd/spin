"use client"
import { useState } from "react"

export default function PromoForm() {
  const [form, setForm] = useState({
    nama: "",
    tanggal: "",
    bulan: "",
    nomor: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")
    const endpoint =
      "https://v1.nocodeapi.com/sahryahmd/google_sheets/JfLrLpFUPgtykdFc?tabId=Sheet1"
    const data = [[form.nama, form.tanggal, form.bulan, form.nomor]]
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      setStatus("success")
      setForm({ nama: "", tanggal: "", bulan: "", nomor: "" })
    } else {
      setStatus("error")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 420,
        margin: "3rem auto 2rem auto",
        background: "rgba(255,255,255,0.95)",
        padding: 32,
        borderRadius: 18,
        boxShadow:
          "0 6px 32px 0 rgba(117,31,70,0.10), 0 1.5px 8px 0 rgba(117,31,70,0.08)",
        border: "2px solid #751F46",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          marginBottom: 8,
          color: "#751F46",
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: 1,
        }}
      >
        Promo Form
      </h2>
      <p
        style={{
          color: "#751F46",
          fontWeight: 500,
          marginBottom: 20,
          textAlign: "center",
          fontSize: 16,
          lineHeight: 1.5,
        }}
      >
        🎉 Get exclusive promos from Spin City!
        <br />
        Fill in your details below and enjoy our special offers just for you.
      </p>
      <input
        name="nama"
        placeholder="Full Name"
        value={form.nama}
        onChange={handleChange}
        required
        style={{
          marginBottom: 16,
          width: "100%",
          padding: 12,
          borderRadius: 8,
          border: "1.5px solid #751F46",
          fontSize: 16,
        }}
      />
      <input
        name="tanggal"
        type="number"
        min="1"
        max="31"
        placeholder="Day of Birth (1-31)"
        value={form.tanggal}
        onChange={handleChange}
        required
        style={{
          marginBottom: 16,
          width: "100%",
          padding: 12,
          borderRadius: 8,
          border: "1.5px solid #751F46",
          fontSize: 16,
        }}
      />
      <input
        name="bulan"
        type="text"
        placeholder="Month of Birth (e.g. January)"
        value={form.bulan}
        onChange={handleChange}
        required
        style={{
          marginBottom: 16,
          width: "100%",
          padding: 12,
          borderRadius: 8,
          border: "1.5px solid #751F46",
          fontSize: 16,
        }}
      />
      <input
        name="nomor"
        type="tel"
        placeholder="Phone Number"
        value={form.nomor}
        onChange={handleChange}
        required
        style={{
          marginBottom: 20,
          width: "100%",
          padding: 12,
          borderRadius: 8,
          border: "1.5px solid #751F46",
          fontSize: 16,
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          width: "100%",
          padding: 12,
          background: status === "success" ? "#2ecc40" : "#751F46",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 18,
          letterSpacing: 1,
          cursor: status === "loading" ? "not-allowed" : "pointer",
          transition: "background 0.2s",
        }}
      >
        {status === "loading" ? "Submitting..." : "Submit"}
      </button>
      {status === "success" && (
        <p style={{ color: "#2ecc40", marginTop: 16, fontWeight: 600 }}>
          Your data has been submitted successfully!
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#e74c3c", marginTop: 16, fontWeight: 600 }}>
          Failed to submit data. Please try again.
        </p>
      )}
    </form>
  )
}
