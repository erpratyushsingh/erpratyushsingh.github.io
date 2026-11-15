import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export interface ContactProps {
  email?: string;
  linkedInUrl?: string;
  githubUrl?: string;
}

function Contact({
  email = profile.email,
  linkedInUrl = profile.linkedInUrl,
  githubUrl = profile.githubUrl,
}: ContactProps) {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: linkedInUrl,
      icon: Linkedin,
      external: true,
    },
    {
      label: "GitHub",
      href: githubUrl,
      icon: Github,
      external: true,
    },
    {
      label: "Email",
      href: `mailto:${email}`,
      icon: Mail,
      external: false,
    },
  ];

  return (
    <footer id="contact" className="section-anchor border-t border-white/[0.07]">
      <div className="section-shell py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Have a good challenge in mind?</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-mint">meaningful.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              I&apos;m always glad to connect with people solving complex
              problems through thoughtful technology.
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-mint transition hover:gap-3"
            >
              {email} <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={label}
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:border-mint/30 hover:bg-mint/[0.06] hover:text-mint"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with care.
          </p>
          <a className="transition hover:text-mint" href="#home">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
