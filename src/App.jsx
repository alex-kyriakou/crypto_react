import React, { useEffect } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

// Import Components
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  // aos init
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
