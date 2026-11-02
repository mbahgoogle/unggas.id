import { readFile } from "node:fs/promises";
import path from "node:path";

export type OfflineExportedPage =
  | "pricing"
  | "site-explorer"
  | "blog-list"
  | "blog-bluf";

interface OfflineExportedMainProps {
  page: OfflineExportedPage;
}

const pageFiles: Record<OfflineExportedPage, string> = {
  pricing: "pricing.html",
  "site-explorer": "site-explorer.html",
  "blog-list": "blog-list.html",
  "blog-bluf": "blog-bluf.html",
};

export default async function OfflineExportedMain({
  page,
}: OfflineExportedMainProps) {
  const html = await readFile(
    path.join(process.cwd(), "public", "page-snapshots", pageFiles[page]),
    "utf8",
  );

  return (
    <main
      className="css-k008qs-main css-cgq59l-main css-i9gxme-main"
      id="main-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
