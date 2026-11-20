
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   window.history.scrollRestoration = "manual";
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
