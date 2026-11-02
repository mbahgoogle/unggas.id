# Project Tree

Dokumen ini menggambarkan struktur proyek yang ada saat ini. File hasil instalasi dan hasil generate (`node_modules/` dan `.next/`) tidak dicantumkan karena bukan source proyek dan dibuat ulang oleh package manager atau Next.js.

## Struktur

```text
ahrefs-nextjs/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   └── pricing/
│   │       └── page.tsx
│   ├── (tools)/
│   │   └── site-explorer/
│   │       └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── layout/                         (belum berisi file)
│   ├── navigation/
│   │   └── NavigationMenu.tsx
│   ├── page/                           (belum berisi file)
│   └── templates/
│       ├── BlogListTemplate.tsx
│       ├── HomepageTemplate.tsx
│       ├── SingleArticleTemplate.tsx
│       └── SinglePageTemplate.tsx
├── content/
│   └── blog/
│       └── article-page.ts
├── docs/
│   ├── project-tree.md
│   └── tailwind-migration-progress.md
├── features/
│   ├── blog/                           (fitur Blog dan artikel BLUF)
│   │   └── components/
│   │       ├── BlogArticleChrome.tsx
│   │       ├── BlogListChrome.tsx
│   │       ├── BlogListPageContent.tsx
│   │       ├── BlufArticleContent.tsx
│   │       ├── blog-article-sections/
│   │       │   ├── email.tsx
│   │       │   ├── keep-learning.tsx
│   │       │   ├── section-2.tsx
│   │       │   ├── section-4.tsx
│   │       │   ├── what-is-bluf-how-to.tsx
│   │       │   └── your-weekly-marketing-s-must.tsx
│   │       └── blog-list-sections/
│   │           ├── ahrefs-blog.tsx
│   │           ├── ahrefs-podcast.tsx
│   │           ├── ahrefs-tv.tsx
│   │           ├── data-studies.tsx
│   │           ├── master-marketing-seo-and-analytics.tsx
│   │           ├── more-topics.tsx
│   │           ├── product-updates.tsx
│   │           ├── section-2.tsx
│   │           ├── what-is-bluf-how-to.tsx
│   │           └── your-weekly-marketing-s-must.tsx
│   ├── blog-article/                   (folder fitur lama; belum berisi file)
│   │   └── components/                 (belum berisi file)
│   ├── blog-list/                      (folder fitur lama; belum berisi file)
│   │   └── components/                 (belum berisi file)
│   ├── home/
│   │   ├── components/
│   │   │   ├── HomePageContent.tsx
│   │   │   ├── PageChrome.tsx
│   │   │   └── sections/
│   │   │       ├── ahrefs-ecosystem.tsx
│   │   │       ├── ai-features.tsx
│   │   │       ├── big-data.tsx
│   │   │       ├── community.tsx
│   │   │       ├── customer-proof.tsx
│   │   │       ├── customer-stories.tsx
│   │   │       ├── demo.tsx
│   │   │       ├── enterprise.tsx
│   │   │       ├── final-cta.tsx
│   │   │       ├── hero.tsx
│   │   │       ├── marketing-platform.tsx
│   │   │       ├── role-solutions.tsx
│   │   │       ├── support.tsx
│   │   │       └── trial-navigation.tsx
│   │   └── content/
│   │       └── sections/               (belum berisi file)
│   ├── pricing/
│   │   ├── components/
│   │   │   ├── PageChrome.tsx
│   │   │   ├── PricingPageContent.tsx
│   │   │   └── pricing-sections/
│   │   │       ├── plans-pricing.tsx
│   │   │       └── questions-we-have-answers.tsx
│   │   └── content/                    (belum berisi file)
│   └── site-explorer/
│       ├── components/
│       │   ├── PageChrome.tsx
│       │   ├── SiteExplorerPageContent.tsx
│       │   └── site-explorer-sections/
│       │       ├── analyze-websites-across-3-major.tsx
│       │       ├── decode-your-competitors-paid-advertising.tsx
│       │       ├── master-link-building-and-boost.tsx
│       │       ├── more-reasons-to-use-ahrefs.tsx
│       │       ├── reverse-engineer-any-website-s.tsx
│       │       ├── section-8.tsx
│       │       ├── sift-through-trillions-of-data.tsx
│       │       └── site-explorer.tsx
│       └── content/                    (belum berisi file)
├── lib/
│   └── utils/
│       └── inline-style.ts
├── public/
│   ├── assets/
│   │   ├── esbuild/
│   │   │   ├── assets/
│   │   │   │   └── esbuild/            (grafik dan ikon ekspor yang dirujuk markup)
│   │   │   ├── *.css                   (3 stylesheet ekspor; dijelaskan di bawah)
│   │   │   ├── fonts/
│   │   │   │   └── *.woff2             (font Ahrefs dan font pendukung)
│   │   │   └── *.svg, *.png, *.jpg,
│   │   │       *.mp4                   (ikon, logo, gambar, dan video halaman)
│   │   └── fonts/
│   │       └── *.woff2                 (salinan font untuk preload dari app/layout.tsx)
│   ├── static.ahrefs.com/
│   │   └── assets/
│   │       └── css/
│   │           └── normalize.css
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon-48x48.png
│   ├── favicon-180x180.png
│   ├── favicon.ico
│   ├── favicon.svg
│   └── site.webmanifest
├── types/
│   └── page-layout.ts
├── .gitignore
├── AGENTS.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

`public/assets/` menyimpan banyak file ekspor dengan nama berbasis hash. Untuk menjaga pohon tetap terbaca, nama aset media dikelompokkan berdasarkan ekstensi dan jenisnya; stylesheet dan font yang penting untuk memahami dependensi dicatat secara spesifik di bawah.

## Keterangan direktori dan file

### Aplikasi dan routing (`app/`)

- `app/layout.tsx` — root layout; memuat metadata global, CSS global, stylesheet, dan preload font.
- `app/globals.css` — entry CSS Tailwind v4; saat ini hanya mengimpor theme dan utilities Tailwind.
- `app/(marketing)/page.tsx` — route `/`, meneruskan render ke template homepage.
- `app/(marketing)/pricing/page.tsx` — route `/pricing`, metadata, chrome, dan konten pricing.
- `app/(tools)/site-explorer/page.tsx` — route `/site-explorer`, metadata, chrome, dan konten Site Explorer.
- `app/blog/page.tsx` — route `/blog`, menggunakan template daftar artikel.
- `app/blog/[slug]/page.tsx` — route artikel dinamis; membaca parameter async, memilih konten berdasar slug, dan menghasilkan static params.
- `(marketing)` dan `(tools)` adalah route groups Next.js. Nama folder dalam tanda kurung tidak menjadi bagian URL.

### Komponen reusable (`components/`)

- `components/navigation/NavigationMenu.tsx` — state dan interaksi React untuk dropdown serta menu mobile.
- `components/templates/HomepageTemplate.tsx` — menyusun navigasi global, isi homepage, dan footer homepage.
- `components/templates/SinglePageTemplate.tsx` — kerangka reusable untuk halaman seperti Pricing dan Site Explorer.
- `components/templates/BlogListTemplate.tsx` — kerangka halaman daftar blog beserta navigation/footer blog.
- `components/templates/SingleArticleTemplate.tsx` — kerangka artikel tunggal beserta chrome artikel.
- `components/layout/` dan `components/page/` — saat ini kosong; belum menyimpan komponen source.

### Fitur dan isi halaman (`features/`)

- `features/home/components/HomePageContent.tsx` — menyusun section isi homepage.
- `features/home/components/PageChrome.tsx` — navigasi dan footer khusus homepage.
- `features/home/components/sections/` — section-section homepage yang terpisah agar isi mudah dikelola.
- `features/pricing/components/PricingPageContent.tsx` — isi route Pricing.
- `features/pricing/components/PageChrome.tsx` — navigasi dan footer Pricing.
- `features/pricing/components/pricing-sections/` — section paket/harga dan FAQ.
- `features/site-explorer/components/SiteExplorerPageContent.tsx` — isi route Site Explorer.
- `features/site-explorer/components/PageChrome.tsx` — navigasi dan footer Site Explorer.
- `features/site-explorer/components/site-explorer-sections/` — section konten Site Explorer.
- `features/blog/components/BlogListPageContent.tsx` — menyusun section halaman daftar blog.
- `features/blog/components/BlufArticleContent.tsx` — menyusun isi artikel BLUF.
- `features/blog/components/BlogListChrome.tsx` — navigation/footer daftar blog.
- `features/blog/components/BlogArticleChrome.tsx` — navigation/footer artikel.
- `features/blog/components/blog-list-sections/` — section editorial, podcast, video, dan topik blog.
- `features/blog/components/blog-article-sections/` — section isi dan pendukung artikel.
- `features/blog-list/` dan `features/blog-article/` — direktori fitur yang saat ini tidak berisi implementasi; kode Blog aktif masih berada di `features/blog/`.
- Direktori `content/` di bawah fitur home/pricing/site-explorer saat ini kosong.

### Konten, helper, dan tipe

- `content/blog/article-page.ts` — data/komposisi konten artikel yang dipakai oleh route slug.
- `lib/utils/inline-style.ts` — helper untuk mengubah deklarasi custom properties hasil ekspor menjadi style object React.
- `types/page-layout.ts` — tipe props bersama untuk layout dan komponen konten halaman.

### Aset statis (`public/`)

- `public/assets/esbuild/CRTZDKXQ__entry__styled-ppx__toolkit__src-styles-release-20261031-bk57856-9244298a6d08d.css` — stylesheet toolkit ekspor.
- `public/assets/esbuild/NYVVZGFG__entry__styled-ppx__static__universal-js-styles-release-20261031-bk57856-9244298a6d08d.css` — stylesheet universal ekspor untuk komponen dan halaman.
- `public/assets/esbuild/S3ENEWQO__entry__shared-css__lite-flag-icon-release-20261031-bk57856-9244298a6d08d.css` — stylesheet ikon bendera.
- `public/static.ahrefs.com/assets/css/normalize.css` — normalisasi default browser.
- `public/assets/esbuild/fonts/` — font yang disalin dari ekspor.
- `public/assets/fonts/` — font lokal yang dipreload oleh root layout, termasuk Ahrefs, Inter, Barlow, Pretendard, dan Zen Kaku Gothic.
- `public/assets/esbuild/assets/esbuild/` dan file media langsung di `public/assets/esbuild/` — logo, ikon, ilustrasi, gambar, dan video yang dirujuk oleh JSX/CSS.
- File `favicon-*`, `favicon.ico`, `favicon.svg`, dan `site.webmanifest` — ikon aplikasi dan metadata instalasi browser.

### Konfigurasi dan dokumentasi

- `package.json` — metadata package, scripts, dan dependency Next.js, React, TypeScript, Tailwind, serta ESLint.
- `pnpm-lock.yaml` — versi dependency yang terkunci untuk pnpm.
- `tsconfig.json` — compiler TypeScript strict dan alias import `@/*`.
- `next.config.ts` — konfigurasi Next.js dan optimasi image.
- `postcss.config.mjs` — integrasi Tailwind v4 melalui PostCSS.
- `eslint.config.mjs` — aturan ESLint Next.js/TypeScript dan pengecualian direktori.
- `next-env.d.ts` — deklarasi tipe yang dikelola Next.js.
- `.gitignore` — pola file yang tidak dimasukkan ke Git.
- `AGENTS.md` — instruksi agent lokal untuk workspace.
- `README.md` — setup lokal, daftar route, dan ringkasan arsitektur.
- `docs/tailwind-migration-progress.md` — checklist dan status migrasi CSS ke Tailwind; migrasi masih berlangsung.

## Route dan alur render

| URL | Route file | Template / fitur |
|---|---|---|
| `/` | `app/(marketing)/page.tsx` | `HomepageTemplate` → fitur `home` |
| `/pricing` | `app/(marketing)/pricing/page.tsx` | `SinglePageTemplate` → fitur `pricing` |
| `/site-explorer` | `app/(tools)/site-explorer/page.tsx` | `SinglePageTemplate` → fitur `site-explorer` |
| `/blog` | `app/blog/page.tsx` | `BlogListTemplate` → fitur `blog` |
| `/blog/bluf` | `app/blog/[slug]/page.tsx` | `SingleArticleTemplate` → konten BLUF di fitur `blog` |

## Catatan cakupan

- Pohon source/config di atas mencantumkan setiap file yang ditemukan pada folder-folder tersebut.
- Nama semua aset media yang diekspor tidak diulang satu per satu karena jumlahnya besar dan sebagian besar bernama hash; aset-aset itu tetap tercakup dalam kelompok direktori dan ekstensi di pohon.
- `.next/` dan `node_modules/` sengaja tidak dirinci: keduanya adalah output build/cache dan dependency terpasang, bukan source yang dikelola langsung.
- Daftar folder kosong dicatat sebagai keadaan saat inventaris dibuat; folder tersebut dapat tidak muncul pada checkout Git jika tidak berisi file.

## Komponen tidak digunakan dan folder kosong

Pemeriksaan import statis pada route, template, dan komponen konten menemukan bahwa seluruh komponen halaman dan section aktif di `features/home`, `features/pricing`, `features/site-explorer`, dan `features/blog` dihubungkan ke render halaman. Tidak ada file komponen aktif yang teridentifikasi sebagai tidak digunakan dalam pemeriksaan ini. Ini merupakan pemeriksaan referensi source, bukan analisis bundle atau runtime.

Direktori berikut memang belum berisi file dan tidak dipakai oleh alur render saat ini:

- `components/layout/` — folder kosong; komponen chrome/layout masih berada di masing-masing fitur.
- `components/page/` — folder kosong.
- `features/blog-article/components/` — folder kosong; implementasi artikel saat ini berada di `features/blog/components/`.
- `features/blog-list/components/` — folder kosong; implementasi daftar blog saat ini berada di `features/blog/components/`.
- `features/home/content/sections/` — folder kosong; section homepage berupa komponen di `features/home/components/sections/`.
- `features/pricing/content/` — folder kosong; konten pricing saat ini berada di `features/pricing/components/`.
- `features/site-explorer/content/` — folder kosong; konten Site Explorer saat ini berada di `features/site-explorer/components/`.

Folder kosong tersebut tidak dihapus karena permintaan ini adalah dokumentasi, bukan pembersihan struktur. Jika ingin menghapus folder kosong atau merapikan penamaan fitur Blog, lakukan sebagai perubahan terpisah setelah memastikan tidak ada workflow atau instruksi lokal yang mengandalkannya.
