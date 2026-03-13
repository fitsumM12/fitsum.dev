"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav tabs">
      <span className="logo">
        {/* <img className="logoMark" src="/icon.svg" alt="" aria-hidden="true" /> */}
        FM
      </span>
      <button
        type="button"
        className="hamburger"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`navLinks ${open ? "open" : ""}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="tabLink">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
