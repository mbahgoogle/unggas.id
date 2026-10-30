# unggas.id — Next.js starter

Starter website untuk brand unggas.id: perlengkapan peternakan ayam petelur dan pedaging, paket solusi, serta kalkulator FCR/profit broiler.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Halaman demo

- `/` — Homepage
- `/pricing` — Paket solusi peternakan (bukan pricing langganan)
- `/products/nipple-drinker` — Contoh detail produk
- `/tools/fcr` — Kalkulator FCR dan simulasi laba sederhana

## Catatan sebelum produksi

- Harga, SKU, stok, spesifikasi produk, kontak, foto produk, dan integrasi checkout masih berupa konten demo.
- Kalkulator saat ini menghitung FCR sederhana (konsumsi pakan / pertambahan bobot) dan estimasi per ekor. Belum memasukkan mortalitas, DOC, obat/vaksin, tenaga kerja, energi, penyusutan, dan komponen biaya lainnya.
- Untuk kalkulator performa flock yang akurat, definisikan periode, populasi awal/akhir, bobot awal/akhir, total pakan, dan metode penanganan mortalitas.
- Font DM Sans dan Manrope diambil dari Google Fonts. Bisa diganti dengan `next/font` untuk self-hosting.
- Ilustrasi produk saat ini merupakan artwork CSS/icon, bukan foto produk aktual.

## Teknologi

Next.js App Router, React, TypeScript, CSS custom properties, lucide-react.
