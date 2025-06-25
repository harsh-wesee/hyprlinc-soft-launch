import logo from './logo.png';
import hero_bg from './header_bg.png'
import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p3.png';
import p4 from './p4.png';
import signup from './signup.png';
import collaborate from './col.png';
import create from './apply.png';
import getpaid from './paid.png';
import first from './1.png'
import second from './2.png'
import third from './3.png'
import fourth from './4.png'
import fifth from './5.png'
import right1 from './r1.png'
import right2 from './r2.png'
import right3 from './r3.png'
import right4 from './r4.png'


import { useState, useEffect } from 'react';
function App() {
  const [activeRole, setActiveRole] = useState('creator');
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f5ff] to-[#f7f8fc]">
      {/* Header Bar */}
      <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-white py-3 pl-4 pr-4 md:pl-8 md:pr-10 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-4 md:gap-9">
          <div className="flex items-center text-[1.7rem] font-bold tracking-[1px] text-[#222]">
            <img src={logo} alt="HYPRLINC" className="h-4" />
          </div>
          {/* Hamburger for mobile */}
          <button className="md:hidden ml-2" onClick={() => setNavOpen(!navOpen)} aria-label="Open navigation">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-base text-[#222]">
            <span>HyprLinc : 50</span>
            <span>Problem & Solution</span>
            <span>Features</span>
            <span>How It Works</span>
            <span>Investors Opportunity</span>
          </nav>
        </div>
        <button className="mr-2 md:mr-6 flex cursor-pointer items-center gap-2.5 rounded-lg border-none bg-gradient-to-r from-[#007AFF] to-[#2A9B54] py-2 px-5 md:px-7 text-base font-medium text-white shadow-[0_2px_8px_rgba(24,119,242,0.08)] transition-all duration-500 ease-in-out hover:from-[#007AFF] hover:to-[#004999]">
          Early Access <span className="ml-2 rounded-xl bg-white py-0.5 px-2.5 text-[0.9em] text-[#007AFF]">50 Left</span>
        </button>
        {/* Mobile Nav Drawer */}
        <div className={`fixed inset-0 z-30 transition-all duration-300 ${navOpen ? 'block' : 'hidden'}`}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setNavOpen(false)}></div>
          {/* Drawer */}
          <div className={`absolute top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg p-6 flex flex-col gap-6 transform ${navOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
            <button className="self-end mb-4" onClick={() => setNavOpen(false)} aria-label="Close navigation">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <span className="py-2 border-b border-gray-200">HyprLinc : 50</span>
            <span className="py-2 border-b border-gray-200">Problem & Solution</span>
            <span className="py-2 border-b border-gray-200">Features</span>
            <span className="py-2 border-b border-gray-200">How It Works</span>
            <span className="py-2">Investors Opportunity</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative mx-auto flex max-w-[1200px] flex-col items-start px-4 pt-20 pb-0">
        <div className="flex w-full justify-between">
          <div className="max-w-[700px]">
            <h1 className="mb-[18px] text-left text-[2.8rem] font-bold leading-[1.1]">
              <span className="text-[#1877f2]">Connecting Brands, <br />Influencers and <br />Marketing Agencies</span><br />
              <span className="text-[#222]">Made In India.<br />for India.</span>
            </h1>
            <p className="mt-0 mb-9 max-w-[600px] text-left text-[1.1rem] text-[#444]">
              HyprLinc is a dynamic platform designed to bridge the gap between influencers and brands, creating seamless collaborations that drive engagement and growth. With an intelligent matchmaking algorithm, HyprLinc connects brands with the right influencers based on audience demographics, engagement metrics, and campaign goals.
            </p>
            <div className="mb-8 flex gap-[18px]">
              <button className="flex cursor-pointer items-center gap-2 rounded-lg border-none bg-[#2563eb] py-3 px-8 text-[1.1rem] font-medium text-white shadow-[0_2px_8px_rgba(37,99,235,0.08)]">Watch Demo <span className="ml-2 rounded-[10px] bg-white py-0.5 px-2 text-[0.95em] text-[#2563eb]">2 min</span></button>
              <div className="flex items-center gap-3 rounded-lg border border-solid border-[#e5e7eb] bg-white p-3">
                <span className="text-[1.3em]">⚡</span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-[#2563eb]">Only 50 spots available</span>
                  <span className="rounded-lg bg-[#e5f3ff] py-1 px-3 text-sm font-medium text-[#2563eb]">Limited Spots</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden w-[450px] md:block">
            <img
              src={hero_bg}
              alt="Travel Freedom"
              className="h-[600px] w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-transparent"></div>
          </div>
        </div>
      </main>
      {/* Join HyprLinc:50 Section */}
      <section className="mx-auto mt-20 mb-16 flex w-full max-w-[1100px] flex-col items-center px-4">
        <div className="inline-flex items-center rounded-full bg-blue-50 py-1 px-4">
          <span className="text-sm font-medium text-blue-600">Limited Time Opportunity</span>
        </div>

        <h2 className="mt-6 text-center text-4xl font-bold">
          Join the <span className="text-blue-600">HyprLinc : 50</span><br />
          Founder's Circle
        </h2>

        <p className="mt-4 mb-12 max-w-[600px] text-center text-lg leading-relaxed text-gray-600">
          Be one of the first 50 visionaries to shape the future of AI-powered creator marketing. Get lifetime perks, elite visibility, and direct influence—before the world catches on.
        </p>
      </section>
      {/* Founders Circle Section */}
      <section className="mx-auto mt-16 w-full max-w-full bg-none px-0 pb-20 sm:max-w-[1100px] md:flex md:flex-col md:items-center">
        <div className="flex w-full max-w-full flex-col justify-center gap-10 md:flex-row md:items-start">
          {/* Left: Form */}
          <div className="flex basis-0 flex-col items-start bg-white p-9 shadow-[0_2px_16px_rgba(24,119,242,0.06)] md:min-w-[350px] md:max-w-[420px] md:flex-1 md:rounded-2xl">
            <h2 className="mb-2 text-2xl font-bold text-[#222]">Founder's Circle</h2>
            <p className="mb-[22px] text-base text-[#444]">Enter your details to secure your spot and receive lifetime early access benefits.</p>
            <div className="mb-[22px] flex gap-2.5">
              <button
                onClick={() => setActiveRole('creator')}
                className={`cursor-pointer rounded-[20px] border-none py-[7px] px-[22px] text-base font-medium transition-all duration-200 ${activeRole === 'creator'
                  ? 'bg-gradient-to-r from-[#153885] to-[#2563EB] text-white'
                  : 'bg-[#f3f4f6] text-[#222]'
                  }`}
              >
                Creator
              </button>
              <button
                onClick={() => setActiveRole('brand')}
                className={`cursor-pointer rounded-[20px] border-none py-[7px] px-[22px] text-base font-medium transition-all duration-200 ${activeRole === 'brand'
                  ? 'bg-gradient-to-r from-[#153885] to-[#2563EB] text-white'
                  : 'bg-[#f3f4f6] text-[#222]'
                  }`}
              >
                Brand
              </button>
              <button
                onClick={() => setActiveRole('agency')}
                className={`cursor-pointer rounded-[20px] border-none py-[7px] px-[22px] text-base font-medium transition-all duration-200 ${activeRole === 'agency'
                  ? 'bg-gradient-to-r from-[#153885] to-[#2563EB] text-white'
                  : 'bg-[#f3f4f6] text-[#222]'
                  }`}
              >
                Agency
              </button>
            </div>
            <form className="mt-2 flex w-full flex-col gap-3.5">
              <input type="text" placeholder="Your Name" className="w-full rounded-lg border border-solid border-[#e5e7eb] bg-[#f9fafb] p-3 text-base text-[#222] outline-none transition-colors duration-200 focus:border-[1.5px] focus:border-solid focus:border-[#2563eb]" />
              <input type="email" placeholder="Your email" className="w-full rounded-lg border border-solid border-[#e5e7eb] bg-[#f9fafb] p-3 text-base text-[#222] outline-none transition-colors duration-200 focus:border-[1.5px] focus:border-solid focus:border-[#2563eb]" />
              <button className="mt-1.5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-none bg-[#a5c8fa] py-3 text-lg font-semibold text-white transition-colors duration-200 hover:bg-[#2563eb]" type="submit">Join Creator Waitlist <span className="ml-1 text-[1.2em]">→</span></button>
            </form>
          </div>
          {/* Right: Benefits */}
          <div className="flex basis-0 flex-col items-start rounded-2xl border-[1.5px] border-solid border-[#e3eafd] bg-[#f9fbff] p-9 shadow-[0_2px_16px_rgba(24,119,242,0.06)] md:min-w-[350px] md:max-w-[420px] md:flex-1">
            <h3 className="mb-[18px] flex items-center gap-2 text-lg font-bold text-[#2563eb]">Creator Founder's Circle Benefits</h3>
            <ul className="m-0 mb-[18px] w-full list-none p-0">
              <li className="mb-[18px] flex items-start gap-3.5">
              <img src={first} alt="Performance 2" className="h-10 w-10 object-contain" />           
                <div>
                  <strong>HyprLinc :50 Founding Badge (1/50)</strong><br />
                  <span className="text-[0.98rem] text-[#444]">Visible on profile, listings, dashboards, and partner pages—builds authority, exclusivity, and long-term status.</span>
                </div>
              </li>
              <li className="mb-[18px] flex items-start gap-3.5">
              <img src={second} alt="Performance 2" className="h-10 w-10 object-contain" />           
                <div>
                  <strong>One Year Free Premium features</strong><br />
                  <span className="text-[0.98rem] text-[#444]">Get all Premium account features free for full one year.</span>
                </div>
              </li>
              <li className="mb-[18px] flex items-start gap-3.5">
              <img src={third} alt="Performance 2" className="h-10 w-10 object-contain" />           
                <div>
                  <strong>Creator-First Visibility</strong><br />
                  <span className="text-[0.98rem] text-[#444]">Show up first in brand results for the first 3 months—guaranteed.</span>
                </div>
              </li>
              <li className="mb-[18px] flex items-start gap-3.5">
              <img src={fourth} alt="Performance 2" className="h-10 w-10 object-contain" />           
                <div>
                  <strong>Beta-Only Tools Access</strong><br />
                  <span className="text-[0.98rem] text-[#444]">Early birds get automatic access to new AI tools before anyone else.</span>
                </div>
              </li>
              <li className="mb-[18px] flex items-start gap-3.5">
              <img src={fifth} alt="Performance 2" className="h-10 w-10 object-contain" />           
                <div>
                  <strong>Personalised onboarding & Support</strong><br />
                  <span className="text-[0.98rem] text-[#444]">Our team personally will help your onboarding to the platform & provide one on one support.</span>
                </div>
              </li>
            </ul>
            <div className="mt-2.5 flex items-start gap-2.5 rounded-[10px] border border-solid border-[#ffe6a7] bg-[#fff7e6] p-3 text-[0.98rem] text-[#b45309]">
              <span className="mt-0.5 text-[1.3em]">⚠️</span>
              <span className="text-[#b45309]"><strong>Not just joining—</strong>you're helping build and directly shape the future of HyprLinc. These benefits are reserved only for the first 50 early adopters. They will never be offered again.</span>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Performance Section */}
      <section className="mx-auto mt-20 flex w-full max-w-[1100px] flex-col items-center px-4 py-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-blue-100 py-1.5 px-3.5 text-base font-medium text-blue-700 shadow-[0_1px_4px_rgba(37,99,235,0.04)]">
          <span className="text-[1.3em]">📊</span> Platform Performance
        </div>
        <h2 className="mb-[18px] text-center text-4xl font-bold">
          <span className="text-blue-600">Transforming Influencer Marketing</span>
        </h2>
        <div className="mb-10 max-w-[600px] text-center text-[1.1rem] text-gray-600">
          Our AI-powered platform delivers measurable results for creators and brands alike.
        </div>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-center rounded-[30px] bg-[#F6F5FF] p-8 transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3">
              <img src={p1} alt="Performance 1" className="h-10 w-10 object-contain" />
            </div>
            <AnimatedNumber endValue={10} suffix="X" />
            <div className="text-center text-base text-gray-600">Faster Campaign Planning & execution</div>
          </div>
          <div className="flex flex-col items-center rounded-[30px] bg-[#F6F5FF] p-8 transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3">
              <img src={p2} alt="Performance 2" className="h-10 w-10 object-contain" />
            </div>
            <AnimatedNumber endValue={3} suffix="X" />
            <div className="text-center text-base text-gray-600">Higher engagement rate for Campaigns run on HyprLinc</div>
          </div>
          <div className="flex flex-col items-center rounded-[30px] bg-[#F6F5FF] p-8 transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3">
              <img src={p3} alt="Performance 3" className="h-10 w-10 object-contain" />
            </div>
            <AnimatedNumber endValue={80} suffix="%" />
            <div className="text-center text-base text-gray-600">Higher Connection rate due to data backed matchmaking & audience profiling</div>
          </div>
          <div className="flex flex-col items-center rounded-[30px] bg-[#F6F5FF] p-8 transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3">
              <img src={p4} alt="Performance 4" className="h-10 w-10 object-contain" />
            </div>
            <AnimatedNumber endValue={100} suffix="%" />
            <div className="text-center text-base text-gray-600">Secure Payments with All transactions are protected until campaigns milestones are met.</div>
          </div>
        </div>
      </section>
      {/* Why Traditional Influencer Marketing Doesn't Work Anymore */}
      <section className="w-full flex flex-col items-center py-12 md:py-24 bg-[#fafbfc] px-2 sm:px-4">
        <div className="mb-3 inline-flex items-center rounded-xl bg-blue-100 py-1 px-4">
          <span className="text-xs font-semibold text-blue-600 tracking-wide">Industry Challenge</span>
        </div>
        <h2 className="heading text-center font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl text-[#2563eb] mb-2">Why Traditional Influencer Marketing<br className="hidden md:block"/> Doesn't Work Anymore</h2>
        <p className="content text-center font-montserrat text-sm sm:text-base md:text-lg text-[#444] max-w-2xl mb-8 md:mb-12">Influencer marketing is powerful—but when done manually, it's inefficient, slow, and unreliable. HyprLinc fixes that.</p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-5xl justify-center items-start mt-2 md:mt-4">
          {/* Left Column */}
          <div className="flex-1 bg-white rounded-2xl border border-[#fbeaea] p-4 sm:p-6 md:p-8 shadow-sm mb-6 md:mb-0">
            <div className="flex items-center mb-4 md:mb-6">
              <span className="inline-block w-5 h-5 md:w-6 md:h-6 mr-2 align-middle">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="12" fill="#fde8e8"/><path d="M8 12h8M12 8v8" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <span className="font-inter font-bold text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] align-middle" style={{color: '#F47274'}}>Manual Influencer Marketing</span>
            </div>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start gap-3 md:gap-4">
                <span className="inline-block w-7 h-7 md:w-8 md:h-8 mt-1"><svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#fde8e8"/><path d="M16 10v8M16 22h.01" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg></span>
                <div>
                  <div className="font-inter font-medium font-weight-500 text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-black">Campaigns That Crawl</div>
                  <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22.75px] text-black">Finding influencers is time-consuming and hit-or-miss.</div>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="inline-block w-7 h-7 md:w-8 md:h-8 mt-1"><svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#fde8e8"/><path d="M10 16h12" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg></span>
                <div>
                  <div className="font-inter font-medium font-weight-500 text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-black">Bleeding on Custom Edits</div>
                  <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22.75px] text-black">No way to verify audience authenticity or engagement.</div>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="inline-block w-7 h-7 md:w-8 md:h-8 mt-1"><svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#fde8e8"/><path d="M16 10v8M16 22h.01" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg></span>
                <div>
                  <div className="font-inter font-medium font-weight-500 text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-black">ROI You Can't Predict</div>
                  <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22.75px] text-black">Messy coordination through DMs, emails, and spreadsheets.</div>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="inline-block w-7 h-7 md:w-8 md:h-8 mt-1"><svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#fde8e8"/><path d="M10 16h12" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg></span>
                <div>
                  <div className="font-inter font-medium font-weight-500 text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-black">Licensing Chaos</div>
                  <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22.75px] text-black">Payment risks and delays create trust issues.</div>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="inline-block w-7 h-7 md:w-8 md:h-8 mt-1"><svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#fde8e8"/><path d="M16 10v8M16 22h.01" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg></span>
                <div>
                  <div className="font-inter font-medium font-weight-500 text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-black">Licensing Chaos</div>
                  <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22.75px] text-black">No clear performance metrics or ROI tracking.</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Right Column */}
          <div className="flex-1 bg-white rounded-2xl border border-[#e6f9f1] p-4 sm:p-6 md:p-8 shadow-sm">
            <div className="flex items-center mb-4 md:mb-6">
              <span className="inline-block w-5 h-5 md:w-6 md:h-6 mr-2 align-middle">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="12" fill="#e6f9f1"/><path d="M8 12h8M12 8v8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <span className="font-inter font-bold text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] align-middle bg-gradient-to-r from-[#10B981] via-[#2DD4BF] to-[#67E8F9] bg-clip-text text-transparent">How HyprLinc Solves It</span>
            </div>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start gap-3 md:gap-4">
                <img src={right1} alt="Modular UGC Powered by AI" className="w-7 h-7 md:w-8 md:h-8 mt-1 object-contain" />
                <div>
                  <div className="font-inter font-medium font-weight-500 text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-black">Modular UGC Powered by AI</div>
                  <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22.75px] text-black">AI-powered matchmaking instantly connects you with creators who match your brand's niche, goals, and audience type</div>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <img src={right2} alt="Predict ROI Before You Launch" className="w-7 h-7 md:w-8 md:h-8 mt-1 object-contain" />
                <div>
                  <div className="font-inter font-medium font-weight-500 text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-black">Predict ROI Before You Launch</div>
                  <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22.75px] text-black">Real-time data + fraud detection ensures you collaborate only with trusted, high-engagement creators</div>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <img src={right3} alt="Automated Legal, Built In" className="w-7 h-7 md:w-8 md:h-8 mt-1 object-contain" />
                <div>
                  <div className="font-inter font-medium font-weight-500 text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-black">Automated Legal, Built In</div>
                  <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22.75px] text-black">Built-in project management, messaging, and milestone tracking in one centralized dashboard.</div>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <img src={right4} alt="One Export. Every Channel." className="w-7 h-7 md:w-8 md:h-8 mt-1 object-contain" />
                <div>
                  <div className="font-inter font-medium font-weight-500 text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-black">One Export. Every Channel.</div>
                  <div className="font-inter font-normal text-[13px] md:text-[14px] leading-[20px] md:leading-[22.75px] text-black">Escrow-secured payments that release only upon delivery of agreed campaign milestones. Transparent analytics showing reach, engagement, conversions, and ROI—updated in real-time.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Why Traditional Influencer Marketing is not working? */}
      
      <section className="mx-auto mt-20 flex w-full max-w-[1100px] flex-col items-center px-4 py-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-blue-50 py-1.5 px-3">
          <span className="text-blue-600 text-sm">How it works</span>
        </div>

        <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">
          Transforming Influencer Marketing
        </h2>

        <p className="mb-12 max-w-[700px] text-center text-lg text-gray-600">
          HyprLinc connects creators, Brand and Marketing agencies in a revolutionary new way
          enabling seamless collaborations and campaign tracking on multiple channels.
        </p>

        <div className="mb-10 flex gap-4 justify-center">
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-full font-medium">
            For Creators
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full font-medium hover:bg-gray-200">
            For Brands
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full font-medium hover:bg-gray-200">
            For Agencies
          </button>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <img src={signup} alt="Signup" className="h-10 w-10 object-contain" />
            </div>
            <h3 className="mb-2 font-semibold">Sign up</h3>
            <p className="text-sm text-gray-600">Register as a brand, influencer, or agency</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <img src={create} alt="Create" className="h-10 w-10 object-contain" />
            </div>
            <h3 className="mb-2 font-semibold">Create or Apply for Campaign</h3>
            <p className="text-sm text-gray-600">Find and collaborate on tailored campaigns</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <img src={collaborate} alt="Collaborate" className="h-10 w-10 object-contain" />
            </div>
            <h3 className="mb-2 font-semibold">Collaborate & Execute</h3>
            <p className="text-sm text-gray-600">Finalize deliverables and track progress</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <img src={getpaid} alt="Get Paid" className="h-10 w-10 object-contain" />
            </div>
            <h3 className="mb-2 font-semibold">Get Paid</h3>
            <p className="text-sm text-gray-600">Post the finalised content and get paid</p>
          </div>
        </div>

        <button className="mt-12 flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Get Exclusive Early Access
        </button>
        <p className="mt-3 text-sm text-gray-500">Only 50 spots available</p>
      </section>
      {/* Features Section */}
      <section className="mx-auto mt-20 flex w-full max-w-[1100px] flex-col items-center px-4 py-16">
        <h2 className="mb-[18px] text-center text-4xl font-bold">Features</h2>
        <div className="mb-12 max-w-[750px] text-center text-[1.1rem] leading-7 text-gray-600">
          HyprLinc integrates effortlessly with social media platforms like Instagram, YouTube, and TikTok, as well as CRM tools such as HubSpot and Salesforce, allowing brands to sync influencer data directly with marketing strategies. The exclusive influencer marketplace provides influencers with access to top-tier brand deals while giving brands the ability to create custom influencer programs for long-term partnerships
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3 text-[2.2em]">🔍</div>
            <div className="mb-2 text-lg font-semibold text-blue-600">Personalized Campaign Suggestions</div>
            <div className="text-base text-gray-600">Get matched with brands that align with your content, audience, and vibe.</div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3 text-[2.2em]">📊</div>
            <div className="mb-2 text-lg font-semibold text-blue-600">Smart campaign Dashboard</div>
            <div className="text-base text-gray-600">Track your collaborations, deadlines, submissions, and earnings in a clean, user-friendly interface.</div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3 text-[2.2em]">📄</div>
            <div className="mb-2 text-lg font-semibold text-blue-600">Real- Time insight</div>
            <div className="text-base text-gray-600">Understand your content performance—engagement, reach, and audience insights.</div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3 text-[2.2em]">📅</div>
            <div className="mb-2 text-lg font-semibold text-blue-600">Advanced Influencer Search Engine</div>
            <div className="text-base text-gray-600">Filter creators by niche, engagement rate, location, audience demographics, and more.</div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3 text-[2.2em]">📝</div>
            <div className="mb-2 text-lg font-semibold text-blue-600">Campaign Brief Builder</div>
            <div className="text-base text-gray-600">Launch a campaign in minutes with clearly defined deliverables and budgets.</div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3 text-[2.2em]">🤝</div>
            <div className="mb-2 text-lg font-semibold text-blue-600">Direct Collaboration</div>
            <div className="text-base text-gray-600">Manage negotiations, approvals, and communication all within the platform.</div>
          </div>
        </div>
      </section>
      {/* Why Now Section */}
      <section className="mx-auto mt-20 flex w-full max-w-[1100px] flex-col items-center px-4 py-16">
        <div className="w-full max-w-full rounded-2xl border-[1.5px] border-solid border-blue-200 bg-white p-10 shadow-[0_4px_24px_rgba(37,99,235,0.06)] md:max-w-[850px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xl font-bold text-blue-600">•</span>
            <span className="text-2xl font-bold text-gray-800">Why Now</span>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
            <div className="text-lg leading-7 text-gray-600"><span className="font-semibold text-blue-600">AI-native ad infrastructure</span> is being adopted faster than agencies can adapt — brands now demand real-time personalization, localization, and compliance.</div>
            <div className="text-lg leading-7 text-gray-600">The <span className="font-semibold text-blue-600">creator economy is maturing</span>: 450M+ creators exist globally, yet monetization infrastructure is fragmented, slow, and mostly built for Web2.</div>
            <div className="text-lg leading-7 text-gray-600"><span className="font-semibold text-blue-600">Regulatory pressure is rising</span> — FTC, GDPR, and platform policy shifts will make compliance automation essential, not optional.</div>
            <div className="text-lg leading-7 text-gray-600"><span className="font-semibold text-blue-600">Open-source AI + UGC unlock</span> means Mirao can dominate long-tail scale — before legacy incumbents can pivot.</div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2">
          <button className="flex cursor-pointer items-center gap-2.5 rounded-lg border-none bg-gray-800 py-3 px-8 text-lg font-semibold text-white shadow-[0_2px_8px_rgba(38,38,38,0.1)] transition-colors duration-200 hover:bg-gray-900"><span className="text-[1.2em]">🔒</span> Unlock Investor Access</button>
          <div className="text-base font-medium text-gray-500">Limited Availability – Investment Round Closing Soon</div>
        </div>
      </section>
      {/* Strategic Growth Roadmap Section */}
      <section className="mx-auto mt-20 flex w-full max-w-[1100px] flex-col items-center px-4 py-16">
        <div className="w-full max-w-full rounded-2xl bg-white p-10 shadow-[0_4px_24px_rgba(0,0,0,0.05)] md:max-w-[850px]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <span className="text-2xl font-bold text-gray-800">Strategic Growth Roadmap</span>
            <span className="rounded-lg bg-green-100 py-1 px-3 text-base font-semibold text-green-700">1 of 7 Milestones Completed</span>
          </div>
          <div className="relative flex flex-col gap-8 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-0.5 before:bg-gray-200">
            {/* Milestone 1 */}
            <div className="relative flex items-start gap-6">
              <div className="z-10 mt-1.5 h-4 w-4 rounded-full border-4 border-solid border-white bg-green-500"></div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-4">
                  <span className="text-base font-semibold text-green-600">April 2025</span>
                  <span className="rounded-md bg-green-100 py-0.5 px-2 text-sm font-medium text-green-700">Completed</span>
                </div>
                <div className="mb-2 text-lg font-bold text-green-700">Rs 100K Founder Capital</div>
                <div className="text-base text-gray-600">Deploy founder capital to build product infrastructure, validate creator-side demand, and assemble initial ops team. 10,000+ creators and 100+ global brands in pre-launch pipeline.</div>
              </div>
            </div>
            {/* Milestone 2 */}
            <div className="relative flex items-start gap-6">
              <div className="z-10 mt-1.5 h-4 w-4 rounded-full border-4 border-solid border-white bg-blue-500"></div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-4">
                  <span className="text-base font-semibold text-blue-600">August 2025</span>
                </div>
                <div className="mb-2 text-lg font-bold text-blue-700">MVP Alpha Launch + HyprLinc :50</div>
                <div className="mb-3 text-base text-gray-600">Public alpha with AI Editor v1, licensing engine, and real-time customization. 50 hand-picked creators, brands, and agencies testing features via HyprLinc:50 program.</div>
                <div className="flex gap-2">
                  <span className="rounded-md bg-green-100 py-0.5 px-2.5 text-sm font-semibold text-green-700">150+ Pilot Partners</span>
                </div>
              </div>
            </div>
            {/* Milestone 3 */}
            <div className="relative flex items-start gap-6">
              <div className="z-10 mt-1.5 h-4 w-4 rounded-full border-4 border-solid border-white bg-pink-500"></div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-4">
                  <span className="text-base font-semibold text-pink-600">Q3 2025</span>
                </div>
                <div className="mb-2 text-lg font-bold text-pink-700">Seed Funding Round (Rs 2.5M)</div>
                <div className="mb-3 text-base text-gray-600">Secure Rs 2.5M Seed to accelerate engineering, go-to-market, and creator onboarding at scale. Targeting 12-month runway and $1M post-Seed ARR.</div>
                <div className="flex gap-2">
                  <span className="rounded-md bg-pink-100 py-0.5 px-2.5 text-sm font-semibold text-pink-700">Rs 2.5M Target</span>
                </div>
              </div>
            </div>
            {/* Milestone 4 */}
            <div className="relative flex items-start gap-6">
              <div className="z-10 mt-1.5 h-4 w-4 rounded-full border-4 border-solid border-white bg-purple-500"></div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-4">
                  <span className="text-base font-semibold text-purple-600">Q2 2026</span>
                </div>
                <div className="mb-2 text-lg font-bold text-purple-700">HyprLinc Full v1 Launch</div>
                <div className="mb-3 text-base text-gray-600">Launch v1 with full dashboard, brand-side analytics, licensing hub, and API access. Reach Rs1.2M ARR through usage-based pricing, transactions, and early enterprise deals.</div>
                <div className="flex gap-2">
                  <span className="rounded-md bg-purple-100 py-0.5 px-2.5 text-sm font-semibold text-purple-700">Rs 1.2M ARR</span>
                </div>
              </div>
            </div>
            {/* Milestone 5 */}
            <div className="relative flex items-start gap-6">
              <div className="z-10 mt-1.5 h-4 w-4 rounded-full border-4 border-solid border-white bg-orange-500"></div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-4">
                  <span className="text-base font-semibold text-orange-600">Q4 2026</span>
                </div>
                <div className="mb-2 text-lg font-bold text-orange-700">Global Scale & Integrations</div>
                <div className="text-base text-gray-600">Expand to global markets, integrate with major social and CRM platforms, and scale operations for 100K+ creators and 1K+ brands.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final Call to Action Section */}
      <section className="mx-auto mt-20 flex w-full max-w-[1100px] flex-col items-center px-4 py-20">
        <div className="inline-flex items-center rounded-full bg-blue-100 py-1 px-4">
          <span className="text-sm font-medium text-blue-600">Early Access Ends Soon</span>
        </div>

        <h2 className="mt-6 mb-5 max-w-[800px] text-center text-5xl font-bold leading-tight">
          Secure Your Spot in the{' '}
          <span className="text-blue-600">AI Creator Economy</span> —
          <br />Before the Door Closes
        </h2>

        <div className="mb-8 max-w-[700px] text-center text-lg text-gray-600">
          HyprLinc gives you first-mover access to the future of AI-powered influencer
          marketing. Get early platform perks, preferred placement, and premium tools
          — before it opens to the public.
        </div>

        <div className="mb-4 flex flex-col items-center">
          <button className="group flex cursor-pointer items-center gap-3 rounded-lg bg-blue-600 py-3 px-8 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700">
            Claim Early Access{' '}
            <span className="ml-1 rounded-md bg-blue-500 py-0.5 px-2.5 text-sm font-medium text-white group-hover:bg-blue-600">
              Limited Spots
            </span>
            <span className="ml-1">→</span>
          </button>
        </div>

        <div className="text-base text-gray-500">
          Only 50 spots available. No commitment required.
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-gray-800 py-16 text-white">
        {/* <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-10 px-8 md:grid-cols-5">
          <div className="text-base text-gray-300 md:col-span-2">
            Connecting brands, influencers, and agencies through an innovative platform that simplifies collaboration and maximizes results.
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold text-white">Platform</div>
            <div className="cursor-pointer text-base text-gray-300 transition-colors duration-200 hover:text-white">Overview</div>
            <div className="cursor-pointer text-base text-gray-300 transition-colors duration-200 hover:text-white">Marketplace</div>
            <div className="cursor-pointer text-base text-gray-300 transition-colors duration-200 hover:text-white">Leaderboard</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold text-white">Solutions</div>
            <div className="cursor-pointer text-base text-gray-300 transition-colors duration-200 hover:text-white">For Creators</div>
            <div className="cursor-pointer text-base text-gray-300 transition-colors duration-200 hover:text-white">For Brands</div>
            <div className="cursor-pointer text-base text-gray-300 transition-colors duration-200 hover:text-white">For Agencies</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold text-white">Company</div>
            <div className="cursor-pointer text-base text-gray-300 transition-colors duration-200 hover:text-white">Investors</div>
            <div className="cursor-pointer text-base text-gray-300 transition-colors duration-200 hover:text-white">Comparison</div>
            <div className="cursor-pointer text-base text-gray-300 transition-colors duration-200 hover:text-white">Pricing</div>
          </div>
        </div> */}
        <div className="mx-auto mt-16 flex w-full max-w-[1100px] flex-wrap items-center justify-between gap-4 border-t border-solid border-gray-700 px-8 pt-8">
          <div className="text-base text-gray-400">© 2025 Hyprlinc All rights reserved.</div>
          <div className="flex gap-6">
            <span className="cursor-pointer text-base text-gray-400 transition-colors duration-200 hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer text-base text-gray-400 transition-colors duration-200 hover:text-white">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;



const AnimatedNumber = ({ endValue, suffix = '', duration = 2000 }) => {
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
    <div className="mb-1 text-4xl font-bold text-[#2563EB]">
      {count}{suffix}
    </div>
  );
};