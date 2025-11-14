import Link from 'next/link';
import Image from 'next/image';
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Icon */}
        <Link href="/" className="logo">
          <Image src='/images/logo/logo_red.svg' alt="FLAVORS Logo" width={40} height={40} priority />
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link href="#">FOOD BLOG</Link>
          <Link href="#">FLAVORS GLOBE</Link>
          <Link href="#">GALLERY</Link>
          <Link href="#">CONNECT</Link>
        </div>
      </div>

    </nav>
  );
}
