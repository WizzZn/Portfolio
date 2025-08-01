import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "C#",
    "C++",
    "Unity",
    "Git",
    "GitHub",
    "Blender",
    "Visual Studio",
    "Tiled Map Editor",
    "Particle Systems",
    "Photoshop",
    "NavMesh Navigation",
    "Game Physics",
    "AI Navigation",
    "Tilemap Design",
    "3D Modeling",
    "Animation",
    "UI/UX Design",
    "Level Design",
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I’m a passionate Unity Game Developer with experience in 2D and 3D
              game development, specializing in crafting immersive and engaging
              experiences using Unity and C#. As a Game Development Intern at
              EmergioGames, I focus on designing physics-based interactions, AI
              navigation, and dynamic game environments. Throughout my journey,
              I’ve worked on multiple game projects, including Golden Grove, a
              2D pixel art platformer with precise physics-based mechanics, and
              DockHands, a 3D hyper-casual game featuring color-matching
              mechanics and progressive level designs. My expertise also extends
              to AI-driven enemy behaviors, procedural level generation, and
              interactive gameplay elements in projects like Prison Breakout and
              Slippy Cube. Beyond development, I continuously explore new
              technologies, from Blender for 3D modeling to NavMesh for AI
              pathfinding. My technical stack includes Unity, Git, Visual
              Studio, and ProBuilder, along with experience in Tiled Map Editor
              and Photoshop for game design. I’m always eager to push the
              boundaries of game development and create engaging, polished, and
              innovative experiences. Let’s bring ideas to life—one game at a
              time!
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="grid grid-cols-2  md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 border p-4 rounded-lg    text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="space-y-8 ">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-xl font-bold">
                  Game Development Intern - EmergioGames
                </h4>
                <p className="text-gray-400">Oct 2023 – Present</p>
                <p className="text-gray-600 dark:text-gray-300  mt-2">
                  Focused on 2D and 3D game development using Unity and Blender.
                  Implemented Rigidbody physics and collision detection for
                  realistic object interactions. Designed Tilemap-based levels
                  for modular and scalable environments. Developed AI navigation
                  using NavMesh, enabling dynamic enemy and NPC pathfinding.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
