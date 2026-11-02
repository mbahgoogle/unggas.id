import type { Metadata } from "next";
import SinglePageTemplate from "@/components/templates/SinglePageTemplate";
import SiteExplorerPageContent from "@/features/site-explorer/components/SiteExplorerPageContent";

export const metadata: Metadata = {
  title: "Site Explorer — Ahrefs",
};

export default function SiteExplorerPage() {
  return (
    <SinglePageTemplate
      content={SiteExplorerPageContent}
      chrome="site-explorer"
    />
  );
}
