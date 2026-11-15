import {
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillCategories, type SkillCategory } from "../data/portfolio";

export interface SkillsProps {
  categories?: SkillCategory[];
}

const categoryIcons: LucideIcon[] = [
  Code2,
  Braces,
  Cloud,
  Database,
  Layers3,
  GitBranch,
];

function Skills({ categories = skillCategories }: SkillsProps) {
  return (
    <section id="skills" className="section-anchor section-space">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Tools of the trade</p>
          <h2 className="section-title">
            Skills & <span className="text-mint">technology.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            A practical toolkit spanning modern interfaces, cloud platforms,
            backend systems, and the architecture that brings them together.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <article
                key={category.title}
                className="rounded-2xl border border-white/[0.07] bg-panel/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-mint/20"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-mint/10 bg-mint/[0.07] text-mint">
                    <Icon size={19} />
                  </span>
                  <h3 className="font-medium text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
