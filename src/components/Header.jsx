import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoQuestion } from "react-icons/go";
import { BsLayers, BsLightbulb } from "react-icons/bs";
import logo from "../images/logo.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setNavOpen(false);
  };

  //   return (
  //     <>
  //       {/* Header Bar */}
  //       <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-white py-3 pl-4 pr-4 md:pl-8 md:pr-10 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
  //         <div className="flex items-center gap-4 md:gap-9">
  //           {/* Hamburger for mobile - replaced with cancel button when open */}
  //           {navOpen ? (
  //             <button
  //               className="md:hidden"
  //               onClick={() => setNavOpen(false)}
  //               aria-label="Close navigation"
  //             >
  //               <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
  //                 <path
  //                   d="M6 6l12 12M6 18L18 6"
  //                   stroke="#222"
  //                   strokeWidth="2"
  //                   strokeLinecap="round"
  //                 />
  //               </svg>
  //             </button>
  //           ) : (
  //             <button
  //               className="md:hidden"
  //               onClick={() => setNavOpen(true)}
  //               aria-label="Open navigation"
  //             >
  //               <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
  //                 <path
  //                   d="M4 6h16M4 12h16M4 18h16"
  //                   stroke="#222"
  //                   strokeWidth="2"
  //                   strokeLinecap="round"
  //                 />
  //               </svg>
  //             </button>
  //           )}

  //           {/* Logo */}
  //           <div className="flex items-center text-[1.7rem] font-bold tracking-[1px] text-[#222]">
  //             <img src={logo} alt="HYPRLINC" className="h-5" />
  //           </div>

  //           {/* Desktop Nav */}
  //           <nav className="hidden md:flex gap-6 text-base text-[#222]">
  //             <span
  //               onClick={() => scrollToSection("problem-solution")}
  //               className="flex gap-2 cursor-pointer hover:text-blue-600 transition-colors font-montserrat font-medium text-sm"
  //             >
  //               <GoQuestion className=" w-5 h-5" />
  //               Problem & Solution
  //             </span>
  //             <span
  //               onClick={() => scrollToSection("how-it-works")}
  //               className="flex gap-2 cursor-pointer hover:text-blue-600 transition-colors font-montserrat font-medium text-sm"
  //             >
  //               <BsLayers className="w-6 h-6" />
  //               How It Works
  //             </span>
  //             <span
  //               onClick={() => scrollToSection("features")}
  //               className="flex gap-2 cursor-pointer hover:text-blue-600 transition-colors font-montserrat font-medium text-sm"
  //             >
  //               <BsLightbulb className="w-6 h-6" />
  //               Features
  //             </span>
  //           </nav>
  //         </div>

  //         <div className="hidden md:flex items-center gap-2 md:gap-6">
  //           {/* Sign Up Button */}
  //           <button
  //             onClick={() =>
  //               (window.location.href =
  //                 "https://dashboard.hyprlinc.com/creatorsRegister")
  //             }
  //             className="text-sm"
  //           >
  //             Sign Up
  //           </button>
  //           {/* Login Button */}
  //           <button
  //             onClick={() =>
  //               (window.location.href =
  //                 "https://dashboard.hyprlinc.com/creatorsLogin")
  //             }
  //             className="font-semibold mr-2 md:mr-6 flex cursor-pointer items-center gap-2.5 rounded-lg border-none bg-gradient-to-br from-[#007AFF] to-[#153885] py-1.5 px-3 md:px-6 text-base text-white shadow-[0_2px_8px_rgba(24,119,242,0.08)] transition-all duration-500 ease-in-out hover:from-[#007AFF] hover:to-[#004999]"
  //           >
  //             Login
  //           </button>
  //         </div>
  //       </header>

  //       {/* Mobile Nav Dropdown Panel */}
  //       {navOpen && (
  //         <div className="fixed left-0 top-[64px] z-30 w-64 bg-white shadow-lg rounded-b-xl py-4 md:hidden">
  //           <span
  //             onClick={() => {
  //               scrollToSection("problem-solution");
  //               setNavOpen(false);
  //             }}
  //             className="block py-3 px-6 border-b border-gray-200 text-base font-medium cursor-pointer hover:bg-gray-50"
  //           >
  //             Problem & Solution
  //           </span>
  //           <span
  //             onClick={() => {
  //               scrollToSection("features");
  //               setNavOpen(false);
  //             }}
  //             className="block py-3 px-6 border-b border-gray-200 text-base font-medium cursor-pointer hover:bg-gray-50"
  //           >
  //             Features
  //           </span>
  //           <span
  //             onClick={() => {
  //               scrollToSection("how-it-works");
  //               setNavOpen(false);
  //             }}
  //             className="block py-3 px-6 border-b border-gray-200 text-base font-medium cursor-pointer hover:bg-gray-50"
  //           >
  //             How It Works
  //           </span>
  //           <div className="flex gap-2 p-4 justify-end">
  //             <button
  //               onClick={() =>
  //                 (window.location.href =
  //                   "https://dashboard.hyprlinc.com/creatorsRegister")
  //               }
  //               className="text-sm"
  //             >
  //               Sign Up
  //             </button>
  //             <button
  //               onClick={() =>
  //                 (window.location.href =
  //                   "https://dashboard.hyprlinc.com/creatorsLogin")
  //               }
  //               className="font-semibold flex cursor-pointer items-center gap-2.5 rounded-lg border-none bg-gradient-to-br from-[#007AFF] to-[#153885] py-1.5 px-3 text-base text-white shadow-[0_2px_8px_rgba(24,119,242,0.08)] transition-all duration-500 ease-in-out hover:from-[#007AFF] hover:to-[#004999]"
  //             >
  //               Login
  //             </button>
  //           </div>
  //         </div>
  //       )}
  //     </>
  //   );
  // };

  // export default Header;

  return (
    <>
      {/* Header Bar */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-10 flex w-full items-center justify-between py-3 pl-4 pr-4 md:pl-8 md:pr-10 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-50 shadow-[0_1px_8px_rgba(0,0,0,0.15)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-4 md:gap-9">
          {/* Hamburger for mobile */}
          {navOpen ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden"
              onClick={() => setNavOpen(false)}
              aria-label="Close navigation"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="#222"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </motion.button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden"
              onClick={() => setNavOpen(true)}
              aria-label="Open navigation"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.button>
          )}

          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-[1.7rem] font-bold tracking-[1px]"
          >
            <img 
            //   src={isScrolled ? logo : logoWhite}
              src={logo}
              alt="HYPRLINC" 
              className="h-5" 
            />
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-base">
            <motion.span
              variants={navItemVariants}
              whileHover="hover"
              onClick={() => scrollToSection("problem-solution")}
              className={`flex gap-2 cursor-pointer transition-colors font-montserrat font-medium text-sm text-[#222] hover:text-blue-600 `}
            >
              <GoQuestion className="w-5 h-5" />
              Problem & Solution
            </motion.span>
            <motion.span
              variants={navItemVariants}
              whileHover="hover"
              onClick={() => scrollToSection("how-it-works")}
              className={`flex gap-2 cursor-pointer transition-colors font-montserrat font-medium text-sm text-[#222] hover:text-blue-600 `}
            >
              <BsLayers className="w-6 h-6" />
              How It Works
            </motion.span>
            <motion.span
              variants={navItemVariants}
              whileHover="hover"
              onClick={() => scrollToSection("features")}
              className={`flex gap-2 cursor-pointer transition-colors font-montserrat font-medium text-sm text-[#222] hover:text-blue-600 `}
            >
              <BsLightbulb className="w-6 h-6" />
              Features
            </motion.span>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2 md:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "https://dashboard.hyprlinc.com/creatorsRegister")}
            className={`text-sm  text-[#222]`}
          >
            Sign Up
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "https://dashboard.hyprlinc.com/creatorsLogin")}
            className={`font-semibold mr-2 md:mr-6 flex cursor-pointer items-center gap-2.5 rounded-lg border-none py-1.5 px-3 md:px-6 text-base text-white shadow-[0_2px_8px_rgba(24,119,242,0.08)] transition-all duration-500 ease-in-out  bg-gradient-to-br from-[#007AFF] to-[#153885] hover:from-[#007AFF] hover:to-[#004999]`}
          >
            Login
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Nav Dropdown Panel */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            key="mobile-nav"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed left-0 top-[64px] z-30 w-64 bg-white shadow-lg rounded-b-xl py-4 md:hidden"
          >
            <motion.span
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                scrollToSection("problem-solution");
                setNavOpen(false);
              }}
              className="block py-3 px-6 border-b border-gray-200 text-base font-medium cursor-pointer hover:bg-gray-50"
            >
              Problem & Solution
            </motion.span>
            <motion.span
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                scrollToSection("features");
                setNavOpen(false);
              }}
              className="block py-3 px-6 border-b border-gray-200 text-base font-medium cursor-pointer hover:bg-gray-50"
            >
              Features
            </motion.span>
            <motion.span
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                scrollToSection("how-it-works");
                setNavOpen(false);
              }}
              className="block py-3 px-6 border-b border-gray-200 text-base font-medium cursor-pointer hover:bg-gray-50"
            >
              How It Works
            </motion.span>
            <div className="flex gap-2 p-4 justify-end">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "https://dashboard.hyprlinc.com/creatorsRegister")}
                className="text-sm text-[#222]"
              >
                Sign Up
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "https://dashboard.hyprlinc.com/creatorsLogin")}
                className="font-semibold flex cursor-pointer items-center gap-2.5 rounded-lg border-none bg-gradient-to-br from-[#007AFF] to-[#153885] py-1.5 px-3 text-base text-white shadow-[0_2px_8px_rgba(24,119,242,0.08)] transition-all duration-500 ease-in-out hover:from-[#007AFF] hover:to-[#004999]"
              >
                Login
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;