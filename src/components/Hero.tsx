import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profile } from "../data/portfolio";

export interface HeroProps {
  name?: string;
}

function Hero({ name = profile.name }: HeroProps) {
  return (
    <section
      id="home"
      className="section-anchor relative isolate flex min-h-[calc(100svh-76px)] items-center"
    >
      <div className="hero-grid absolute inset-0 -z-10 opacity-60" />
      <div className="absolute -right-36 top-12 -z-10 h-[28rem] w-[28rem] rounded-full bg-mint/[0.08] blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-7 inline-flex items-center gap-3 text-sm font-medium tracking-wide text-mint">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
            </span>
            {profile.role} <span className="text-slate-600">/</span>{" "}
            {profile.location}
          </p>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            {name}
            <span className="mt-3 block text-3xl font-medium leading-tight tracking-[-0.04em] text-slate-400 sm:text-4xl lg:text-[2.75rem]">
              {profile.headline}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              className="button-primary"
              href="/resume.pdf"
              download="Pratyush-Singh-Resume.pdf"
            >
              <Download size={17} />
              Download resume
            </a>
            <a className="button-secondary" href="#experience">
              Explore my work <ArrowDown size={16} />
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/[0.08] pt-6 text-sm text-slate-500">
            <span>
              <strong className="mr-2 text-white">{profile.yearsExperience}</strong>
              years building software
            </span>
            <span>
              <strong className="mr-2 text-white">Azure</strong>
              cloud architecture
            </span>
            <span>
              <strong className="mr-2 text-white">.NET</strong>
              distributed systems
            </span>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-sm lg:block">
          <div className="absolute -inset-5 rounded-[2rem] border border-mint/10" />
          <div className="relative rounded-3xl border border-white/10 bg-panel/90 p-7 shadow-glow">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-mint/80" />
              </div>
              <span className="font-mono text-xs text-slate-500">
                architecture.ts
              </span>
            </div>
            <div className="space-y-4 py-6 font-mono text-[13px] leading-6">
              <p>
                <span className="text-fuchsia-300">const</span>{" "}
                <span className="text-sky-200">approach</span> = {"{"}
              </p>
              <p className="pl-5 text-slate-400">
                scale: <span className="text-amber-200">"cloud-native"</span>,
              </p>
              <p className="pl-5 text-slate-400">
                services: <span className="text-amber-200">"event-driven"</span>,
              </p>
              <p className="pl-5 text-slate-400">
                mindset: <span className="text-amber-200">"built to evolve"</span>,
              </p>
              <p className="text-slate-500">{"};"}</p>
              <div className="my-5 h-px bg-white/[0.08]" />
              <p className="flex items-center gap-2 text-mint">
                <span className="text-slate-500">&gt;</span> shipping meaningful
                systems
                <ArrowUpRight size={14} />
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-mint/10 bg-mint/[0.06] p-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-mint/10 text-sm font-semibold text-mint">
                PS
              </div>
              <div>
                <p className="text-sm font-medium text-white">{name}</p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {profile.role} · {profile.yearsExperience} years experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
