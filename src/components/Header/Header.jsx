import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrowDown.png";
import logo from "../../assets/logo.png";
import SearchForm from "../SearchForm/SearchForm";


function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <div className="header__mobile-view">
        <button
          className="header__menu-icon"
          type="button"
          onClick={toggleMobileMenu}
        />
             {isMenuOpen && (
          <div className="header__links-mobile">
            <div className="header__dropdown-container">
              <Link className="header__link">
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
            <Link className="header__link">Parents</Link>
            <Link className="header__link">Childcare Professionals</Link>
            <Link className="header__link">Partners</Link>
            <Link className="header__link">Contact</Link>
            <Link className="header__link">Privacy Policy</Link>
            <Link className="header__link">Food Security</Link>
          </div>
        )}
      <div className="header__links">
        <div className="header__dropdown-container">
          <Link className="header__link">
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

        <Link className="header__link">Parents</Link>
        <Link className="header__link">Childcare Professionals</Link>
        <Link className="header__link">Partners</Link>
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
