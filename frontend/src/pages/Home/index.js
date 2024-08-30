import React from "react";
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import LeftSlider from "./leftSlider";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Blogs from "./blog";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [introRef, introInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [blogsRef, blogsInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
          <motion.div
            ref={introRef}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <Intro />
          </motion.div>

          <motion.div
            id="about-section"
            ref={aboutRef}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <About />
          </motion.div>

          <motion.div
            id="projects-section"
            ref={projectsRef}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <Projects />
          </motion.div>

          <motion.div
            id="blogs-section"
            ref={blogsRef}
            initial="hidden"
            animate={blogsInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <Blogs />
          </motion.div>

          <motion.div
            id="contact-section"
            ref={contactRef}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <Contact />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <Footer />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <LeftSlider />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Home;
