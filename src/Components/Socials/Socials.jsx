import React from "react";
import "../Socials/Style.scss";
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
  AiOutlineGithub,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className="icons">
      <a href="https://github.com/Avijit-ap" target="_blank">
        <AiOutlineGithub style={{ color: "#4078c0" }} />
      </a>
      <a href="https://twitter.com/jit1873" target="_blank">
        <AiFillTwitterCircle style={{ color: "#26a7de " }} />
      </a>
      <a href="https://www.linkedin.com/in/avijit-pal/" target="_blank">
        <AiFillLinkedin style={{ color: "#0072b1 " }} />
      </a>
    </div>
  );
};

export default Socials;
