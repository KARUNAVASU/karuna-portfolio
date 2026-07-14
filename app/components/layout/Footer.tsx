export default function Footer() {
  const buildId = `KV-2026.${String(new Date().getMonth() + 1).padStart(2, "0")}`;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-deep-black px-margin-mobile py-10 md:px-margin-desktop">
      <div className="mx-auto flex max-w-container-max flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="font-display text-headline-md font-bold text-on-surface">
          KARUNA VASU
        </div>
        <p className="font-mono text-label-caps uppercase tracking-widest text-holographic-silver">
          © {year} KARUNA VASU // ALL_SYSTEMS_OPERATIONAL
        </p>
        <p className="font-mono text-[10px] tracking-widest text-on-surface-variant">
          BUILD_ID: {buildId} · LAST_DEPLOY: TODAY
        </p>
      </div>
    </footer>
  );
}
