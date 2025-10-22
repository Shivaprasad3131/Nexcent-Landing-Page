import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Pixelgrade from "./components/Pixelgrade";
import BusinessStats from "./components/BusinessStats";
import DesignFooter from "./components/DesignFooter";
import Testimonial from "./components/Testimonial";
import BlogSection from "./components/BlogSection";
import GetDemo from "./components/GetDemo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Community />
       <Pixelgrade />
       <BusinessStats />
       <DesignFooter />
       <Testimonial />
       <BlogSection />
       <GetDemo />
       <Footer />
    </>
  );
}

export default App;
