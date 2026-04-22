# 🎨 Panduan Kustomisasi Website Portfolio

Panduan lengkap untuk mengkustomisasi website portfolio sesuai kebutuhan Anda.

## 📝 Informasi Pribadi

### 1. Mengubah Nama dan Informasi Dasar

**File: `index.html`**

```html
<!-- Bagian Title -->
<title>Nama Anda | Frontend Web Developer</title>

<!-- Bagian Meta Description -->
<meta name="description" content="Website portfolio [Nama Anda]...">

<!-- Bagian Home Section -->
<h1 class="main-title">
    <span class="title-line">Frontend</span>
    <span class="title-line gradient">Developer</span>
</h1>
```

### 2. Mengubah Typing Animation Text

**File: `js/script.js`**

Cari function `initTypingEffect()` dan ubah array words:

```javascript
const words = [
    "Teks Pertama Anda", 
    "Teks Kedua Anda", 
    "Teks Ketiga Anda"
];
```

### 3. Mengubah Deskripsi

**File: `index.html`**

```html
<p class="description">
    Tulis deskripsi Anda di sini...
</p>
```

## 🎨 Mengubah Warna Theme

### Warna Utama

**File: `css/style.css`**

Edit CSS variables di bagian paling atas:

```css
:root {
    /* Warna Utama - Ganti dengan warna favorit */
    --primary-color: #6366f1;      /* Biru */
    --secondary-color: #a855f7;    /* Ungu */
    
    /* Background */
    --bg-dark: #030014;            /* Hitam gelap */
    --bg-card: rgba(255, 255, 255, 0.05);  /* Card background */
    
    /* Text Colors */
    --text-white: #ffffff;
    --text-gray: #9ca3af;
    --text-light: #e5e7eb;
    
    /* Border */
    --border-color: rgba(255, 255, 255, 0.1);
}
```

### Contoh Theme Alternatif

**Theme Hijau:**
```css
--primary-color: #10b981;
--secondary-color: #34d399;
```

**Theme Merah:**
```css
--primary-color: #ef4444;
--secondary-color: #f87171;
```

**Theme Emas:**
```css
--primary-color: #f59e0b;
--secondary-color: #fbbf24;
```

## 💼 Mengelola Portfolio/Proyek

### Menambah Proyek Baru

**File: `js/data.js`**

Tambahkan object baru di array `projects`:

```javascript
{
    id: 10,  // ID unik, increment dari yang terakhir
    title: "Nama Proyek Anda",
    description: "Deskripsi singkat proyek (1-2 kalimat)",
    category: "web",  // "web" atau "design"
    image: "images/projects/nama-gambar.jpg",
    tags: ["React", "Node.js", "MongoDB"],  // Teknologi yang digunakan
    link: "https://link-ke-proyek.com",  // atau "#" jika tidak ada
    featured: true  // true untuk ditampilkan di featured
}
```

### Menghapus Proyek

Hapus object proyek dari array `projects` di `js/data.js`

### Mengubah Kategori Filter

**File: `index.html`**

```html
<div class="portfolio-tabs">
    <button class="tab-btn active" data-tab="all">Semua</button>
    <button class="tab-btn" data-tab="web">Web Apps</button>
    <button class="tab-btn" data-tab="design">Design</button>
    <!-- Tambah kategori baru -->
    <button class="tab-btn" data-tab="mobile">Mobile Apps</button>
</div>
```

## 🏆 Mengelola Sertifikat

**File: `js/data.js`**

```javascript
const certificates = [
    {
        id: 1,
        title: "Nama Sertifikat",
        issuer: "Institusi Pemberi",
        date: "2024",
        description: "Deskripsi singkat",
        image: "images/certificates/cert.jpg",
        link: "https://link-verifikasi.com"
    }
    // Tambah lebih banyak...
];
```

## 📸 Mengelola Gambar

### 1. Gambar Profile

- Simpan foto Anda di: `images/profile.jpg`
- Ukuran rekomendasi: 500x500px (square)
- Format: JPG atau PNG

### 2. Gambar Hero/Animation

- Simpan di: `images/animation.gif`
- Atau gunakan gambar statis: `images/hero.png`
- Edit di HTML section home-right

### 3. Gambar Proyek

- Simpan di: `images/projects/`
- Penamaan: project1.jpg, project2.jpg, dst
- Ukuran rekomendasi: 800x600px atau 1200x800px
- Format: JPG, PNG, atau WebP

### 4. Icon Teknologi

Icons sudah tersedia di `images/icons/`:
- html.svg
- css.svg
- javascript.svg
- reactjs.svg
- nodejs.svg
- tailwind.svg
- bootstrap.svg
- firebase.svg

Untuk menambah icon baru, download SVG dari [Simple Icons](https://simpleicons.org/)

## 📊 Mengubah Statistik

**File: `index.html`**

Cari bagian `stats-grid` dan ubah nilai:

```html
<span class="stat-value">15+</span>  <!-- Ubah angka -->
<p class="stat-label">Projects Completed</p>  <!-- Ubah label -->
<p class="stat-desc">Innovative web solutions</p>  <!-- Ubah deskripsi -->
```

## 🛠️ Mengubah Tech Stack

### Di Home Section

**File: `index.html`**

```html
<div class="tech-stack">
    <span class="tech-badge">React</span>
    <span class="tech-badge">Teknologi Anda</span>
    <!-- Tambah lebih banyak -->
</div>
```

### Di About Section Skills

**File: `js/data.js`**

```javascript
const skills = [
    { name: "HTML", icon: "images/icons/html.svg", level: 95 },
    { name: "Skill Baru", icon: "images/icons/new-icon.svg", level: 80 },
    // Tambah lebih banyak...
];
```

## 🔗 Mengubah Social Media Links

**File: `index.html`**

Cari bagian `social-links` dan ubah href:

```html
<a href="https://github.com/username-anda" target="_blank">
    <!-- GitHub Icon -->
</a>
<a href="https://linkedin.com/in/username-anda" target="_blank">
    <!-- LinkedIn Icon -->
</a>
<a href="https://instagram.com/username-anda" target="_blank">
    <!-- Instagram Icon -->
</a>
```

## 📧 Mengaktifkan Contact Form

### Opsi 1: FormSubmit (Gratis, Mudah)

**File: `js/script.js`**

Dalam function `initContactForm()`, uncomment dan edit:

```javascript
// FormSubmit Configuration
const formSubmitUrl = 'https://formsubmit.co/email-anda@gmail.com';

const response = await fetch(formSubmitUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
});
```

### Opsi 2: EmailJS

1. Daftar di [EmailJS.com](https://www.emailjs.com/)
2. Tambahkan script di `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

3. Edit `js/script.js`:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
    .then(() => {
        showNotification('Message sent!', 'success');
    });
```

## 🎯 SEO Optimization

### 1. Update Meta Tags

**File: `index.html`**

```html
<title>Nama Anda | Job Title</title>
<meta name="description" content="Deskripsi singkat tentang Anda">
<meta name="keywords" content="keyword1, keyword2, keyword3">

<!-- Open Graph -->
<meta property="og:title" content="Nama Anda | Portfolio">
<meta property="og:description" content="Deskripsi Anda">
<meta property="og:image" content="https://domain.com/images/og-image.jpg">
<meta property="og:url" content="https://domain.com">
```

### 2. Update Sitemap

**File: `sitemap.xml`**

Ganti `your-domain.com` dengan domain Anda

### 3. Update Robots.txt

**File: `robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://domain-anda.com/sitemap.xml
```

## 🚀 Performance Optimization

### 1. Compress Images

Gunakan tools seperti:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- ImageOptim (Mac)

### 2. Lazy Loading Images

Tambahkan `loading="lazy"` pada tag img:

```html
<img src="image.jpg" alt="Description" loading="lazy">
```

### 3. Minify CSS & JS

Untuk production, gunakan:
- [CSS Minifier](https://cssminifier.com/)
- [JS Minifier](https://javascript-minifier.com/)

## 🌐 Deploy ke Hosting

### GitHub Pages

1. Push ke GitHub repository
2. Settings → Pages
3. Select branch: main
4. Folder: / (root)
5. Save

### Netlify

1. Drag & drop folder `portfolio-website` ke Netlify
2. Atau connect GitHub repository
3. Build settings: None (static site)

### Custom Domain

Tambahkan file `CNAME` dengan isi domain Anda:

```
www.domain-anda.com
```

## 💡 Tips & Tricks

### 1. Custom Favicon

Buat favicon di [Favicon.io](https://favicon.io/) dan tambahkan di HTML:

```html
<link rel="icon" type="image/png" href="favicon.png">
```

### 2. Google Analytics

Tambahkan di `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Loading Speed

Untuk mempercepat loading:
- Gunakan WebP untuk gambar
- Lazy load images
- Minimize CSS/JS
- Use CDN untuk libraries

## 🆘 Troubleshooting

### Gambar Tidak Muncul

- Periksa path gambar
- Pastikan file ada di folder yang benar
- Check console browser (F12) untuk error

### Animasi Tidak Bekerja

- Pastikan AOS library ter-load
- Check internet connection (untuk CDN)
- Periksa console untuk JavaScript errors

### Form Tidak Terkirim

- Periksa konfigurasi FormSubmit/EmailJS
- Check network tab di browser console
- Pastikan email address benar

## 📞 Bantuan Lebih Lanjut

Jika masih ada pertanyaan:
- Baca dokumentasi di README.md
- Check browser console untuk errors
- Google error message yang muncul

---

Happy Customizing! 🎉
