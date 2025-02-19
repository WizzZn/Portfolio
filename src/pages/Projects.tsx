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
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart, checkout, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://res.cloudinary.com/ddayarabg/image/upload/v1740003333/qv8qwlowrxnswk3cs1ol.png",
    video:
      "https://res.cloudinary.com/ddayarabg/video/upload/v1740002194/sl1hyqhrbx3d8niamusq.mp4",
    github: "https://github.com/yourgithub/ecommerce",
    live: "https://ecommerce-demo.com",
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "Real-time social media application with messaging and post features.",
    tech: ["React", "Firebase", "Socket.io"],
    image:
      "https://res.cloudinary.com/ddayarabg/image/upload/v1740002182/n7fowucnihd1ifckm0nb.png",
    video:
      "https://res.cloudinary.com/ddayarabg/video/upload/v1740002189/hjjw8zg7ihizbphiadof.mp4",
    github: "https://github.com/yourgithub/social-app",
    live: "https://social-app-demo.com",
  },
  {
    id: 3,
    title: "Task Management",
    description: "Collaborative task management tool with real-time updates.",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    image:
      "https://res.cloudinary.com/ddayarabg/image/upload/v1740003396/csnil3yzyzjmpoa32ohk.jpg",
    video:
      " https://res.cloudinary.com/ddayarabg/video/upload/v1740002587/okl2yuf0neqvwr9quaq9.mp4",
    github: "https://github.com/yourgithub/task-manager",
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
