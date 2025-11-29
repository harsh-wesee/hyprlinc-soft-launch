import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 font-montserrat">
            <p className="text-lg mb-8 leading-relaxed">
              At HyprLinc Network Pvt. Ltd. ("HyprLinc," "we," "our," or "us"), we aim to provide a seamless and transparent experience for brands, influencers, and marketing agencies using our platform. This Terms of Service outlines the terms and conditions for using the HyprLinc platform (the "Platform"), which connects brands, influencers, and marketing agencies for campaign collaboration. By accessing or using the Platform, you agree to the terms of this Terms of Service. These Terms govern your relationship with HyprLinc as a brand, influencer, marketing agency, or visitor. Please read them carefully before using the platform.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">1. Overview of Services</h2>
              <p className="mb-4 leading-relaxed">
                HyprLinc is an AI-powered influencer marketing platform that connects brands, influencers, and marketing agencies to collaborate on campaigns, manage communications, process payments, and track campaign outcomes.
              </p>
              <p className="mb-4 leading-relaxed">The platform facilitates:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li className="leading-relaxed">Campaign creation, discovery, and management</li>
                <li className="leading-relaxed">AI-driven influencer recommendations</li>
                <li className="leading-relaxed">Escrow-based payment security</li>
                <li className="leading-relaxed">Communication and deliverable tracking</li>
                <li className="leading-relaxed">Data-driven campaign analytics</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">2. Eligibility</h2>
              <p className="mb-4 leading-relaxed">By using HyprLinc, you confirm that:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">You are at least 18 years of age and legally capable of entering into binding contracts.</li>
                <li className="leading-relaxed">You are registering on behalf of yourself or a legal entity with authorization to represent it.</li>
                <li className="leading-relaxed">All information you provide is true, accurate, and up to date.</li>
              </ul>
              <p className="leading-relaxed">
                HyprLinc reserves the right to suspend or terminate accounts found to violate these terms or provide false information.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">3. User Accounts and Access</h2>
              <ul className="space-y-3 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">To access the platform, users must create an account as a Brand, Influencer, or Agency.</li>
                <li className="leading-relaxed">You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li className="leading-relaxed">You agree not to share your account or impersonate another user.</li>
                <li className="leading-relaxed">HyprLinc shall not be liable for unauthorized access caused by your negligence.</li>
              </ul>
              <p className="leading-relaxed">
                We reserve the right to restrict or terminate access to users who engage in fraudulent, abusive, or harmful activity.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">4. Platform Usage</h2>
              <p className="mb-4 leading-relaxed">Users agree to use HyprLinc only for lawful purposes, including:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">Creating, managing, and executing influencer campaigns.</li>
                <li className="leading-relaxed">Communicating and transacting transparently within the platform.</li>
                <li className="leading-relaxed">Respecting the privacy and intellectual property of others.</li>
              </ul>
              <p className="mb-4 leading-relaxed">Users must not:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">Circumvent HyprLinc's payment or communication systems.</li>
                <li className="leading-relaxed">Post false, misleading, or defamatory content.</li>
                <li className="leading-relaxed">Upload harmful code, spam, or malicious data.</li>
                <li className="leading-relaxed">Engage in harassment, discrimination, or unethical conduct.</li>
              </ul>
              <p className="leading-relaxed">
                Violation of these terms may result in suspension or permanent account termination.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">5. Campaigns and Deliverables</h2>
              <ul className="space-y-3 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">Brands and agencies may post campaigns specifying objectives, timelines, deliverables, and compensation.</li>
                <li className="leading-relaxed">Influencers may apply, negotiate, or accept campaigns through the platform.</li>
                <li className="leading-relaxed">Once a campaign is confirmed, both parties are bound by the agreed deliverables.</li>
                <li className="leading-relaxed">HyprLinc may mediate disputes but is not a party to the contract between brands and influencers.</li>
              </ul>
              <p className="leading-relaxed">
                Campaign guidelines must be followed as per platform policies.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">6. Payments and Commissions</h2>
              <ul className="space-y-3 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">
                  All financial transactions occur within HyprLinc's secure payment system (via integrated gateways such as Razorpay/Easebuzz).
                </li>
                <li className="leading-relaxed">
                  HyprLinc holds payments in escrow until campaign completion and approval.
                </li>
                <li className="leading-relaxed">Upon completion:</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside ml-8 mb-4">
                <li className="leading-relaxed">Influencers receive payment (after platform fee deduction).</li>
                <li className="leading-relaxed">HyprLinc issues GST-compliant invoices to brands and payout statements to influencers.</li>
                <li className="leading-relaxed">HyprLinc charges a nominal service commission per transaction.</li>
                <li className="leading-relaxed">Transaction fees and taxes (GST, TDS) apply as per Indian law.</li>
              </ul>
              <p className="leading-relaxed">
                Refer to the Cancellation & Refund Policy for payment-related queries.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">7. Platform Fees</h2>
              <p className="leading-relaxed">
                HyprLinc's platform and registration are free for all users. Fees apply only upon successful campaign execution, as a small percentage of total campaign value. HyprLinc reserves the right to revise fee structures with prior notice.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">8. Content Ownership and Rights</h2>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li className="leading-relaxed">Influencers retain ownership of their original content.</li>
                <li className="leading-relaxed">
                  By participating in campaigns, influencers grant brands and HyprLinc a limited, non-exclusive, royalty-free license to use the content for campaign purposes.
                </li>
                <li className="leading-relaxed">
                  Brands may use content as agreed in campaign terms but cannot resell or modify it without permission.
                </li>
                <li className="leading-relaxed">
                  Users agree not to upload copyrighted material without appropriate authorization.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">9. Confidentiality and Data Protection</h2>
              <p className="leading-relaxed">
                HyprLinc values your privacy and handles personal data as per the Privacy Policy. Users must maintain confidentiality of campaign data, brand briefs, and influencer rates. Unauthorized data sharing or misuse may lead to account suspension and legal action.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">10. Dispute Resolution</h2>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li className="leading-relaxed">
                  Any dispute between users must first be raised through HyprLinc's internal mediation system.
                </li>
                <li className="leading-relaxed">
                  If unresolved, it will be handled as per our Dispute Resolution Policy.
                </li>
                <li className="leading-relaxed">
                  HyprLinc's decision in internal arbitration will be final and binding within the platform scope.
                </li>
              </ul>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">11. Termination</h2>
              <p className="mb-4 leading-relaxed">HyprLinc reserves the right to:</p>
              <ul className="space-y-2 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">Suspend or terminate accounts violating platform policies.</li>
                <li className="leading-relaxed">Block access for fraudulent or unethical conduct.</li>
                <li className="leading-relaxed">Remove campaigns or content deemed inappropriate or harmful.</li>
              </ul>
              <p className="leading-relaxed">
                Upon termination, pending payments will be settled as per valid campaign status.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">12. Limitation of Liability</h2>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li className="leading-relaxed">
                  HyprLinc acts only as a facilitator and is not responsible for the quality of deliverables, campaign outcomes, or off-platform arrangements.
                </li>
                <li className="leading-relaxed">
                  HyprLinc is not liable for indirect, incidental, or consequential losses, including lost profits, data, or reputation.
                </li>
                <li className="leading-relaxed">
                  Platform use is at your own risk, and services are provided "as is" without warranty.
                </li>
              </ul>
            </section>

            {/* Section 13 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">13. Indemnification</h2>
              <p className="mb-4 leading-relaxed">
                You agree to indemnify and hold harmless HyprLinc, its directors, employees, and affiliates from any claim, damage, or expense arising from:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li className="leading-relaxed">Violation of these Terms.</li>
                <li className="leading-relaxed">Breach of applicable laws.</li>
                <li className="leading-relaxed">Disputes between users (brand–influencer–agency).</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">14. Modifications to Terms</h2>
              <p className="leading-relaxed">
                HyprLinc reserves the right to modify these Terms periodically. Updated terms will be posted on the website, and continued use implies acceptance of the revised version.
              </p>
            </section>

            {/* Section 15 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">15. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
              </p>
            </section>

            {/* Section 16 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">16. Contact Us</h2>
              <p className="leading-relaxed">
                For any queries regarding these Terms, contact us at:{" "}
                <a 
                  href="mailto:legal@hyprlinc.com" 
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

export default TermsOfService;

