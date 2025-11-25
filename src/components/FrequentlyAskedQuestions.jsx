import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is HyprLinc?",
      answer:
        "HyprLinc is a smart influencer marketing platform designed to help brands, creators, and agencies discover, connect, and collaborate seamlessly. We use AI to make influencer discovery and campaign execution faster, simpler, and more effective.",
    },
    {
      question: "Is HyprLinc free to use?",
      answer:
        "Yes, creating an account and using core platform features is completely free. We charge a minimal transaction fee only when a paid campaign is executed through the platform.",
    },
    {
      question: "How can influencers join HyprLinc?",
      answer:
        "Influencers can sign up using their Instagram or YouTube accounts, select their niche, and complete a simple onboarding process. Once verified, they can browse and apply for campaigns from top brands.",
    },
    {
      question: "How do brands discover influencers?",
      answer:
        "Brands can post a campaign brief and use detailed filters to discover the most relevant creators based on category, region, audience profile, and performance — all within a few clicks.",
    },
    {
      question: "Is influencer data reliable on HyprLinc?",
      answer:
        "Yes, all performance metrics shown on profiles are either connected directly through the creator's account or verified through internal checks, ensuring authenticity.",
    },
    {
      question: "How are campaign payments handled?",
      answer:
        "To ensure security for both parties, campaign payments are held safely until deliverables are marked completed and approved by the brand.",
    },
    {
      question:
        "What happens if there’s a dispute between a brand and an influencer?",
      answer:
        "HyprLinc offers a simple resolution system. If any conflict arises, both parties can raise a concern, and our support team will assist based on the campaign agreement and activity history.",
    },
    {
      question: "Can agencies use Hyprlinc?",
      answer:
        "Yes! Agencies can register and manage multiple creators and campaigns from a single dashboard. They can also be discovered by brands looking for expert execution partners.",
    },
    {
      question: "Can I post unpaid or barter campaigns?",
      answer:
        "Yes, brands can post both paid and barter-based collaborations. The campaign type is clearly visible to influencers before they apply.",
    },
    {
      question: "Is HyprLinc available only in India?",
      answer:
        "HyprLinc is currently focused on the Indian market but is designed to scale globally. We’re already onboarding creators and brands for cross-border collaborations.",
    },
  ];

//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#007AFF] to-[#153885] text-transparent bg-clip-text mb-8">
//           Frequently Asked Questions
//         </h2>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
//             >
//               <button
//                 className="flex justify-between items-center w-full p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <h3 className="text-sm md:text-base font-semibold text-gray-800 pr-4">
//                   {faq.question}
//                 </h3>
//                 <span className="text-gray-600 flex-shrink-0">
//                   {activeIndex === index ? (
//                     <FaAngleUp className="w-5 h-5" />
//                   ) : (
//                     <FaAngleDown className="w-5 h-5" />
//                   )}
//                 </span>
//               </button>
//               {activeIndex === index && (
//                 <div className="px-4 md:px-6 pb-4 md:pb-6">
//                   <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//                     {faq.answer}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className=" justify-center flex gap-7 text-center mt-8">
//           <p className="text-gray-600 m-2">My question is not here.</p>
//           <button className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#007AFF] to-[#153885] text-white font-semibold hover:shadow-lg transition-all">
//             Contact Us
//             <BsArrowUpRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FrequentlyAskedQuestions;



  // Animation variants
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

  const faqItemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -2,
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { 
      height: 0, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    rotate: {
      rotate: 180,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    initial: {
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-16 px-4 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#007AFF] to-[#153885] text-transparent bg-clip-text mb-8"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div 
          className="space-y-4"
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={faqItemVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <motion.button
                className="flex justify-between items-center w-full p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 
                  className="text-sm md:text-base font-semibold text-gray-800 pr-4"
                  whileHover={{ color: "#007AFF" }}
                >
                  {faq.question}
                </motion.h3>
                <motion.span 
                  className="text-gray-600 flex-shrink-0"
                  variants={iconVariants}
                  animate={activeIndex === index ? "rotate" : "initial"}
                >
                  {activeIndex === index ? (
                    <FaAngleUp className="w-5 h-5" />
                  ) : (
                    <FaAngleDown className="w-5 h-5" />
                  )}
                </motion.span>
              </motion.button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <motion.p 
                        className="text-gray-600 text-sm md:text-base leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center mt-8"
        >
          <motion.p 
            className="text-gray-600"
            whileHover={{ scale: 1.05 }}
          >
            My question is not here.
          </motion.p>
          <motion.button 
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#007AFF] to-[#153885] text-white font-semibold hover:shadow-lg transition-all"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 122, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <motion.span
              whileHover={{ x: 2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <BsArrowUpRight className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FrequentlyAskedQuestions;