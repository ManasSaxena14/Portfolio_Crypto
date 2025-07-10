import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Footer from "./components/Footer/Footer";
import { About } from "./pages/About/About";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Blog } from "./pages/Blog/Blog";
import { Login } from "./pages/Login/Login";

const App = () => {
  console.log("App component rendering");
  
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/about" element={<div><About /></div>} />
        <Route path="/portfolio" element={<div><Portfolio/></div>} />
        <Route path="/blog" element={<div><Blog/></div>} />
        <Route path="/login" element={<div><Login/></div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
