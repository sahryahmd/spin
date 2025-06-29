# 🔗 Panduan Setup Google Search Console API

## 📊 **Status Data Saat Ini**

### ❌ **Data Statis (Mock)**

- Data yang digunakan sekarang adalah **simulasi**
- **Tidak real-time** dari Google Search Console
- **Tidak akan update** otomatis
- **Tidak akurat** untuk analisis SEO yang sebenarnya

### ✅ **Target: Data Dinamis (Real)**

- Data real dari Google Search Console API
- **Real-time** dan selalu update
- **Akurat** untuk analisis SEO
- **Terintegrasi** dengan data website Anda

## 🚀 **Setup Google Search Console API**

### Step 1: Google Cloud Console Setup

1. **Buka Google Cloud Console**

   ```
   https://console.cloud.google.com/
   ```

2. **Buat Project Baru**

   - Klik "Select a project" → "New Project"
   - Nama: "SPIN CITY AGORA SEO"
   - Klik "Create"

3. **Enable Search Console API**
   - Menu → "APIs & Services" → "Library"
   - Cari "Search Console API"
   - Klik "Enable"

### Step 2: Create Service Account

1. **Buat Service Account**

   - Menu → "APIs & Services" → "Credentials"
   - Klik "Create Credentials" → "Service Account"
   - Nama: "search-console-api"
   - Description: "API untuk SPIN CITY AGORA"

2. **Download JSON Key**
   - Klik service account yang dibuat
   - Tab "Keys" → "Add Key" → "Create new key"
   - Pilih "JSON"
   - Download file JSON

### Step 3: Google Search Console Setup

1. **Buka Google Search Console**

   ```
   https://search.google.com/search-console
   ```

2. **Add Property**

   - Klik "Add property"
   - Masukkan: `https://spincityagora.my.id`
   - Verifikasi ownership

3. **Add Service Account**
   - Settings → "Users and permissions"
   - Klik "Add user"
   - Email: [service-account-email]@[project-id].iam.gserviceaccount.com
   - Role: "Full" atau "Owner"

### Step 4: Environment Variables

1. **Upload JSON Key ke Vercel**

   - Buka project di Vercel
   - Settings → "Environment Variables"
   - Tambahkan:
     ```
     GOOGLE_APPLICATION_CREDENTIALS_JSON=[isi-file-json]
     ```

2. **Atau simpan di local**
   - Buat file `.env.local`:
     ```
     GOOGLE_APPLICATION_CREDENTIALS_JSON={"type":"service_account",...}
     ```

### Step 5: Update Code

1. **Uncomment API Code**

   - Buka `src/app/api/search-console/route.js`
   - Uncomment kode Google Search Console API
   - Comment kode mock data

2. **Install Dependencies**
   ```bash
   npm install googleapis
   ```

## 🔧 **Implementasi Real-Time Data**

### 1. **API Route yang Sudah Dibuat**

```javascript
// src/app/api/search-console/route.js
import { google } from "googleapis"

export async function GET() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON),
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  })

  const searchConsole = google.searchconsole("v1")

  const response = await searchConsole.searchAnalytics.query({
    auth,
    siteUrl: "https://spincityagora.my.id",
    requestBody: {
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      dimensions: ["query"],
      rowLimit: 100,
    },
  })

  return NextResponse.json({
    success: true,
    data: response.data.rows,
    source: "google_search_console",
  })
}
```

### 2. **Auto Refresh Data**

```javascript
// Auto refresh setiap 1 jam
useEffect(() => {
  const interval = setInterval(() => {
    fetchSearchConsoleData()
  }, 60 * 60 * 1000) // 1 jam

  return () => clearInterval(interval)
}, [])
```

### 3. **Real-Time Updates**

```javascript
// WebSocket atau Server-Sent Events untuk real-time
const eventSource = new EventSource("/api/search-console/stream")
eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data)
  setSearchConsoleData(data)
}
```

## 📈 **Keuntungan Data Real**

### ✅ **Real-Time Analytics**

- Data selalu update
- Performa keyword real
- Analisis yang akurat

### ✅ **SEO Optimization**

- Identifikasi keyword potensial
- Monitor ranking changes
- Track competitor performance

### ✅ **Business Intelligence**

- Traffic analysis
- Conversion tracking
- ROI measurement

## 🚨 **Troubleshooting**

### Error: "API not enabled"

- Pastikan Search Console API sudah di-enable
- Cek project di Google Cloud Console

### Error: "Permission denied"

- Pastikan service account sudah ditambahkan di Search Console
- Cek role permissions

### Error: "Invalid credentials"

- Pastikan JSON key sudah benar
- Cek environment variables

### Error: "Site not found"

- Pastikan website sudah diverifikasi di Search Console
- Cek URL property

## 🎯 **Deployment ke Vercel**

### 1. **Environment Variables di Vercel**

```
GOOGLE_APPLICATION_CREDENTIALS_JSON={"type":"service_account",...}
```

### 2. **Build Settings**

- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`

### 3. **Domain Setup**

- Custom domain: `spincityagora.my.id`
- SSL certificate otomatis

## 📊 **Monitoring & Analytics**

### 1. **Data Dashboard**

- Real-time keyword performance
- Traffic analysis
- SEO recommendations

### 2. **Alerts & Notifications**

- Keyword ranking changes
- Traffic drops
- New opportunities

### 3. **Reports**

- Weekly SEO reports
- Monthly performance analysis
- Quarterly strategy review

## 🎉 **Hasil Setelah Setup**

### ✅ **Data Real-Time**

- Keyword performance dari Google Search Console
- Traffic analysis yang akurat
- SEO recommendations yang relevan

### ✅ **Auto Updates**

- Data update otomatis setiap jam
- Real-time monitoring
- Instant notifications

### ✅ **Production Ready**

- Aman untuk deploy ke Vercel
- Scalable dan reliable
- Professional SEO tool

## 📞 **Support**

Jika ada masalah setup:

1. Cek Google Cloud Console logs
2. Review Search Console permissions
3. Verify environment variables
4. Test API endpoints

**Setelah setup selesai, admin panel akan menggunakan data REAL dari Google Search Console!** 🚀
