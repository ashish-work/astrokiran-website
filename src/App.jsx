import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HoroscopeCard from "./components/HoroscopeCard";
import Offerings from "./components/Offerings";
import Vision from "./components/Vision";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <HoroscopeCard />
      <Offerings />
      <Vision />
      <Footer />
    </>
  );
}

export default App;