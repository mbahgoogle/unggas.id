import {
  GlobalFooter,
  GlobalNavigation,
  type GlobalChromeVariant,
} from "@/components/chrome/GlobalChrome";
import type { PageContentComponent } from "@/types/page-layout";

interface SinglePageTemplateProps {
  content: PageContentComponent;
  chrome: GlobalChromeVariant;
}

export default function SinglePageTemplate({
  content,
  chrome,
}: SinglePageTemplateProps) {
  const PageContent = content;
  return (
    <PageContent
      navigation={<GlobalNavigation />}
      footer={<GlobalFooter variant={chrome} />}
    />
  );
}
