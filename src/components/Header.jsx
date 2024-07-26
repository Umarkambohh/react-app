import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { House, Store } from "lucide-react";
import LanguageSelectBox from "./LanguageSelectBox";

const Header = ({getVal}) => {
  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    setIsActive(window.scrollY > 0);
  };

  console.log(getVal);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="container tiny-header">
        <LanguageSelectBox />

        <div>
          <button className="btn btn-primary">feedback</button>
        </div>
      </div>
      <header className={"header container" + (isActive ? "active" : "")}>
        <NavLink to="/">
          <img className="header__brand" src="../brand/logo.png" alt="Logo" />
        </NavLink>

        <nav>
          <ul className="header__nav">
            <li className="flex items-center">
              <House className="mr-2" color="red" size={16} />
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="flex items-center">
              <Store className="mr-2" color="red" size={16} />
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
