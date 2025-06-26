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
          marginBottom: 24,
          color: "#751F46",
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: 1,
        }}
      >
        Promo Form
      </h2>
      <input
        name="nama"
        placeholder="Nama"
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
        placeholder="Tanggal Lahir"
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
        placeholder="Bulan Lahir (misal: Januari)"
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
        placeholder="Nomor Handphone"
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
        {status === "loading" ? "Mengirim..." : "Kirim"}
      </button>
      {status === "success" && (
        <p style={{ color: "#2ecc40", marginTop: 16, fontWeight: 600 }}>
          Data berhasil dikirim!
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#e74c3c", marginTop: 16, fontWeight: 600 }}>
          Gagal mengirim data.
        </p>
      )}
    </form>
  )
}
