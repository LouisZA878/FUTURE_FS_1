import Hero from "./(components)/hero";

import Contact from "./(components)/contact";
import Experience from "./(components)/experience";
import About from "./(components)/about";
import Projects from "./(components)/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
