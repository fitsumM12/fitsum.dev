import "./globals.css";
import { CursorGlow } from "./cursor-glow";
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
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorGlow />
        <header className="shell">
          <Nav links={navLinks} />
        </header>
        <main className="shell">{children}</main>
      </body>
    </html>
  );
}
