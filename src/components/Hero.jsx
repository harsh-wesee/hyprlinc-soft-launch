import hero_bg from "../images/heroImage.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";

import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      className="relative mx-auto flex flex-col md:flex-row max-w-[1200px] items-start px-4 pt-4 md:pt-16 pb-0 w-full"
    >
      <div className="flex flex-col w-full md:w-auto md:flex-row justify-between md:gap-6">
        <div>
          <motion.p
            variants={itemVariants}
            className="text-sm w-48 bg-gradient-to-r from-[#D3DDFF] to-[#E2FFED] border border-blue-600 text-blue-700 rounded-3xl py-2 px-3 mb-2"
          >
            Made in India for India
          </motion.p>
          <div className="max-w-full md:max-w-[700px] w-full">
            <motion.h1
              variants={itemVariants}
              className="text-left text-3xl md:text-5xl lg:text-5xl font-semibold leading-[1.3] tracking-tight py-2 md:mb-6 bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text"
            >
              Connecting Brands, <br />
              Influencers and <br />
              Marketing Agencies
              <br />
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="hidden md:flex mt-0 mb-9 max-w-[600px] text-left font-montserrat font-medium text-md text-[#444]"
            >
              Hyprlinc is a dynamic platform designed to bridge the gap between
              influencers and brands, creating seamless collaborations that
              drive engagement and growth. With an intelligent matchmaking
              algorithm, Hyprlinc connects brands with the right influencers
              based on audience demographics, engagement metrics, and campaign
              goals.
            
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mb-8 hidden gap-3 md:flex md:gap-[18px] w-full"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  (window.location.href =
                    "https://dashboard.hyprlinc.com/creatorsLogin")
                }
                className="flex cursor-pointer items-center gap-2 rounded-lg border-none bg-gradient-to-r from-[#007AFF] to-[#153885] py-2 md:py-3 px-3 md:px-5 text-[0.9rem] font-semibold text-white shadow-lg whitespace-nowrap w-full md:w-auto justify-center"
              >
                Find Brands
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  (window.location.href =
                    "https://dashboard.hyprlinc.com/brandsLogin")
                }
                className="flex cursor-pointer items-center gap-2 rounded-lg border-none bg-white text-slate-900 py-2 md:py-3 px-3 md:px-5 text-[0.9rem] font-semibold whitespace-nowrap w-full md:w-auto justify-center shadow-lg"
              >
                Find Creators
              </motion.button>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="hidden md:flex mt-0 mb-4 max-w-[600px] text-left font-montserrat font-medium text-md text-[#444]"
            >
              Platforms supported
            </motion.p>
            <motion.div variants={itemVariants} className="hidden md:flex gap-2">
              <img
                src={instagram}
                alt="Travel Freedom"
                className="object-cover"
              />
              <img
                src={youtube}
                alt="Travel Freedom"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={imageVariants}
        >
          <img
            src={hero_bg}
            alt="Travel Freedom"
            className="md:h-[600px] w-full rounded-2xl object-cover"
          />
        </motion.div>

        <motion.div
              variants={itemVariants}
              className=" flex flex-row gap-3 md:hidden w-full"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  (window.location.href =
                    "https://dashboard.hyprlinc.com/creatorsLogin")
                }
                className="flex cursor-pointer items-center gap-2 rounded-lg border-none bg-gradient-to-r from-[#007AFF] to-[#153885] py-2 md:py-3 px-3 md:px-5 text-[0.9rem] font-semibold text-white shadow-[0_2px_8px_rgba(37,99,235,0.08)] whitespace-nowrap w-full md:w-auto justify-center"
              >
                Find Brands
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  (window.location.href =
                    "https://dashboard.hyprlinc.com/brandsLogin")
                }
                className="flex cursor-pointer items-center gap-2 rounded-lg border-none bg-white text-slate-900 py-2 md:py-3 px-3 md:px-5 text-[0.9rem] font-semibold shadow-[0_2px_8px_rgba(37,99,235,0.08)] whitespace-nowrap w-full md:w-auto justify-center"
              >
                Find Creators
              </motion.button>
            </motion.div>
      </div>
    </motion.main>
  );
};

export default Hero;
