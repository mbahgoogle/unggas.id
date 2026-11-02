import {
  HomeFooter,
  HomeNavigation,
} from "@/features/home/components/PageChrome";
import { BlogListFooter } from "@/features/blog/components/BlogListChrome";
import { PricingFooter } from "@/features/pricing/components/PageChrome";
import { SiteExplorerFooter } from "@/features/site-explorer/components/PageChrome";

export type GlobalChromeVariant =
  | "home"
  | "pricing"
  | "site-explorer"
  | "blog-list"
  | "blog-article";

interface GlobalFooterProps {
  variant: GlobalChromeVariant;
}

function unreachable(value: never): never {
  throw new Error(`Unsupported global chrome variant: ${value}`);
}

export function GlobalNavigation() {
  return <HomeNavigation />;
}

export function GlobalFooter({ variant }: GlobalFooterProps) {
  switch (variant) {
    case "home":
      return <HomeFooter />;
    case "pricing":
      return <PricingFooter />;
    case "site-explorer":
      return <SiteExplorerFooter />;
    case "blog-list":
    case "blog-article":
      return <BlogListFooter />;
    default:
      return unreachable(variant);
  }
}
