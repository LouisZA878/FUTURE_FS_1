import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-information">
        <ul className="box-1">
          <li>
            <div className="container-svg">
              <MdEmail />
            </div>
            <div className="type">Email</div>
            <div className="value">dutoit183@gmail.com</div>
          </li>
          <li>
            <div className="container-svg">
              <BsFillPhoneFill />
            </div>
            <div className="type">Number</div>
            <div className="value">+27 81 485 6293</div>
          </li>
          <li>
            <div className="container-svg">
              <FaLocationDot />
            </div>
            <div className="type">Location</div>
            <div className="value">Western Cape / South Africa</div>
          </li>
          <li>
            <div className="container-svg">
              <FaBirthdayCake />
            </div>
            <div className="type">Birthday</div>
            <div className="value">23 / September / 2004</div>
          </li>
        </ul>
        <div className="box-2">
          <div className="interest">
            <h4>About Me</h4>
            <p>
              <span>{` "" `}</span>
              As a web developer with experience gathered from 2023 under my
              belt, I have rapidly progressed in the tech industry. After only
              Six month of dedicated study, I secured a junior developer
              internship in July 2023, where I honed my web development skills
              and enhanced the ability to communicate effectively within a team.
              My passion for technology also led me to develop a keen interest
              in DevOps. Presently, I am expanding my expertise by delving into
              the world of data science, a field that has captured my interest
              due to its complex problem-solving nature, as I gain satisfaction
              from solving problems. My journey reflects a strong commitment to
              continuous learning and a drive to excel in the ever-evolving tech
              landscape
              <span>{` "" `}</span>
            </p>
          </div>
          <div className="interest">
            <h4>Prefered Working Area</h4>
            <p>
              <span>{` "" `}</span>I Heavily prefer working around the
              Backendend of any given website, however I enjoy Frontend related
              work as well. DevOps / Linux related fields also interest me
              greatly, whether its orchestrating Docker containers / Kubernetes
              pods. Creating or maintaing CI / CD pipelines etc.
              <span>{` "" `}</span>
            </p>
          </div>
        </div>
        <div className="box-3">
          <div>Javascript</div>
          <div>ReactJS</div>
          <div>NextJS</div>
          <div>NodeJS</div>
          <div>Docker</div>
          <div>Linux</div>
          <div>ArgoCD</div>
          <div>CI / CD</div>
          <div>Git</div>
          <div>Apache Kafka</div>
          <div>Kubernetes</div>
        </div>
      </div>
    </section>
  );
};

export default About;
