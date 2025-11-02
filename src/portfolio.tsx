import React from "react";
import { motion } from "framer-motion";

const NAME = "Shreekar Bukkapattanam";
// const ROLE = "";
const HEADLINE = "I build fast, reliable web apps end-to-end.";
const ACCENT = "#39FF14"; // neon green
const EMAIL = "shreekar.shredder2002@gmail.com";
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/sbukkap" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shreekar-bukkapattanam-a91472223/" },
  { label: "Resume", href: "#" },
];

function Nav() {
  return (
    <div className="sticky top-0 z-40 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <a href="#home" className="text-sm tracking-widest font-semibold" style={{ color: ACCENT }}>
            PORTFOLIO
          </a>
          <nav className="flex items-center gap-6 text-sm">
            {[
              { href: "#projects", label: "Projects" },
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#contact", label: "Contact" },
            ].map((i) => (
              <a key={i.href} href={i.href} className="hover:opacity-80" style={{ color: ACCENT }}>
                {i.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    title: "Startup Pitch Submission Platform",
    image: "/images/startup-pitch.png",
    blurb:
      "I built a platform where founders can post their startup ideas and explore others in real-time! Learned to use Sanity CMS with Next.js, GitHub OAuth, and Vercel deployment.",
    tech: ["Next.js", "Sanity", "Tailwind", "GitHub OAuth"],
    link: "https://github.com/sbukkap/cool-looking-app",
  },
  {
    title: "Townery — Community Platform",
    image: "/images/townery.png",
    blurb:
      "I helped create a local network where people can discover nearby events, jobs, and services. Picked up TypeScript, GraphQL, and CI/CD with Docker and GitHub Actions.",
    tech: ["Vue", "TypeScript", "GraphQL", "Prisma", "PostgreSQL", "Docker"],
    link: "https://github.com/townary/indiana-social-frontend",
  },
  {
  title: "Jobs Board (Laravel)",
  image: "/images/jobs-board.png",
  blurb:
    "Built a full-stack job board using Laravel and TailwindCSS! Added authentication, responsive design, and background email jobs — it taught me how MVC works in PHP and how Eloquent ORM simplifies database logic.",
  tech: ["Laravel", "PHP", "TailwindCSS", "MySQL"],
  link: "https://github.com/sbukkap/jobs-site-laravel",
},
{
  title: "Hpass Rentals — Car Rental Platform",
  image: "/images/hpass.png",
  blurb:
    "Developed a secure car rental web app with JWT login, car listings, and Stripe payments. Integrated Google Maps for location-based browsing and learned how to handle roles for admins, owners, and users.",
  tech: ["React", "Express", "MongoDB", "Stripe", "Google Maps API"],
  link: "https://github.com/sbukkap/se_team19_car_rental_management_system",
},

  {
    title: "Art GAN Restoration",
    image: "/images/art-gan.jpg",
    blurb:
      "Trained a GAN that restores old paintings! It was awesome seeing machine learning bring damaged Renaissance art back to life on IU’s GPU cluster.",
    tech: ["Python", "PyTorch", "WGAN"],
    link: "https://github.com/sbukkap/Art-GAN",
  },
{
  title: "Inventory App (Laravel)",
  image: "/images/inventory-app.png",
  blurb:
    "A Laravel-based inventory tracker where users can add products, save entries to a JSON file, and view them in a responsive Bootstrap table. Built with AJAX form handling and a bonus edit feature using modals — helped me understand Laravel’s controllers, form validation, and file-based persistence.",
  tech: ["Laravel", "PHP", "Bootstrap", "AJAX", "JSON"],
  link: "https://github.com/sbukkap/inventory-app-laravel",
},

  {
    title: "Rank Tracker (SEO)",
    // image: "/images/rank-tracker.png",
    blurb:
      "Built a web app that tracks keyword rankings and shows performance charts! Learned a ton about API caching, GraphQL resolvers, and building responsive Vue dashboards.",
    tech: ["Node", "TypeScript", "MongoDB", "Vue", "GraphQL"],
    link: "#",
  },
  {
    title: "AI SaaS Platform (Retinal Disease Classification)",
    // image: "/images/retina-ai.png",
    blurb:
      "I built a cloud platform that classifies retinal diseases from images using AWS Rekognition and FastAPI! Learned how to design serverless backends with Lambda, API Gateway, and DynamoDB — and made it handle real-time uploads with secure auth and lightning-fast results under 3 seconds.",
    tech: ["Python", "FastAPI", "AWS", "DynamoDB", "S3"],
    link: "#",
  },
];



function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: ACCENT }}>{title}</h2>
      {subtitle && <p className="mt-2 text-white/70 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

function NeonButton({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http"); // detect external links
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="px-5 py-3 rounded-2xl font-medium border transition-colors"
      style={{
        borderColor: ACCENT,
        backgroundColor: hover ? ACCENT : '#000',
        color: hover ? '#0a0a0a' : ACCENT,
      }}
    >
      {children}
    </a>
  );
}

function NeonCard({ p, idx }: { p: any; idx: number }) {
  const [hover, setHover] = React.useState(false);
  return (
    <motion.a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: idx * 0.05 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group rounded-2xl p-5 border transition-colors"
      style={{ borderColor: `${ACCENT}40`, backgroundColor: hover ? ACCENT : '#000', color: hover ? '#0a0a0a' : ACCENT }}
    >
      {p.image && (
        <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded-md mb-4" />
      )}
      <h3 className="text-xl font-semibold text-current">{p.title}</h3>
      <p className="mt-2 text-sm" style={{ color: hover ? '#0a0a0a' : 'rgba(255,255,255,0.80)' }}>{p.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t: string) => (
          <span key={t} className="px-2.5 py-1 rounded-full text-xs border" style={{ borderColor: 'currentColor', color: 'currentColor' }}>
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 text-sm opacity-80">Visit →</div>
    </motion.a>
  );
}

function ExpItem({ company, role, time, points }: { company: string; role: string; time: string; points: string[] }) {
  return (
    <div className="rounded-2xl border p-5 bg-black/40" style={{ borderColor: `${ACCENT}55` }}>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold" style={{ color: ACCENT }}>{company}</h3>
          <p className="text-white/85">{role}</p>
        </div>
        <span className="text-white/60 text-sm">{time}</span>
      </div>
      <ul className="mt-4 list-disc pl-5 space-y-1 text-white/85">
        {points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40 pb-10">
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 text-sm text-white/60 flex items-center justify-between">
        <span>© {new Date().getFullYear()} {NAME}. All rights reserved.</span>
        <a href="#home" className="hover:opacity-80" style={{ color: ACCENT }}>Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function NeonMinimalPortfolio() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden text-white bg-black selection:bg-white/10 selection:text-white">
      <Nav />

      {/* Hero */}
      <section id="home" className="px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          {/* <Badge text={ROLE} /> */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="block opacity-80 text-xl sm:text-2xl font-normal mb-2">Hi, I’m</span>
            <span style={{ color: ACCENT }}>{NAME}</span>
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">{HEADLINE}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <NeonButton href="#projects">Check out my projects ↓</NeonButton>
            <NeonButton href="https://github.com/sbukkap">
  <span className="flex items-center gap-2">
    {/* GitHub icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.78-1.35-1.78-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.77-1.63-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 016 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.64-2.8 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0024 12C24 5.37 18.63 0 12 0z" />
    </svg>
    View GitHub to see all my project-work
  </span>
</NeonButton>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Featured Projects" subtitle="Some of my favorite builds." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, idx) => (
              <NeonCard key={p.title} p={p} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="About" subtitle="A quick intro about me." />
          <div className="mt-8 text-white/85 leading-relaxed space-y-4">
            <p>HI! I am Shreekar</p>
            <p>
              Thanks for taking the time to view my portfolio. Few descriptors about me, I am passionate, hard-working and motivated. I love, and always look for a good purpose in doing what I do. I believe in setting daily goals and working to fulfill them at the end of the day, no matter what. Also believe that consistency and trusting-the-process approach of dealing with things is key to achieving greater heights.
            </p>
            <p>
              Currently a master’s student at Indiana University, I am passionate about web development and computer vision. I did my bachelors in BV Raju Institute of Technology, India. I decided to pursue master’s to deepen my knowledge in Web Development primarily, and I am glad about my decision.
            </p>
            <p>
              About my backend technical knowledge, I have academic experience in developing web applications using Express and Flask. As of now, my goal is to learn Angular and PHP (possibly Django too).
            </p>
            <p>
              As for my knowledge of frontend technologies, I have academic and professional experiences using the basics of HTML, CSS and JavaScript.
            </p>
            <p>
              My work experience as an intern at Amadeus taught me many things. Technically, using Shell and Python to write metrics to monitor server aspects are what I learned. On the soft skills side, I learned that you always need to be active, quick and hungry to grab opportunities in the corporate world.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="Experience" subtitle="Where I’ve contributed and learned the most." />
          <div className="mt-10 grid gap-6">
            <ExpItem
              company="Heartland Community Network"
              role="Software Engineer / Frontend (Volunteer)"
              time="Jan 2025 — Present"
              points={[
                "Built Vue + TypeScript modules for Businesses, Events, and Jobs using GraphQL APIs.",
                "Improved accessibility and performance through reusable components and lazy loading.",
                "Containerized services and automated deployment pipelines with Docker and GitHub Actions.",
              ]}
            />
            <ExpItem
              company="Amadeus"
              role="DevOps Intern"
              time="Feb 2023 — Jun 2023"
              points={[
                "Migrated monitoring from Nagios to Argos using Python, Shell, and Jsonnet.",
                "Built Grafana dashboards and reduced false alerts by ~20% through smarter alert rules.",
                "Learned deep Linux server monitoring, Prometheus concepts, and automation scripting.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Contact" subtitle="Let’s connect!" />
          <div className="mt-6 grid gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex w-fit items-center gap-2 px-5 py-3 rounded-2xl font-medium border"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Email me
            </a>
            <div className="flex flex-wrap gap-4 text-white/80">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline" style={{ color: ACCENT }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
