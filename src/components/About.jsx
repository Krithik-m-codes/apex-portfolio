import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { log } from "three/examples/jsm/nodes/Nodes.js";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <p className="bg-white-400 text-3xl">{title}</p>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview .</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eos sed
        repellat quis doloremque laudantium voluptatibus nihil cum minima
        laborum adipisci culpa itaque, vitae explicabo!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => {
          console.log(index + " " + service.title);
          <ServiceCard
            key={index}
            title={service.title}
            // {...service}
          />;
          // <ServiceCard key={index} title={service.title} index={index} />
        })}
      </div>
    </>
  );
};

export default About;
