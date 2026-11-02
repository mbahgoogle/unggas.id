import type { ComponentType, ReactNode } from "react";

export interface PageLayoutProps {
  navigation: ReactNode;
  footer: ReactNode;
}

export type PageContentComponent = ComponentType<PageLayoutProps>;
