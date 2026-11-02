# Ahrefs Offline → Next.js

Rekreasi offline halaman Ahrefs menggunakan Next.js 16, React 19, dan TypeScript. Konten, URL, aset, dan tampilan halaman yang ada dipertahankan.

## Setup

```bash
pnpm install
pnpm dev
```

Buka http://localhost:3000

Gunakan Node.js 20.9 atau lebih baru.

## Routes

| Path | Halaman |
|------|---------|
| `/` | Homepage |
| `/pricing` | Pricing |
| `/site-explorer` | Site Explorer |
| `/blog` | Blog index |
| `/blog/bluf` | Artikel BLUF |

## Struktur

- [Pohon proyek lengkap dan keterangan folder/file](./docs/project-tree.md)
- `app/(marketing)/` — Homepage dan pricing
- `app/(tools)/` — Site Explorer
- `app/blog/` — daftar blog dan artikel dinamis berdasarkan slug
- `features/` — komposisi halaman dan section React per fitur
- `features/blog/components/` — halaman blog, artikel, navigasi, dan footer
- `components/navigation/` — state interaksi menu navigasi dan menu mobile
- `components/templates/` — template Homepage, Single Page, Blog List, dan Single Article
- `app/globals.css` — Tailwind theme/utilities tanpa preflight, agar reset tidak mengubah tampilan mirror
- `postcss.config.mjs` — integrasi Tailwind CSS v4 melalui PostCSS
- `lib/utils/` — helper untuk mempertahankan style inline dari markup sumber
- `types/` — tipe props layout halaman yang digunakan bersama
- `public/assets/` — CSS, font, gambar, dan video yang digunakan oleh halaman
- `tsconfig.json` — strict TypeScript dan alias `@/*`
- `eslint.config.mjs` — aturan ESLint Next.js dan TypeScript

### Tipe halaman

| Tipe | Rute | Template |
|------|------|----------|
| Homepage | `/` | `HomepageTemplate` |
| Single Page | `/site-explorer`, `/pricing` | `SinglePageTemplate` |
| Blog List | `/blog` | `BlogListTemplate` |
| Single Article | `/blog/bluf` | `SingleArticleTemplate` |

File rute memilih template dan metadata; konten halaman tersusun sebagai komponen React/TSX dan section di dalam fitur masing-masing. Navigasi dan footer tetap memiliki variasi per halaman agar tampilannya tidak berubah. Style inline dikonversi ke objek style React; halaman tidak dirender sebagai HTML mentah dan tidak menggunakan skrip manipulasi DOM. Tailwind dipakai untuk utility baru yang ekuivalen secara tepat. CSS hasil ekspor yang mendasari tampilan mirror dan custom properties inline tetap dipertahankan agar styling visual yang kompleks tidak berubah.

Perintah pemeriksaan (jalankan setelah perubahan):

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

## Catatan

- Desain, teks, dan aset bersumber dari offline mirror dan dipertahankan.
- Site Explorer saat ini adalah landing page; hasil pencarian tidak disimulasikan.
- Megamenu dan menu mobile dikelola dengan state React.
- Skrip Cloudflare challenge/email-decode yang disuntikkan ke snapshot telah dibuang; alamat email hasil obfuscation tetap ditampilkan dan tautannya diarahkan ke `mailto:`.
- JavaScript UI vendor Ahrefs tidak dimuat; menu yang diperlukan dikelola oleh komponen React lokal.
