import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

import About from "./components/About";
import HashLoader from "react-spinners/HashLoader";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { mode } = useSelector((state) => state.mode);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      // cleanUp
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={mode}>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-gray-800">
          <HashLoader color="#06b6d4" loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
