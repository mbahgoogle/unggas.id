import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'unggas.id — Semua kebutuhan peternakan dalam satu tempat', template: '%s | unggas.id' },
  description: 'Perlengkapan peternakan unggas, kalkulator FCR, simulasi keuntungan, dan panduan untuk peternak ayam petelur maupun pedaging.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><Navbar />{children}<Footer /></body></html>;
}
