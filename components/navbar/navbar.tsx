"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      
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

        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      <div className={`nav-content ${isOpen ? 'open' : ''}`}>
        <div className="nav-links">
          <Link href="/about-us" onClick={closeMenu}>ABOUT US</Link>
          <Link href="/events" onClick={closeMenu}>EVENTS</Link>
          <Link href="/gallery" onClick={closeMenu}>GALLERY</Link>
          <Link href="/membership" onClick={closeMenu}>MEMBERSHIP</Link>
          <Link href="/collaborations" onClick={closeMenu}>COLLABORATIONS</Link>
          <Link href="/contact" onClick={closeMenu}>CONTACT</Link>
        </div>

        <div className="nav-footer">
          <p>univserity of southern california</p>
          <p>savor the moment</p>
          {/*
          <p>UNIV. OF SOUTHERN CALIFORNIA</p>
          <p>SAVOR THE MOMENT.</p>
          */}
        </div>
      </div>

      

    </nav>
  );
}
