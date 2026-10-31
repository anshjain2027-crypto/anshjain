import { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
  Award,
  GraduationCap,
  FileText,
  Users,
  BadgeCheck,
  Building2,
} from "lucide-react";
import { Nav } from "./Nav";
import { Reveal } from "./Reveal";

const PORTRAIT = "/ansh.jpg";
const EMAIL = "ansh.jain2027@mastersunion.org";
const PHONE = "+91 8989147035";
const LINKEDIN = "https://www.linkedin.com/in/ansh-jain-8821401b2";

const skills = [
  "Valuation",
  "Financial Modeling",
  "DCF & Comparable Company Analysis",
  "Purchase Price Allocation",
  "Impairment Testing",
  "Stakeholder Communication",
  "Investment Memo Preparation",
  "Capital IQ",
  "Pitchbook",
  "Refinitiv",
  "Tracxn",
  "Advanced Excel",
  "Canva",
];

const experience = [
  {
    company: "KPMG India",
    role: "Senior Analyst — Valuations: CF Deal Advisory",
    meta: "Mumbai | June '23 – Oct '25",
    tags: ["Promoted April '25", "Awarded Aug '23"],
    points: [
      "Accelerated financial reporting and live deal turnaround, delivering 40+ valuations across India, UK, US and the Middle East.",
      "Safeguarded audit accuracy by challenging valuers and validating 60+ valuations for listed and unlisted companies.",
      "Achieved 100% on-time regulatory filings managing valuation reporting for 10+ PE/VC firms.",
      "Delivered audit valuation for the world's 6th largest sovereign wealth fund's complex private equity holdings.",
      "Built DCF, comparable company and precedent transaction models.",
      "Leveraged Capital IQ, Pitchbook, Refinitiv and Tracxn to improve turnaround and accuracy.",
      "Won 4 client projects through RFP responses and proposal decks.",
      "Earned the Valuation New Debut Award for exceptional performance within the first three months.",
      "Retained three fresh analysts through structured training and mentorship.",
    ],
  },
  {
    company: "Agile Capital Services Pvt. Ltd.",
    role: "Marketing & Financial Strategy Intern",
    meta: "Remote | Jul '22 – Sept '22",
    tags: [],
    points: [
      "Researched mutual funds and insurance products to strengthen strategic recommendations.",
      "Delivered investor-focused decks and reports supporting product marketing initiatives.",
    ],
  },
];

const education = [
  {
    school: "Masters' Union",
    degree: "PGP in Technology & Business Management",
    meta: "Gurugram | 2026 – Present",
    note: "Core member of MU Investment Fund (₹5 Crore student-led fund)",
  },
  {
    school: "H.R. College of Commerce and Economics",
    degree: "Master of Commerce — Advanced Accounting",
    meta: "Mumbai | 2023 – 2025",
    note: "CGPA 9.20/10 · Top 10 percentile",
  },
  {
    school: "H.R. College of Commerce and Economics",
    degree: "Bachelor of Accounting and Finance",
    meta: "Mumbai | 2020 – 2023",
    note: "CGPA 9.63/10 · President of E-Cell · Class Representative (240 students)",
  },
  {
    school: "St. Joseph Convent Senior Secondary School",
    degree: "CBSE XII Commerce — 87.8%",
    meta: "2020",
    note: "CBSE X — 83.8% (2018)",
  },
];

const projects = [
  {
    title: 'Research Paper: "Effects of Bank Mergers on Customers"',
    year: "2024",
    note: "Published in IJSERM",
    body: "Surveyed 100+ Mumbai bank customers post-merger using a 21-factor behavioural questionnaire.",
  },
  {
    title: "Study on Portfolio Management Services in India",
    year: "2025",
    note: "Independent research",
    body: "Assessed investor preferences on fees, risk appetite and awareness.",
  },
  {
    title: "Study on Investor's Perception Towards Crypto Assets",
    year: "2023",
    note: "Independent research",
    body: "Analysed investor awareness, risk appetite and adoption barriers.",
  },
];

const leadership = [
  {
    role: "President, Entrepreneurship & Incubation Cell",
    org: "H.R. College · 2023",
    body: "Led 5 departments and 30+ team members; elevated MoE's IIC rating to 4.5 stars.",
  },
  {
    role: 'Chairperson, "R.I.S.E." Pan-India Entrepreneurship Fest',
    org: "2022 – 2023",
    body: "Scaled to 200+ national participants, 5 corporate sponsors and 100+ colleges.",
  },
  {
    role: "Hospitality Director, Investment Club",
    org: "H.R. College · 2023",
    body: "Onboarded 20+ celebrities for college events.",
  },
  { role: "Operations Director, BAF Committee", org: "2022", body: "" },
  { role: "Vice President, Blue House", org: "2018 – 2019", body: "" },
];

const achievements = [
  { title: "General Leadership Award", note: "30 / 2,000 students", year: "2023" },
  { title: "Best Organizer Award — Investment Club", note: "5 / 120 students", year: "2023" },
  { title: "Promising Young Leader Award", note: "50 / 2,000 students", year: "2022" },
  {
    title: "Best Contingent Leader & Overall Championship",
    note: "Mathematrix",
    year: "2022",
  },
  { title: "Best Organizer Award — FIN-EST Fest", note: "3 / 50 students", year: "2022" },
  { title: "Outstanding Contribution Award", note: "Investment Club", year: "2021" },
];

const certifications = [
  {
    title: "Advanced Excel Training",
    note: "24-hour instructor-led · FinOptions Institute",
    year: "2021",
  },
  { title: "Financial Modeling (Intermediate)", note: "350-hour program", year: "2021" },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl md:text-5xl">{title}</h2>
      <div className="hairline mt-5 h-px w-32" />
    </div>
  );
}

function Section({
  id,
  children,
  alt = false,
}: {
  id: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section id={id} className={alt ? "bg-ink/60" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">{children}</div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-md border border-border bg-surface/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        required
        aria-label="Your name"
        className={field}
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        required
        type="email"
        aria-label="Your email"
        className={field}
        placeholder="Your email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        required
        rows={5}
        aria-label="Message"
        className={field}
        placeholder="How can I help?"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Send message <ArrowRight size={16} />
      </button>
    </form>
  );
}

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="grid-motif absolute inset-0 opacity-70" aria-hidden />
        <div
          className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 45%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-32 pb-20 md:px-8 md:pt-44 md:pb-28 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="eyebrow">Valuation · Deal Advisory · Financial Analysis</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl md:text-7xl">Ansh Jain</h1>
            <p className="mt-4 text-lg text-foreground/90 md:text-xl">
              Valuation &amp; Transaction Advisory Professional
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              2+ years at KPMG India | 100+ valuation &amp; financial advisory engagements across
              India, UK, US &amp; Middle East
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Experience <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Get in Touch
              </a>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["100+", "Engagements"],
                ["4", "Global markets"],
                ["10+", "PE/VC firms served"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl text-primary">{v}</dt>
                  <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
              <div className="absolute -inset-3 rounded-lg border border-primary/30" aria-hidden />
              <img
                src={PORTRAIT}
                alt="Portrait of Ansh Jain"
                width={900}
                height={1350}
                className="relative aspect-[2/3] w-full rounded-lg bg-surface object-cover shadow-2xl"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <Section id="about" alt>
        <Reveal>
          <SectionHeading eyebrow="About" title="Professional Summary" />
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
              Valuation and transaction advisory professional with 2+ years at KPMG India,
              delivering 100+ high-impact valuation and financial advisory engagements across India,
              UK, US and Middle East markets. Specialised in business valuations, PE/VC portfolio
              valuations, purchase price allocations and impairment testing for listed and unlisted
              entities. Adept at translating complex financial analysis into strategic,
              decision-ready insights for cross-border stakeholders.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Core Skills</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Professional Track Record" />
        </Reveal>
        <div className="relative border-l border-border pl-8 md:pl-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <div className="relative pb-14 last:pb-0">
                <span className="absolute top-1.5 -left-[41px] grid h-6 w-6 place-items-center rounded-full border border-primary/60 bg-background md:-left-[57px]">
                  <Building2 size={12} className="text-primary" />
                </span>
                <div className="rounded-lg border border-border bg-card p-6 md:p-8">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                    <div className="min-w-0">
                      <h3 className="text-2xl">{job.company}</h3>
                      <p className="mt-1 text-sm text-primary">{job.role}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs tracking-wide text-muted-foreground">{job.meta}</p>
                  {job.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <ul className="mt-6 space-y-3">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="absolute top-2 left-0 h-1.5 w-1.5 rotate-45 bg-primary/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" alt>
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic Background" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 80}>
              <article className="h-full rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
                <GraduationCap size={20} className="text-primary" />
                <h3 className="mt-4 text-xl">{e.school}</h3>
                <p className="mt-1 text-sm text-foreground/90">{e.degree}</p>
                <p className="mt-2 text-xs tracking-wide text-muted-foreground">{e.meta}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <Reveal>
          <SectionHeading eyebrow="Projects" title="Research & Publications" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
                <div className="flex items-center justify-between">
                  <FileText size={20} className="text-primary" />
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="mt-4 text-lg leading-snug">{p.title}</h3>
                <p className="mt-2 text-xs text-primary">{p.note}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-20 text-3xl">Leadership</h3>
          <div className="hairline mt-5 h-px w-24" />
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {leadership.map((l, i) => (
            <Reveal key={l.role} delay={i * 60}>
              <div className="flex h-full gap-4 rounded-lg border border-border bg-card p-6">
                <Users size={18} className="mt-1 shrink-0 text-primary" />
                <div className="min-w-0">
                  <h4 className="font-display text-lg">{l.role}</h4>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground">{l.org}</p>
                  {l.body && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" alt>
        <Reveal>
          <SectionHeading eyebrow="Recognition" title="Achievements" />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <div className="h-full rounded-lg border border-border bg-card p-6">
                <div className="flex items-start justify-between gap-3">
                  <Award size={20} className="shrink-0 text-primary" />
                  <span className="rounded-full border border-primary/40 px-2.5 py-0.5 text-xs text-primary">
                    {a.year}
                  </span>
                </div>
                <h3 className="mt-4 text-lg leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-20 text-3xl">Certifications</h3>
          <div className="hairline mt-5 h-px w-24" />
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="flex h-full gap-4 rounded-lg border border-border bg-card p-6">
                <BadgeCheck size={18} className="mt-1 shrink-0 text-primary" />
                <div className="min-w-0">
                  <h4 className="font-display text-lg">{c.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                  <p className="mt-2 text-xs text-primary">{c.year}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Let's Connect" />
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground">
              Open to conversations around valuation, transaction advisory and investment research
              mandates.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                <Mail size={16} className="shrink-0 text-primary" />
                <span className="truncate">{EMAIL}</span>
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                <Phone size={16} className="shrink-0 text-primary" />
                <span className="truncate">{PHONE}</span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin size={16} className="shrink-0 text-primary" />
                <span className="truncate">linkedin.com/in/ansh-jain-8821401b2</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      <footer className="border-t border-border bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Ansh Jain. All rights reserved.</p>
          <p>Valuation &amp; Transaction Advisory · Mumbai · Gurugram</p>
        </div>
      </footer>
    </div>
  );
}
