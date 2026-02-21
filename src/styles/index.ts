/**
 * Single source of truth for all UI styles.
 * Components reference these keys only; add new variants here to scale.
 */

export const typography = {
  h1: "text-3xl md:text-4xl font-semibold text-heading tracking-tight",
  h2: "text-2xl md:text-3xl font-medium text-heading tracking-tight",
  h3: "text-xl md:text-2xl font-medium text-heading",
  h4: "text-lg md:text-xl font-medium text-muted",
  text: "text-base text-body leading-relaxed",
  subtitle: "text-sm md:text-base font-light text-body",
  link: "text-sm md:text-base text-body hover:text-heading underline underline-offset-2 transition-colors",
} as const;

export const section = {
  outer: "w-full",
  white: "bg-section-white",
  green: "bg-section-green",
  inner:
    "mx-auto box-border w-full max-w-[72rem] px-6 py-12 md:px-8 md:py-16",
  innerGreen:
    "mx-auto box-border w-full max-w-[72rem] px-8 py-16 md:px-12 md:py-24",
} as const;

export const button = {
  base:
    "inline-flex items-center justify-center self-start rounded-lg px-5 py-2.5 text-base font-medium uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-heading focus:ring-offset-2",
  primary:
    "bg-section-green text-heading hover:opacity-90",
  secondary:
    "bg-white border-2 border-black text-black hover:bg-gray-100",
} as const;

export const divider = {
  root: "my-6 border-t border-body/30",
} as const;

export const link = {
  root: "text-body hover:text-heading underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-heading focus:ring-offset-2 rounded",
} as const;

export const bulletList = {
  list: "list-disc list-inside space-y-2",
  listSection:
    "list-disc list-inside space-y-2 [&_li]:text-base [&_li]:text-body [&_li]:leading-relaxed [&_li::marker]:text-heading",
} as const;

export const socialIcon = {
  link: "text-body hover:text-heading transition-colors focus:outline-none focus:ring-2 focus:ring-heading focus:ring-offset-2 rounded p-1",
  size: "h-6 w-6",
} as const;

export const image = {
  wrapper: "w-fit mx-auto",
  img: "max-w-full h-auto object-contain block",
} as const;

export const nav = {
  bar: "sticky top-0 z-50 w-full border-b border-body/20 bg-background",
  brand:
    "text-xl font-extralight uppercase tracking-[0.2em] text-heading no-underline",
  inner:
    "mx-auto flex h-14 max-w-[72rem] items-center justify-between px-6 md:px-8",
  links: "hidden md:flex md:items-center md:gap-8",
  link:
    "uppercase text-body hover:text-heading font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-heading focus:ring-offset-2 rounded no-underline",
  hamburger:
    "flex h-10 w-10 items-center justify-center rounded-lg text-body hover:bg-body/10 hover:text-heading focus:outline-none focus:ring-2 focus:ring-heading focus:ring-offset-2 md:hidden",
  mobileMenu:
    "absolute left-0 right-0 top-full border-b border-body/20 bg-background shadow-md md:hidden",
  mobileMenuInner: "flex flex-col px-6 py-4 gap-1",
  mobileLink:
    "block rounded-lg px-4 py-3 uppercase text-body hover:bg-body/10 hover:text-heading font-medium no-underline",
} as const;
