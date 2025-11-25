import right1 from "../images/r1.png";
import right2 from "../images/r2.png";
import right3 from "../images/r3.png";
import right4 from "../images/r4.png";
import right5 from "../images/r5.png";
import right0 from "../images/r0.png";
import left1 from "../images/l1.png";
import left2 from "../images/l2.png";
import left3 from "../images/l3.png";
import left4 from "../images/l4.png";
import left5 from "../images/l5.png";
import { motion } from "framer-motion";

const IndustryChallenge = () => {
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
            duration: 0.5,
            ease: "easeOut"
          }
        }
      };
    

      const leftCardVariants = {
        hidden: { 
          x: -100, 
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            ease: "easeOut"
          }
        },
        hover: {
          scale: 1.05,
          y: -10,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }
      };

      const rightCardVariants = {
        hidden: { 
          x: 100, 
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            ease: "easeOut"
          }
        },
        hover: {
          scale: 1.05,
          y: -10,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }
      };

      
      const leftCards = [
        { icon: left1, title: "Campaigns That Crawl", description: "Finding influencers is time-consuming and hit-or-miss." },
        { icon: left2, title: "Bleeding on Custom Edits", description: "No way to verify audience authenticity or engagement." },
        { icon: left3, title: "ROI You Can't Predict", description: "Messy coordination through DMs, emails, and spreadsheets." },
        { icon: left4, title: "Licensing Chaos", description: "Payment risks and delays create trust issues." },
        { icon: left5, title: "Licensing Chaos", description: "No clear performance metrics or ROI tracking." }
      ];
    
      const rightCards = [
        { icon: right1, title: "Modular UGC Powered by AI", description: "AI-powered matchmaking instantly connects you with creators who match your brand's niche, goals, and audience type" },
        { icon: right2, title: "Predict ROI Before You Launch", description: "Real-time data + fraud detection ensures you collaborate only with trusted, high-engagement creators" },
        { icon: right3, title: "Automated Legal, Built In", description: "Built-in project management, messaging, and milestone tracking in one centralized dashboard." },
        { icon: right4, title: "One Export. Every Channel.", description: "Escrow-secured payments that release only upon delivery of agreed campaign milestones." },
        { icon: right5, title: "One Export. Every Channel.", description: "Transparent analytics showing reach, engagement, conversions, and ROI—updated in real-time." }
      ];
    
      return (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="mx-auto mt-20 mb-16 flex w-full max-w-[1100px] flex-col items-center px-4"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center rounded-full bg-blue-50 py-1 px-4 border border-blue-600">
            <span className="text-sm font-medium text-blue-600">
              Industry Challenge
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-center font-montserrat font-bold text-2xl md:text-4xl bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text my-3">
            Why Traditional Influencer Marketing
            <br className="hidden md:block" /> Doesn't Work Anymore
          </motion.h2>
          
          <motion.p variants={itemVariants} className="content text-center font-montserrat text-sm sm:text-base md:text-lg text-[#444] max-w-2xl mb-8 md:mb-12">
            Influencer marketing is powerful—but when done manually, it's
            inefficient, slow, and unreliable. Hyprlinc fixes that.
          </motion.p>
    
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left column */}
              <div className="space-y-4 md:space-y-6">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-50px" }}
                  variants={itemVariants} 
                  className="flex items-center gap-3"
                >
                  <img src={left3} alt="marketing" className="w-7 h-7 md:w-10 md:h-10 mt-1 object-contain" />
                  <span className="font-inter font-bold text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] align-middle" style={{ color: "#F47274" }}>
                    Manual Influencer Marketing
                  </span>
                </motion.div>
    
                {leftCards.map((card, index) => (
                  <motion.div
                    key={`left-${index}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
                    variants={leftCardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl border border-[#fbeaea] p-4 sm:p-5 shadow-sm hover:shadow-md hover:bg-red-50 transition-shadow"
                  >
                    <div className="flex items-start gap-3 md:gap-4 h-20">
                      <img src={card.icon} alt={card.title} className="w-7 h-7 md:w-8 md:h-8 mt-1 object-contain" />
                      <div className="flex-1">
                        <div className="font-inter font-semibold text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-gray-700">
                          {card.title}
                        </div>
                        <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22px] text-black mt-1">
                          {card.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
    
              {/* Right column */}
              <div className="space-y-4 md:space-y-6">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-50px" }}
                  variants={itemVariants} 
                  className="flex-1"
                >
                  <div className="flex items-center gap-3">
                    <img src={right0} alt="marketing" className="w-7 h-7 md:w-10 md:h-10 mt-1 object-contain" />
                    <span className="font-inter font-bold text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] align-middle bg-gradient-to-r from-[#10B981] via-[#2DD4BF] to-[#67E8F9] bg-clip-text text-transparent">
                      How Hyprlinc Solves It
                    </span>
                  </div>
                </motion.div>
    
                {rightCards.map((card, index) => (
                  <motion.div
                    key={`right-${index}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
                    variants={rightCardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl border border-[#e6f9f1] p-4 sm:p-5 shadow-sm hover:shadow-md hover:bg-green-50 transition-shadow"
                  >
                    <div className="flex items-start gap-3 md:gap-4 h-32 md:h-20">
                      <img src={card.icon} alt={card.title} className="w-7 h-7 md:w-8 md:h-8 mt-1 object-contain" />
                      <div className="flex-1">
                        <div className="font-inter font-semibold text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-gray-700">
                          {card.title}
                        </div>
                        <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22px] text-black mt-1">
                          {card.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      );
    };
  export default IndustryChallenge;