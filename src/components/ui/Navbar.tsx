 "use client";
 
 import { useState } from "react";
 import { nav } from "@/styles";
 import { Button } from "@/components/ui";
 
 const NAV_ITEMS = [
   { label: "Schedule an Appointment", href: "https://google.com" },
   { label: "Client Services", href: "https://google.com" },
 ] as const;

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

         {/* Desktop nav */}
         <nav className={nav.links} aria-label="Main">
           {NAV_ITEMS.map(({ label, href }) =>
             label === "Schedule an Appointment" ? (
               <Button
                 key={label}
                 href={href}
                 variant="primary"
                 className="mt-0.5"
               >
                 {label}
               </Button>
             ) : (
               <a
                 key={label}
                 href={href}
                 className={nav.link}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 {label}
               </a>
             ),
           )}
         </nav>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`${nav.mobileMenu} ${!mobileOpen ? "hidden" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className={nav.mobileMenuInner}>
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={nav.mobileLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
