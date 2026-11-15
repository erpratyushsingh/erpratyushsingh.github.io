import { ArrowUpRight } from "lucide-react";
import { projects, type ProjectItem } from "../data/portfolio";

export interface ProjectsProps {
  items?: ProjectItem[];
}

function Projects({ items = projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="section-anchor section-space bg-white/[0.015]"
    >
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Selected product work</p>
          <h2 className="section-title">
            Systems built to <span className="text-mint">make a difference.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            A few of the products and platforms I have contributed to throughout
            my career.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((project, index) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl border border-white/[0.07] bg-panel/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-mint/20 sm:p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-600">
                  0{index + 1} / 03
                </span>
                <ArrowUpRight
                  size={19}
                  className="text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint"
                />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-mint">
                {project.type}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.description}
              </p>
              <ul className="mt-5 space-y-2">
                {project.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="flex gap-2 text-sm leading-6 text-slate-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" />
                    {contribution}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[11px] text-slate-500"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
