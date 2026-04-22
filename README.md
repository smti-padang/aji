# Portfolio Website

Website portfolio personal yang dibangun dengan HTML, CSS, dan JavaScript murni tanpa database.

## 🚀 Fitur

- ✨ Design modern dan responsif
- 🎨 Animasi smooth dengan AOS (Animate On Scroll)
- 💼 Showcase portfolio dan proyek
- 📧 Form kontak interaktif
- 🌙 Animated background dengan efek bintang
- 📱 Fully responsive untuk semua device
- ⚡ Performance optimized
- 🎯 SEO friendly

## 📁 Struktur Folder

```
portfolio-website/
│
├── index.html              # Halaman utama
├── css/
│   └── style.css          # File CSS utama
├── js/
│   ├── script.js          # JavaScript utama
│   └── data.js            # Data proyek dan konten
├── images/
│   ├── icons/             # Icon teknologi
│   ├── projects/          # Gambar proyek
│   ├── certificates/      # Gambar sertifikat
│   ├── animation.gif      # Animasi hero
│   └── profile.jpg        # Foto profil
└── README.md              # Dokumentasi
```

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur website
- **CSS3** - Styling dan animasi
- **JavaScript** - Interaktivitas dan dynamic content
- **AOS Library** - Scroll animations
- **Google Fonts** - Typography (Poppins)

## 📝 Cara Menggunakan

1. **Download atau Clone Repository**
   ```bash
   git clone [repository-url]
   cd portfolio-website
   ```

2. **Buka di Browser**
   - Langsung buka file `index.html` di browser
   - Atau gunakan local server seperti Live Server (VS Code extension)

3. **Kustomisasi Konten**
   - Edit informasi pribadi di `index.html`
   - Update data proyek di `js/data.js`
   - Ganti foto di folder `images/`
   - Sesuaikan warna di `css/style.css` (CSS variables)

## 🎨 Kustomisasi

### Mengubah Warna Theme

Edit CSS variables di `css/style.css`:

```css
:root {
    --primary-color: #6366f1;      /* Warna utama */
    --secondary-color: #a855f7;    /* Warna sekunder */
    --bg-dark: #030014;            /* Background */
    --text-white: #ffffff;         /* Text putih */
    --text-gray: #9ca3af;          /* Text abu-abu */
}
```

### Menambah Proyek Baru

Edit file `js/data.js` dan tambahkan object baru di array `projects`:

```javascript
{
    id: 10,
    title: "Nama Proyek",
    description: "Deskripsi proyek",
    category: "web", // atau "design"
    image: "images/projects/project10.jpg",
    tags: ["React", "Node.js"],
    link: "https://link-proyek.com",
    featured: true
}
```

### Mengubah Informasi Kontak

Edit bagian Contact Section di `index.html`:

```html
<div class="info-card">
    <h4>Email</h4>
    <p>email-anda@example.com</p>
</div>
```

## 📧 Form Kontak

Form kontak saat ini menggunakan console.log untuk demo. Untuk mengaktifkan pengiriman email:

**Opsi 1: Menggunakan FormSubmit**
```javascript
// Di js/script.js, ubah function initContactForm
const formSubmitUrl = 'https://formsubmit.co/your-email@example.com';
```

**Opsi 2: Menggunakan EmailJS**
1. Daftar di [EmailJS](https://www.emailjs.com/)
2. Setup service dan template
3. Tambahkan EmailJS SDK dan konfigurasi

**Opsi 3: Backend Custom**
1. Buat API endpoint di server
2. Kirim request dari form ke endpoint

## 🌐 Deploy

### GitHub Pages
1. Push ke GitHub repository
2. Settings → Pages
3. Pilih branch dan folder
4. Website akan live di `username.github.io/repository`

### Netlify
1. Drag & drop folder ke [Netlify](https://www.netlify.com/)
2. Atau connect dengan GitHub repository
3. Deploy otomatis

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🐛 Known Issues

- None at the moment

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Eki Zulfar Rachman**
- GitHub: [@EkiZR](https://github.com/EkiZR)
- LinkedIn: [Eki Zulfar Rachman](https://www.linkedin.com/in/ekizr/)
- Instagram: [@ekizr_](https://www.instagram.com/ekizr_/)

## 🙏 Credits

- Icons: Custom SVG icons
- Fonts: Google Fonts (Poppins)
- Animations: AOS Library
- Design inspiration: Modern web design trends

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- Email: ekizulfarrachman@gmail.com
- Open an issue di GitHub repository

---

⭐ Jika template ini membantu, berikan star di GitHub!

Made with ❤️ by Eki Zulfar Rachman
