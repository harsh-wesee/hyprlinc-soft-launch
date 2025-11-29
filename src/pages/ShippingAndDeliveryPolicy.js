import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';


const ShippingAndDeliveryPolicy = () => {
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
            Shipping & Delivery Policy
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 font-montserrat">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">1. Service Delivery Overview</h2>
              <p className="text-lg mb-4 leading-relaxed">
                HyprLinc facilitates the end-to-end delivery of digital campaign services and collaborations. Since all outputs are digital, no physical shipping is involved.
              </p>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li className="leading-relaxed">Influencer campaign bookings</li>
                <li className="leading-relaxed">Content creation collaborations</li>
                <li className="leading-relaxed">Digital communication between parties</li>
                <li className="leading-relaxed">Secure payments via escrow</li>
                <li className="leading-relaxed">Invoice generation and downloading</li>
                <li className="leading-relaxed">Campaign deliverables (digital content: posts, videos, scripts, reels, mentions, etc.)</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">2. Delivery of Campaign Services</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-700">Service Type</th>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-700">Delivery Mode</th>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-700">Delivery Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3 align-top">Campaign Collaboration</td>
                      <td className="px-4 py-3 align-top">In-app communication &amp; dashboard notifications</td>
                      <td className="px-4 py-3 align-top">Instant access</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3 align-top">Influencer Content (posts, reels, videos, mentions)</td>
                      <td className="px-4 py-3 align-top">Delivered via social media platforms (Instagram/YouTube) &amp; submission on HyprLinc dashboard</td>
                      <td className="px-4 py-3 align-top">As per agreed campaign schedule</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3 align-top">Reports &amp; Analytics</td>
                      <td className="px-4 py-3 align-top">Dashboard download + email notification</td>
                      <td className="px-4 py-3 align-top">Within 24–72 hours post campaign completion</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3 align-top">Invoices</td>
                      <td className="px-4 py-3 align-top">Auto-generated PDF downloadable in dashboard</td>
                      <td className="px-4 py-3 align-top">Immediately after campaign completion</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3 align-top">Payments</td>
                      <td className="px-4 py-3 align-top">Processed via connected payment gateway to UPI/Bank</td>
                      <td className="px-4 py-3 align-top">3–7 business days as per gateway &amp; bank SLA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">3. Delivery Confirmation</h2>
              <p className="leading-relaxed mb-4">
                Delivery is considered successful when:
              </p>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li className="leading-relaxed">Influencer submits content proof or live post link on HyprLinc</li>
                <li className="leading-relaxed">Brand approves deliverables on the dashboard</li>
                <li className="leading-relaxed">System records the campaign as “completed”</li>
              </ul>
              <p className="leading-relaxed">
                If approval is not given within 7 days, delivery may be automatically marked as completed unless a dispute is raised.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">4. Delivery Failure / Delay</h2>
              <p className="leading-relaxed mb-4">
                HyprLinc is not responsible for delays caused due to:
              </p>
              <ul className="space-y-3 list-disc list-inside ml-4 mb-4">
                <li className="leading-relaxed">Incorrect social media account linking</li>
                <li className="leading-relaxed">Platform outages (Instagram/YouTube/API restrictions)</li>
                <li className="leading-relaxed">Influencer or brand failing to respond within timeline</li>
                <li className="leading-relaxed">Internet or technical issues outside HyprLinc control</li>
              </ul>
              <p className="leading-relaxed">
                In such cases, revised delivery timelines may be negotiated between parties through the HyprLinc chat or dispute module.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">5. No Refund For Completed Deliveries</h2>
              <p className="leading-relaxed mb-4">
                Once any of the following are completed, no reversal or refund will be entertained unless a valid dispute is raised within 7 days:
              </p>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li className="leading-relaxed">Content is posted</li>
                <li className="leading-relaxed">Deliverable is submitted and approved</li>
                <li className="leading-relaxed">Payment has been released to the influencer</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">6. No Physical Shipping Applicable</h2>
              <p className="leading-relaxed mb-4">
                As HyprLinc does not sell, pack, or ship any physical products, the following do not apply:
              </p>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li className="leading-relaxed">Courier tracking</li>
                <li className="leading-relaxed">Delivery address</li>
                <li className="leading-relaxed">Logistics partners</li>
                <li className="leading-relaxed">Damaged physical goods claims</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">7. Contact for Delivery Support</h2>
              <p className="leading-relaxed">
                For any delivery-related support, reach us at:{" "}
                <a
                  href="mailto:business@hyprlinc.com"
                  className="text-blue-600 hover:text-blue-700 font-medium underline"
                >
                  business@hyprlinc.com
                </a>
                . Support response time: 24–48 business hours.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShippingAndDeliveryPolicy;