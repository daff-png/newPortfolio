'use client';

import Image from 'next/image';
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPin,
  Music2,
  Sparkles,
} from 'lucide-react';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

// EDIT YOUR PORTFOLIO HERE — replace these template values with your own data.
const portfolio = {
  email: 'daffataufiqurahman31@gmail.com',
  location: 'Indonesia · Open to worldwide opportunities',
  availability: 'Available for select projects',
  about:
    'I design and build digital products where thoughtful engineering meets memorable interaction. My focus is creating software that feels clear, fast, and genuinely useful.',
  stats: [
    { value: '2+', label: 'Years experience' },
    { value: '20+', label: 'Projects shipped' },
    { value: '3+', label: 'Freelance' },
  ],
  projects: [
    {
      number: '01',
      title: 'Terraquake',
      type: 'Earthquake Monitoring',
      description:
        'A real-time earthquake monitoring app with location search, severity sorting, and a dedicated station directory.',
      stack: ['React', 'Tailwind CSS', 'Terraquake API'],
      href: 'https://github.com/daff-png/terraquake-app',
      image: '/projects/terraquake.png',
      imageAlt: 'Terraquake dashboard showing recent earthquake data',
      framework: 'react',
    },
    {
      number: '02',
      title: 'Plant Inventory',
      type: 'Inventory Management',
      description:
        'A role-aware plant inventory system with plant records, growth progress, QR codes, exports, and soft-delete recovery.',
      stack: ['Laravel', 'Tailwind CSS', 'MySQL'],
      href: 'https://github.com/daff-png/plant-inventory',
      image: '/projects/plant-inventory.png',
      imageAlt: 'Plant Inventory dashboard',
      framework: 'laravel',
    },
    {
      number: '03',
      title: 'TIX ID Clone',
      type: 'Cinema Discovery',
      description:
        'A TIX ID interface clone built as a hands-on exercise in recreating a polished movie discovery experience.',
      stack: ['Laravel', 'Tailwind CSS', 'MySQL'],
      href: 'https://github.com/daff-png/TIXID',
      image: '/projects/tix-id.png',
      imageAlt: 'TIX ID Clone movie discovery interface',
      framework: 'laravel',
    },
  ],
  experience: [
    {
      period: '2026 — PRESENT',
      role: 'Internship Fullstack Engineer',
      company: 'Inilah.com',
      detail: 'Fullstack Engineer using Next and Golang to build a web application for Inilah.com',
      institutionLogo: '/institutions/inilah-mark.png',
      institutionLogoAlt: 'Inilah.com logo',
      logoKind: 'inilah',
    },
  ],
  education: [
    {
      period: '2024 — PRESENT',
      degree: 'Computer Science',
      school: 'SMK Wikrama Bogor',
      institutionLogo: '/institutions/smk-wikrama.png',
      institutionLogoAlt: 'SMK Wikrama Bogor logo',
      logoKind: 'crest',
    },
    {
      period: '2021 - 2024',
      degree: 'Junior High School',
      school: 'SMPN 2 Cicurug',
      institutionLogo: '/institutions/smpn-2-cicurug-transparent.png',
      institutionLogoAlt: 'SMPN 2 Cicurug logo',
      logoKind: 'crest-clean',
    },
  ],
  skills: [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'System Design',
    'Databases',
    'Cloud',
    'Product Thinking',
    'Creative Development',
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daffa-taufiqurrahman-05a3b9332' },
    { label: 'GitHub', href: 'https://github.com/daff-png' },
    { label: 'Instagram', href: 'https://www.instagram.com/dfatq_/' },
  ],
  // Replace the playlist ID in this URL with your favorite Spotify playlist.
  spotifyEmbed:
    'https://open.spotify.com/embed/playlist/266g6VvXOIOyaoi6soOKLu?utm_source=generator&theme=0',
};

const COPYRIGHT_YEAR = 2026;
const PROJECT_RESTING_TRANSFORM = 'rotateX(8deg) rotateY(-10deg) rotateZ(1deg) translateZ(12px)';

function FrameworkLogo({ framework }: { framework: string }) {
  if (framework === 'react') {
    return (
      <svg className="framework-logo framework-logo-react" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="2.4" />
        <g fill="none" stroke="currentColor" strokeWidth="1.7">
          <ellipse cx="16" cy="16" rx="13" ry="5.1" />
          <ellipse cx="16" cy="16" rx="13" ry="5.1" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13" ry="5.1" transform="rotate(120 16 16)" />
        </g>
      </svg>
    );
  }

  return (
    <svg className="framework-logo framework-logo-laravel" viewBox="0 0 24 24">
      <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" />
    </svg>
  );
}

function Reveal({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function PortraitCard() {
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTransform(`rotateX(${y * -8}deg) rotateY(${x * 10}deg)`);
  }

  return (
    <div className="portrait-stage" aria-label="Portrait of Daffa Taufiqurrahman">
      <div className="portrait-orbit" aria-hidden="true">
        <span>SOFTWARE ENGINEER · CREATIVE DEVELOPER · </span>
      </div>
      <div
        className="portrait-card"
        onMouseMove={handleMove}
        onMouseLeave={() => setTransform('rotateX(0deg) rotateY(0deg)')}
        style={{ transform }}
      >
        <div className="portrait-frame">
          <Image
            src="/1764921977817_upscaled.png"
            alt="Daffa Taufiqurrahman seated in a monochrome portrait"
            fill
            priority
            sizes="(max-width: 768px) 82vw, 38vw"
            className="portrait-image"
          />
          <div className="portrait-shine" aria-hidden="true" />
        </div>
        <div className="portrait-index" aria-hidden="true">
          DT / 01
        </div>
      </div>
      <div className="portrait-shadow" aria-hidden="true" />
    </div>
  );
}

function ProjectPreview({
  project,
}: {
  project: (typeof portfolio.projects)[number];
}) {
  const screenRef = useRef<HTMLDivElement>(null);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const screen = screenRef.current;
    if (screen) {
      screen.style.transform = `rotateX(${8 + y * -10}deg) rotateY(${-10 + x * 12}deg) rotateZ(1deg) translateZ(18px)`;
    }
  }

  function resetTilt() {
    const screen = screenRef.current;
    if (screen) {
      screen.style.transform = PROJECT_RESTING_TRANSFORM;
    }
  }

  return (
    <div
      className="project-visual"
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
    >
      <div className="project-screen-shadow" aria-hidden="true" />
      <div ref={screenRef} className="project-screen" style={{ transform: PROJECT_RESTING_TRANSFORM }}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 58vw"
          className="project-preview"
        />
        <div className="project-preview-scrim" aria-hidden="true" />
        <div className="project-screen-glare" aria-hidden="true" />
      </div>
      <div className="project-preview-badge" aria-hidden="true">
        <FrameworkLogo framework={project.framework} />
      </div>
    </div>
  );
}

function PageIntro() {
  const [stage, setStage] = useState<'show' | 'leave' | 'done'>('show');
  const introTimer = useRef<number | null>(null);

  function dismissIntro() {
    if (introTimer.current !== null) window.clearTimeout(introTimer.current);
    setStage('leave');
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const frame = window.requestAnimationFrame(() => setStage('done'));
      return () => window.cancelAnimationFrame(frame);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    introTimer.current = window.setTimeout(() => setStage('leave'), 1450);

    return () => {
      if (introTimer.current !== null) window.clearTimeout(introTimer.current);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (stage !== 'leave') return;
    const timer = window.setTimeout(() => setStage('done'), 500);
    return () => window.clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    if (stage === 'done') document.body.style.overflow = '';
  }, [stage]);

  if (stage === 'done') return null;

  return (
    <output className={`page-intro ${stage === 'leave' ? 'is-leaving' : ''}`} aria-label="Loading Daffa's portfolio">
      <div className="intro-topline">
        <span>DT<span className="intro-accent">.</span></span>
        <span>PORTFOLIO / 2026</span>
      </div>
      <div className="intro-center">
        <span className="intro-kicker">SOFTWARE ENGINEER & CREATIVE DEVELOPER</span>
        <span className="intro-name">DAFFA</span>
        <span className="intro-surname">Taufiqurrahman.</span>
        <div className="intro-progress" aria-hidden="true"><span /></div>
      </div>
      <div className="intro-bottomline">
        <span>DESIGN MEETS ENGINEERING</span>
        <button type="button" onClick={dismissIntro}>SKIP INTRO ↗</button>
      </div>
    </output>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - viewport;
      if (progressRef.current) {
        const progress = maxScroll > 0 ? Math.max(0, Math.min(1, window.scrollY / maxScroll)) : 0;
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      for (const layer of layers) {
        const rect = layer.getBoundingClientRect();
        if (motionQuery.matches || rect.bottom < -120 || rect.top > viewport + 120) {
          layer.style.setProperty('--parallax-shift', '0px');
          continue;
        }
        const depth = Number(layer.dataset.parallax) || 0;
        const distance = viewport / 2 - (rect.top + rect.height / 2);
        const shift = Math.max(-90, Math.min(90, distance * depth));
        layer.style.setProperty('--parallax-shift', `${shift.toFixed(1)}px`);
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    motionQuery.addEventListener('change', requestUpdate);
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      motionQuery.removeEventListener('change', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main>
      <PageIntro />
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="monogram" href="#home" aria-label="Go to home">
          DT<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
        </nav>
        <a className="header-cta" href={`mailto:${portfolio.email}`}>
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="hero shell" id="home">
        <span className="hero-outline-word parallax-layer" data-parallax="0.08" aria-hidden="true">PORTFOLIO</span>
        <div className="hero-ambient-ring parallax-layer" data-parallax="-0.1" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            {portfolio.availability}
          </div>
          <h1>
            Daffa
            <br />
            <span>Taufiqurrahman</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Software engineer crafting digital products with clarity, character,
              and purpose.
            </p>
            <a className="circle-link" href="#work" aria-label="Explore selected work">
              <ArrowDownRight size={26} />
            </a>
          </div>
        </div>

        <div className="portrait-parallax parallax-layer" data-parallax="0.13">
          <PortraitCard />
        </div>

        <div className="hero-aside">
          <p className="vertical-label">BASED IN INDONESIA</p>
          <div className="hero-role">
            <span>Role / 01</span>
            <strong>Software Engineer</strong>
          </div>
          <div className="hero-role">
            <span>Focus / 02</span>
            <strong>UI/UX Designer</strong>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index}>
              ENGINEERING <Sparkles size={18} /> DESIGN <Sparkles size={18} />
              IMPACT <Sparkles size={18} />
            </span>
          ))}
        </div>
      </div>

      <section className="work-section shell section-space" id="work">
        <span className="work-watermark parallax-layer" data-parallax="0.05" aria-hidden="true">01</span>
        <Reveal className="section-heading">
          <div>
            <span className="section-number">01 / SELECTED WORK</span>
            <h2>Things I&apos;ve built.</h2>
          </div>
          <p>A selection of products I&apos;ve designed and built across real-time data, operational tools, and interface exploration.</p>
        </Reveal>

        <div className="project-grid">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.number} className="project-reveal">
              <a
                className={`project-card project-card-${index + 1}`}
                href={project.href}
                aria-label={`View ${project.title}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                  <ArrowUpRight size={20} />
                </div>
                <ProjectPreview project={project} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-section section-space" id="about">
        <div className="about-orbit parallax-layer" data-parallax="-0.08" aria-hidden="true" />
        <div className="shell about-grid">
          <Reveal className="about-title-wrap">
            <span className="section-number light">02 / ABOUT</span>
            <h2>
              Logic in the code.
              <br />
              <em>Soul in the details.</em>
            </h2>
          </Reveal>

          <Reveal className="about-copy">
            <p>{portfolio.about}</p>
            <div className="location-line">
              <MapPin size={18} /> {portfolio.location}
            </div>
          </Reveal>

          <div className="stats-grid">
            {portfolio.stats.map((stat) => (
              <Reveal key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section shell section-space" id="journey">
        <Reveal className="section-heading journey-heading">
          <div>
            <span className="section-number">03 / JOURNEY</span>
            <h2>Experience &amp; education.</h2>
          </div>
        </Reveal>

        <div className="journey-columns">
          <Reveal className="journey-column">
            <div className="column-title">
              <BriefcaseBusiness size={20} />
              <span>Experience</span>
            </div>
            {portfolio.experience.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.role}`}>
                <time>{item.period}</time>
                <div className={`institution-mark institution-mark-${item.logoKind}`}>
                  <Image src={item.institutionLogo} alt={item.institutionLogoAlt} fill sizes="72px" />
                </div>
                <div>
                  <h3>{item.role}</h3>
                  <span>{item.company}</span>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal className="journey-column">
            <div className="column-title">
              <GraduationCap size={22} />
              <span>Education</span>
            </div>
            {portfolio.education.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.degree}`}>
                <time>{item.period}</time>
                <div className={`institution-mark institution-mark-${item.logoKind}`}>
                  <Image src={item.institutionLogo} alt={item.institutionLogoAlt} fill sizes="72px" />
                </div>
                <div>
                  <h3>{item.degree}</h3>
                  <span>{item.school}</span>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="skills-section">
        <div className="shell skills-grid">
          <Reveal>
            <span className="section-number light">04 / CAPABILITIES</span>
            <h2>A versatile toolkit for ambitious ideas.</h2>
          </Reveal>
          <div className="skill-cloud">
            {portfolio.skills.map((skill, index) => (
              <span key={skill} style={{ animationDelay: `${index * -0.35}s` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sound-section shell section-space" id="soundtrack">
        <Reveal className="sound-card">
          <div className="sound-copy">
            <div className="sound-icon" aria-hidden="true">
              <Music2 size={22} />
            </div>
            <span className="section-number">05 / CURRENT SOUNDTRACK</span>
            <h2>Good work deserves a good soundtrack.</h2>
            <p>
              A small glimpse into what&apos;s playing while ideas turn into products.
              Replace the playlist URL in the portfolio data anytime.
            </p>
          </div>
          <div className="spotify-shell">
            <iframe
              title="Daffa's Spotify playlist"
              src={portfolio.spotifyEmbed}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>

      <footer className="footer" id="contact">
        <div className="shell footer-inner">
          <Reveal>
            <div className="eyebrow footer-eyebrow">
              <span className="status-dot" />
              Have something interesting in mind?
            </div>
            <h2>
              Let&apos;s make it
              <br />
              <em>remarkable.</em>
            </h2>
            <a className="email-link" href={`mailto:${portfolio.email}`}>
              <Mail size={22} />
              {portfolio.email}
              <ArrowUpRight size={24} />
            </a>
          </Reveal>

          <div className="footer-bottom">
            <span>© {COPYRIGHT_YEAR} DAFFA TAUFIQURRAHMAN</span>
            <div className="social-links">
              {portfolio.socials.map((social) => (
                <a key={social.label} href={social.href}>
                  {social.label} <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
