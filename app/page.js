import dynamic from "next/dynamic";

import Hero from "./(components)/hero";

const About = dynamic(() => import("./(components)/about"), {
  ssr: true,
});
const Experience = dynamic(() => import("./(components)/experience"), {
  ssr: true,
});
const Contact = dynamic(() => import("./(components)/contact"), {
  ssr: true,
});
const Projects = dynamic(() => import("./(components)/projects"), {
  ssr: true,
});

export default function Home() {
  const { TEMPLATE_ID, SERVICE_ID, PUBLIC_KEY } = process.env;

  console.log(TEMPLATE_ID);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact
        template={TEMPLATE_ID}
        service={SERVICE_ID}
        publicKey={PUBLIC_KEY}
      />
    </>
  );
}
