"use client";

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type {
  HTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react";

interface NavigationMenuState {
  activeMenu: string | null;
  setActiveMenu: (menuId: string | null) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

interface NavigationMenuProviderProps {
  children: ReactNode;
}

interface DropdownMenuProps {
  id: string;
  trigger: ReactElement<HTMLAttributes<HTMLElement>>;
  panel: ReactElement<HTMLAttributes<HTMLElement>>;
}

interface MobileMenuButtonProps {
  button: ReactElement<HTMLAttributes<HTMLElement>>;
}

interface MobileMenuPanelProps {
  panel: ReactElement<HTMLAttributes<HTMLElement>>;
}

const NavigationMenuContext = createContext<NavigationMenuState | null>(null);

function useNavigationMenu(): NavigationMenuState {
  const state = useContext(NavigationMenuContext);
  if (!state) {
    throw new Error(
      "Navigation menu controls must be rendered inside NavigationMenuProvider.",
    );
  }
  return state;
}

export function NavigationMenuProvider({
  children,
}: NavigationMenuProviderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    function closeMenuWhenClickingOutside(event: globalThis.MouseEvent) {
      const target = event.target;
      if (
        target instanceof Element &&
        !target.closest('[role="menuitem"][aria-haspopup="true"]') &&
        !target.closest('[role="menu"]')
      ) {
        setActiveMenu(null);
      }
    }

    document.addEventListener("click", closeMenuWhenClickingOutside);
    return () => {
      document.removeEventListener("click", closeMenuWhenClickingOutside);
    };
  }, []);

  return (
    <NavigationMenuContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        mobileMenuOpen,
        setMobileMenuOpen,
      }}
    >
      {children}
    </NavigationMenuContext.Provider>
  );
}

export function DropdownMenu({ id, trigger, panel }: DropdownMenuProps) {
  const { activeMenu, setActiveMenu } = useNavigationMenu();
  const isOpen = activeMenu === id;

  const handleTriggerClick: MouseEventHandler<HTMLElement> = (event) => {
    trigger.props.onClick?.(event);
    if (isOpen) {
      setActiveMenu(null);
      return;
    }

    event.preventDefault();
    setActiveMenu(id);
  };

  const handleTriggerMouseEnter: MouseEventHandler<HTMLElement> = (event) => {
    trigger.props.onMouseEnter?.(event);
    if (window.innerWidth >= 1024) setActiveMenu(id);
  };

  const handleTriggerMouseLeave: MouseEventHandler<HTMLElement> = (event) => {
    trigger.props.onMouseLeave?.(event);
    const target = event.relatedTarget;
    const nextElement = event.currentTarget.nextElementSibling;
    if (target instanceof Node && nextElement?.contains(target)) return;
    if (window.innerWidth >= 1024) setActiveMenu(null);
  };

  const handlePanelMouseLeave = (event: MouseEvent<HTMLElement>) => {
    panel.props.onMouseLeave?.(event);
    if (window.innerWidth >= 1024) setActiveMenu(null);
  };

  const triggerElement = cloneElement(trigger, {
    "aria-expanded": isOpen,
    onClick: handleTriggerClick,
    onMouseEnter: handleTriggerMouseEnter,
    onMouseLeave: handleTriggerMouseLeave,
  });

  const panelElement = cloneElement(panel, {
    onMouseLeave: handlePanelMouseLeave,
  });

  return (
    <>
      {triggerElement}
      {panelElement}
    </>
  );
}

export function MobileMenuButton({ button }: MobileMenuButtonProps) {
  const { mobileMenuOpen, setMobileMenuOpen } = useNavigationMenu();

  const handleClick: MouseEventHandler<HTMLElement> = (event) => {
    button.props.onClick?.(event);
    event.preventDefault();
    event.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return cloneElement(button, {
    "aria-expanded": mobileMenuOpen,
    onClick: handleClick,
  });
}

export function MobileMenuPanel({ panel }: MobileMenuPanelProps) {
  const { mobileMenuOpen, setMobileMenuOpen } = useNavigationMenu();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function updateViewport() {
      setIsMobile(window.innerWidth < 1024);
    }

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const handleClick: MouseEventHandler<HTMLElement> = (event) => {
    panel.props.onClick?.(event);
    const target = event.target;
    if (
      isMobile &&
      target instanceof Element &&
      target.closest("a")
    ) {
      setMobileMenuOpen(false);
    }
  };

  const className =
    isMobile && mobileMenuOpen
      ? `${panel.props.className ?? ""} [display:flex]! [flex-direction:column]! [position:fixed]! [top:0]! [left:0]! [right:0]! [bottom:0]! [z-index:9999]! [background:#1a1a2e]! [padding:80px_24px_24px]! [overflow-y:auto]! [visibility:visible]! [opacity:1]! [&>nav]:!flex [&>nav]:!flex-col`.trim()
      : panel.props.className;

  return cloneElement(panel, { onClick: handleClick, className });
}
