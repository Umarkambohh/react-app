import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
  setIsActive(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    
  }, []);

  return (
    <header className={"header" + (isActive ? 'active' : "")}>
      <NavLink to="/">
        <img className="header__brand" src="../brand/logo.png" alt="Logo" />
      </NavLink>

      <nav>
        <ul className="header__nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
