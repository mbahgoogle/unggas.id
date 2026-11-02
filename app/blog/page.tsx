import type { Metadata } from "next";
import BlogListTemplate from "@/components/templates/BlogListTemplate";

export const metadata: Metadata = {
  title: "Ahrefs Blog",
};

export default function BlogPage() {
  return <BlogListTemplate />;
}
