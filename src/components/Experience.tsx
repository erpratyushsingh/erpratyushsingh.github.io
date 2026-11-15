import { ArrowUpRight } from "lucide-react";
import { experience, type ExperienceItem } from "../data/portfolio";

export interface ExperienceProps {
  items?: ExperienceItem[];
}

function Experience({ items = experience }: ExperienceProps) {
  return (
    <section id="experience" className="section-anchor section-space bg-white/[0.015]">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Where I have made an impact</p>
          <h2 className="section-title">
            Experience & <span className="text-mint">growth.</span>
          </h2>
        </div>

        <div className="relative ml-2 border-l border-white/10 sm:ml-3">
          {items.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className="relative pb-12 pl-8 last:pb-0 sm:pl-12"
            >
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-mint bg-ink shadow-[0_0_16px_rgba(110,231,194,0.6)]" />
              <div className="rounded-2xl border border-white/[0.07] bg-panel/60 p-5 transition duration-300 hover:border-mint/20 sm:p-7">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-mint">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {item.company}
                      <span className="mx-2 text-slate-700">/</span>
                      {item.location}
                    </p>
                  </div>
                  <span className="hidden rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500 sm:inline-flex">
                    0{index + 1}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-7 text-slate-400"
                    >
                      <ArrowUpRight
                        size={16}
                        className="mt-1.5 shrink-0 text-mint/70"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
