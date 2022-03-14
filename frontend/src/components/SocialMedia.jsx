import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/chinhong-chua"
          rel="noreferrer"
          target="_blank"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/chua-chin-hong-100096/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      {/* <div>
        <a href="../.../assets/about01.png" rel="noreferrer" target="_blank">
          <FaFacebookF />
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedia;
