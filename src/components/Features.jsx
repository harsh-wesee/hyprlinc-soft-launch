import Overlay0 from "../images/Overlay.png";
import Overlay1 from "../images/Overlay (1).png";
import Overlay2 from "../images/Overlay (2).png";
import Overlay3 from "../images/Overlay (3).png";
import Overlay4 from "../images/Overlay (4).png";
import Overlay5 from "../images/Overlay (5).png";
import { motion } from "framer-motion";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
        y: 100, 
        opacity: 0,
        scale: 0.8
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
    hover: {
        y: -10,
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};


  const features = [
    {
      icon: Overlay0,
      title: "Personalized Campaign Suggestions",
      description: "Get matched with brands that align with your content, audience, and vibe."
    },
    {
      icon: Overlay1,
      title: "Smart campaign Dashboard",
      description: "Track your collaborations, deadlines, submissions, and earnings in a clean, user-friendly interface."
    },
    {
      icon: Overlay2,
      title: "Real- Time insight",
      description: "Understand your content performance—engagement, reach, and audience insights."
    },
    {
      icon: Overlay3,
      title: "Advanced Influencer Search Engine",
      description: "Filter creators by niche, engagement rate, location, audience demographics, and more."
    },
    {
      icon: Overlay4,
      title: "Campaign Brief Builder",
      description: "Launch a campaign in minutes with clearly defined deliverables and budgets."
    },
    {
      icon: Overlay5,
      title: "Direct Collaboration",
      description: "Manage negotiations, approvals, and communication all within the platform."
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
      id="features"
      className="mx-auto mt-1 flex w-full max-w-[1100px] flex-col items-center px-4 py-16"
    >
      <motion.div
        variants={itemVariants}
        className="text-center font-montserrat font-bold text-2xl md:text-4xl bg-gradient-to-r from-[#007AFF] to-[#004999] bg-clip-text text-transparent mb-2"
      >
        Features
      </motion.div>
      
      <motion.div
        variants={itemVariants}
        className="mb-12 max-w-[750px] text-center text-md font-medium leading-7 text-gray-600"
      >
        Hyprlinc integrates effortlessly with social media platforms like
        Instagram & YouTube, allowing brands to sync influencer data directly
        with marketing strategies.
      </motion.div>
      
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
            whileHover="hover"
            className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-[#EDF1FF] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:border-[#007AFF]"
          >
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src={feature.icon}
              alt={feature.title}
              className="mb-3 w-12 h-12 object-contain"
            />
            <div className="mb-2 text-lg font-semibold bg-gradient-to-r from-[#007AFF] to-[#004999] bg-clip-text text-transparent">
              {feature.title}
            </div>
            <div className="text-sm text-gray-600">
              {feature.description}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Features;