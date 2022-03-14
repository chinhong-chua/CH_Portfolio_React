import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import { images } from "../../constants";

import "./Projects.scss";
import { NavigationDots } from "../../components";

import { urlFor, client } from "../../client";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    const query = '*[_type=="projects"] | order(_createdAt asc)';
    setLoading(true);
    client.fetch(query).then((data) => {
      setProjects(data);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      setLoading(false);
    });

    // console.log(carousel.current.scrollWidth, carousel.current.scrollHeight);
    // if (!loading)
    //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  //   if (loading) return "Loading ...";

  return (
    <div id="projects" className="app__whitebg">
      <div className="app__flex">
        <h3 className="head-text">
          Delivered more than <span>20 Projects</span> <br /> in{" "}
          <span>A Year</span>
        </h3>
        <NavigationDots active="projects" />
      </div>
      <div className="app__profiles">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            // dragElastic={0.1}
            // dragTransition={{ bounceStiffness: 100, power: 0.2 }}
            whileDrag={{ speed: 1 }}
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {projects?.map((project, index) => (
              <motion.div
                className="item"
                key={index}
                whileHover={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
              >
                <img src={urlFor(project.imgUrl)} alt={project.title} />
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <h3>{project.title}</h3>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
    // <>
    //   <div className="app__projects app__whitebg ">
    //     <motion.h2 className="head-text" animate={{ x: 0, y: 30 }}>
    //       Delivered more than <span>20 Projects</span> <br /> in{" "}
    //       <span>A Year</span>
    //     </motion.h2>
    //     <motion.div
    //       ref={carousel}
    //       className="carousel"
    //       whileTap={{ cursor: "grabbing" }}
    //     >
    //       <motion.div
    //         drag="x"
    //         dragConstraints={{ right: 0, left: -width }}
    //         className="inner-carousel"
    //       >
    //         <motion.div className="item">
    //           <img src={images.about01} alt="" />
    //         </motion.div>
    //         <motion.div className="item">
    //           <img src={images.about01} alt="" />
    //         </motion.div>{" "}
    //         <motion.div className="item">
    //           <img src={images.about01} alt="" />
    //         </motion.div>
    //         <motion.div className="item">
    //           <img src={images.about01} alt="" />
    //         </motion.div>
    //         <motion.div className="item">
    //           <img src={images.about01} alt="" />
    //         </motion.div>
    //       </motion.div>
    //     </motion.div>
    //   </div>
    // </>
  );
};

// export default Projects;

// export default Projects;

export default Projects;
