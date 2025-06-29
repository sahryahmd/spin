# 🔒 Panduan Keamanan Halaman Admin

## ⚠️ PERINGATAN PENTING

**JANGAN DEPLOY** halaman admin tanpa mengikuti panduan keamanan ini!

## 🛡️ Keamanan yang Sudah Ditambahkan

### 1. Authentication System

- ✅ Login form dengan username/password
- ✅ Session management (8 jam)
- ✅ Auto logout saat session expired
- ✅ Protected routes

### 2. Default Credentials

```
Username: admin
Password: spincity2024
```

## 🔧 Konfigurasi Keamanan

### 1. Environment Variables

Buat file `.env.local` di root project:

```bash
# Admin Panel Security
NEXT_PUBLIC_ADMIN_USERNAME=your_secure_username
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password

# Google Search Console API (Optional)
GOOGLE_SEARCH_CONSOLE_CLIENT_ID=your_client_id
GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET=your_client_secret
GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN=your_refresh_token
```

### 2. Ganti Default Credentials

**WAJIB** ganti credentials default sebelum deploy:

```bash
# JANGAN gunakan credentials default ini!
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=spincity2024

# GUNAKAN credentials yang aman seperti ini:
NEXT_PUBLIC_ADMIN_USERNAME=spincity_admin_2024
NEXT_PUBLIC_ADMIN_PASSWORD=K3ywordM4n4g3r!@#$%^&*()
```

## 🚨 Keamanan Tambahan yang Disarankan

### 1. Server-Side Authentication

Untuk keamanan maksimal, implementasikan server-side auth:

```javascript
// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Verify credentials against database
        if (
          credentials.username === process.env.ADMIN_USERNAME &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return { id: 1, name: "Admin" }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
})
```

### 2. Database Storage

Simpan keyword di database, bukan localStorage:

```javascript
// Contoh dengan Prisma
const keywords = await prisma.keyword.findMany({
  where: { userId: session.user.id },
})
```

### 3. Rate Limiting

Tambahkan rate limiting untuk mencegah brute force:

```javascript
// middleware.js
import { rateLimit } from "express-rate-limit"

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
})

export default limiter
```

### 4. HTTPS Only

Pastikan website menggunakan HTTPS:

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ]
  },
}
```

## 🔐 Best Practices Keamanan

### 1. Password Requirements

- Minimal 12 karakter
- Kombinasi huruf besar, kecil, angka, simbol
- Tidak boleh sama dengan username
- Ganti password secara berkala

### 2. Access Control

- Batasi akses hanya dari IP tertentu
- Gunakan VPN untuk akses admin
- Monitor login attempts
- Log semua aktivitas admin

### 3. Data Protection

- Enkripsi data sensitif
- Backup data secara berkala
- Implementasi data retention policy
- Sanitasi input user

### 4. Monitoring

- Setup alert untuk login attempts
- Monitor traffic ke halaman admin
- Log semua perubahan keyword
- Setup intrusion detection

## 🚀 Deployment Checklist

Sebelum deploy, pastikan:

- [ ] Ganti default credentials
- [ ] Setup environment variables
- [ ] Aktifkan HTTPS
- [ ] Setup monitoring
- [ ] Test authentication
- [ ] Backup data
- [ ] Setup rate limiting
- [ ] Review security headers

## 🆘 Emergency Response

Jika terjadi security breach:

1. **Segera logout** semua session
2. **Ganti password** admin
3. **Review logs** untuk aktivitas mencurigakan
4. **Block IP** yang mencurigakan
5. **Update security** measures
6. **Notify stakeholders**

## 📞 Support Security

Untuk bantuan keamanan:

1. Review logs di hosting provider
2. Check Google Search Console untuk suspicious activity
3. Monitor website performance
4. Setup security alerts

## ✅ Kesimpulan

Halaman admin sekarang **AMAN** untuk deploy dengan:

- ✅ Authentication system
- ✅ Session management
- ✅ Protected routes
- ✅ Environment variables

**TETAPI** tetap perlu:

- 🔒 Ganti default credentials
- 🔒 Setup monitoring
- 🔒 Implementasi best practices
- 🔒 Regular security updates
