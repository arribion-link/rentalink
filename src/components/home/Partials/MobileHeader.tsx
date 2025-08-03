import React, { useState } from "react";
import "../../../css/App.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="mobile-header">
      <div className="mobile-header-bar">
        <span className="mobile-header-logo">RentaLink</span>
        <button
          className="mobile-header-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? "toggle-bar open" : "toggle-bar"}></span>
          <span className={open ? "toggle-bar open" : "toggle-bar"}></span>
          <span className={open ? "toggle-bar open" : "toggle-bar"}></span>
        </button>
      </div>
      <nav className={open ? "mobile-nav open" : "mobile-nav"}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setOpen(false)}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MobileHeader;
