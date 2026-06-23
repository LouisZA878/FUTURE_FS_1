import Image from "next/image";
import Link from "next/link";

import HeroImg from "../../public/images/HeroProfile.jpeg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="information">
        <p className="intro">Hey there! The names</p>
        <h2 className="name">Louis François Du Toit</h2>
        <p className="role">Fullstack Web Developer</p>
        <p className="role">Devops Engineer</p>
        <div className="buttons">
          <Link
            className="btn"
            href="/files/LouisCV-2.pdf"
            download="LouisCV-2.pdf"
          >
            Resume
          </Link>
          <Link className="btn" href="https://github.com/LouisZA878">
            Github
          </Link>
        </div>
      </div>
      <div className="container-image">
        <div className="image">
          <Image src={HeroImg} alt="Image of the portfolio owner, Louis" fill />
        </div>
      </div>
    </section>
  );
};

export default Hero;
