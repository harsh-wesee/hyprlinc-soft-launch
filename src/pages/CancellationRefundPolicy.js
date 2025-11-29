
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const CancellationRefundPolicy = () => {
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
            Cancellation & Refund Policy
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 font-montserrat">
            <p className="text-lg mb-8 leading-relaxed">
              At HyprLinc Network Pvt. Ltd. ("HyprLinc," "we," "our," or "us"), we aim to provide a seamless and transparent experience for brands, influencers, and marketing agencies using our platform. This Cancellation & Refund Policy outlines the terms under which cancellations, modifications, and refunds may be processed for campaigns and services executed through HyprLinc.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">1. General Terms</h2>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li className="leading-relaxed">
                  By initiating or participating in a campaign through HyprLinc, users agree to this policy as part of our Terms of Use.
                </li>
                <li className="leading-relaxed">
                  HyprLinc operates as an intermediary platform connecting brands, influencers, and agencies, facilitating campaign creation, payments, and execution.
                </li>
                <li className="leading-relaxed">
                  Refunds and cancellations are processed according to campaign status, deliverables completed, and associated platform service fees.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">2. Cancellation by Brands or Agencies</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-montserrat">Before Campaign Approval:</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li className="leading-relaxed">
                      Brands may cancel a campaign request before the influencer accepts or the campaign is approved by HyprLinc.
                    </li>
                    <li className="leading-relaxed">
                      A full refund (excluding payment gateway transaction charges) will be issued within 7–10 business days.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-montserrat">After Campaign Approval but Before Execution:</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li className="leading-relaxed">
                      A cancellation fee of 10% of the campaign value (platform fee) will be retained.
                    </li>
                    <li className="leading-relaxed">
                      Remaining balance will be refunded within 10 business days.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-montserrat">After Campaign Execution:</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li className="leading-relaxed">
                      Once an influencer has commenced or completed the deliverables, no refund will be provided.
                    </li>
                    <li className="leading-relaxed">
                      Disputes regarding quality or delay will be resolved under the Dispute Resolution Policy (available separately).
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">3. Cancellation by Influencers</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-montserrat">Before Campaign Acceptance:</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li className="leading-relaxed">
                      Influencers can withdraw their application without penalty.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-montserrat">After Acceptance but Before Execution:</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li className="leading-relaxed">
                      Repeated cancellations may affect account credibility or lead to temporary suspension.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-montserrat">After Execution:</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li className="leading-relaxed">
                      Once deliverables are uploaded or approved, cancellations are not applicable.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">4. Cancellation by HyprLinc</h2>
              <p className="mb-4 leading-relaxed">
                HyprLinc reserves the right to cancel or suspend a campaign in cases of:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">Violation of platform guidelines or fraudulent activity.</li>
                <li className="leading-relaxed">Payment failure or chargeback initiated by the brand.</li>
                <li className="leading-relaxed">Misrepresentation or policy breach by any party.</li>
              </ul>
              <p className="mb-4 leading-relaxed">In such cases:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li className="leading-relaxed">
                  If no deliverables have been made, a full refund (minus payment gateway charges) will be processed.
                </li>
                <li className="leading-relaxed">
                  If partial work has been done, a proportional refund will be determined after review.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">5. Refund Processing</h2>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li className="leading-relaxed">
                  All refunds will be initiated to the original payment source.
                </li>
                <li className="leading-relaxed">
                  Refunds may take 7–10 working days to reflect, depending on the payment gateway or bank.
                </li>
                <li className="leading-relaxed">
                  HyprLinc is not liable for delays caused by third-party financial institutions.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">6. Non-Refundable Scenarios</h2>
              <p className="mb-4 leading-relaxed">
                Refunds are not applicable in the following cases:
              </p>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li className="leading-relaxed">
                  Campaigns where the influencer has delivered approved content.
                </li>
                <li className="leading-relaxed">
                  Payments made outside the HyprLinc platform.
                </li>
                <li className="leading-relaxed">
                  Failure to utilize services due to user error or delay.
                </li>
                <li className="leading-relaxed">
                  Miscommunication or unmet expectations not supported by documented campaign terms.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">7. Contact Us</h2>
              <p className="leading-relaxed">
                For refund or cancellation requests, please write to:{" "}
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

export default CancellationRefundPolicy;