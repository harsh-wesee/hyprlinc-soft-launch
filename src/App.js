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
// this is the small testing commit

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

export default App;
