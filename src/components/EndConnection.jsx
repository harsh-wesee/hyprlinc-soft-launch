import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import businessEndConnction from "../images/businessSection.png";

const EndConnection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="pt-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-60">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
          >
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text mb-4"
            >
              Find best Influencers for your business
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg md:text-lg mb-8 max-w-xl"
            >
              Advertise your campaigns to our large pool of Influencers. Search,
              Select, Invite & Collaborate.
            </motion.p>
            <motion.button
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#007AFF] to-[#153885] text-white font-semibold hover:shadow-lg transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 122, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <motion.span
                whileHover={{ x: 2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <BsArrowUpRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="flex-1"
          >
            <img
              src={businessEndConnction}
              alt="Business Connection"
              className=" h-60 md:h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EndConnection;