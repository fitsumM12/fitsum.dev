import "./globals.css";
import { SpiderWebBackground } from "./spider-web";
import { contact } from "./data";
import Nav from "./Nav";

export const metadata = {
  title: "Fitsum Mesfin | AI & Software Engineer",
  description:
    "Personal portfolio of Fitsum Mesfin, showcasing AI, computer vision, and full-stack engineering experience."
};

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/research", label: "Research" }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SpiderWebBackground />
        <header className="shell">
          <Nav links={navLinks} />
        </header>
        <main className="shell">{children}</main>
        <footer className="footer">
          <div className="shell">
            <div className="grid contactGrid">
              <div className="footerCard">
                <p className="cardLabel">
                  <span className="footerIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01L12 12l8-4.99V7H4zm0 10h16V9.2l-8 5-8-5V17z" />
                    </svg>
                  </span>
                  Email
                </p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="footerCard">
                <p className="cardLabel">
                  <span className="footerIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M6.6 2.5c.6-.5 1.5-.5 2 0l2.5 2.5c.6.6.6 1.5 0 2l-1.4 1.4c.5 1.1 1.3 2.3 2.5 3.5 1.2 1.2 2.4 2 3.5 2.5l1.4-1.4c.6-.6 1.5-.6 2 0l2.5 2.5c.6.6.6 1.5 0 2l-1.3 1.3c-.7.7-1.6 1.1-2.6 1-2.6-.2-5.6-1.8-8.2-4.4C5.2 13.7 3.6 10.7 3.4 8.1c-.1-1 .3-1.9 1-2.6l1.3-1.3z" />
                    </svg>
                  </span>
                  Phone
                </p>
                <p>{contact.phone}</p>
              </div>
              <div className="footerCard">
                <p className="cardLabel">
                  <span className="footerIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7zm0 9.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z" />
                    </svg>
                  </span>
                  Location
                </p>
                <p>{contact.location}</p>
              </div>
              <div className="footerCard">
                <p className="cardLabel">
                  <span className="footerIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h3.96V21H3V8.98zM9.5 8.98h3.8v1.64h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.76 2.67 4.76 6.14V21h-3.96v-5.54c0-1.32-.03-3.02-1.86-3.02-1.86 0-2.14 1.45-2.14 2.93V21H9.5V8.98z" />
                    </svg>
                  </span>
                  LinkedIn
                </p>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  {contact.linkedin.replace("https://", "")}
                </a>
              </div>
            </div>
            <p className="muted footerCopyright">© Finova. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
