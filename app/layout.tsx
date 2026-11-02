import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahrefs—AI Marketing Platform Powered by Big Data",
  description:
    "We help marketers drive visibility across AI search, SEO, content, and social – with the largest AI and search databases online.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/assets/esbuild/S3ENEWQO__entry__shared-css__lite-flag-icon-release-20261031-bk57856-9244298a6d08d.css"
        />
        <link
          rel="stylesheet"
          href="/assets/esbuild/NYVVZGFG__entry__styled-ppx__static__universal-js-styles-release-20261031-bk57856-9244298a6d08d.css"
        />
        <link
          rel="stylesheet"
          href="/assets/esbuild/CRTZDKXQ__entry__styled-ppx__toolkit__src-styles-release-20261031-bk57856-9244298a6d08d.css"
        />
        <link
          rel="preload"
          href="/assets/fonts/ahrefs_regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/ahrefs_bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/inter-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="m-0">{children}</body>
    </html>
  );
}
