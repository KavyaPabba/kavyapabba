import useLiveTime from "@/hooks/use-live-time";

/**
 * Shared HUD chrome for the inside pages (About / Technical Expertise /
 * Projects / Connect), reusing the terminal aesthetic established on the
 * hero page: a small wordmark, a live status readout, and a blinking
 * prompt. Rendered in normal document flow (not fixed) so it sits at the
 * top of each page and scrolls away with the rest of the content, rather
 * than floating over card content further down a long page. Desktop only,
 * kept off mobile to avoid crowding narrow layouts.
 */
const PageHud = () => {
  const time = useLiveTime();

  return (
    <div className="hidden md:block container mx-auto px-6 md:px-10 pt-8">
      <div className="font-mono">
        <div className="text-sm font-bold tracking-[0.15em] text-foreground/70 mb-1">
          KAVYA.EXE
        </div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">
          Location: Italy &nbsp;·&nbsp; Status: Available &nbsp;·&nbsp; Time {time}{" "}
          <span className="text-primary animate-pulse ml-1">&gt;_</span>
        </div>
      </div>
    </div>
  );
};

export default PageHud;
