import React from "react";
import "../About/Style.scss";
import { motion } from "framer-motion";
import Heading from "../../Components/Heading/Heading";
import { animations } from "../../Styles/Animations/Animations";

import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoGraphql,
  BiLogoTypescript,
  BiLogoSass,
  BiLogoPython,
  BiLogoJava,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <>
      <Heading Heading={"About me"} />
      <div className="about">
        <div className="info">
        <motion.div style={{ textAlign: 'justify' }}>
  <motion.p {...animations.fade}>
    👋 Hello! I'm Avijit Pal, a final-year Computer Science and Engineering student. 
    I'm excited about the Software Development Internship at your company. Proficient in 
    Python, Java, JavaScript, and web frameworks like React.js and Flask, I bring a solid 
    foundation to tackle complex development challenges. My experience with Git, MongoDB, 
    and NPM further enhances my technical toolkit. 🚀 Eager to contribute my skills and learn 
    from innovative projects. Let's connect and discuss how I can contribute to your team!
  </motion.p>
</motion.div>

        </div>
        <motion.div {...animations.fade} className="skills">
          <h2>Stuff i know : </h2>
          <div className="icons">
            <BiLogoJavascript style={{ color: "yellow" }} />
            <BiLogoReact style={{ color: "deepskyblue" }} />
            <BiLogoPython style={{ color: "greenyellow" }} />
            <TbBrandNextjs style={{ color: "cornsilk" }} />
            <SiTailwindcss style={{ color: "skyblue" }} />
            <BiLogoNodejs style={{ color: "greenyellow" }} />
            <BiLogoMongodb style={{ color: "green" }} />
            <BiLogoJava style={{ color: "#e535ab " }} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
