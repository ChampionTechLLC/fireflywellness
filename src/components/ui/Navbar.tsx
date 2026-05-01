"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { SCHEDULE_URL } from "@/constants";
import { nav } from "@/styles";
import { Button, LanguageToggle } from "@/components/ui";

type NavItem =
  | { label: string; href: string; kind: "hash" }
  | { label: string; href: string; kind: "external"; variant?: "button" };

const CLIENT_PORTAL_URL =
  "https://practice.mbpractice.com/ClientPortal/ClientLogin";

function NavLink({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      className={nav.link}
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

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { content } = useLanguage();
  const scheduleItem: NavItem = {
    label: content.nav.schedule,
    href: SCHEDULE_URL,
    kind: "external",
    variant: "button",
  };
  const navLinkItems: NavItem[] = [
    { label: content.nav.clinicians, href: "#clinicians", kind: "hash" },
    { label: content.nav.services, href: "#services", kind: "hash" },
    { label: content.nav.location, href: "#location", kind: "hash" },
    {
      label: content.nav.clientPortal,
      href: CLIENT_PORTAL_URL,
      kind: "external",
    },
  ];
  /** Mobile menu: schedule first, then the rest in the same order as the text links on desktop. */
  const mobileNavItems: NavItem[] = [scheduleItem, ...navLinkItems];

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
            href={scheduleItem.href}
            variant="primary"
            className="mt-0.5 shrink-0 mr-6"
          >
            {scheduleItem.label}
          </Button>
          <nav
            className="ml-auto flex items-center gap-6"
            aria-label={content.nav.mainLabel}
          >
            {navLinkItems.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
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
          {mobileNavItems.map((item) =>
            item.kind === "external" && item.variant === "button" ? (
              <Button
                key={item.label}
                href={item.href}
                variant="primary"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={nav.mobileLink}
                {...(item.kind === "external"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ),
          )}
        </div>
      </div>
    </header>
  );
}
