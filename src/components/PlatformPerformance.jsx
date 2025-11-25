import { motion } from "framer-motion";
import { AiOutlineBarChart } from "react-icons/ai";
import AnimatedNumber from "./AnimatedNumber";

const PlatformPerformanceStats = () => {
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
      scale: 1.08,
      y: -15,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { value: 10, suffix: "X", text: "Faster Campaign Planning & execution" },
    { value: 3, suffix: "X", text: "Higher engagement rate for Campaigns run on Hyprlinc" },
    { value: 80, suffix: "%", text: "Higher Connection rate due to data backed matchmaking & audience profiling" },
    { value: 100, suffix: "%", text: "Secure Payments with All transactions are protected until campaigns milestones are met." }
  ];

  return (
    <section
      id="problem-solution"
      className="mx-auto mb-16 flex w-full max-w-[1100px] flex-col items-center px-4"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={itemVariants}
        className="inline-flex items-center rounded-full bg-blue-50 py-1 px-4 border border-blue-500"
      >
        <span className="flex gap-2 text-sm font-medium text-blue-600">
          <AiOutlineBarChart className="w-5 h-5" />
          Platform Performance
        </span>
      </motion.div>
      
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={itemVariants}
        className="text-center font-montserrat font-bold text-2xl sm:text-2xl md:text-4xl my-2 bg-gradient-to-r from-[#007AFF] to-[#153885] text-transparent bg-clip-text"
      >
        Transforming Influencer Marketing
      </motion.h2>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={itemVariants}
        className="mb-10 max-w-[600px] text-center text-[1.1rem] text-gray-600"
      >
        Our AI-powered platform delivers measurable results for creators,
        brand and marketing agencies.
      </motion.div>
      
      <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
            whileHover="hover"
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.5,
                duration: 0.8
              }}
            className="flex flex-col items-center rounded-xl shadow-lg bg-white p-8 transition-transform duration-200"
          >
            <AnimatedNumber endValue={stat.value} suffix={stat.suffix} />
            <div className="text-center text-xs text-gray-600">
              {stat.text}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlatformPerformanceStats;