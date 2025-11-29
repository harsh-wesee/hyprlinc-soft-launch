import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f5ff] to-[#f7f8fc]">
      {/* Header */}
      <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-white py-3 pl-4 pr-4 md:pl-8 md:pr-10 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <Link to="/" className="flex items-center text-[1.7rem] font-bold tracking-[1px] text-[#222]">
          <img src={logo} alt="HYPRLINC" className="h-5" />
        </Link>
        <Link 
          to="/" 
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Back to Home
        </Link>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-6 bg-gradient-to-r from-[#007AFF] to-[#153885] text-transparent bg-clip-text">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 font-montserrat">
            <p className="text-lg mb-8 leading-relaxed">
              At HyprLinc Network Pvt. Ltd. ("HyprLinc," "we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or use the HyprLinc platform (the "Platform"), which connects brands, influencers, and marketing agencies for campaign collaboration. By accessing or using the Platform, you agree to the terms of this Privacy Policy.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">1. Information We Collect</h2>
              <p className="mb-4 leading-relaxed">We collect the following types of information:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-montserrat">a. Information You Provide</h3>
                  <p className="mb-3 leading-relaxed">When you register or use our services:</p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li className="leading-relaxed">Name, email address, contact number, and password.</li>
                    <li className="leading-relaxed">Business details (for brands/agencies): company name, GST, PAN, registered address.</li>
                    <li className="leading-relaxed">Social media account details (for influencers): Instagram/YouTube handle, follower count, engagement metrics.</li>
                    <li className="leading-relaxed">Payment and billing information.</li>
                    <li className="leading-relaxed">Profile content such as bio, category, and portfolio links.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-montserrat">b. Information Collected Automatically</h3>
                  <p className="mb-3 leading-relaxed">When you use the platform:</p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li className="leading-relaxed">Device information (browser, IP address, OS).</li>
                    <li className="leading-relaxed">Log data and usage analytics (pages visited, time spent, interactions).</li>
                    <li className="leading-relaxed">Cookies and similar technologies for analytics and personalization.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-montserrat">c. Third-Party Data</h3>
                  <p className="leading-relaxed">
                    When you connect your social media or use integrated APIs (e.g., Instagram, YouTube), we may collect publicly available metrics (follower count, engagement rate, post performance) as permitted by their APIs.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">2. How We Use Your Information</h2>
              <p className="mb-4 leading-relaxed">We use your data to:</p>
              <ul className="space-y-3 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">Operate, maintain, and improve the platform experience.</li>
                <li className="leading-relaxed">Match influencers, brands, and agencies based on campaign requirements.</li>
                <li className="leading-relaxed">Facilitate campaign creation, communication, and execution.</li>
                <li className="leading-relaxed">Process payments securely through verified gateways.</li>
                <li className="leading-relaxed">Prevent fraud, misuse, or policy violations.</li>
                <li className="leading-relaxed">Send notifications, updates, and service communications.</li>
                <li className="leading-relaxed">Generate analytics and performance reports.</li>
              </ul>
              <p className="leading-relaxed">
                We do not sell or rent your personal data to any third party.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">3. How We Share Information</h2>
              <p className="mb-4 leading-relaxed">We may share information only under the following circumstances:</p>
              <ul className="space-y-3 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">
                  <strong>With Campaign Partners:</strong> Limited profile data shared between brand, influencer, and agency for campaign purposes.
                </li>
                <li className="leading-relaxed">
                  <strong>With Service Providers:</strong> Payment gateways, hosting partners, analytics tools, or customer support providers bound by confidentiality agreements.
                </li>
                <li className="leading-relaxed">
                  <strong>For Legal Obligations:</strong> When required by law, court order, or government request.
                </li>
                <li className="leading-relaxed">
                  <strong>In Case of Merger or Acquisition:</strong> In the event of a business restructuring, your information may be transferred as an asset.
                </li>
              </ul>
              <p className="leading-relaxed">
                All such sharing is done under strict contractual safeguards.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">4. Data Storage and Security</h2>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li className="leading-relaxed">
                  Data is securely stored on servers located in India and may be backed up in compliance with applicable data localization laws.
                </li>
                <li className="leading-relaxed">
                  We employ encryption, access controls, and periodic security audits to protect your data.
                </li>
                <li className="leading-relaxed">
                  Despite our best efforts, no system is fully secure. Users are advised to protect their login credentials.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">5. Your Rights</h2>
              <p className="mb-4 leading-relaxed">You have the right to:</p>
              <ul className="space-y-3 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">Access and review your personal data.</li>
                <li className="leading-relaxed">Request correction, deletion, or limitation of processing.</li>
                <li className="leading-relaxed">Withdraw consent at any time.</li>
                <li className="leading-relaxed">Request account deactivation or data portability.</li>
              </ul>
              <p className="leading-relaxed">
                Requests can be made via{" "}
                <a 
                  href="mailto:business@hyprlinc.com" 
                  className="text-blue-600 hover:text-blue-700 font-medium underline"
                >
                  business@hyprlinc.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

