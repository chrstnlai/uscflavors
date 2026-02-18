"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      
      {/* 1. Header Row (Visible on Mobile & Desktop) */}
      <div className="navbar-header">
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image 
            src='/images/logo/logo_red.svg' 
            alt="FLAVORS Logo" 
            width={50} 
            height={50} 
            priority 
          />
        </Link>

        {/* Hamburger Button - Hidden on Desktop via CSS */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* 2. Collapsible Content (Sidebar on Desktop / Overlay on Mobile) */}
      <div className={`nav-content ${isOpen ? 'open' : ''}`}>
        <div className="nav-links">
          <Link href="#" onClick={closeMenu}>ABOUT US</Link>
          <Link href="#" onClick={closeMenu}>EVENTS</Link>
          <Link href="#" onClick={closeMenu}>GALLERY</Link>
          <Link href="#" onClick={closeMenu}>MEMBERSHIP</Link>
          <Link href="#" onClick={closeMenu}>COLLABORATIONS</Link>
          <Link href="#" onClick={closeMenu}>CONTACT</Link>
        </div>

        <div className="nav-footer">
          <p>FLAVORS</p>
          <p>UNIV. OF SOUTHERN CALIFORNIA</p>
          <p>SAVOR THE MOMENT.</p>
        </div>
      </div>

    </nav>
  );
}
