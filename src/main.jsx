import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, ExternalLink, Download, Send } from 'lucide-react';
import avatar from './assets/avatar.jpg';
import navLogo from './assets/nav.jpeg';
import shreeDivineAarti from './assets/shree-divine-aarti.jpeg';
import './styles.css';

const projects = [
  {
    title: 'Netflix Clone',
    description: 'Streaming-inspired landing experience built with semantic HTML and CSS - hero layout, rows, gradients, and responsive sections modeled after Netflix.',
    techStack: ['HTML', 'CSS'],
    githubLink: 'https://github.com/amritapandey623/netflix-clone.git',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80',
    
  },
  {
    title: 'Password Generator',
    description: 'Create React App utility to generate strong passwords with customizable length and character options - focused on clarity and safe defaults.',
    techStack: ['React', 'JavaScript', 'CSS'],
    githubLink: 'https://github.com/amritapandey623/Password-Generator.git',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80',
    liveLink: 'https://passworgeneratr.netlify.app/',
  },
  {
    title: 'Weather App',
    description: 'Simple weather application using Spring Boot - backend APIs and a clean UI for checking conditions and forecasts.',
    techStack: ['Spring Boot', 'Java', 'HTML', 'CSS'],
    githubLink: 'https://github.com/amritapandey623/WeatherApp.git',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=1200&q=80',
    
  },
  {
    title: 'Chatbot',
    description: 'Conversational chatbot project focused on clean interactions and quick replies.',
    techStack: ['Java', 'Spring Boot'],
    githubLink: 'https://github.com/amritapandey623/Chatbot.git',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
    liveLink: 'https://chatbot-chi-roan-67.vercel.app/',
  },
  {
    title: 'Ai Auto-Category And Tag Generator',
    description: 'Tool to automatically generate categories and tags from content to speed up publishing workflows.',
    techStack: ['AI', 'NLP'],
    githubLink: 'https://github.com/amritapandey623/Ai-Auto-Category-And-Tag-Generator.git',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    
  },
  {
    title: 'Shree Divine Aarti',
    description: 'A devotional app experience for reading and exploring aarti content with a simple, calm UI.',
    techStack: ['Java', 'Android'],
    githubLink: 'https://github.com/amritapandey623/Shree.git',
    image: shreeDivineAarti,
    liveLink: 'https://shree-hariii.netlify.app',
  },
];

const skills = [
  ['Java & Spring Boot', 95],
  ['React.js & JavaScript', 86],
  ['HTML, CSS & Tailwind', 94],
  ['REST APIs · MySQL · MongoDB', 85],
  ['Data Structures & Algorithms', 87],
  ['Git & GitHub · VS Code · IntelliJ', 92],
];

const timeline = [
  {
    period: 'Google Student Ambassador Program - 2026',
    title: 'Google Student Ambassador',
    body: 'Selected as a Google Student Ambassador, representing Google at KIPM College of Engineering & Technology. Organized workshops and events to promote Google technologies and foster a vibrant tech community on campus.',
  },
  {
    period: 'Internship - Yuva Intern',
    title: 'Junior Java Developer',
    body: 'Engineered scalable Java applications with OOP, debugging, and code reviews - improving reliability and maintainability through clean coding standards.',
  },
  {
    period: '2023 - 2027 · Education',
    title: 'B.Tech, Computer Science & Engineering',
    body: 'KIPM College Of Engineering and Technology, GIDA, Gorakhpur - CGPA 8.5. Coursework across DSA, OS, DBMS, and software design, applied in full-stack projects.',
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onPointerMove={(event) => setCursor({ x: event.clientX, y: event.clientY, visible: true })}
      onPointerLeave={() => setCursor((current) => ({ ...current, visible: false }))}
    >
      <span
        className={`cursor-bubble${cursor.visible ? ' is-visible' : ''}`}
        style={{ '--x': `${cursor.x}px`, '--y': `${cursor.y}px` }}
      />
      {loading && <LoadingOverlay />}
      <GradientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function LoadingOverlay() {
  return (
    <div className="loader">
      <div className="loader-content">
        <p className="loader-name">Amrita Pandey</p>
        <span>Full Stack Developer</span>
      </div>
    </div>
  );
}

function GradientBackground() {
  return (
    <div className="background">
      <div className="glow glow-pink" />
      <div className="glow glow-blue" />
    </div>
  );
}

function Navbar() {
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];
  return (
    <header className="navbar">
      <nav className="nav-inner">
        <a href="#top" className="brand" aria-label="Amrita Pandey home">
          <img src={navLogo} alt="" />
        </a>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
        <div className="nav-buttons">
          <a className="nav-pill tooltip" href="https://github.com/amritapandey623" target="_blank" rel="noreferrer" data-tip="Open GitHub profile">
            GitHub
          </a>
          <a className="nav-pill tooltip" href="https://www.linkedin.com/in/amrita-pandey-3s" target="_blank" rel="noreferrer" data-tip="Open LinkedIn profile">
            LinkedIn
          </a>
          <a className="resume tooltip" href="https://drive.google.com/file/d/1oTKXpURk7TtGtn9NyADUS81PoR9lP5oB/view?usp=sharing" target="_blank" rel="noreferrer" data-tip="Download resume">
            <Download size={16} />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span />B.Tech CSE · KIPM College of Engineering & Technology</p>
          <h1><span>Amrita Pandey - </span><br />Full-stack developer · .</h1>
          <p className="lead">I build polished, reliable web applications with Spring Boot, React, clean APIs, and the kind of interface details that make software feel considered.</p>
          <div className="hero-actions">
            <a href="#projects" className="primary">View Projects</a>
            <a href="#contact" className="secondary"><Mail size={17} /> Contact Me</a>
          </div>
        </div>
        <div className="profile-card glass reveal">
          <div className="portrait-wrap"><img src={avatar} alt="Amrita Pandey" /></div>
          <p className="card-kicker">Currently exploring</p>
          <h2>Java systems, React interfaces, and intelligent tools.</h2>
          <div className="stats">
            <span><strong>8.5</strong> CGPA</span>
            <span><strong>2026</strong> GSA</span>
            <span><strong>6+</strong> Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-grid">
        <div>
          <p className="section-label">About</p>
          <h2>Code with clarity. Design with intent.</h2>
          <p className="body-text">B.Tech Computer Science & Engineering student at KIPM College Of Engineering and Technology (CGPA 8.5) with strong software engineering and algorithmic skills. Quick learner with foundations in data structures, algorithms, operating systems, and DBMS. Skilled in C/C++, Java, Spring Boot, HTML, CSS, React, MySQL, and MongoDB - passionate about full-stack development with Java.</p>
          <p className="body-text">Junior Java Developer at Yuva Intern: built scalable Java applications using OOP, improved reliability through debugging and code reviews, and applied clean coding standards for maintainability.</p>
        </div>
        <div className="glass info-panel">
          <p>Profile highlights</p>
          <div><strong>Role</strong><span>Full-stack developer</span></div>
          <div><strong>Focus</strong><span>React, Python ,Java, Spring Boot</span></div>
          <div><strong>College</strong><span>KIPM College Of Engineering and Technology</span></div>
          <div><strong>Email</strong><span>amritapandey3210@gmail.com</span></div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <div>
          <p className="section-label">Skills</p>
          <h2>Tools I reach for daily</h2>
        </div>
      </div>
      <div className="skills-grid">
        {skills.map(([name, level], index) => (
          <article className="glass skill" key={name} style={{ '--delay': `${index * 80}ms` }}>
            <div><h3>{name}</h3><span>{level}%</span></div>
            <div className="bar"><span style={{ width: `${level}%` }} /></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <div>
          <p className="section-label">Projects</p>
          <h2>Selected work</h2>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="glass project" key={project.title}>
            <div className="project-image"><img src={project.image} alt="" /></div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chips">{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <div className="project-actions">
                <a className="project-link tooltip" href={project.githubLink} target="_blank" rel="noreferrer" data-tip="View source code">
                  GitHub <ExternalLink size={15} />
                </a>
                <a className="demo-link tooltip" href={project.liveLink} data-tip="Add live project URL later">
                  Live Demo <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <div>
          <p className="section-label">Experience</p>
          <h2>Journey & education</h2>
        </div>
      </div>
      <div className="timeline-box glass">
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item glass" key={item.title}>
              <span className="dot" />
              <p>{item.period}</p>
              <h3>{item.title}</h3>
              <span>{item.body}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="section contact">
      <div className="section-head">
        <div>
          <p className="section-label">Contact</p>
          <h2>Tell me about your next build</h2>
          <p>Reach me directly at <a href="mailto:amritapandey3210@gmail.com">amritapandey3210@gmail.com</a></p>
        </div>
      </div>
      <form
        className="glass contact-form"
        action="https://formsubmit.co/amritapandey3210@gmail.com"
        method="POST"
        onSubmit={() => setSent(true)}
      >
        <input type="hidden" name="_subject" value="New portfolio contact message" />
        <input type="hidden" name="_captcha" value="false" />
        <input required name="name" placeholder="Your name" />
        <input required name="email" type="email" placeholder="Email address" />
        <textarea required name="message" placeholder="Project details" rows="5" />
        <button type="submit"><Send size={17} /> Send message</button>
        {sent && <p className="success">Thanks - sending your message to my email.</p>}
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <p className="footer-name">Amrita Pandey</p>
          <p>Designed & engineered as a modern portfolio stack - React, Tailwind, Framer Motion, Spring Boot, MongoDB.</p>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/amrita-pandey-3s" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:amritapandey3210@gmail.com"><Mail size={16} /> Email</a>
          <a href="https://github.com/amritapandey623" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Amrita Pandey. All rights reserved.</p>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
