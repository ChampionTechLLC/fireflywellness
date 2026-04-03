"use client";

import { useState } from "react";
import { nav } from "@/styles";
import { Button } from "@/components/ui";

type NavItem =
  | { label: string; href: string; kind: "hash" }
  | { label: string; href: string; kind: "external"; variant?: "button" };

const SCHEDULE_ITEM: NavItem = {
  label: "Schedule an Appointment",
  href: "https://google.com",
  kind: "external",
  variant: "button",
};

const NAV_LINK_ITEMS: NavItem[] = [
  { label: "Clinicians", href: "#clinicians", kind: "hash" },
  { label: "Services", href: "#services", kind: "hash" },
  { label: "Location", href: "#location", kind: "hash" },
  {
    label: "Client Portal",
    href: "https://practice.mbpractice.com/ClientPortal/ClientLogin",
    kind: "external",
  },
];

/** Mobile menu: schedule first, then the rest in the same order as the text links on desktop. */
const MOBILE_NAV_ITEMS: NavItem[] = [SCHEDULE_ITEM, ...NAV_LINK_ITEMS];

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

  return (
    <header className={nav.bar}>
      <div className={nav.inner}>
        <a href="/" className={nav.brand}>
          Firefly Wellness, PLLC
        </a>

        <div className="hidden flex-1 items-center md:ml-8 md:flex lg:ml-10">
          <Button
            href={SCHEDULE_ITEM.href}
            variant="primary"
            className="mt-0.5 shrink-0 mr-6"
          >
            {SCHEDULE_ITEM.label}
          </Button>
          <nav
            className="ml-auto flex items-center gap-6"
            aria-label="Main"
          >
            {NAV_LINK_ITEMS.map((item) => (
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
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
          {MOBILE_NAV_ITEMS.map((item) =>
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
