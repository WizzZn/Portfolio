import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, FileDown } from "lucide-react";
import { ScrollAnimation } from "../components/ScrollAnimation";
import profileImage from "../assets/profileImagebg.png";
import resume from "../assets/AjmalResume.pdf";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Ajmal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          <ScrollAnimation className="space-y-6">
            <h1 className="text-5xl font-bold">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Ahammed Ajmal
              </span>
            </h1>
            <h2 className="text-3xl text-gray-600 dark:text-gray-300">
              Unity Game Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg">
              "I build captivating and interactive games with Unity,
              transforming ideas into engaging digital experiences. From
              stunning visuals to fluid gameplay, I focus on creating games that
              entertain, inspire, and immerse players. Let’s bring your vision
              to life!"
            </p>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/WizzZn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/ajmalzyn-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              <FileDown className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.button>
          </ScrollAnimation>

          <ScrollAnimation className="mt-10 md:mt-0">
            <img
              src={profileImage}
              alt="Profile"
              className="w-96 h-96 rounded-full object-cover mx-auto shadow-2xl bg-gray-300 p-2"
              style={{}}
            />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Home;
