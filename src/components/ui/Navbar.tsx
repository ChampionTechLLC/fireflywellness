"use client";

import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { SCHEDULE_URL } from "@/constants";
import { nav } from "@/styles";
import { Button, LanguageToggle } from "@/components/ui";

type NavItem =
  | { label: string; href: string; kind: "hash" }
  | { label: string; href: string; kind: "route" }
  | { label: string; href: string; kind: "external" };

const CLIENT_PORTAL_URL =
  "https://practice.mbpractice.com/ClientPortal/ClientLogin";

function NavLink({
  item,
  className,
  onClick,
}: {
  item: NavItem;
  className: string;
  onClick?: () => void;
}) {
  if (item.kind === "route") {
    return (
      <NextLink href={item.href} className={className} onClick={onClick}>
        {item.label}
      </NextLink>
    );
  }

  return (
    <a
      href={item.href}
      className={className}
      onClick={onClick}
      {...(item.kind === "external"
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {item.label}
    </a>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 flex-col items-center justify-center">
      <span
        className={`absolute h-0.5 w-5 bg-current transition-transform ${
          open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
        }`}
      />
      <span
        className={`h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute h-0.5 w-5 bg-current transition-transform ${
          open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
        }`}
      />
    </span>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MoreMenu({ label, items }: { label: string; items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className={nav.moreButton}
        aria-expanded={open}
        aria-controls="more-nav"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      {open ? (
        <div id="more-nav" className={nav.dropdown}>
          {items.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              className={nav.dropdownLink}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { content } = useLanguage();
  const primaryItems: NavItem[] = [
    { label: content.nav.services, href: "/services", kind: "route" },
    { label: content.nav.clinicians, href: "/#clinicians", kind: "hash" },
    { label: content.nav.fees, href: "/insurance-fees", kind: "route" },
  ];
  const moreItems: NavItem[] = [
    { label: content.nav.location, href: "/#location", kind: "hash" },
    {
      label: content.nav.clientPortal,
      href: CLIENT_PORTAL_URL,
      kind: "external",
    },
    { label: content.nav.careers, href: "/careers", kind: "route" },
  ];
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={nav.bar}>
      <div className="border-b border-body/10">
        <div className="mx-auto flex h-9 max-w-[72rem] items-center justify-end px-6 md:px-8">
          <LanguageToggle />
        </div>
      </div>
      <div className={nav.inner}>
        <NextLink href="/" className={nav.brand}>
          {content.nav.brand}
        </NextLink>

        <div className="hidden flex-1 items-center md:ml-8 md:flex lg:ml-10">
          <Button
            href={SCHEDULE_URL}
            variant="primary"
            className="mr-6 shrink-0 !self-center"
          >
            {content.nav.schedule}
          </Button>
          <nav
            className="ml-auto flex items-center gap-6"
            aria-label={content.nav.mainLabel}
          >
            {primaryItems.map((item) => (
              <NavLink key={item.label} item={item} className={nav.link} />
            ))}
            <MoreMenu label={content.nav.more} items={moreItems} />
          </nav>
        </div>

        <button
          type="button"
          className={nav.hamburger}
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? content.nav.closeMenu : content.nav.openMenu}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`${nav.mobileMenu} ${!mobileOpen ? "hidden" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className={nav.mobileMenuInner}>
          <Button
            href={SCHEDULE_URL}
            variant="primary"
            className="w-full"
            onClick={closeMobile}
          >
            {content.nav.schedule}
          </Button>
          {primaryItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              className={nav.mobileLink}
              onClick={closeMobile}
            />
          ))}
          <p className={nav.mobileGroupLabel}>{content.nav.more}</p>
          {moreItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              className={nav.mobileLink}
              onClick={closeMobile}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
