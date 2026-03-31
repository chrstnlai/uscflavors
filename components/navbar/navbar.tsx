"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [flippingHref, setFlippingHref] = useState<string | null>(null);

  const closeMenu = () => setIsOpen(false);

  const handleLinkClick = (href: string) => {
    setFlippingHref(href);
    setTimeout(() => setFlippingHref(null), 800);
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src="/images/logo/logo_red.svg"
            alt="FLAVORS Logo"
            width={50}
            height={50}
            priority
          />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className={`nav-content${isOpen ? " open" : ""}`}>
        <div className="nav-links">
          {[
            { href: "/about-us", label: "About Us" },
            { href: "/events", label: "Events" },
            { href: "/gallery", label: "Gallery" },
            { href: "/membership", label: "Membership" },
            { href: "/collaborations", label: "Collaborations" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={flippingHref === href ? "flipping" : ""}
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="nav-bottom">
          <div className="nav-socials">
            <a
              href="https://www.instagram.com/uscflavors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/usc-flavors/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
