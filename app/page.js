import { contact } from "./data";

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="heroContent">
          <div>
            <p className="eyebrow">AI & Software Engineer</p>
            <h1>
              {contact.name}
              <span className="accent">Building production AI systems</span>
            </h1>
            <p className="summary">
              Senior AI & Software Engineer with 3+ years of experience delivering production
              AI systems and full-stack platforms. I design, train, and deploy computer vision
              models, and build scalable software using React, Django, Docker, and data
              pipelines.
            </p>
            <div className="ctaRow">
              <a className="primary" href={`mailto:${contact.email}`}>
                Hire Me
              </a>
              <a className="ghost" href="/projects">
                View Projects
              </a>
            </div>
            <div className="linkRow">
              <a
                className="iconButton"
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.9-.63.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.9.86.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.82c.85 0 1.7.12 2.5.36 1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.33.68.97.68 1.96 0 1.42-.01 2.56-.01 2.91 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                className="iconButton"
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h3.96V21H3V8.98zM9.5 8.98h3.8v1.64h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.76 2.67 4.76 6.14V21h-3.96v-5.54c0-1.32-.03-3.02-1.86-3.02-1.86 0-2.14 1.45-2.14 2.93V21H9.5V8.98z" />
                </svg>
                LinkedIn
              </a>
              <a
                className="iconButton"
                href={`mailto:${contact.email}`}
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01L12 12l8-4.99V7H4zm0 10h16V9.2l-8 5-8-5V17z" />
                </svg>
                Email
              </a>
            </div>
          </div>
          <div className="heroCard">
            <div>
              <p className="cardLabel">Location</p>
              <p>{contact.location}</p>
            </div>
            <div>
              <p className="cardLabel">Email</p>
              <p>{contact.email}</p>
            </div>
            <div>
              <p className="cardLabel">Phone</p>
              <p>{contact.phone}</p>
            </div>
            <div>
              <p className="cardLabel">LinkedIn</p>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/fitsum-m-25a01a185
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
          <div className="sectionTitle">
            <h2>About</h2>
            <p>
              I turn applied AI research into reliable, maintainable software. My focus is
              computer vision, data engineering, and full-stack delivery for healthcare and
              enterprise platforms—always with measurable impact in production.
            </p>
          </div>
        <div className="metrics">
          <div className="metricCard">
            <h3>3+ Years</h3>
            <p>Applied AI and computer vision experience</p>
          </div>
          <div className="metricCard">
            <h3>Production AI</h3>
            <p>End-to-end model deployment with Docker and REST APIs</p>
          </div>
          <div className="metricCard">
            <h3>Full Stack</h3>
            <p>React + Django systems with data pipelines</p>
          </div>
        </div>
      </section>
    </div>
  );
}
