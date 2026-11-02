import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SingleArticleTemplate from "@/components/templates/SingleArticleTemplate";
import { articleContentBySlug } from "@/content/blog/article-page";

export const metadata: Metadata = {
  title: "What Is BLUF? — Ahrefs Blog",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(articleContentBySlug).map((slug) => ({ slug }));
}

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articleContentBySlug[slug];
  if (!article) notFound();

  return <SingleArticleTemplate article={article} />;
}
