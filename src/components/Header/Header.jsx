import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrowDown.png";
import arrowWhite from "../../assets/arrowWhite.png";
import logo from "../../assets/logo.png";
import SearchForm from "../SearchForm/SearchForm";
import btnClose from "../../assets/close-button.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto"); // Cleanup on component unmount
  }, [isMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <div className="header__mobile-view">
        <button
          className="header__menu-icon"
          type="button"
          onClick={toggleMobileMenu}
        />
        {isMenuOpen && (
          <>
            <div className="header__overlay" onClick={closeMenu}></div>
            <div className="header__links-mobile">
              <img
                src={btnClose}
                alt="close button"
                className="header__menu-close"
                onClick={closeMenu}
              />
              <div className="header__dropdown-container">
                <div className="header__link-mobile header__about">
                  About{" "}
                  <img
                    src={arrowWhite}
                    alt="dropdown arrow icon"
                    className="header__dropdown-icon"
                  />
                </div>
                <Link
                  to="/what-we-do"
                  onClick={closeMenu}
                  className="header__link-mobile header__about-ext"
                >
                  What We Do
                </Link>
              </div>

              <Link
                to="/parents"
                onClick={closeMenu}
                className="header__link-mobile"
              >
                Parents
              </Link>
              <Link
                to="/professionals"
                onClick={closeMenu}
                className="header__link-mobile"
              >
                Childcare Professionals
              </Link>
              <Link
                to="/partners"
                onClick={closeMenu}
                className="header__link-mobile"
              >
                Partners
              </Link>
              <Link onClick={closeMenu} className="header__link-mobile">
                Contact
              </Link>
              <Link onClick={closeMenu} className="header__link-mobile">
                Privacy Policy
              </Link>
              <Link onClick={closeMenu} className="header__link-mobile">
                Food Security
              </Link>
            </div>
          </>
        )}
        <div className="header__links">
          <div className="header__dropdown-container">
            <Link className="header__link-about">
              About{" "}
              <img
                src={arrow}
                alt="dropdown arrow icon"
                className="header__dropdown-icon"
              />
            </Link>
            <div className="header__dropdown">
              <Link to="/what-we-do" className="header__dropdown-item">
                What We Do
              </Link>
            </div>
          </div>

          <Link to="/parents" className="header__link">
            Parents
          </Link>
          <Link to="/professionals" className="header__link">
            Childcare Professionals
          </Link>
          <Link to="/partners" className="header__link">
            Partners
          </Link>
          <Link className="header__link">Contact</Link>
          <Link className="header__link">Privacy Policy</Link>
          <Link className="header__link">Food Security</Link>
        </div>
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
