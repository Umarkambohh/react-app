import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutDetails from "./pages/AboutDetails";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./scss/style.scss";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="about/:slug" element={<AboutDetails />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
