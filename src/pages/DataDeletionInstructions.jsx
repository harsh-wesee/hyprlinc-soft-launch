import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const DataDeletionInstructions = () => {
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
                        Data Deletion Instructions
                    </h1>

                    <div className="prose prose-lg max-w-none text-gray-700 font-montserrat">
                        <p className="text-lg mb-8 leading-relaxed">
                            At HyprLinc Network Pvt. Ltd. ("HyprLinc," "we," "our," or "us"), we respect your privacy and provide full control over your personal data.
                            This page explains how you can request the deletion of your data associated with your HyprLinc account, including any data received from Instagram or external integrations.
                        </p>

                        {/* Section 1 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">1. How to Request Data Deletion</h2>
                            <p className="leading-relaxed mb-4">
                                If you wish to delete your data from HyprLinc, please send an email to:
                            </p>
                            <p className="leading-relaxed mb-6 font-medium">
                                📧 <a
                                    href="mailto:business@hyprlinc.com"
                                    className="text-blue-600 hover:text-blue-700 underline"
                                >
                                    business@hyprlinc.com
                                </a>
                            </p>

                            <p className="mb-4 leading-relaxed">Your email should include the following:</p>

                            <ul className="space-y-3 list-disc list-inside ml-4">
                                <li className="leading-relaxed">Your full name</li>
                                <li className="leading-relaxed">Registered HyprLinc email address</li>
                                <li className="leading-relaxed">Your connected Instagram username (if applicable)</li>
                                <li className="leading-relaxed">
                                    A clear statement requesting deletion of your data
                                    <br />
                                    Example: <i>"I request the deletion of all my data stored by HyprLinc."</i>
                                </li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">2. What Happens After You Submit a Request?</h2>

                            <ul className="space-y-3 list-disc list-inside ml-4">
                                <li className="leading-relaxed">
                                    We will verify your identity using your registered email.
                                </li>
                                <li className="leading-relaxed">
                                    All associated data — including user profile, campaign data, analytics, and third-party tokens — will be permanently deleted from our systems.
                                </li>
                                <li className="leading-relaxed">
                                    You will receive a confirmation email once the deletion is completed.
                                </li>
                                <li className="leading-relaxed">
                                    Processing time typically takes <strong>7–14 business days</strong>.
                                </li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                                3. Data That Will Be Deleted
                            </h2>

                            <ul className="space-y-3 list-disc list-inside ml-4">
                                <li className="leading-relaxed">HyprLinc account data</li>
                                <li className="leading-relaxed">Instagram or social media access tokens</li>
                                <li className="leading-relaxed">Campaign participation details</li>
                                <li className="leading-relaxed">Analytics, insights, and engagement data</li>
                                <li className="leading-relaxed">Any stored media or uploaded documents</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                                4. Data We May Retain (If Legally Required)
                            </h2>
                            <p className="leading-relaxed mb-4">
                                Certain information may be retained temporarily for legal or compliance purposes, such as:
                            </p>

                            <ul className="space-y-3 list-disc list-inside ml-4">
                                <li className="leading-relaxed">Financial transaction records</li>
                                <li className="leading-relaxed">Internal audit logs</li>
                                <li className="leading-relaxed">Security or fraud-prevention data</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">5. Contact Information</h2>
                            <p className="leading-relaxed">
                                If you have any questions regarding data deletion or privacy, please contact us at:{" "}
                                <a
                                    href="mailto:business@hyprlinc.com"
                                    className="text-blue-600 hover:text-blue-700 font-medium underline"
                                >
                                    business@hyprlinc.com
                                </a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DataDeletionInstructions;
