import type { Metadata } from "next";
import SinglePageTemplate from "@/components/templates/SinglePageTemplate";
import PricingPageContent from "@/features/pricing/components/PricingPageContent";

export const metadata: Metadata = {
  title: "Plans & pricing — Ahrefs",
};

export default function PricingPage() {
  return (
    <SinglePageTemplate
      content={PricingPageContent}
      chrome="pricing"
    />
  );
}
