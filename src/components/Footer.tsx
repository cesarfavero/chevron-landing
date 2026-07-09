import { NAV_LINKS } from "@/lib/constants";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.05] bg-black/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <BrandLogo size={32} wordmarkClassName="text-xl" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-secondary">
            O app dos motoclubes brasileiros.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <div>
            <p className="text-[12px] font-medium tracking-wide text-muted">
              Navegação
            </p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary transition hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-medium tracking-wide text-muted">
              Plataformas
            </p>
            <ul className="mt-3 space-y-2 text-sm text-secondary">
              <li>iOS · App Store</li>
              <li>Android · Google Play</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted md:flex-row md:px-8">
          <p>© {year} Chevron · Caesars Technology</p>
          <p className="tracking-wide">Ride free. Ride together.</p>
        </div>
      </div>
    </footer>
  );
}
