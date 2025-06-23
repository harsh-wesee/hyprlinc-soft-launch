import logo from './logo.png';
import hero_bg from './header_bg.png'
import { useState, useEffect } from 'react';
function App() {
  const [activeRole, setActiveRole] = useState('creator');
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f5ff] to-[#f7f8fc]">
      {/* Header Bar */}
      <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-white py-3 pl-8 pr-10 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-9">
          <div className="flex items-center text-[1.7rem] font-bold tracking-[1px] text-[#222]">
            <img src={logo} alt="HYPRLINC" className="h-4" />
          </div>
          <nav className="flex gap-6 text-base text-[#222]">
            <span>HyprLinc : 50</span>
            <span>Problem & Solution</span>
            <span>Features</span>
            <span>How It Works</span>
            <span>Investors Opportunity</span>
          </nav>
        </div>
        <button className="mr-6 flex cursor-pointer items-center gap-2.5 rounded-lg border-none bg-gradient-to-r from-[#007AFF] to-[#2A9B54] py-2 px-7 text-base font-medium text-white shadow-[0_2px_8px_rgba(24,119,242,0.08)] transition-all duration-500 ease-in-out hover:from-[#007AFF] hover:to-[#004999]">
          Early Access <span className="ml-2 rounded-xl bg-white py-0.5 px-2.5 text-[0.9em] text-[#007AFF]">30 Left</span>
        </button>
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
                <span className="mt-0.5 text-[1.5em]">📛</span>
                <div>
                  <strong>HyprLinc :50 Founding Badge (1/50)</strong><br />
                  <span className="text-[0.98rem] text-[#444]">Visible on profile, listings, dashboards, and partner pages—builds authority, exclusivity, and long-term status.</span>
                </div>
              </li>
              <li className="mb-[18px] flex items-start gap-3.5">
                <span className="mt-0.5 text-[1.5em]">🎁</span>
                <div>
                  <strong>One Year Free Premium features</strong><br />
                  <span className="text-[0.98rem] text-[#444]">Get all Premium account features free for full one year.</span>
                </div>
              </li>
              <li className="mb-[18px] flex items-start gap-3.5">
                <span className="mt-0.5 text-[1.5em]">🚀</span>
                <div>
                  <strong>Creator-First Visibility</strong><br />
                  <span className="text-[0.98rem] text-[#444]">Show up first in brand results for the first 3 months—guaranteed.</span>
                </div>
              </li>
              <li className="mb-[18px] flex items-start gap-3.5">
                <span className="mt-0.5 text-[1.5em]">🛠️</span>
                <div>
                  <strong>Beta-Only Tools Access</strong><br />
                  <span className="text-[0.98rem] text-[#444]">Early birds get automatic access to new AI tools before anyone else.</span>
                </div>
              </li>
              <li className="mb-[18px] flex items-start gap-3.5">
                <span className="mt-0.5 text-[1.5em]">🤝</span>
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
            <div className="mb-3 text-[2.5em]">🖼️</div>
            <AnimatedNumber endValue={10} suffix="X" />
            <div className="text-center text-base text-gray-600">Faster Campaign Planning & execution</div>
          </div>
          <div className="flex flex-col items-center rounded-[30px] bg-[#F6F5FF] p-8 transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3 text-[2.5em]">💬</div>
            <AnimatedNumber endValue={3} suffix="X" />
            <div className="text-center text-base text-gray-600">Higher engagement rate for Campaigns run on HyprLinc</div>
          </div>
          <div className="flex flex-col items-center rounded-[30px] bg-[#F6F5FF] p-8 transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3 text-[2.5em]">📈</div>
            <AnimatedNumber endValue={80} suffix="%" />
            <div className="text-center text-base text-gray-600">Higher Connection rate due to data backed matchmaking & audience profiling</div>
          </div>
          <div className="flex flex-col items-center rounded-[30px] bg-[#F6F5FF] p-8 transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3 text-[2.5em]">💙</div>
            <AnimatedNumber endValue={100} suffix="%" />
            <div className="text-center text-base text-gray-600">Secure Payments with All transactions are protected until campaigns milestones are met.</div>
          </div>
        </div>
      </section>
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
              <span className="text-2xl">👤</span>
            </div>
            <h3 className="mb-2 font-semibold">Sign up</h3>
            <p className="text-sm text-gray-600">Register as a brand, influencer, or agency</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="mb-2 font-semibold">Create or Apply for Campaign</h3>
            <p className="text-sm text-gray-600">Find and collaborate on tailored campaigns</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="mb-2 font-semibold">Collaborate & Execute</h3>
            <p className="text-sm text-gray-600">Finalize deliverables and track progress</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">💰</span>
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
          <div className="text-base text-gray-400">© 2025 HyprLinc All rights reserved.</div>
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