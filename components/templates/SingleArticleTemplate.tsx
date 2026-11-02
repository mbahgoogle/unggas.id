import type { PageContentComponent } from "@/types/page-layout";
import {
  GlobalFooter,
  GlobalNavigation,
} from "@/components/chrome/GlobalChrome";

interface SingleArticleTemplateProps {
  article: PageContentComponent;
}

export default function SingleArticleTemplate({
  article,
}: SingleArticleTemplateProps) {
  const ArticleContent = article;
  return (
    <ArticleContent
      navigation={<GlobalNavigation />}
      footer={<GlobalFooter variant="blog-article" />}
    />
  );
}
