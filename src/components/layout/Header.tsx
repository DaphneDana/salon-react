import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css'; // We'll create this next
// import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'; // Example if you have an SVG
// import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'; // Example

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          Total Look
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/services" // You mentioned a Services page preview, let's add a placeholder link
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
            onClick={closeMobileMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
            onClick={closeMobileMenu}
          >
            Careers
          </NavLink>
          <Link to="/booking" className={`${styles.navLink} ${styles.ctaButtonHeader}`} onClick={closeMobileMenu}>
            Book Appointment
          </Link>
        </nav>

        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu} aria-label="Toggle menu">
          {/* Basic Hamburger Icon (can be replaced with SVG) */}
          <div className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.line1Open : ''}`}></div>
          <div className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.line2Open : ''}`}></div>
          <div className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.line3Open : ''}`}></div>
        </button>
      </div>
    </header>
  );
};

export default Header;