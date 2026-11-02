import BlogListPageContent from "@/features/blog/components/BlogListPageContent";
import {
  GlobalFooter,
  GlobalNavigation,
} from "@/components/chrome/GlobalChrome";

export default function BlogListTemplate() {
  return (
    <BlogListPageContent
      navigation={<GlobalNavigation />}
      footer={<GlobalFooter variant="blog-list" />}
    />
  );
}
