import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import HeavenTheory from "../../public/images/HeavenTheory.png";
import EcommerceAPI from "../../public/images/EcommerceAPI.png";
import Chatsworth from "../../public/images/Chatsworth.png";

const Projects = () => {
  const projectOne =
    "https://www.linkedin.com/posts/louis-fran%C3%A7ois-du-toit-2719602b0_turning-design-into-reality-created-by-ugcPost-7383892670550790144-HR7-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErkU3UBePvl63MpMzyR0JGg5xLA_4XQR8E";

  const projectTwo =
    "https://www.linkedin.com/posts/louis-fran%C3%A7ois-du-toit-2719602b0_project-ecommerce-backend-tech-stack-activity-7429168127973670912-Siw4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErkU3UBePvl63MpMzyR0JGg5xLA_4XQR8E";

  const projectThree =
    "https://chatsworthjumpingcastlehire.github.io/Chatsworth-Jumping-Castle-Hire/";

  return (
    <section className="projects" id="projects">
      <h2 className="title">
        <span>Projects</span>
      </h2>

      <div className="container-projects">
        <div className="project">
          <Link href={projectOne} className="container-img">
            <Image src={HeavenTheory} alt="Image of a project" fill />
          </Link>
          <h3>
            <span>Heaven Theory</span>
            <Link href={projectOne} aria-label="Heaven Theory Link">
              <FaLinkedin />
            </Link>
          </h3>
          <p>A minimalist and simple website for any furniture store.</p>
        </div>

        <div className="project">
          <Link href={projectTwo} className="container-img">
            <Image src={EcommerceAPI} alt="Image of a project" fill />
          </Link>
          <h3>
            <span>Ecommerce Backend API</span>
            <Link href={projectTwo} aria-label="Ecommerce Backend API Link">
              <FaLinkedin />
            </Link>
          </h3>
          <p>
            Within this project I blend my knowledge of NodeJS, Docker and
            Apache Kafka to create a basic and functional Ecommerce Backend.
            With Auth, Product and Cart services.
          </p>
        </div>

        <div className="project">
          <Link href={projectThree} className="container-img">
            <Image src={Chatsworth} alt="Image of a project" fill />
          </Link>
          <h3>
            <span>Chatsworth Jumping Castle Hire</span>
            <Link
              href={projectThree}
              aria-label="Chatsworth Jumping Castle Hire Link"
            >
              <CgWebsite />
            </Link>
          </h3>
          <p>
            The Chatsworth Jumping Castle website designed and created by me and
            a fellow dev
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
