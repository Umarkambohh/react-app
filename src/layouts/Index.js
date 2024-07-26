import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const [showFooter, setFooter] = useState(true);

  useEffect(() => {
    if (location.pathname === "/about") {
      setFooter(false);
    } else {
      setFooter(true);
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
