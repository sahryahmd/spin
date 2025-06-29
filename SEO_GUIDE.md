# Panduan Lengkap: Menambahkan Keyword dari Google Search Console

## 📋 Daftar Isi

1. [Akses Google Search Console](#akses-google-search-console)
2. [Menggunakan Keyword Manager](#menggunakan-keyword-manager)
3. [Analisis SEO](#analisis-seo)
4. [Implementasi Keyword di Website](#implementasi-keyword-di-website)
5. [Best Practices](#best-practices)

## 🔍 Akses Google Search Console

### Langkah 1: Login ke Google Search Console

1. Kunjungi [Google Search Console](https://search.google.com/search-console)
2. Login dengan akun Google yang terhubung dengan website Anda
3. Pilih properti website `spincityagora.my.id`

### Langkah 2: Analisis Query Performance

1. Klik menu **"Performance"** di sidebar kiri
2. Pilih tab **"Queries"**
3. Atur rentang waktu (disarankan 3-6 bulan terakhir)
4. Perhatikan metrik berikut:
   - **Clicks**: Jumlah klik ke website
   - **Impressions**: Jumlah tampilan di hasil pencarian
   - **CTR (Click-Through Rate)**: Persentase klik dari tampilan
   - **Position**: Posisi rata-rata di hasil pencarian

### Langkah 3: Identifikasi Keyword Potensial

Fokus pada keyword dengan kriteria:

- ✅ **CTR tinggi (>10%)** + **Position rendah (>5)**: Opportunity untuk optimasi
- ✅ **Impressions tinggi (>500)** + **CTR rendah (<5%)**: Perlu perbaikan meta description
- ✅ **Clicks tinggi (>100)** + **Position baik (<3)**: Keyword yang sudah optimal

## 🛠️ Menggunakan Keyword Manager

### Akses Halaman Admin

1. Buka website Anda: `https://spincityagora.my.id/admin`
2. Anda akan melihat dua tab: **Keyword Manager** dan **SEO Analyzer**

### Menambahkan Keyword dari Search Console

1. Di tab **Keyword Manager**, scroll ke bagian **"Query dari Google Search Console"**
2. Tabel akan menampilkan data simulasi dari Search Console
3. Klik tombol **"Tambah"** di sebelah keyword yang ingin Anda tambahkan
4. Keyword akan otomatis tersimpan dengan informasi performa

### Menambahkan Keyword Manual

1. Di bagian **"Tambah Keyword Baru"**, ketik keyword yang ingin ditambahkan
2. Tekan **Enter** atau klik tombol **"Tambah"**
3. Keyword akan tersimpan dengan sumber "Manual"

### Mengelola Keyword

- **Lihat**: Semua keyword tersimpan di bagian **"Keyword yang Sudah Ditambahkan"**
- **Hapus**: Klik tombol **"✕"** di pojok kanan atas card keyword
- **Export**: Klik tombol **"Export Keywords"** untuk mengunduh data JSON

## 📊 Analisis SEO

### Menggunakan SEO Analyzer

1. Klik tab **"SEO Analyzer"**
2. Sistem akan menganalisis data dan menampilkan:

#### Performance Overview

- **High Performing Keywords**: Keyword dengan performa baik
- **Opportunities**: Keyword yang berpotensi ditingkatkan
- **Low Performing**: Keyword yang perlu perbaikan

#### Detail Analisis

- **High Performing Keywords**: Keyword dengan clicks tinggi dan posisi baik
- **Optimization Opportunities**: Keyword dengan CTR tinggi tapi posisi rendah
- **Low Performing Keywords**: Keyword dengan impression tinggi tapi CTR rendah

#### Content Suggestions

Sistem akan memberikan saran konten berdasarkan keyword:

- **Bowling**: Tambahkan section khusus bowling
- **Billiard**: Buat section billiard dengan detail fasilitas
- **Bar/Lounge**: Tampilkan menu dan suasana
- **Jakarta**: Optimalkan informasi lokasi

### Export SEO Report

1. Klik tombol **"Export SEO Report"**
2. File JSON akan diunduh dengan data lengkap analisis

## 🌐 Implementasi Keyword di Website

### 1. Update Meta Tags

Keyword akan otomatis ditambahkan ke meta tags website:

```html
<meta
  name="keywords"
  content="bowling, billiard, bar, lounge, jakarta, spin city agora, ..."
/>
```

### 2. Update Structured Data

Structured data akan diperbarui dengan keyword baru:

```json
{
  "@type": "EntertainmentBusiness",
  "name": "SPIN CITY AGORA",
  "keywords": "bowling, billiard, bar, lounge, jakarta, ..."
}
```

### 3. Implementasi di Konten

Berdasarkan saran dari SEO Analyzer, tambahkan konten yang relevan:

#### Untuk Keyword "Bowling Jakarta"

```html
<section class="bowling-section">
  <h2>Bowling Jakarta - SPIN CITY AGORA</h2>
  <p>Temukan tempat bowling terbaik di Jakarta dengan fasilitas modern...</p>
  <!-- Tambahkan detail fasilitas, harga, booking -->
</section>
```

#### Untuk Keyword "Billiard Jakarta"

```html
<section class="billiard-section">
  <h2>Billiard Jakarta - Meja Billiard Terbaik</h2>
  <p>Nikmati permainan billiard dengan meja berkualitas tinggi...</p>
  <!-- Tambahkan informasi meja, turnamen -->
</section>
```

## 📈 Best Practices

### 1. Keyword Research

- **Fokus pada long-tail keywords**: "bowling jakarta pusat" vs "bowling"
- **Analisis kompetitor**: Lihat keyword yang digunakan kompetitor
- **Gunakan Google Trends**: Pantau tren keyword

### 2. Content Optimization

- **Natural placement**: Jangan over-stuff keyword
- **Semantic keywords**: Gunakan kata terkait (synonyms)
- **Internal linking**: Hubungkan halaman dengan keyword target

### 3. Technical SEO

- **Page speed**: Optimalkan kecepatan loading
- **Mobile-friendly**: Pastikan responsive design
- **Schema markup**: Gunakan structured data

### 4. Monitoring & Maintenance

- **Regular updates**: Update keyword setiap bulan
- **Performance tracking**: Pantau ranking dan traffic
- **Content refresh**: Update konten secara berkala

## 🔧 Integrasi dengan Google Search Console API

Untuk integrasi otomatis dengan Google Search Console API:

### 1. Setup API Credentials

```javascript
// Di file .env.local
GOOGLE_SEARCH_CONSOLE_CLIENT_ID = your_client_id
GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET = your_client_secret
GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN = your_refresh_token
```

### 2. Fetch Real Data

```javascript
// Ganti mockSearchConsoleData dengan data real
const fetchSearchConsoleData = async () => {
  const response = await fetch("/api/search-console/queries")
  const data = await response.json()
  return data
}
```

## 📞 Support

Jika ada pertanyaan atau masalah:

1. Periksa console browser untuk error
2. Pastikan localStorage tersedia
3. Cek koneksi internet untuk export data

## 🎯 Kesimpulan

Sistem ini membantu Anda:

- ✅ Mengelola keyword dari Google Search Console
- ✅ Menganalisis performa keyword
- ✅ Mendapatkan saran optimasi
- ✅ Mengimplementasikan keyword di website
- ✅ Meningkatkan ranking SEO

Dengan mengikuti panduan ini, website SPIN CITY AGORA akan memiliki optimasi SEO yang lebih baik dan dapat menarik lebih banyak traffic organik dari Google.
