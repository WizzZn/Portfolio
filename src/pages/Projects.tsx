import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { BiLinkExternal } from "react-icons/bi";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  video: string;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 1,   
    title: "Golden Grove",
    description:
      "A physics-based platformer featuring obstacle avoidance, coin collection, and a checkpoint system.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://res.cloudinary.com/ddayarabg/image/upload/v1740031536/nchtcg8kmcnmjgg62ihd.png",
    video:
      "https://res.cloudinary.com/ddayarabg/video/upload/f_auto:video,q_auto/xv4bysz5etz07s9zyqog",
    github: "https://github.com/WizzZn/Golden-Grove",
    live: "https://res.cloudinary.com/ddayarabg/video/upload/v1740031450/xv4bysz5etz07s9zyqog.mp4",
  },
  {
    id: 2,   
    title: "Slippy Cube",
    description:
      "A fast-paced endless runner with procedurally generated obstacles and increasing difficulty.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://res.cloudinary.com/ddayarabg/image/upload/v1740003333/qv8qwlowrxnswk3cs1ol.png",
    video:
      "https://res.cloudinary.com/ddayarabg/video/upload/v1740002194/sl1hyqhrbx3d8niamusq.mp4",
    github: "https://github.com/WizzZn/Slippy-Cube",
    live: "https://play.unity.com/en/games/de22e336-f8d4-4edf-9ffa-4174cbb6021a/slippy-cube",
  },
  {
    id: 3,
    title: "Duck Hands",
    description:
      "A color-matching puzzle game where players organize cars before loading them onto a ship.",
    tech: ["React", "Firebase", "Socket.io"],
    image:
      "https://res.cloudinary.com/ddayarabg/image/upload/v1740002182/n7fowucnihd1ifckm0nb.png",
    video:
      "https://res.cloudinary.com/ddayarabg/video/upload/v1740002189/hjjw8zg7ihizbphiadof.mp4",
    github: "https://github.com/WizzZn/Dock-Hands",
    live: "https://play.unity.com/en/games/ef5033c0-94e6-4502-8b54-e5bac27ed32f/duck-hands",
  },
  {
    id: 4,
    title: "Prison Breakout",
    description: "A stealth-based game with enemy AI, a field-of-view detection system, and an unlocking mechanic.",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    image:
      "https://res.cloudinary.com/ddayarabg/image/upload/v1740003396/csnil3yzyzjmpoa32ohk.jpg",
    video:
      " https://res.cloudinary.com/ddayarabg/video/upload/v1740002587/okl2yuf0neqvwr9quaq9.mp4",
    github: "https://github.com/WizzZn/Prison-Breakout",
    live: "https://taskmanager-demo.com",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-video">
                {hoveredProject === project.id ? (
                  <video
                    className="w-full h-full object-cover"
                    src={project.video}
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {/* <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-white text-2xl hover:text-gray-400 transition" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLinkExternal className="text-white text-2xl hover:text-gray-400 transition" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
