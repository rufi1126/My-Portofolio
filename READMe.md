# Portofolio — Muhammad Ma'rufil Kurhi

Website portofolio pribadi berbasis **Next.js 16** dengan static export, menampilkan profil, skills, proyek, dan kontak.

---

## Struktur Folder

```
portofolio/
├── app/                    # App Router Next.js
│   ├── favicon.ico
│   ├── globals.css         # Global styles + tema dark
│   ├── layout.tsx          # Root layout (metadata + font)
│   └── page.tsx            # Halaman utama (hero, about, skills, projects, contact)
├── components/
│   └── HeroCharacter.tsx   # Komponen 3D robot (Spline)
├── public/
│   └── images/             # Aset gambar (foto, screenshot proyek)
├── .next/                  # Build output
├── out/                    # Static export output
├── .git/
├── .github/
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts          # Konfigurasi Next.js (basePath, export)
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## Frontend

| Teknologi       | Keterangan                                           |
|----------------|------------------------------------------------------|
| **Next.js 16** | Framework React dengan App Router                    |
| **React 19**   | Library UI                                           |
| **TypeScript** | Type safety                                          |
| **CSS**        | Global stylesheet (`globals.css`) dengan custom properties (dark theme) |
| **Spline**     | 3D interaktif (robot di hero section) via `@splinetool/react-spline` |
| **react-icons**| Ikon skills (JavaScript, React, Node.js, dll.)       |
| **Static Export** | `output: "export"` — output static file HTML/CSS/JS |

**Fitur:**
- Navigasi smooth-scroll dengan navbar sticky
- Hero section dengan 3D robot interaktif
- Skill cards dengan animasi fall-down / rise-up
- Project cards dengan expandable detail
- Contact form → redirect ke WhatsApp
- Fully responsive (desktop & mobile)
- Deployable ke GitHub Pages (`basePath: "/My-Portofolio"`)

## Backend

Proyek ini **tidak memiliki backend**. Seluruh aplikasi bersifat **static site** (CSR):

- **Contact form**: Mengirim pesan langsung ke WhatsApp via `window.open()` — tidak ada server, database, atau API.
- **Data proyek & skills**: Hardcoded di dalam `page.tsx` (state React).
- **Tidak ada** API Routes, database, atau server-side logic.

Untuk menambahkan backend di masa depan, proyek ini dapat dengan mudah diintegrasikan dengan:
- **Form backend** (Formspree, Web3Forms, dll.) untuk contact form.
- **Headless CMS** (Sanity, Strapi) untuk konten dinamis.
- **API Routes Next.js** jika tidak menggunakan static export.

---

## Cara Menjalankan

```bash
npm install
npm run dev        # Development server
npm run build      # Build static export ke folder out/
```

## Lisensi

© 2026 — Muhammad Ma'rufil Kurhi. All rights reserved.
