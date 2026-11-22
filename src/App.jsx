
import { useState } from 'react'

import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  Braces,
  Database,
  Terminal,
  ExternalLink,
  Sparkles,
  BriefcaseBusiness
} from 'lucide-react'

const skills = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'SQL', 'JavaScript']
  },
  {
    title: 'Web & Backend',
    items: ['HTML5', 'CSS3', 'React', 'Firebase']
  },
  {
    title: 'Core CS',
    items: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems'
    ]
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'MySQL']
  }
]

const projects = [
  {
    number: '01',
    name: 'PaperLeakDetector',
    type: 'DOCUMENT ANALYSIS · EXAM SECURITY',
    description:
      'A project designed to analyse examination documents using OCR-based text extraction and document comparison to identify potentially suspicious content.',
    tags: ['Python', 'Flask', 'OCR', 'OpenCV', 'NLP'],
   
    github: 'https://github.com/pragatikeshari-mzp/paperleakprevention'
  },
  {
    number: '02',
    name: 'UniVoice',
    type: 'EDTECH · FEEDBACK PLATFORM',
    description:
      'A college feedback platform that enables students to share feedback about courses, faculty and campus facilities, helping institutions understand student concerns.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
   
    github: 'https://github.com/pragatikeshari-mzp/univoice'
  }
]

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact']
]

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* NAVIGATION */}

      <header className="topbar">

        <a className="brand" href="#home" aria-label="Pragati home">
          <span className="brand-mark">P.</span>
          <span>PRAGATI KESHARI</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a
            className="nav-resume"
            href="/resume.pdf"
            target="_blank"
 rel="noopener noreferrer"
           >
            Resume <ArrowUpRight size={14} />
          </a>
        </nav>

      </header>

      <main>

        {/* HERO SECTION */}

        <section className="hero section-wrap" id="home">

          <div className="hero-copy">

            <div className="availability">
              <span className="status-dot" />
              COMPUTER SCIENCE STUDENT
              <span className="availability-divider">/</span>
              INDIA
            </div>

            <p className="hero-kicker">Hello, I'm</p>

            <h1>
              Pragati<span className="accent">.</span>
              <br />
              <span className="hero-outline">I build for the</span>
              <br />
              curious.
            </h1>

            <p className="hero-description">
              A Computer Science student interested in software
              development, problem-solving and building useful
              things with technology.
            </p>

            <div className="hero-actions">

              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={16} />
              </a>

              <a className="button button-ghost" href="#contact">
                Get in touch <ArrowDownRight size={16} />
              </a>

            </div>

            <div className="hero-socials">

              <a
                href="https://github.com/pragatikeshari-mzp"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/pragatikeshari-mzp/"
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness size={17} /> LinkedIn
              </a>

              <span className="hero-social-note">
                Replace links with your profiles
              </span>

            </div>

          </div>

          {/* CODE CARD */}

          <div className="hero-visual" aria-label="Decorative code card">

            <div className="visual-grid" />

            <div className="code-card">

              <div className="code-top">

                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>

                <span>about-me.java</span>

                <span className="code-lock">PUBLIC</span>

              </div>

              <div className="code-body">

                <p>
                  <span className="code-muted">01</span>{' '}
                  <span className="code-purple">class</span>{' '}
                  <span className="code-blue">Developer</span> {'{'}
                </p>

                <p>
                  <span className="code-muted">02</span>
                  &nbsp;String name ={' '}
                  <span className="code-green">"Pragati"</span>;
                </p>

                <p>
                  <span className="code-muted">03</span>
                  &nbsp;String focus ={' '}
                  <span className="code-green">"Learning"</span>;
                </p>

                <p>
                  <span className="code-muted">04</span>
                  &nbsp;String mindset ={' '}
                  <span className="code-green">
                    "Build. Learn. Repeat."
                  </span>;
                </p>

                <p>
                  <span className="code-muted">05</span> {'}'}
                </p>

                <div className="code-cursor" />

              </div>

            </div>

            <div className="floating-chip chip-top">
              <Code2 size={15} /> Problem solver
            </div>

            <div className="floating-chip chip-bottom">
              <Sparkles size={15} /> Always learning
            </div>

            <div className="hero-index">
              01 — INTRODUCTION
            </div>

          </div>

          <a className="scroll-cue" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>

        </section>

        {/* ABOUT SECTION */}

        <section className="section-wrap content-section" id="about">

          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title={
              <>
                Curiosity, meet <span className="accent">code.</span>
              </>
            }
          />

          <div className="about-grid">

            <div className="about-lead">

              <p>
                I'm a B.Tech Computer Science student at{' '}
                <strong>GLA University</strong>, exploring how
                software can solve real problems.
              </p>

              <p>
                I'm currently strengthening my programming
                fundamentals, practising DSA and building projects
                to turn what I learn into working experiences.
              </p>

            </div>

            <div className="about-facts">

              <div>
                <span className="fact-label">EDUCATION</span>
                <strong>B.Tech — Computer Science</strong>
                <small>GLA University · 2029 (expected)</small>
              </div>

              <div>
                <span className="fact-label">CURRENT FOCUS</span>
                <strong>DSA · Software Development</strong>
                <small>
                  Java, web technologies and practical projects
                </small>
              </div>

              <div>
                <span className="fact-label">APPROACH</span>
                <strong>Learn by building</strong>
                <small>Experiment, understand, improve</small>
              </div>

            </div>

          </div>

        </section>

        {/* SKILLS SECTION */}

        <section className="section-wrap content-section" id="skills">

          <SectionHeading
            eyebrow="MY TOOLKIT"
            title={
              <>
                Tools I work <span className="accent">with.</span>
              </>
            }
          >
            A growing set of technologies and computer science
            foundations I use while learning and building.
          </SectionHeading>

          <div className="skills-grid">

            {skills.map((group, i) => (

              <article className="skill-card" key={group.title}>

                <div className="skill-card-top">

                  <span className="skill-number">
                    0{i + 1}
                  </span>

                  {i === 0 ? (
                    <Braces />
                  ) : i === 1 ? (
                    <Code2 />
                  ) : i === 2 ? (
                    <Database />
                  ) : (
                    <Terminal />
                  )}

                </div>

                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

              </article>

            ))}

          </div>

        </section>

        {/* PROJECTS SECTION */}

        <section className="section-wrap content-section" id="projects">

          <SectionHeading
            eyebrow="SELECTED WORK"
            title={
              <>
                Things I'm <span className="accent">building.</span>
              </>
            }
          >
            A couple of projects exploring practical problems
            through software.
          </SectionHeading>

          <div className="project-list">

            {projects.map(project => (

              <article className="project-card" key={project.number}>

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-main">

                  <p className="eyebrow">
                    {project.type}
                  </p>

                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <p className="project-note">
                    {project.note}
                  </p>

                </div>

                <div className="project-links">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} GitHub`}
                    >
                      <Code2 size={18} />
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}

                  {!project.github && !project.link && (
                    <span className="link-placeholder">
                      ADD LINKS
                    </span>
                  )}

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* CONTACT SECTION */}

        <section className="section-wrap contact-section" id="contact">

          <div className="contact-panel">

            <p className="eyebrow">
              HAVE A PROJECT OR OPPORTUNITY?
            </p>

            <h2>
              Let's make
              <br />
              <span className="accent">
                something useful.
              </span>
            </h2>

            <p className="contact-copy">
              I'm open to connecting with fellow learners,
              developers and people working on interesting ideas.
            </p>

            <a
              className="button button-primary"
              href="mailto:pragatikeshari63@gmail.com.com"
            >
              Say hello <Mail size={16} />
            </a>

            <div className="contact-links">

              <a
                href="https://github.com/pragatikeshari-mzp"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} /> GitHub
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://www.linkedin.com/in/pragatikeshari-mzp/"
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness size={17} /> LinkedIn
                <ArrowUpRight size={13} />
              </a>

              <a href="mailto:pragatikeshari63@gmail.com">
                <Mail size={17} /> Email
                <ArrowUpRight size={13} />
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}

      <footer className="footer section-wrap">

        <a className="brand" href="#home">
          <span className="brand-mark">P.</span>
          <span>PRAGATI KESHARI</span>
        </a>

        <span>Designed & built with curiosity.</span>

        <a href="#home">BACK TO TOP ↑</a>

      </footer>

    </div>
  )
}

export default App
