import Link from 'next/link';
import { ArrowUpRight, Bird, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return <>
    <div className="announcement-bar"><div className="container announcement-inner"><span>Toolkit peternakan yang lebih terukur</span><Link href="/tools/fcr">Coba kalkulator FCR <ArrowUpRight size={13}/></Link></div></div>
    <header className="site-header"><div className="container nav-wrap">
    <Link href="/" className="brand" aria-label="unggas.id beranda"><span className="brand-mark"><Bird size={21} strokeWidth={2.5}/></span><span>unggas<span className="brand-dot">.id</span></span></Link>
    <nav className="desktop-nav" aria-label="Navigasi utama">
      <Link href="/products/nipple-drinker">Produk <ChevronDown size={14}/></Link>
      <Link href="/#kategori">Kategori</Link>
      <Link href="/tools/fcr">Kalkulator <ChevronDown size={14}/></Link>
      <Link href="/#panduan">Panduan</Link>
    </nav>
    <div className="nav-actions"><Link className="nav-login" href="/#kontak">Hubungi kami</Link><Link className="button button-dark button-small" href="/pricing">Lihat solusi <ArrowUpRight size={15}/></Link></div>
    <details className="mobile-menu"><summary aria-label="Buka menu">Menu</summary><div className="mobile-panel"><Link href="/products/nipple-drinker">Produk</Link><Link href="/#kategori">Kategori</Link><Link href="/tools/fcr">Kalkulator</Link><Link href="/#panduan">Panduan</Link><Link href="/pricing">Paket solusi</Link></div></details>
  </div></header>
  </>;
}
