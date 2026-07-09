import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.05] bg-black/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/app-icon.png"
              alt=""
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-display text-xl tracking-[0.14em] text-white">
              CHEV<span className="text-primary">RON</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-secondary">
            O app dos motoclubes brasileiros.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
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
            <p className="text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
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
          <p className="tracking-widest uppercase">Ride free. Ride together.</p>
        </div>
      </div>
    </footer>
  );
}
