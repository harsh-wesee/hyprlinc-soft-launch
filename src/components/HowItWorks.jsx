// import { useState, useEffect, useRef } from "react";
// import creator1 from "../images/creator1.png";
// import creator2 from "../images/creator2.png";
// import creator3 from "../images/creator3.png";
// import creator4 from "../images/creator4.png";
// import brand1 from "../images/brand1.png";
// import brand2 from "../images/brand2.png";
// import brand3 from "../images/brand3.png";
// import brand4 from "../images/brand4.png";
// import agency1 from "../images/agency1.png";
// import agency2 from "../images/agency2.png";
// import agency3 from "../images/agency3.png";
// import agency4 from "../images/agency4.png";
// import rocket from "../images/rocket.png";


// const HowItWorks = ({ scrollToSection }) => {
//   const [activeTab, setActiveTab] = useState("creators");
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const tabConfig = {
//     creators: "For Creators",
//     brands: "For Brands",
//     agencies: "For Agencies",
//   };

//   const tabColors = {
//     creators: "from-[#007AFF] to-[#153885]",
//     brands: "from-[#8C7CD8] to-[#6A5ACD]",
//     agencies: "from-[#2AB35D] to-[#1E8A42]",
//   };

//   const stepsData = {
//     creators: [
//       {
//         icon: creator1,
//         title: "Sign up",
//         description: "Register as a brand, influencer, or agency",
//       },
//       {
//         icon: creator2,
//         title: "Create or Apply for Campaign",
//         description: "Find and collaborate on tailored campaigns",
//       },
//       {
//         icon: creator3,
//         title: "Collaborate & Execute",
//         description: "Finalize deliverables and track progress",
//       },
//       {
//         icon: creator4,
//         title: "Get Paid",
//         description: "Post the finalised content and get paid",
//       },
//     ],
//     brands: [
//       {
//         icon: brand1,
//         title: "Sign up",
//         description: "Register as a brand and set up your business profile",
//       },
//       {
//         icon: brand2,
//         title: "Post a Campaign",
//         description:
//           "Create detailed briefs and define your collaboration goals",
//       },
//       {
//         icon: brand3,
//         title: "Discover & Shortlist",
//         description:
//           "Browse verified influencers and connect with your ideal match",
//       },
//       {
//         icon: brand4,
//         title: "Launch & Measure",
//         description:
//           "Execute, track performance, and pay securely on completion",
//       },
//     ],
//     agencies: [
//       {
//         icon: agency1,
//         title: "Register Your Agency",
//         description: "Create your agency profile and showcase your expertise",
//       },
//       {
//         icon: agency2,
//         title: "Onboard Creators",
//         description: "Add and manage your influencer roster in one place",
//       },
//       {
//         icon: agency3,
//         title: "Find Brand Campaigns",
//         description: "Access posted campaigns and pitch your creators",
//       },
//       {
//         icon: agency4,
//         title: "Execute & Report",
//         description:
//           "Collaborate, manage deliverables, and report campaign outcomes",
//       },
//     ],
//   };

//   const currentSteps = stepsData[activeTab];
//   const currentColor = tabColors[activeTab];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.3 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="how-it-works"
//       className="mx-auto w-full max-w-[1100px] px-4 py-16"
//     >
//       {/* Centered Rocket Section */}
//       <div className="flex justify-center">
//         <div
//           className={`inline-flex items-center gap-2 rounded-xl bg-blue-50 py-2 px-4 border border-blue-600 transition-all duration-700 mb-4 ${
//             isVisible ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img src={rocket} alt="rocket" className="w-4 h-4" />
//           <span className="text-blue-600 text-sm font-medium">
//             How it works
//           </span>
//         </div>
//       </div>

//       <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text">
//         Transforming Influencer Marketing
//       </h2>

//       <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
//         HyprLinc connects creators, Brand and Marketing agencies in a
//         revolutionary new way enabling seamless collaborations and campaign
//         tracking on multiple channels.
//       </p>

//       {/* Tab Buttons - Mobile Optimized */}
//       <div className="mb-8 flex gap-1 sm:gap-2 justify-center bg-gray-200 rounded-3xl p-1 sm:p-2 transition-all duration-700 shadow-inner max-w-md mx-auto">
//         {Object.entries(tabConfig).map(([key, label]) => (
//           <button
//             key={key}
//             onClick={() => setActiveTab(key)}
//             className={`flex-1 px-3 py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ${
//               activeTab === key
//                 ? `bg-gradient-to-r ${tabColors[key]} text-white shadow`
//                 : "text-gray-600 hover:bg-gray-300"
//             }`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Steps with responsive design */}
//       <div className="relative w-full">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
//           {currentSteps.map((step, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center p-3"
//             >
//               <div
//                 className={`relative mb-3 h-12 w-12 md:h-16 md:w-16 flex items-center justify-center rounded-full bg-blue-100 shadow-xl`}
//               >
//                 <img
//                   src={step.icon}
//                   alt={step.title}
//                   className="w-6 h-6 md:w-8 md:h-8 object-contain"
//                 />
//                 <div className="absolute -top-2 -right-2 h-6 w-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
//                   {index + 1}
//                 </div>
//               </div>
//               <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1">
//                 {step.title}
//               </h3>
//               <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Connecting Line - Hidden on mobile, shown on desktop */}
//         {/* <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300 z-0">
//             <div className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 w-full animate-pulse"></div>
//           </div> */}

//         <div className="hidden md:block  absolute top-7 w-full h-[4px] md:h-2">
//           <div className="relative w-full h-full flex justify-between items-center px-8">
//             {Array.from({ length: currentSteps.length - 1 }).map((_, i) => {
//               const segmentWidth = 100 / (currentSteps.length - 1);
//               return (
//                 <div
//                   key={i}
//                   className="absolute h-[4px] md:h-2 flex items-center"
//                   style={{
//                     left: `${i * segmentWidth}%`,
//                     width: `${segmentWidth}%`,
//                   }}
//                 >
//                   {Array.from({ length: 20 }).map((_, dotIndex) => (
//                     <div
//                       key={dotIndex}
//                       className={`h-[4px] w-[4px] md:w-2 md:h-2 rounded-full absolute`}
//                       style={{
//                         backgroundColor:
//                           activeTab === "creators"
//                             ? "#007AFF"
//                             : activeTab === "brands"
//                             ? "#8C7CD8"
//                             : "#2AB35D",
//                         left: `${dotIndex * 5}%`,
//                         animation: `pulse 2s infinite ${
//                           i * 0.5 + dotIndex * 0.05
//                         }s`,
//                       }}
//                     />
//                   ))}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* CTA Button */}
//       {/* <div className="text-center mt-8">
//         <button
//           onClick={() => scrollToSection("hyprlinc50")}
//           className={`px-8 py-3 rounded-full bg-gradient-to-r ${currentColor} text-white font-semibold hover:shadow-lg transition-all transform hover:-translate-y-1`}
//         >
//           Get Started
//         </button>
//       </div> */}
//     </section>
//   );
// };

// export default HowItWorks;

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import creator1 from "../images/creator1.png";
import creator2 from "../images/creator2.png";
import creator3 from "../images/creator3.png";
import creator4 from "../images/creator4.png";
import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand4 from "../images/brand4.png";
import agency1 from "../images/agency1.png";
import agency2 from "../images/agency2.png";
import agency3 from "../images/agency3.png";
import agency4 from "../images/agency4.png";
import rocket from "../images/rocket.png";

const HowItWorks = ({ scrollToSection }) => {
  const [activeTab, setActiveTab] = useState("creators");
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const tabConfig = {
    creators: "For Creators",
    brands: "For Brands",
    agencies: "For Agencies",
  };

  const tabColors = {
    creators: "from-[#007AFF] to-[#153885]",
    brands: "from-[#8C7CD8] to-[#6A5ACD]",
    agencies: "from-[#2AB35D] to-[#1E8A42]",
  };

  const stepsData = {
    creators: [
      {
        icon: creator1,
        title: "Sign up",
        description: "Register as a brand, influencer, or agency",
      },
      {
        icon: creator2,
        title: "Create or Apply for Campaign",
        description: "Find and collaborate on tailored campaigns",
      },
      {
        icon: creator3,
        title: "Collaborate & Execute",
        description: "Finalize deliverables and track progress",
      },
      {
        icon: creator4,
        title: "Get Paid",
        description: "Post the finalised content and get paid",
      },
    ],
    brands: [
      {
        icon: brand1,
        title: "Sign up",
        description: "Register as a brand and set up your business profile",
      },
      {
        icon: brand2,
        title: "Post a Campaign",
        description:
          "Create detailed briefs and define your collaboration goals",
      },
      {
        icon: brand3,
        title: "Discover & Shortlist",
        description:
          "Browse verified influencers and connect with your ideal match",
      },
      {
        icon: brand4,
        title: "Launch & Measure",
        description:
          "Execute, track performance, and pay securely on completion",
      },
    ],
    agencies: [
      {
        icon: agency1,
        title: "Register Your Agency",
        description: "Create your agency profile and showcase your expertise",
      },
      {
        icon: agency2,
        title: "Onboard Creators",
        description: "Add and manage your influencer roster in one place",
      },
      {
        icon: agency3,
        title: "Find Brand Campaigns",
        description: "Access posted campaigns and pitch your creators",
      },
      {
        icon: agency4,
        title: "Execute & Report",
        description:
          "Collaborate, manage deliverables, and report campaign outcomes",
      },
    ],
  };

  const currentSteps = stepsData[activeTab];
  const currentColor = tabColors[activeTab];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation variants
  const containerVariants = {
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

  const rocketVariants = {
    hidden: { 
      scale: 0,
      rotate: -180 
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: {
        duration: 0.3
      }
    }
  };

  const tabVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const stepCardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9 
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
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  

  return (
    <motion.section
      ref={sectionRef}
      id="how-it-works"
      className="mx-auto w-full max-w-[1100px] px-4 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
    }}
    >
      {/* Centered Rocket Section */}
      <motion.div className="flex justify-center" variants={itemVariants}>
        <motion.div
          className={`inline-flex items-center gap-2 rounded-xl bg-blue-50 py-2 px-4 border border-blue-600 mb-4 cursor-pointer`}
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.img 
            src={rocket} 
            alt="rocket" 
            className="w-4 h-4"
            whileHover={{ rotate: 20 }}
          />
          <span className="text-blue-600 text-sm font-medium">
            How it works
          </span>
        </motion.div>
      </motion.div>

      <motion.h2 
        className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text"
        variants={itemVariants}
      >
        Transforming Influencer Marketing
      </motion.h2>

      <motion.p 
        className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base"
        variants={itemVariants}
      >
        HyprLinc connects creators, Brand and Marketing agencies in a
        revolutionary new way enabling seamless collaborations and campaign
        tracking on multiple channels.
      </motion.p>

      {/* Tab Buttons - Mobile Optimized */}
      <motion.div 
        className="mb-8 flex gap-1 sm:gap-2 justify-center bg-gray-200 rounded-3xl p-1 sm:p-2 shadow-inner max-w-md mx-auto"
        variants={itemVariants}
      >
        {Object.entries(tabConfig).map(([key, label]) => (
          <motion.button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-1 px-3 py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tabColors[key]} text-white shadow`
                : "text-gray-600 hover:bg-gray-300"
            }`}
            variants={tabVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            {label}
          </motion.button>
        ))}
      </motion.div>

      {/* Steps with responsive design */}
      <div className="relative w-full">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10"
          layout
        >
          <AnimatePresence mode="wait">
            {currentSteps.map((step, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                className="flex flex-col items-center text-center p-3"
                variants={stepCardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                custom={index}
              >
                <motion.div
                  className={`relative mb-3 h-12 w-12 md:h-16 md:w-16 flex items-center justify-center rounded-full bg-white border border-blue-200 shadow-xl cursor-pointer`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <motion.img
                    src={step.icon}
                    alt={step.title}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  />
                  {/* <motion.div 
                    className="absolute -top-2 -right-2 h-6 w-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                    variants={numberVariants}
                    whileHover="hover"
                  >
                    {index + 1}
                  </motion.div> */}
                </motion.div>
                <motion.h3 
                  className="text-sm md:text-base font-semibold text-gray-800 mb-1"
                  whileHover={{ color: "#007AFF" }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-xs md:text-sm text-gray-600 leading-relaxed"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

 
           {/* Connecting Line - Hidden on mobile, shown on desktop */}
        {/* <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300 z-0">
            <div className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 w-full animate-pulse"></div>
          </div> */}

        <div className="hidden md:block  absolute top-10 w-full h-[2px] md:h-1">
          <div className="relative w-full h-full flex justify-between items-center px-8">
            {Array.from({ length: currentSteps.length - 1 }).map((_, i) => {
              const segmentWidth = 100 / (currentSteps.length - 1);
              return (
                <div
                  key={i}
                  className="absolute h-[4px] md:h-2 flex items-center"
                  style={{
                    left: `${i * segmentWidth}%`,
                    width: `${segmentWidth}%`,
                  }}
                >
                  {Array.from({ length: 20 }).map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`h-[2px] w-[2px] md:w-1 md:h-1 rounded-full absolute`}
                      style={{
                        backgroundColor:
                          activeTab === "creators"
                            ? "#007AFF"
                            : activeTab === "brands"
                            ? "#8C7CD8"
                            : "#2AB35D",
                        left: `${dotIndex * 5}%`,
                        animation: `pulse 2s infinite ${
                          i * 0.5 + dotIndex * 0.05
                        }s`,
                      }}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default HowItWorks;