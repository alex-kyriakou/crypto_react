import React, { useEffect, useState } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

// Import Components
import Hero from "./components/Hero";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";
import Why from "./components/Why";

function App() {
  // NavMobile
  const [openNavMobile, setOpenNavMobile] = useState(false);

  // aos init
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="overflow-hidden">
      <Header setOpenNavMobile={setOpenNavMobile} />
      <Hero />
      <div
        className={`${
          openNavMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setOpenNavMobile={setOpenNavMobile} />
      </div>
      <Stats />
      <Why />
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
