import type { PageContentComponent } from "@/types/page-layout";
import BlufArticleContent from "@/features/blog/components/BlufArticleContent";

export const articleContentBySlug: Record<string, PageContentComponent> = {
  bluf: BlufArticleContent,
};
