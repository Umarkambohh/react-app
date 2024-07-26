import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import FeedbackModal from "../components/FeedbackModal";

const Layout = () => {
  const location = useLocation();
  const [showFooter, setFooter] = useState(true);

  const feedbackTriger = () => {
    console.log("triger");
  };

  useEffect(() => {
    if (location.pathname === "/about") {
      setFooter(false);
    } else {
      setFooter(true);
    }
  }, [location.pathname]);

  return (
    <>
      <Header myFunc={feedbackTriger} />
      <Outlet />
      {showFooter && <Footer />}
      <FeedbackModal />
    </>
  );
};

export default Layout;
