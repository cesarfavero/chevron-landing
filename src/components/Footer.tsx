import { NAV } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/15 bg-black px-6 py-12 text-xs uppercase tracking-widest text-white/60 md:px-12">
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
        <div>
          <div className="text-sm font-semibold text-white">Chevron.</div>
          <p className="mt-2 max-w-xs normal-case tracking-normal text-white/40">
            O app dos motoclubes brasileiros.
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white">
              {n.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
        <span>© {year} Chevron · Caesars Technology</span>
        <span>Ride free. Ride together.</span>
      </div>
    </footer>
  );
}
