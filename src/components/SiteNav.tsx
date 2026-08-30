import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { to: "/about", label: "About" },
  { to: "/technical-expertise", label: "Technical Expertise" },
  { to: "/projects", label: "Projects" },
  { to: "/connect", label: "Connect" },
];

interface SiteNavProps {
  /** "hero" = numbered list meant to sit inline on the hero page.
   *  "compact" = small fixed panel used on the other pages. */
  variant?: "hero" | "compact";
  className?: string;
}

const SiteNav = ({ variant = "compact", className }: SiteNavProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const item = (to: string, label: string, index: number) => {
    const isActive = location.pathname === to;
    return (
      <Link
        key={to}
        to={to}
        className={cn(
          "group flex items-baseline gap-3 text-xs md:text-sm tracking-widest uppercase transition-colors",
          isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
        )}
      >
        <span className={cn("text-primary/70", isActive && "text-primary")}>
          {String(index).padStart(2, "0")}
        </span>
        <span>{label}</span>
      </Link>
    );
  };

  if (variant === "hero") {
    return (
      <nav className={cn("flex flex-col gap-4 md:gap-5 font-mono", className)}>
        {NAV_ITEMS.map((navItem, i) => item(navItem.to, navItem.label, i + 1))}
      </nav>
    );
  }

  return (
    <nav className={cn("fixed top-4 right-4 md:top-6 md:right-6 z-50 font-mono", className)}>
      {/* Mobile toggle — the full panel would otherwise sit permanently over page content on narrow screens */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden flex items-center gap-2 rounded-lg border border-border/60 bg-card/70 backdrop-blur-md px-3 py-2 text-[11px] tracking-widest uppercase text-muted-foreground"
        aria-expanded={open}
        aria-label="Toggle navigation menu"
      >
        Menu
        <span className={cn("inline-block transition-transform", open && "rotate-180")}>▾</span>
      </button>

      <div
        className={cn(
          "mt-2 md:mt-0 flex-col gap-2 rounded-xl border border-border/60 bg-card/70 backdrop-blur-md px-4 py-3 shadow-lg",
          open ? "flex" : "hidden",
          "md:flex"
        )}
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className={cn(
            "mb-1 border-b border-border/60 pb-2 text-[11px] tracking-widest uppercase transition-colors",
            location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
          )}
        >
          Home
        </Link>
        {NAV_ITEMS.map((navItem, i) => {
          const isActive = location.pathname === navItem.to;
          return (
            <Link
              key={navItem.to}
              to={navItem.to}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-baseline gap-2 text-[11px] tracking-widest uppercase transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className={cn("text-primary/70", isActive && "text-primary")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{navItem.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default SiteNav;
