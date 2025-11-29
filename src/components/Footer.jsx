import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#007BFF] to-[#003B95] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/20 pb-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-white/80">
            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/cancellation-policy" className="hover:text-white">
              Cancellation & Refund Policy
            </Link>
            <Link to="/shipping-policy" className="hover:text-white">
              Shipping & Delivery Policy
            </Link>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-white/80 text-sm">Follow us</span>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/p/DNfmSWIzUDm/"
              className="hover:text-white"
            >
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
                <a
                  href="https://dashboard.hyprlinc.com/creatorsLogin"
                  className="hover:text-white"
                >
                  For Creators
                </a>
              </li>
              <li>
                <a
                  href="https://dashboard.hyprlinc.com/brandsLogin"
                  className="hover:text-white"
                >
                  For Brands
                </a>
              </li>
              <li>
                <a
                  href="https://dashboard.hyprlinc.com/agencyLogin"
                  className="hover:text-white"
                >
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

export default Footer;
