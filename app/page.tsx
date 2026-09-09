'use client';

import Image from 'next/image';
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Music2,
  Sparkles,
} from 'lucide-react';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

// EDIT YOUR PORTFOLIO HERE — replace these template values with your own data.
const portfolio = {
  email: 'hello@daffa.dev',
  location: 'Indonesia · Open to worldwide opportunities',
  availability: 'Available for select projects',
  about:
    'I design and build digital products where thoughtful engineering meets memorable interaction. My focus is creating software that feels clear, fast, and genuinely useful.',
  stats: [
    { value: '00+', label: 'Years experience' },
    { value: '00+', label: 'Projects shipped' },
    { value: '00%', label: 'Client satisfaction' },
  ],
  projects: [
    {
      number: '01',
      title: 'Project Title',
      type: 'Product Engineering',
      description:
        'Add a concise explanation of the product, your contribution, and the measurable outcome you created.',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
      href: '#',
    },
    {
      number: '02',
      title: 'Project Title',
      type: 'Full-stack Platform',
      description:
        'Describe the challenge you solved, the people you solved it for, and why your technical approach mattered.',
      stack: ['React', 'Node.js', 'Cloud'],
      href: '#',
    },
    {
      number: '03',
      title: 'Project Title',
      type: 'Interactive Experience',
      description:
        'Use this space for a project that shows personality, craft, or a different side of your engineering work.',
      stack: ['WebGL', 'Motion', 'API'],
      href: '#',
    },
  ],
  experience: [
    {
      period: '20XX — PRESENT',
      role: 'Your Current Role',
      company: 'Company Name',
      detail: 'Add your responsibilities, impact, and one strong result here.',
    },
    {
      period: '20XX — 20XX',
      role: 'Previous Role',
      company: 'Company Name',
      detail: 'Highlight the scope of your work and the value you delivered.',
    },
  ],
  education: [
    {
      period: '20XX — 20XX',
      degree: 'Your Degree / Study Program',
      school: 'University or Institution',
    },
    {
      period: '20XX',
      degree: 'Certification or Program',
      school: 'Issuing Organization',
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
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
  // Replace the playlist ID in this URL with your favorite Spotify playlist.
  spotifyEmbed:
    'https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator&theme=0',
};

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
            src="/daffa-portrait.jpg"
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

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main>
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

        <PortraitCard />

        <div className="hero-aside">
          <p className="vertical-label">BASED IN INDONESIA</p>
          <div className="hero-role">
            <span>Role / 01</span>
            <strong>Software Engineer</strong>
          </div>
          <div className="hero-role">
            <span>Focus / 02</span>
            <strong>Digital Products</strong>
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
        <Reveal className="section-heading">
          <div>
            <span className="section-number">01 / SELECTED WORK</span>
            <h2>Things I&apos;ve built.</h2>
          </div>
          <p>Replace these templates with your strongest, most relevant projects.</p>
        </Reveal>

        <div className="project-grid">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.number} className="project-reveal">
              <a
                className={`project-card project-card-${index + 1}`}
                href={project.href}
                aria-label={`View ${project.title}`}
              >
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                  <ArrowUpRight size={20} />
                </div>
                <div className="project-visual" aria-hidden="true">
                  <div className="project-window">
                    <div className="window-bar">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="window-content">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <Code2 className="project-icon" size={42} strokeWidth={1} />
                </div>
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
            <span>© {new Date().getFullYear()} DAFFA TAUFIQURRAHMAN</span>
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
