# 🔧 Panduan Mengatasi Masalah Environment Variables

## 🚨 Masalah: Password dari .env.local Tidak Berfungsi

### Penyebab Umum:

1. **File .env.local tidak ada atau tidak terbaca**
2. **Format file tidak benar**
3. **Server tidak di-restart setelah menambah environment variables**
4. **NEXT*PUBLIC* prefix tidak digunakan**
5. **File berada di lokasi yang salah**

## ✅ Solusi Lengkap

### 1. Periksa File .env.local

Pastikan file `.env.local` ada di root project (folder `D:\spin`):

```bash
# Lokasi file yang benar
D:\spin\.env.local
```

### 2. Format File yang Benar

File `.env.local` harus memiliki format:

```bash
# ✅ Format yang benar
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=spincity2024

# ❌ Format yang salah
NEXT_PUBLIC_ADMIN_USERNAME = admin
NEXT_PUBLIC_ADMIN_PASSWORD = spincity2024
```

**PENTING**:

- Tidak ada spasi di sekitar `=`
- Tidak ada tanda kutip
- Harus ada prefix `NEXT_PUBLIC_` untuk client-side

### 3. Restart Development Server

Setelah mengubah `.env.local`, **WAJIB** restart server:

```bash
# Stop server (Ctrl+C)
# Kemudian jalankan ulang
npm run dev
```

### 4. Debug Environment Variables

Gunakan komponen debug yang sudah dibuat:

1. Buka `http://localhost:3001/admin`
2. Klik tombol **"Check Environment Variables"**
3. Lihat hasil di console

### 5. Periksa Hasil Debug

Hasil yang diharapkan:

```json
{
  "NEXT_PUBLIC_ADMIN_USERNAME": "admin",
  "NEXT_PUBLIC_ADMIN_PASSWORD": "spincity2024",
  "NODE_ENV": "development"
}
```

Jika hasil `undefined`, berarti ada masalah dengan file atau format.

## 🔍 Troubleshooting Step by Step

### Step 1: Periksa File

```bash
# Di terminal, pastikan file ada
dir .env*

# Lihat isi file
type .env.local
```

### Step 2: Buat Ulang File

```bash
# Hapus file lama
del .env.local

# Buat file baru
echo NEXT_PUBLIC_ADMIN_USERNAME=admin > .env.local
echo NEXT_PUBLIC_ADMIN_PASSWORD=spincity2024 >> .env.local
```

### Step 3: Restart Server

```bash
# Stop server (Ctrl+C)
# Jalankan ulang
npm run dev
```

### Step 4: Test Login

1. Buka `http://localhost:3001/admin`
2. Login dengan: `admin` / `spincity2024`
3. Klik debug button untuk cek environment variables

## 🛠️ Alternatif Solusi

### 1. Hardcoded Credentials (Sementara)

Jika environment variables masih bermasalah, gunakan hardcoded:

```javascript
// Di src/components/AdminAuth.js
const CORRECT_USERNAME = "admin"
const CORRECT_PASSWORD = "spincity2024"
```

### 2. Server-Side Environment Variables

Untuk keamanan lebih baik, gunakan server-side:

```javascript
// pages/api/auth/login.js
export default function handler(req, res) {
  const { username, password } = req.body

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    res.status(200).json({ success: true })
  } else {
    res.status(401).json({ success: false })
  }
}
```

### 3. Next.js Config

Tambahkan di `next.config.js`:

```javascript
module.exports = {
  env: {
    NEXT_PUBLIC_ADMIN_USERNAME: process.env.NEXT_PUBLIC_ADMIN_USERNAME,
    NEXT_PUBLIC_ADMIN_PASSWORD: process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
  },
}
```

## 📋 Checklist Debugging

- [ ] File `.env.local` ada di root project
- [ ] Format file benar (tidak ada spasi di `=`)
- [ ] Menggunakan prefix `NEXT_PUBLIC_`
- [ ] Server di-restart setelah mengubah file
- [ ] Debug component menunjukkan nilai yang benar
- [ ] Login berfungsi dengan credentials yang benar

## 🎯 Kesimpulan

Masalah environment variables biasanya disebabkan oleh:

1. **File tidak ada atau format salah**
2. **Server tidak di-restart**
3. **Tidak menggunakan prefix NEXT*PUBLIC***

**Solusi tercepat**: Restart development server setelah mengubah `.env.local`

## 📞 Support

Jika masih bermasalah:

1. Periksa console browser (F12)
2. Lihat output debug component
3. Pastikan file `.env.local` ada dan format benar
4. Restart server dan coba lagi
