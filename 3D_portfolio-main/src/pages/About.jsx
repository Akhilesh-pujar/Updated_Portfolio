import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { CTA } from "../components";
import { experiences, skills, education } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className='max-container'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className='head-text'>
          Hello, I'm{" "}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            {" "}
            Akhilesh S Pujar
          </span>{" "}
          👋
        </h1>
      </motion.div>

      <motion.div
        className='mt-5 flex flex-col gap-3 text-slate-500'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-lg leading-relaxed">
          I am a <span className="text-blue-500 font-semibold">Full Stack Developer</span> with{" "}
          <span className="text-blue-500 font-semibold">1.6+ years of experience</span> building
          enterprise-grade web applications. Currently working at{" "}
          <span className="font-semibold text-purple-500">Templegate Technologies</span> on
          supply chain management solutions using React.js, Django, and PostgreSQL.
        </p>
        <p className="text-lg leading-relaxed">
          I hold a <span className="font-semibold text-green-500">Master's degree in Cyber Security</span> and
          have expertise in both frontend and backend technologies. I'm passionate about creating
          innovative solutions and have experience with IoT projects, including building an
          AI-powered bacterial detection system. Check out my{" "}
          <Link
            to="https://leetcode.com/Akhilesh_pujar/"
            target="_blank"
            className="text-amber-500 font-semibold hover:underline hover:text-amber-400 transition-colors"
          >
            LeetCode profile
          </Link>
          {" "}for my problem-solving journey.
        </p>
      </motion.div>

      {/* Skills Section */}
      <div className='py-10 flex flex-col'>
        <motion.h3
          className='subhead-text'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          My Skills
        </motion.h3>

        <motion.div
          className='mt-16 flex flex-wrap gap-12'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              className='block-container w-20 h-20 group'
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='btn-back rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25' />
              <div className='btn-front rounded-xl flex justify-center items-center transition-all duration-300'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span className="bg-slate-800 text-white text-xs px-2 py-1 rounded">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div
        className='py-10'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className='subhead-text mb-8'>
          <span className="blue-gradient_text">Education</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🎓</span>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-slate-800">{edu.degree}</h4>
                  <p className="text-blue-500 font-medium">{edu.date}</p>
                  <p className="text-slate-500 mt-2 text-sm">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Work Experience Section */}
      <div className='py-16'>
        <motion.h3
          className='subhead-text'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Work Experience
        </motion.h3>
        <motion.div
          className='mt-5 flex flex-col gap-3 text-slate-500'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg">
            I've worked with innovative companies, building scalable solutions and
            collaborating with talented teams. Here's my professional journey:
          </p>
        </motion.div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
