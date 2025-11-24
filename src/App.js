import logo from "./logo.png";
import hero_bg from "./heroImage.png";
import right1 from "./r1.png";
import right2 from "./r2.png";
import right3 from "./r3.png";
import right4 from "./r4.png";
import right5 from "./r5.png";
import right0 from "./r0.png";
import left1 from "./l1.png";
import left2 from "./l2.png";
import left3 from "./l3.png";
import left4 from "./l4.png";
import left5 from "./l5.png";
import Overlay0 from "./Overlay.png";
import Overlay1 from "./Overlay (1).png";
import Overlay2 from "./Overlay (2).png";
import Overlay3 from "./Overlay (3).png";
import Overlay4 from "./Overlay (4).png";
import Overlay5 from "./Overlay (5).png";
import rocket from "./rocket.png";
import influencer from "./influencerUpdated.png";
import brand from "./brandUpdated.png";
import agency from "./agencyUpdated.png";
import creator1 from "./creator1.png";
import creator2 from "./creator2.png";
import creator3 from "./creator3.png";
import creator4 from "./creator4.png";
import brand1 from "./brand1.png";
import brand2 from "./brand2.png";
import brand3 from "./brand3.png";
import brand4 from "./brand4.png";
import agency1 from "./agency1.png";
import agency2 from "./agency2.png";
import agency3 from "./agency3.png";
import agency4 from "./agency4.png";

/* this is the soft launch SPA for hyprlinc */

import { useState, useEffect, useRef } from "react";
import { joinWaitlist } from "./services/join-waitlist";
import { GoQuestion } from "react-icons/go";
import {
  FaAngleDown,
  FaAngleUp,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { BsArrowUpRight, BsLayers, BsLightbulb } from "react-icons/bs";
import { AiOutlineBarChart, AiOutlinePlayCircle } from "react-icons/ai";

function App() {
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
    <div className="min-h-screen bg-gradient-to-b from-[#f7f5ff] to-[#f7f8fc]">
      {/* Header Bar */}
      <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-white py-3 pl-4 pr-4 md:pl-8 md:pr-10 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-4 md:gap-9">
          {/* Hamburger for mobile - replaced with cancel button when open */}
          {navOpen ? (
            <button
              className="md:hidden"
              onClick={() => setNavOpen(false)}
              aria-label="Close navigation"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          ) : (
            <button
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
            </button>
          )}

          {/* Logo */}
          <div className="flex items-center text-[1.7rem] font-bold tracking-[1px] text-[#222]">
            <img src={logo} alt="HYPRLINC" className="h-5" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-base text-[#222]">
            <span
              onClick={() => scrollToSection("problem-solution")}
              className="flex gap-2 cursor-pointer hover:text-blue-600 transition-colors font-montserrat font-medium text-sm"
            >
              <GoQuestion className=" w-5 h-5" />
              Problem & Solution
            </span>
            <span
              onClick={() => scrollToSection("how-it-works")}
              className="flex gap-2 cursor-pointer hover:text-blue-600 transition-colors font-montserrat font-medium text-sm"
            >
              <BsLayers className="w-6 h-6" />
              How It Works
            </span>
            <span
              onClick={() => scrollToSection("features")}
              className="flex gap-2 cursor-pointer hover:text-blue-600 transition-colors font-montserrat font-medium text-sm"
            >
              <BsLightbulb className="w-6 h-6" />
              Features
            </span>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2 md:gap-6">
          {/* Sign In Button */}
          <button
            onClick={() =>
              (window.location.href =
                "https://dashboard.hyprlinc.com/creatorsRegister")
            }
            className="text-sm"
          >
            Sign Up
          </button>
          {/* Sign Up Button */}
          <button
            onClick={() =>
              (window.location.href =
                "https://dashboard.hyprlinc.com/creatorsLogin")
            }
            className="font-semibold mr-2 md:mr-6 flex cursor-pointer items-center gap-2.5 rounded-lg border-none bg-gradient-to-br from-[#007AFF] to-[#153885] py-1.5 px-3 md:px-6 text-base text-white shadow-[0_2px_8px_rgba(24,119,242,0.08)] transition-all duration-500 ease-in-out hover:from-[#007AFF] hover:to-[#004999]"
          >
            Login
          </button>
        </div>
      </header>

      {/* Mobile Nav Dropdown Panel */}
      {navOpen && (
        <div className="fixed left-0 top-[64px] z-30 w-64 bg-white shadow-lg rounded-b-xl py-4 md:hidden">
          <span
            onClick={() => {
              scrollToSection("problem-solution");
              setNavOpen(false);
            }}
            className="block py-3 px-6 border-b border-gray-200 text-base font-medium cursor-pointer hover:bg-gray-50"
          >
            Problem & Solution
          </span>
          <span
            onClick={() => {
              scrollToSection("features");
              setNavOpen(false);
            }}
            className="block py-3 px-6 border-b border-gray-200 text-base font-medium cursor-pointer hover:bg-gray-50"
          >
            Features
          </span>
          <span
            onClick={() => {
              scrollToSection("how-it-works");
              setNavOpen(false);
            }}
            className="block py-3 px-6 border-b border-gray-200 text-base font-medium cursor-pointer hover:bg-gray-50"
          >
            How It Works
          </span>
          <div className=" flex gap-2 p-4 justify-end">
           <button
            onClick={() =>
              (window.location.href =
                "https://dashboard.hyprlinc.com/creatorsRegister")
            }
            className="text-sm"
          >
            Sign Up
          </button>
          {/* Sign Up Button */}
          <button
            onClick={() =>
              (window.location.href =
                "https://dashboard.hyprlinc.com/creatorsLogin")
            }
            className="font-semibold mr-2 md:mr-6 flex cursor-pointer items-center gap-2.5 rounded-lg border-none bg-gradient-to-br from-[#007AFF] to-[#153885] py-1.5 px-3 md:px-6 text-base text-white shadow-[0_2px_8px_rgba(24,119,242,0.08)] transition-all duration-500 ease-in-out hover:from-[#007AFF] hover:to-[#004999]"
          >
            Login
          </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative mx-auto flex flex-col md:flex-row max-w-[1200px] items-start px-4 pt-4 md:pt-16 pb-0 w-full">
        <div className="flex flex-col w-full md:w-auto md:flex-row justify-between gap-6">
          <div>
            <p className="text-sm w-48 bg-gradient-to-r from-[#D3DDFF] to-[#E2FFED] border border-blue-600 text-blue-700 rounded-3xl py-2 px-3 mb-2">
              Made in India for India
            </p>
            <div className="max-w-full md:max-w-[700px] w-full">
              <h1 className="text-left text-3xl md:text-5xl lg:text-5xl font-semibold leading-[1.3] tracking-tight py-2 mb-6 bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text">
                Connecting Brands, <br />
                Influencers and <br />
                Marketing Agencies
                <br />
              </h1>
              <p className="mt-0 mb-9 max-w-[600px] text-left font-montserrat font-medium text-md text-[#444]">
                Hyprlinc is a dynamic platform designed to bridge the gap
                between influencers and brands, creating seamless collaborations
                that drive engagement and growth. With an intelligent
                matchmaking algorithm, Hyprlinc connects brands with the right
                influencers based on audience demographics, engagement metrics,
                and campaign goals.
              </p>
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:gap-[18px] w-full">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://dashboard.hyprlinc.com/creatorsLogin")
                  }
                  className="flex cursor-pointer items-center gap-2 rounded-lg border-none bg-gradient-to-r from-[#007AFF] to-[#153885] py-2 md:py-3 px-3 md:px-5 text-[0.9rem] font-semibold text-white shadow-[0_2px_8px_rgba(37,99,235,0.08)] whitespace-nowrap w-full md:w-auto justify-center"
                >
                  Find Brand
                </button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://dashboard.hyprlinc.com/brandsLogin")
                  }
                  className="flex cursor-pointer items-center gap-2 rounded-lg border-none bg-white text-slate-900 py-2 md:py-3 px-3 md:px-5 text-[0.9rem] font-semibold shadow-[0_2px_8px_rgba(37,99,235,0.08)] whitespace-nowrap w-full md:w-auto justify-center"
                >
                  Find Creator
                </button>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block ">
            <img
              src={hero_bg}
              alt="Travel Freedom"
              className="h-[600px] w-full rounded-2xl object-cover"
            />
            {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-transparent"></div> */}
          </div>
        </div>
      </main>

      {/* Join as a influencer, brand and agency */}
      <section
        id="Join as a influencer, brand and agency"
        className="px-4 py-16 md:px-14 md:py-28"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {/* Influencer Card */}
            <div className="w-full max-w-xs h-56 rounded-xl bg-white border border-gray-200 hover:border-[#007AFF] py-8 flex flex-col items-center justify-center text-center">
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  src={influencer}
                  className="w-12 mb-4"
                  alt="Influencer icon"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  For Influencer
                </h2>
                <p className="text-gray-600 mb-6 text-xs">
                  Discover and connect with influencers
                </p>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://dashboard.hyprlinc.com/creatorsLogin")
                  }
                  className="bg-gradient-to-r from-[#153885] to-[#007AFF] text-white rounded-2xl py-1 hover:bg-gray-600 transition text-sm w-32"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Brand Card */}
            <div className="w-full max-w-xs h-56 rounded-xl bg-white border border-gray-200 hover:border-[#007AFF] py-8 flex flex-col items-center justify-center text-center">
              <div className="flex flex-col items-center justify-center h-full">
                <img src={brand} className="w-12 mb-4" alt="Brand icon" />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  For Brand
                </h2>
                <p className="text-gray-600 mb-6 text-xs">
                  Discover and connect with influencers
                </p>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://dashboard.hyprlinc.com/brandsLogin")
                  }
                  className="bg-gradient-to-r from-[#153885] to-[#007AFF] text-white rounded-2xl py-1 hover:bg-gray-600 transition text-sm w-32"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Agency Card */}
            <div className="w-full max-w-xs h-56 rounded-xl bg-white border border-gray-200 hover:border-[#007AFF] py-8 flex flex-col items-center justify-center text-center">
              <div className="flex flex-col items-center justify-center h-full">
                <img src={agency} className="w-12 mb-4" alt="Agency icon" />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  For Agency
                </h2>
                <p className="text-gray-600 mb-6 text-xs">
                  Discover and connect with influencers
                </p>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://dashboard.hyprlinc.com/agencyLogin")
                  }
                  className="bg-gradient-to-r from-[#153885] to-[#007AFF] text-white rounded-2xl py-1 hover:bg-gray-600 transition text-sm w-32"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Performance Section */}
      <section
        id="problem-solution"
        className="mx-auto mb-16 flex w-full max-w-[1100px] flex-col items-center px-4"
      >
        <div className="inline-flex items-center rounded-full bg-blue-50 py-1 px-4 border border-blue-500">
          <span className="flex gap-2 text-sm font-medium text-blue-600">
            <AiOutlineBarChart className="w-5 h-5" />
            Platform Performance
          </span>
        </div>
        <h2 className="text-center font-montserrat font-bold text-2xl sm:text-2xl md:text-4xl my-2 bg-gradient-to-r from-[#007AFF] to-[#153885] text-transparent bg-clip-text">
          Transforming Influencer Marketing
        </h2>
        <div className="mb-10 max-w-[600px] text-center text-[1.1rem] text-gray-600">
          Our AI-powered platform delivers measurable results for creators,
          brand and marketing agencies.
        </div>
        <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center rounded-xl shadow-lg bg-white p-8 transition-transform duration-200 hover:-translate-y-1">
            <AnimatedNumber endValue={10} suffix="X" />
            <div className="text-center text-xs text-gray-600">
              Faster Campaign Planning & execution
            </div>
          </div>

          {/* Card 2 - Fixed to match first card */}
          <div className="flex flex-col items-center rounded-xl shadow-lg bg-white p-8 transition-transform duration-200 hover:-translate-y-1">
            <AnimatedNumber endValue={3} suffix="X" />
            <div className="text-center text-xs text-gray-600">
              Higher engagement rate for Campaigns run on Hyprlinc
            </div>
          </div>

          {/* Card 3 - Fixed to match first card */}
          <div className="flex flex-col items-center rounded-xl shadow-lg bg-white p-8 transition-transform duration-200 hover:-translate-y-1">
            <AnimatedNumber endValue={80} suffix="%" />
            <div className="text-center text-xs text-gray-600">
              Higher Connection rate due to data backed matchmaking & audience
              profiling
            </div>
          </div>

          {/* Card 4 - Fixed to match first card */}
          <div className="flex flex-col items-center rounded-xl shadow-lg bg-white p-8 transition-transform duration-200 hover:-translate-y-1">
            <AnimatedNumber endValue={100} suffix="%" />
            <div className="text-center text-xs text-gray-600">
              Secure Payments with All transactions are protected until
              campaigns milestones are met.
            </div>
          </div>
        </div>
      </section>

      {/* Why Traditional Influencer Marketing Doesn't Work Anymore */}
      <section className="mx-auto mt-20 mb-16 flex w-full max-w-[1100px] flex-col items-center px-4">
        <div className="inline-flex items-center rounded-full bg-blue-50 py-1 px-4 border border-blue-600">
          <span className="text-sm font-medium text-blue-600">
            Industry Challenge
          </span>
        </div>
        <h2 className="text-center font-montserrat font-bold text-2xl md:text-4xl bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text my-3">
          Why Traditional Influencer Marketing
          <br className="hidden md:block" /> Doesn't Work Anymore
        </h2>
        <p className="content text-center font-montserrat text-sm sm:text-base md:text-lg text-[#444] max-w-2xl mb-8 md:mb-12">
          Influencer marketing is powerful—but when done manually, it's
          inefficient, slow, and unreliable. Hyprlinc fixes that.
        </p>

        {/* Main container with equal height columns */}
        <div className="w-full max-w-5xl">
          {/* Cards container - using grid for better alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left column cards */}
            <div className="space-y-4 md:space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <img
                  src={left3}
                  alt="marketing"
                  className="w-7 h-7 md:w-10 md:h-10 mt-1 object-contain"
                />
                <span
                  className="font-inter font-bold text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] align-middle"
                  style={{ color: "#F47274" }}
                >
                  Manual Influencer Marketing
                </span>
              </div>

              {/* Main Cards */}
              {[
                {
                  icon: left1,
                  title: "Campaigns That Crawl",
                  description:
                    "Finding influencers is time-consuming and hit-or-miss.",
                },
                {
                  icon: left2,
                  title: "Bleeding on Custom Edits",
                  description:
                    "No way to verify audience authenticity or engagement.",
                },
                {
                  icon: left3,
                  title: "ROI You Can't Predict",
                  description:
                    "Messy coordination through DMs, emails, and spreadsheets.",
                },
                {
                  icon: left4,
                  title: "Licensing Chaos",
                  description: "Payment risks and delays create trust issues.",
                },
                {
                  icon: left5,
                  title: "Licensing Chaos",
                  description: "No clear performance metrics or ROI tracking.",
                },
              ].map((item, index) => (
                <div
                  key={`left-${index}`}
                  className="bg-white rounded-xl border border-[#fbeaea] p-4 sm:p-5 shadow-sm hover:shadow-md hover:bg-red-50 transition-shadow "
                >
                  <div className="flex items-start gap-3 md:gap-4 h-20">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-7 h-7 md:w-8 md:h-8 mt-1 object-contain"
                    />
                    <div className="flex-1">
                      <div className="font-inter font-semibold text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-gray-700">
                        {item.title}
                      </div>
                      <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22px] text-black mt-1">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column cards */}
            <div className="space-y-4 md:space-y-6">
              {/* How Hyprlinc Solves It - now part of right column */}
              <div className="flex-1">
                {/* header */}
                <div className="flex items-center gap-3">
                  <img
                    src={right0}
                    alt="marketing"
                    className="w-7 h-7 md:w-10 md:h-10 mt-1 object-contain"
                  />
                  <span className="font-inter font-bold text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] align-middle bg-gradient-to-r from-[#10B981] via-[#2DD4BF] to-[#67E8F9] bg-clip-text text-transparent">
                    How Hyprlinc Solves It
                  </span>
                </div>
              </div>

              {/* Main Cards */}
              {[
                {
                  icon: right1,
                  title: "Modular UGC Powered by AI",
                  description:
                    "AI-powered matchmaking instantly connects you with creators who match your brand's niche, goals, and audience type",
                },
                {
                  icon: right2,
                  title: "Predict ROI Before You Launch",
                  description:
                    "Real-time data + fraud detection ensures you collaborate only with trusted, high-engagement creators",
                },
                {
                  icon: right3,
                  title: "Automated Legal, Built In",
                  description:
                    "Built-in project management, messaging, and milestone tracking in one centralized dashboard.",
                },
                {
                  icon: right4,
                  title: "One Export. Every Channel.",
                  description:
                    "Escrow-secured payments that release only upon delivery of agreed campaign milestones.",
                },
                {
                  icon: right5,
                  title: "One Export. Every Channel.",
                  description:
                    "Transparent analytics showing reach, engagement, conversions, and ROI—updated in real-time.",
                },
              ].map((item, index) => (
                <div
                  key={`right-${index}`}
                  className="bg-white rounded-xl border border-[#e6f9f1] p-4 sm:p-5 shadow-sm hover:shadow-md hover:bg-green-50 transition-shadow"
                >
                  <div className="flex items-start gap-3 md:gap-4 h-32 md:h-20">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-7 h-7 md:w-8 md:h-8 mt-1 object-contain"
                    />
                    <div className="flex-1">
                      <div className="font-inter font-semibold text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-gray-700">
                        {item.title}
                      </div>
                      <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22px] text-black mt-1">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works - Updated with consistent typography */}
      <HowItWorks scrollToSection={scrollToSection} />

      {/* Features Section */}
      <section
        id="features"
        className="mx-auto mt-1 flex w-full max-w-[1100px] flex-col items-center px-4 py-16"
      >
        <div className="text-center font-montserrat font-bold text-2xl md:text-4xl bg-gradient-to-r from-[#007AFF] to-[#004999] bg-clip-text text-transparent mb-2">
          Features
        </div>
        <div className="mb-12 max-w-[750px] text-center text-md font-medium leading-7 text-gray-600">
          Hyprlinc integrates effortlessly with social media platforms like
          Instagram & YouTube, allowing brands to sync influencer data directly
          with marketing strategies.
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-[#EDF1FF] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#007AFF]">
            <img
              src={Overlay0}
              alt="Feature 1"
              className="mb-3 w-12 h-12 object-contain"
            />
            <div className="mb-2 text-lg font-semibold bg-gradient-to-r from-[#007AFF] to-[#004999] bg-clip-text text-transparent">
              Personalized Campaign Suggestions
            </div>
            <div className="text-sm text-gray-600">
              Get matched with brands that align with your content, audience,
              and vibe.
            </div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-[#EDF1FF] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#007AFF]">
            <img
              src={Overlay1}
              alt="Feature 2"
              className="mb-3 w-12 h-12 object-contain"
            />
            <div className="mb-2 text-lg font-semibold bg-gradient-to-r from-[#007AFF] to-[#004999] bg-clip-text text-transparent">
              Smart campaign Dashboard
            </div>
            <div className="text-sm text-gray-600">
              Track your collaborations, deadlines, submissions, and earnings in
              a clean, user-friendly interface.
            </div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-[#EDF1FF] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#007AFF]">
            <img
              src={Overlay2}
              alt="Feature 3"
              className="mb-3 w-12 h-12 object-contain"
            />
            <div className="mb-2 text-lg font-semibold bg-gradient-to-r from-[#007AFF] to-[#004999] bg-clip-text text-transparent">
              Real- Time insight
            </div>
            <div className="text-sm text-gray-600">
              Understand your content performance—engagement, reach, and
              audience insights.
            </div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-[#EDF1FF] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#007AFF]">
            <img
              src={Overlay3}
              alt="Feature 4"
              className="mb-3 w-12 h-12 object-contain"
            />
            <div className="mb-2 text-lg font-semibold bg-gradient-to-r from-[#007AFF] to-[#004999] bg-clip-text text-transparent">
              Advanced Influencer Search Engine
            </div>
            <div className="text-sm text-gray-600">
              Filter creators by niche, engagement rate, location, audience
              demographics, and more.
            </div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-[#EDF1FF] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#007AFF]">
            <img
              src={Overlay4}
              alt="Feature 5"
              className="mb-3 w-12 h-12 object-contain"
            />
            <div className="mb-2 text-lg font-semibold bg-gradient-to-r from-[#007AFF] to-[#004999] bg-clip-text text-transparent">
              Campaign Brief Builder
            </div>
            <div className="text-sm text-gray-600">
              Launch a campaign in minutes with clearly defined deliverables and
              budgets.
            </div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-[#EDF1FF] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#007AFF]">
            <img
              src={Overlay5}
              alt="Feature 6"
              className="mb-3 w-12 h-12 object-contain"
            />
            <div className="mb-2 text-lg font-semibold bg-gradient-to-r from-[#007AFF] to-[#004999] bg-clip-text text-transparent">
              Direct Collaboration
            </div>
            <div className="text-sm text-gray-600">
              Manage negotiations, approvals, and communication all within the
              platform.
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Branch */}
      <TrustedBrands />

      {/* FrequentlyAskedQuestions */}
      <FrequentlyAskedQuestions />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;

const AnimatedNumber = ({ endValue, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(endValue);
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      start += increment;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return (
    <div className="mb-1 text-4xl font-semibold bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text">
      {count}
      {suffix}
    </div>
  );
};

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

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="mx-auto mt-20 flex w-full max-w-[1100px] flex-col items-center px-4 py-16"
    >
      {/* Heading */}
      <h2 className="text-center font-bold text-2xl md:text-4xl bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text my-3">
        Transforming Influencer Marketing
      </h2>

      {/* How it works tag */}
      <div
        className={`inline-flex items-center gap-2 rounded-xl bg-blue-50 py-1.5 px-3 border border-blue-600 transition-all duration-700 mb-2 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={rocket}
          alt="marketing"
          className="w-4 h-4 md:w-5 md:h-5 mt-1 object-contain"
        />
        <span className="text-blue-600 text-sm font-medium">How it works</span>
      </div>

      {/* Subtitle */}
      <p className="mb-12 max-w-[750px] text-center text-[1.1rem] leading-7 text-gray-600">
        HyprLinc connects creators, Brand and Marketing agencies in a
        revolutionary new way enabling seamless collaborations and campaign
        tracking on multiple channels.
      </p>

      {/* Tab Buttons */}
      <div className="mb-10 flex gap-2 sm:gap-4 justify-center bg-gray-200 rounded-3xl p-2 transition-all duration-700 shadow-inner">
        {Object.entries(tabConfig).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tabColors[key]} text-white shadow`
                : " text-gray-600 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Steps with dotted line */}
      <div className="relative w-full flex justify-between items-start mt-4">
        {currentSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-1/4 px-2 relative z-10"
          >
            <div
              className={`relative mb-4 h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center rounded-full bg-blue-100`}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="mb-1 text-[0.7rem] md:text-base font-semibold text-gray-800">
              {step.title}
            </h3>
            <p className="text-[0.6rem]  md:text-sm text-gray-600">
              {step.description}
            </p>
          </div>
        ))}

        {/* Animated Dotted Line */}
        <div className="absolute top-7 w-full h-[4px] md:h-2">
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
                      className={`h-[4px] w-[4px] md:w-2 md:h-2 rounded-full absolute`}
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

      {/* CTA Button */}
      <button
        onClick={() => scrollToSection("hyprlinc50")}
        className={`mt-12 px-6 py-3 rounded-full bg-gradient-to-r ${currentColor} text-white font-semibold hover:opacity-90 transition-all`}
      >
        Signup
      </button>
    </section>
  );
};

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

  return (
    <section className="text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-2">
        <h1 className="text-3xl text-gray-800 font-semibold flex items-center justify-center mb-6">
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, index) => (
          <div key={index} className="space-y-2 group">
            {" "}
            {/* Added group class */}
            <div
              className="flex justify-between items-center cursor-pointer p-2 rounded"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg text-gray-800 font-medium">
                {faq.question}
              </h3>
              <span className="text-gray-800">
                {activeIndex === index ? (
                  <FaAngleUp className="w-5 h-5" />
                ) : (
                  <FaAngleDown className="w-5 h-5" />
                )}
              </span>
            </div>
            {activeIndex === index && (
              <div className="mt-2 px-2">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
            <hr className="border-gray-300 my-4" />{" "}
            {/* Lightened the border color */}
          </div>
        ))}

        <div className=" flex items-center justify-center gap-2 py-7">
          <p className="text-gray-700">My question is not here.</p>
          <button className="flex gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#007AFF] to-[#153885] text-white font-semibold hover:bg-blue-700 transition-all">
            CONNECT US
            <BsArrowUpRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

const TrustedBrands = () => {
  const brands = [
    { name: "Adidas", src: "/logos/adidasLogo.png" },
    { name: "H&M", src: "/logos/h&mLogo.png" },
    { name: "Sugar", src: "/logos/sugarLogo.png" },
    { name: "Rangraze", src: "/logos/rangrazeLogo.png" },
    { name: "Burger King", src: "/logos/burgerKingLogo.png" },
    { name: "Cetaphil", src: "/logos/cetaphilLogo.png" },
    { name: "Puma", src: "/logos/pumaLogo.png" },
    { name: "Allen Solly", src: "/logos/allenSollyLogo.png" },
    { name: "Libas", src: "/logos/libasLogo.png" },
    { name: "Biba", src: "/logos/bibaLogo.png" },
    { name: "Denver", src: "/logos/denverLogo.png" },
    { name: "Mamaearth", src: "/logos/mamaEarthlogo.png" },
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-center bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text">
          Trusted by leading Brands
        </h2>
        <div className="relative">
          <div className="w-full overflow-hidden">
            <div className="flex animate-slide whitespace-nowrap">
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="inline-flex px-4 md:px-8 flex-shrink-0"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="h-12 md:h-16 w-auto object-contain transition-all duration-300 "
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#007BFF] to-[#003B95] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/20 pb-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-white/80">
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Cancellation Refund Policy
            </a>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-white/80 text-sm">Follow us</span>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/p/DNfmSWIzUDm/" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Description */}
          <div className="md:col-span-1 text-white/80">
            Connecting brands, influencers, and agencies through an innovative
            platform that simplifies collaboration and maximizes results.
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Platform</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Leaderboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Solutions</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="https://dashboard.hyprlinc.com/creatorsLogin" className="hover:text-white">
                  For Creators
                </a>
              </li>
              <li>
                <a href="https://dashboard.hyprlinc.com/brandsLogin" className="hover:text-white">
                  For Brands
                </a>
              </li>
              <li>
                <a href="https://dashboard.hyprlinc.com/agencyLogin" className="hover:text-white">
                  For Agencies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Comparison
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
