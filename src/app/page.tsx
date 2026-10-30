import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Calculator as CalculatorIcon, Check, Egg, Fan, PackageCheck, ShieldCheck, ShoppingBasket, Sprout, Wrench } from 'lucide-react'
import Calculator from '@/components/Calculator'

const categories = [
  { icon: Wrench, name: 'Peralatan kandang', desc: 'Perlengkapan untuk membangun dan mengelola kandang.' },
  { icon: ShoppingBasket, name: 'Tempat pakan', desc: 'Feeder manual hingga sistem pemberian pakan.' },
  { icon: Egg, name: 'Sistem minum', desc: 'Nipple, bell drinker, pipa, dan aksesorinya.' },
  { icon: Fan, name: 'Ventilasi & pendingin', desc: 'Sirkulasi udara untuk lingkungan kandang.' },
  { icon: Sprout, name: 'Pemanas & brooding', desc: 'Peralatan untuk fase awal pemeliharaan.' },
  { icon: PackageCheck, name: 'Peralatan panen', desc: 'Perlengkapan penanganan telur dan hasil ternak.' },
]

const products = [
  { name: 'Nipple drinker', desc: 'Sistem minum otomatis untuk kandang unggas.', tag: 'SISTEM MINUM' },
  { name: 'Feeder otomatis', desc: 'Distribusi pakan lebih konsisten setiap hari.', tag: 'SISTEM PAKAN' },
  { name: 'Exhaust fan kandang', desc: 'Sirkulasi udara untuk kandang yang lebih nyaman.', tag: 'VENTILASI' },
]

export default function Home() {
  return (
    <main>
      <section className="hero ahrefs-hero">
        <div className="container hero-centered">
          <span className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> PLATFORM PERLENGKAPAN PETERNAKAN</span>
          <h1>Bangun peternakan yang <em>lebih terukur.</em></h1>
          <p className="hero-description">Semua kebutuhan peternakan unggas dalam satu tempat. Temukan peralatan yang tepat, pahami datanya, dan ambil keputusan dengan lebih yakin.</p>
          <div className="hero-actions hero-actions-centered">
            <Link className="button button-orange" href="#kategori">Jelajahi produk <ArrowUpRight size={17} /></Link>
            <Link className="button button-outline" href="/tools/fcr">Coba kalkulator FCR <ArrowRight size={16} /></Link>
          </div>
          <div className="hero-proof hero-proof-centered"><span><Check size={15} /> Untuk layer & broiler</span><span><Check size={15} /> Tools praktis untuk peternak</span><span><Check size={15} /> Keputusan berbasis data</span></div>
        </div>
        <div className="hero-bottom container"><span>UNG GAS.ID / POULTRY PLATFORM</span><div><span>PRODUK</span><i /><span>KALKULATOR</span><i /><span>PANDUAN</span></div></div>
      </section>

      <section className="trust-strip"><div className="container trust-strip-inner"><span>MEMBANTU PETernak MENJALANKAN OPERASIONAL DENGAN LEBIH BAIK</span><div><b>PRODUK</b><b>DATA</b><b>TOOLS</b><b>SUPPORT</b></div></div></section>

      <section className="section" id="kategori"><div className="container"><div className="section-heading centered-heading"><span className="eyebrow">APA YANG ANDA BUTUHKAN?</span><h2>Satu platform untuk setiap kebutuhan peternakan.</h2><p>Mulai dari peralatan kandang hingga kalkulator usaha, unggas.id membantu Anda bekerja lebih terarah.</p></div><div className="category-grid">{categories.map(({ icon: Icon, name, desc }, i) => <Link href="/products/nipple-drinker" className="category-card" key={name}><span className="category-icon"><Icon size={22} /></span><span className="category-number">0{i + 1}</span><h3>{name}</h3><p>{desc}</p><span className="card-arrow"><ArrowUpRight size={18} /></span></Link>)}</div></div></section>

      <section className="section section-soft"><div className="container"><div className="section-heading centered-heading"><span className="eyebrow">DIBUAT UNTUK CARA KERJA ANDA</span><h2>Lebih sedikit menebak.<br /><em>Lebih banyak memahami.</em></h2><p>Gunakan data dan alat sederhana untuk menemukan langkah yang tepat bagi peternakan Anda.</p></div><div className="solution-grid"><Link href="/pricing" className="solution-card layer-card"><div className="solution-content"><span className="solution-tag">01 / LAYER</span><h3>Fokus pada produksi telur.</h3><p>Perlengkapan kandang, sistem pakan dan minum, serta penanganan telur.</p><span className="solution-link">Jelajahi solusi <ArrowRight size={16} /></span></div><div className="solution-graphic egg-graphic"><Egg size={118} strokeWidth={1} /><span>EGG<br />PRODUCTION</span></div></Link><Link href="/pricing" className="solution-card broiler-card"><div className="solution-content"><span className="solution-tag">02 / BROILER</span><h3>Optimalkan pertumbuhan.</h3><p>Perlengkapan brooding, feeder, drinker, dan ventilasi kandang.</p><span className="solution-link">Jelajahi solusi <ArrowRight size={16} /></span></div><div className="solution-graphic broiler-graphic"><Sprout size={118} strokeWidth={1} /><span>GROWTH<br />MANAGEMENT</span></div></Link></div></div></section>

      <section className="section"><div className="container"><div className="section-row"><div className="section-heading"><span className="eyebrow">PERLENGKAPAN PILIHAN</span><h2>Alat yang bekerja sekeras Anda.</h2><p>Kenali beberapa kebutuhan penting untuk operasional kandang harian.</p></div><Link href="/products/nipple-drinker" className="text-link">Lihat semua produk <ArrowUpRight size={16} /></Link></div><div className="product-grid">{products.map((p, i) => <Link href="/products/nipple-drinker" className={`product-card product-card-${i + 1}`} key={p.name}><div className="product-index">0{i + 1}</div><div className="product-info"><span className="product-tag">{p.tag}</span><h3>{p.name}</h3><p>{p.desc}</p><span className="product-link">Lihat detail <ArrowRight size={16} /></span></div></Link>)}</div></div></section>

      <section className="calculator-section"><div className="container calculator-layout"><div className="calculator-intro"><span className="eyebrow eyebrow-light">UNG GAS / POULTRY TOOLS</span><h2>Hitung dulu.<br /><em>Putuskan lebih yakin.</em></h2><p>Simulasikan FCR dan estimasi laba broiler berdasarkan angka yang Anda masukkan.</p><Link href="/tools/fcr" className="button button-orange">Buka kalkulator lengkap <ArrowUpRight size={17} /></Link></div><Calculator /></div></section>

      <section className="section"><div className="container trust-grid"><div><SectionHeadingFallback /><div className="trust-points"><div><ShieldCheck /><span><b>Pilih dengan informasi</b><small>Kenali fungsi dan spesifikasi produk sebelum membeli.</small></span></div><div><CalculatorIcon /><span><b>Hitung performa usaha</b><small>Gunakan kalkulator sederhana untuk simulasi biaya dan hasil.</small></span></div><div><PackageCheck /><span><b>Kebutuhan lebih terarah</b><small>Jelajahi perlengkapan berdasarkan aktivitas peternakan.</small></span></div></div></div><div className="trust-panel"><span className="panel-kicker">THE POULTRY TOOLKIT</span><div className="tool-list"><div><span className="tool-icon"><CalculatorIcon /></span><span><b>Kalkulator FCR</b><small>Ukur efisiensi penggunaan pakan</small></span><ArrowUpRight /></div><div><span className="tool-icon"><PackageCheck /></span><span><b>Kalkulator biaya pakan</b><small>Perkirakan biaya per ekor</small></span><ArrowUpRight /></div><div><span className="tool-icon"><Wrench /></span><span><b>Panduan perlengkapan</b><small>Kenali fungsi dan kebutuhan alat</small></span><ArrowUpRight /></div></div><div className="panel-bottom">TOOLS PRAKTIS UNTUK KEPUTUSAN YANG LEBIH TERUKUR</div></div></div></section>

      <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light">MULAI DARI KEBUTUHAN ANDA</span><h2>Siapkan peternakan yang lebih terukur.</h2><p>Jelajahi perlengkapan atau coba kalkulator peternakan unggas.id.</p></div><div className="cta-actions"><Link className="button button-orange" href="/products/nipple-drinker">Jelajahi produk <ArrowUpRight size={16} /></Link><Link className="button button-light" href="/tools/fcr">Hitung FCR</Link></div></div></section>
    </main>
  )
}

function SectionHeadingFallback() {
  return <div className="section-heading"><span className="eyebrow">KENAPA UNGGAS.ID</span><h2>Lebih dari sekadar tempat belanja.</h2><p>Kami membantu peternak menemukan perlengkapan yang sesuai dan memahami angka di balik keputusan usahanya.</p></div>
}
