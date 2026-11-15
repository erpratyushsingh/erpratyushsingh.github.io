import { ArrowUpRight, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio";

export interface AboutProps {
  description?: string;
}

function About({ description = profile.summary }: AboutProps) {
  return (
    <section id="about" className="section-anchor section-space">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <h2 className="section-title">
            Engineering for <span className="text-mint">what comes next.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              With more than {profile.yearsExperience} years in software
              engineering, I have contributed to products across healthcare,
              telecom, and enterprise digital transformation.
            </p>
            <p>
              {description} I enjoy untangling complex systems: modernizing
              legacy platforms, shaping solution architecture, and building
              distributed services that remain reliable as they scale.
            </p>
            <p>
              Alongside delivery, I mentor engineers, guide technical decisions,
              and explore how Generative AI can improve engineering workflows.
            </p>
            <p>
              I hold a {profile.education} and am based in {profile.location}.
            </p>
            <a
              className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-mint transition hover:gap-3"
              href={profile.linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              More about my journey <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="info-card">
              <div className="info-icon">
                <Sparkles size={19} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">What I focus on</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Cloud architecture, distributed systems, and engineering
                  leadership.
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={19} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Based in</p>
                <p className="mt-1 text-sm text-slate-400">{profile.location}</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <GraduationCap size={19} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Education</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {profile.education}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
