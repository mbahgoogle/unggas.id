import HomePageContent from "@/features/home/components/HomePageContent";
import {
  GlobalFooter,
  GlobalNavigation,
} from "@/components/chrome/GlobalChrome";

export default function HomepageTemplate() {
  return (
    <HomePageContent
      navigation={<GlobalNavigation />}
      footer={<GlobalFooter variant="home" />}
    />
  );
}
