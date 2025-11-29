import { useState } from "react";
import { joinWaitlist } from "./services/join-waitlist";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TrustedBrands from "./components/TrustedBrands";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import HowItWorks from "./components/HowItWorks";
import PlatformPerformanceStats from "./components/PlatformPerformance";
import UserSpecificJoin from "./components/UserSpecificJoin";
import IndustryChallenge from "./components/IndustryChallenge";
import Features from "./components/Features";
import EndConnection from "./components/EndConnection";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CancellationRefundPolicy from "./pages/CancellationRefundPolicy";
import ShippingAndDeliveryPolicy from "./pages/ShippingAndDeliveryPolicy";
import DataDeletionInstructions from "./pages/DataDeletionInstructions";
import { Route, Routes } from "react-router-dom";

// Home component containing the main landing page
function Home() {
  const [activeRole, setActiveRole] = useState("creator");
  const [navOpen, setNavOpen] = useState(false);
  // Waitlist form state
  const [waitlistName, setWaitlistName] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistLoading, setWaitlistLoading] = useState(false);
  const [waitlistMessage, setWaitlistMessage] = useState("");
  const [waitlistError, setWaitlistError] = useState("");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setNavOpen(false);
  };

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    setWaitlistLoading(true);
    setWaitlistMessage("");
    setWaitlistError("");
    try {
      const userType = activeRole.charAt(0).toUpperCase() + activeRole.slice(1); // Capitalize for API
      const result = await joinWaitlist({
        userType,
        name: waitlistName,
        email: waitlistEmail,
      });
      setWaitlistMessage(result.message);
      setWaitlistName("");
      setWaitlistEmail("");
    } catch (err) {
      setWaitlistError(err.message);
    } finally {
      setWaitlistLoading(false);
    }
  };

  return (
    <div className="">
      {/* Header */}
      <Header
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        scrollToSection={scrollToSection}
      />

      {/* hero section */}
      <Hero/>

      {/* Join as a influencer, brand and agency */}
      <UserSpecificJoin/>

      {/* Platform Performance Section */}
      <PlatformPerformanceStats />

      {/* Why Traditional Influencer Marketing Doesn't Work Anymore */}
      <IndustryChallenge />

      {/* How it works - Updated with consistent typography */}
      <HowItWorks scrollToSection={scrollToSection} />

      {/* Feature section */}
      <Features />

      {/* Trusted Branch */}
      <TrustedBrands />

      {/* FrequentlyAskedQuestions */}
      <FrequentlyAskedQuestions />

<EndConnection/>
      {/* Footer Section */}
      <Footer />
      
    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/cancellation-policy" element={<CancellationRefundPolicy />} />
      <Route path="/shipping-policy" element={<ShippingAndDeliveryPolicy />} />
      <Route path="/data-deletion-instructions" element={<DataDeletionInstructions />} />
    </Routes>
  );
}

export default App;

// const AnimatedNumber = ({ endValue, suffix = "", duration = 2000 }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = parseInt(endValue);
//     const range = end - start;
//     const increment = end > start ? 1 : -1;
//     const stepTime = Math.abs(Math.floor(duration / range));

//     const timer = setInterval(() => {
//       start += increment;
//       setCount(start);
//       if (start === end) {
//         clearInterval(timer);
//       }
//     }, stepTime);

//     return () => clearInterval(timer);
//   }, [endValue, duration]);

//   return (
//     <div className="mb-1 text-4xl font-medium  text-[#08AA44]">
//       {count}
//       {suffix}
//     </div>
//   );
// };

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
//       className="mx-auto mt-20 flex w-full max-w-[1100px] flex-col items-center px-4 py-16"
//     >
//       {/* Heading */}
//       <h2 className="text-center font-bold text-2xl md:text-4xl bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text my-3">
//         Transforming Influencer Marketing
//       </h2>

//       {/* How it works tag */}
//       <div
//         className={`inline-flex items-center gap-2 rounded-xl bg-blue-50 py-1.5 px-3 border border-blue-600 transition-all duration-700 mb-2 ${
//           isVisible ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <img
//           src={rocket}
//           alt="marketing"
//           className="w-4 h-4 md:w-5 md:h-5 mt-1 object-contain"
//         />
//         <span className="text-blue-600 text-sm font-medium">How it works</span>
//       </div>

//       {/* Subtitle */}
//       <p className="mb-12 max-w-[750px] text-center text-[1.1rem] leading-7 text-gray-600">
//         Hyprlinc connects creators, Brand and Marketing agencies in a
//         revolutionary new way enabling seamless collaborations and campaign
//         tracking on multiple channels.
//       </p>

//       {/* Tab Buttons */}
//       <div className="mb-10 flex gap-2 sm:gap-4 justify-center bg-gray-200 rounded-3xl p-2 transition-all duration-700 shadow-inner">
//         {Object.entries(tabConfig).map(([key, label]) => (
//           <button
//             key={key}
//             onClick={() => setActiveTab(key)}
//             className={`px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
//               activeTab === key
//                 ? `bg-gradient-to-r ${tabColors[key]} text-white shadow`
//                 : " text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Steps with dotted line */}
//       <div className="relative w-full flex justify-between items-start mt-4">
//         {currentSteps.map((step, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center w-1/4 px-2 relative z-10"
//           >
//             <div
//               className={`relative mb-4 h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center rounded-full bg-blue-100`}
//             >
//               <img
//                 src={step.icon}
//                 alt={step.title}
//                 className="w-8 h-8 object-contain"
//               />
//             </div>
//             <h3 className="mb-1 text-base font-semibold text-gray-800">
//               {step.title}
//             </h3>
//             <p className="text-sm text-gray-600">{step.description}</p>
//           </div>
//         ))}

//         {/* Animated Dotted Line */}
//         <div className="absolute top-7 w-full h-[4px] md:h-2">
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
//       <button
//         onClick={() => scrollToSection("hyprlinc50")}
//         className={`mt-12 px-6 py-3 rounded-full bg-gradient-to-r ${currentColor} text-white font-semibold hover:opacity-90 transition-all`}
//       >
//         Signup
//       </button>
//     </section>
//   );
// };

// const FrequentlyAskedQuestions = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Handle Escape key to close modal and prevent body scroll
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape' && isModalOpen) {
//         setIsModalOpen(false);
//       }
//     };
    
//     if (isModalOpen) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
    
//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isModalOpen]);

//   const faqs = [
//     {
//       question: "What is Hyprlinc?",
//       answer:
//         "Hyprlinc is a smart influencer marketing platform designed to help brands, creators, and agencies discover, connect, and collaborate seamlessly. We use AI to make influencer discovery and campaign execution faster, simpler, and more effective.",
//     },
//     {
//       question: "Is Hyprlinc free to use?",
//       answer:
//         "Yes, creating an account and using core platform features is completely free. We charge a minimal transaction fee only when a paid campaign is executed through the platform.",
//     },
//     {
//       question: "How can influencers join Hyprlinc?",
//       answer:
//         "Influencers can sign up using their Instagram or YouTube accounts, select their niche, and complete a simple onboarding process. Once verified, they can browse and apply for campaigns from top brands.",
//     },
//     {
//       question: "How do brands discover influencers?",
//       answer:
//         "Brands can post a campaign brief and use detailed filters to discover the most relevant creators based on category, region, audience profile, and performance — all within a few clicks.",
//     },
//     {
//       question: "Is influencer data reliable on Hyprlinc?",
//       answer:
//         "Yes, all performance metrics shown on profiles are either connected directly through the creator's account or verified through internal checks, ensuring authenticity.",
//     },
//     {
//       question: "How are campaign payments handled?",
//       answer:
//         "To ensure security for both parties, campaign payments are held safely until deliverables are marked completed and approved by the brand.",
//     },
//     {
//       question:
//         "What happens if there’s a dispute between a brand and an influencer?",
//       answer:
//         "Hyprlinc offers a simple resolution system. If any conflict arises, both parties can raise a concern, and our support team will assist based on the campaign agreement and activity history.",
//     },
//     {
//       question: "Can agencies use Hyprlinc?",
//       answer:
//         "Yes! Agencies can register and manage multiple creators and campaigns from a single dashboard. They can also be discovered by brands looking for expert execution partners.",
//     },
//     {
//       question: "Can I post unpaid or barter campaigns?",
//       answer:
//         "Yes, brands can post both paid and barter-based collaborations. The campaign type is clearly visible to influencers before they apply.",
//     },
//     {
//       question: "Is Hyprlinc available only in India?",
//       answer:
//         "Hyprlinc is currently focused on the Indian market but is designed to scale globally. We’re already onboarding creators and brands for cross-border collaborations.",
//     },
//   ];

//   return (
//     <section className="text-white py-20 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-4xl mx-auto space-y-2">
//         <h1 className="text-3xl text-gray-800 font-semibold flex items-center justify-center mb-6">
//           Frequently Asked Questions
//         </h1>

//         {faqs.map((faq, index) => (
//           <div key={index} className="space-y-2 group">
//             {" "}
//             {/* Added group class */}
//             <div
//               className="flex justify-between items-center cursor-pointer p-2 rounded"
//               onClick={() => toggleFAQ(index)}
//             >
//               <h3 className="text-lg text-gray-800 font-medium">
//                 {faq.question}
//               </h3>
//               <span className="text-gray-800">
//                 {activeIndex === index ? (
//                   <FaAngleUp className="w-5 h-5" />
//                 ) : (
//                   <FaAngleDown className="w-5 h-5" />
//                 )}
//               </span>
//             </div>
//             {activeIndex === index && (
//               <div className="mt-2 px-2">
//                 <p className="text-gray-700">{faq.answer}</p>
//               </div>
//             )}
//             <hr className="border-gray-300 my-4" />{" "}
//             {/* Lightened the border color */}
//           </div>
//         ))}

//         <div className=" flex items-center justify-center gap-2 py-7">
//           <p className="text-gray-700">My question is not answered here.</p>
//           <button 
//             onClick={openModal}
//             className="flex gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#007AFF] to-[#153885] text-white font-semibold hover:bg-blue-700 transition-all"
//           >
//             CONTACT US
//             <BsArrowUpRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       {/* Contact Us Modal */}
//       {isModalOpen && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
//           onClick={closeModal}
//         >
//           <div 
//             className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
//               <h2 className="text-2xl font-bold text-gray-900 font-montserrat">CONTACT US</h2>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-500 hover:text-gray-700 transition-colors"
//                 aria-label="Close modal"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="px-6 py-6 space-y-6">
//               {/* Introduction */}
//               <p className="text-gray-700 text-base leading-relaxed font-montserrat">
//                 We'd love to hear from you! Whether you have questions about collaborations, campaigns, or technical support, the Hyprlinc team is here to help.
//               </p>

//               {/* Customer Support Section */}
//               <div className="space-y-3">
//                 <h3 className="text-xl font-semibold text-gray-900 font-montserrat">Customer Support</h3>
//                 <p className="text-gray-700 text-base leading-relaxed font-montserrat">
//                   For assistance with your account, campaigns, or payments, please reach out to our support team at:
//                 </p>
//                 <div className="flex items-center gap-2">
                  
//                   <a 
//                     href="mailto:support@hyprlinc.com" 
//                     className="text-blue-600 hover:text-blue-700 font-medium font-montserrat"
//                   >
//                     business@hyprlinc.com
//                   </a>
//                 </div>
//                 <p className="text-gray-600 text-sm italic font-montserrat">
//                   Our team typically responds within 24–48 business hours.
//                 </p>
//               </div>

//               {/* Business & Partnerships Section */}
//               <div className="space-y-3">
//                 <h3 className="text-xl font-semibold text-gray-900 font-montserrat">Business & Partnerships</h3>
//                 <p className="text-gray-700 text-base leading-relaxed font-montserrat">
//                   Interested in partnering with Hyprlinc or exploring strategic collaborations? Please write to us at{" "}
//                   <a 
//                     href="mailto:business@hyprlinc.com" 
//                     className="text-blue-600 hover:text-blue-700 font-medium font-montserrat"
//                   >
//                     business@hyprlinc.com
//                   </a>
//                 </p>
//               </div>

//               {/* Follow Us Section */}
//               <div className="space-y-3">
//                 <h3 className="text-xl font-semibold text-gray-900 font-montserrat">Follow Us</h3>
//                 <p className="text-gray-700 text-base leading-relaxed font-montserrat">
//                   Stay connected with us for updates, new features, and success stories:
//                 </p>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
                    
//                     <a 
//                       href="https://www.hyprlinc.com" 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:text-blue-700 font-medium font-montserrat"
//                     >
//                       www.hyprlinc.com
//                     </a>
//                   </div>
//                   <div className="flex items-center gap-2">
                   
//                     <span className="text-gray-700 font-montserrat">Instagram: </span>
//                     <a 
//                       href="https://instagram.com/hyprlinc" 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:text-blue-700 font-medium font-montserrat"
//                     >
//                       @hyprlinc
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-2xl">
//               <button
//                 onClick={closeModal}
//                 className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#007AFF] to-[#153885] text-white font-semibold hover:opacity-90 transition-all font-montserrat"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// const TrustedBrands = () => {
//   const brands = [
//     { name: "Adidas", src: "/logos/adidasLogo.png" },
//     { name: "H&M", src: "/logos/h&mLogo.png" },
//     { name: "Sugar", src: "/logos/sugarLogo.png" },
//     { name: "Rangraze", src: "/logos/rangrazeLogo.png" },
//     { name: "Burger King", src: "/logos/burgerKingLogo.png" },
//     { name: "Cetaphil", src: "/logos/cetaphilLogo.png" },
//     { name: "Puma", src: "/logos/pumaLogo.png" },
//     { name: "Allen Solly", src: "/logos/allenSollyLogo.png" },
//     { name: "Libas", src: "/logos/libasLogo.png" },
//     { name: "Biba", src: "/logos/bibaLogo.png" },
//     { name: "Denver", src: "/logos/denverLogo.png" },
//     { name: "Mamaearth", src: "/logos/mamaEarthlogo.png" },
//   ];

//   return (
//     <section className="py-16 overflow-hidden bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-center text-gray-900">
//           Trusted by leading Brands
//         </h2>
//         <div className="relative">
//           <div className="w-full overflow-hidden">
//             <div className="flex animate-slide whitespace-nowrap">
//               {[...brands, ...brands, ...brands].map((brand, index) => (
//                 <div 
//                   key={`${brand.name}-${index}`} 
//                   className="inline-flex px-4 md:px-8 flex-shrink-0"
//                 >
//                   <img
//                     src={brand.src}
//                     alt={brand.name}
//                     className="h-12 md:h-16 w-auto object-contain transition-all duration-300 "
//                     loading="lazy"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-[#007BFF] to-[#003B95] text-white px-6 py-12">
//       <div className="max-w-7xl mx-auto space-y-8">
//         {/* Top Links */}
//         <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/20 pb-6">
//           <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-white/80">
//             <Link to="/terms" className="hover:text-white">
//               Terms & Conditions
//             </Link>
//             <Link to="/privacy" className="hover:text-white">
//               Privacy Policy
//             </Link>
//             <Link to="/cancellation-policy" className="hover:text-white">
//               Cancellation & Refund Policy
//             </Link>
//             <Link to="/shipping-policy" className="hover:text-white">
//               Shipping & Delivery Policy
//             </Link>
//           </div>
//           <div className="flex items-center gap-4 mt-4 md:mt-0">
//             <span className="text-white/80 text-sm">Follow us</span>
//             <a href="#" className="hover:text-white">
//               <FaTwitter />
//             </a>
//             <a href="#" className="hover:text-white">
//               <FaInstagram />
//             </a>
//             <a href="#" className="hover:text-white">
//               <FaYoutube />
//             </a>
//           </div>
//         </div>

//         {/* Grid Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-sm">
//           {/* Description */}
//           <div className="lg:col-span-1 text-white/80">
//             Connecting brands, influencers, and agencies through an innovative
//             platform that simplifies collaboration and maximizes results.
//           </div>

//           {/* Links */}
//           <div>
//             <h4 className="font-semibold mb-3">Platform</h4>
//             <ul className="space-y-2 text-white/80">
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Overview
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Marketplace
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Leaderboard
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-3">Solutions</h4>
//             <ul className="space-y-2 text-white/80">
//               <li>
//                 <a href="#" className="hover:text-white">
//                   For Creators
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   For Brands
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   For Agencies
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-3">Company</h4>
//             <ul className="space-y-2 text-white/80">
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Investors
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Comparison
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Pricing
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Us Section */}
//           <div>
//             <h4 className="font-semibold mb-3">Contact Us</h4>
//             <ul className="space-y-2 text-white/80">
//               <li>
//                 <a href="mailto:support@hyprlinc.com" className="hover:text-white">
//                   business@hyprlinc.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
