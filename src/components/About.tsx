"use client";

import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-[900px] border-t border-white/20 bg-[#050505] px-6 py-32 text-white md:px-12"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        {/* Left: Stats */}
        <div className="flex flex-col gap-16 lg:col-span-4">
          <div className="stat-block border-t border-white/30 pt-4">
            <div className="mb-2 text-xs uppercase tracking-widest opacity-50">
              Plataformas
            </div>
            <h2 className="text-7xl font-semibold tracking-tighter md:text-8xl">
              <span className="counter" data-target="2">
                0
              </span>
              <span className="text-4xl text-white/50"> native</span>
            </h2>
            <p className="mt-4 w-4/5 text-base uppercase tracking-tight opacity-80">
              iOS e Android nativos. Mesma experiência no bolso e no guidão.
            </p>
          </div>

          <div className="stat-block border-t border-white/30 pt-4">
            <div className="mb-2 text-xs uppercase tracking-widest opacity-50">
              Tempo real
            </div>
            <h2 className="text-7xl font-semibold tracking-tighter md:text-8xl">
              <span className="counter" data-target="100">
                0
              </span>
              <span className="text-4xl text-white/50">% live</span>
            </h2>
            <p className="mt-4 w-4/5 text-base uppercase tracking-tight opacity-80">
              Localização, chat e SOS via socket — o clube sincronizado.
            </p>
          </div>

          <div className="stat-block border-t border-white/30 pt-4">
            <div className="mb-2 text-xs uppercase tracking-widest opacity-50">
              Segurança
            </div>
            <h2 className="text-7xl font-semibold tracking-tighter md:text-8xl">
              SOS
              <span className="text-4xl text-white/50"> GPS</span>
            </h2>
            <p className="mt-4 w-4/5 text-base uppercase tracking-tight opacity-80">
              Hold-to-send com posição em tempo real para o clube.
            </p>
          </div>
        </div>

        {/* Right: Manifesto */}
        <div className="flex flex-col pt-12 lg:col-span-8 lg:pt-0">
          <div className="mb-8 border-b border-white/20 pb-4 text-xs uppercase tracking-widest opacity-50">
            (001 — O que é o Chevron)
          </div>

          <h3 className="manifesto-title mb-16 text-5xl font-semibold uppercase leading-[0.85] tracking-tighter text-gray-300 mix-blend-exclusion md:text-7xl lg:text-[6.5vw]">
            CONECTAMOS MOTOCLUBES COM ROTAS EM GRUPO, NAVEGAÇÃO E SOS — SEM
            IMPROVISAR NO WHATSAPP.
          </h3>

          <div className="relative flex flex-col items-start gap-8 md:flex-row">
            {/* Aesthetic image (not Harley) — as in reference side plate */}
            <Image
              src="/images/brutal/signal-ref.jpg"
              alt=""
              width={400}
              height={400}
              className="aspect-square w-full rotate-3 object-cover grayscale contrast-150 md:w-64"
            />

            <div className="flex flex-col gap-8">
              <p className="manifesto-body w-full text-xl font-medium uppercase leading-snug tracking-tight md:w-4/5 md:text-3xl">
                GPS ao vivo do clube. Turn-by-turn no guidão. Chat e eventos.
                Quando a estrada aperta, SOS com localização.
              </p>

              <a
                href="#contact"
                className="group flex h-32 w-32 items-center justify-center self-start rounded-full border border-white text-xs font-bold uppercase tracking-widest transition-colors duration-500 hover:bg-white hover:text-black md:absolute md:-bottom-16 md:right-12"
              >
                <span className="transition-transform group-hover:scale-90">
                  Baixar
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
