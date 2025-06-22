import './App.css';

function App() {
  return (
    <div className="landing-root">
      {/* Header Bar */}
      <header className="landing-header">
        <div className="logo-nav">
          <div className="logo-placeholder">HYPRLINC</div>
          <nav className="nav-links">
            <span>HyprLinc : 50</span>
            <span>Problem & Solution</span>
            <span>Features</span>
            <span>How It Works</span>
            <span>Investors Opportunity</span>
          </nav>
        </div>
        <button className="early-access-btn">
          Early Access <span className="spots-left">30 Left</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="landing-main">
        <h1 className="main-title">
          <span className="blue-text">Connecting Brands, <br />Influencers and <br />Marketing agencies</span><br />
          <span className="black-text">Made In India.<br />for India.</span>
        </h1>
        <p className="main-desc">
          HyprLinc is a dynamic platform designed to bridge the gap between influencers and brands, creating seamless collaborations that drive engagement and growth. With an intelligent matchmaking algorithm, HyprLinc connects brands with the right influencers based on audience demographics, engagement metrics, and campaign goals.
        </p>
        <div className="main-actions">
          <button className="watch-demo-btn">Watch Demo <span className="demo-time">2 min</span></button>
          <div className="spots-info">
            <span className="spots-count">Only 50 spots available</span>
            <span className="limited-spots">Limited Spots</span>
          </div>
        </div>
        <div className="limited-time">Limited-Time Opportunity</div>
        {/* Founders Circle Join Banner */}
        <div className="founders-join-banner">
          <h2 className="founders-join-title">
            Join the <span className="blue-text">Hyprlinc : 50</span><br />Founders Circle
          </h2>
          <div className="founders-join-desc">
            Be one of the first 50 visionaries to shape the future of AI-powered creator marketing. Get lifetime perks, elite visibility, and direct influence—before the world catches on.
          </div>
        </div>
      </main>
      {/* Founders Circle Section */}
      <section className="founders-section">
        <div className="founders-content">
          {/* Left: Form */}
          <div className="founders-form-card">
            <h2 className="founders-title">Founder's Circle</h2>
            <p className="founders-desc">Enter your details to secure your spot and receive lifetime early access benefits.</p>
            <div className="founders-tabs">
              <button className="tab active">Creator</button>
              <button className="tab">Brand</button>
              <button className="tab">Agency</button>
            </div>
            <form className="founders-form">
              <input type="text" placeholder="Your Name" className="founders-input" />
              <input type="email" placeholder="Your email" className="founders-input" />
              <button className="founders-submit" type="submit">Join Creator Waitlist <span className="arrow">→</span></button>
            </form>
          </div>
          {/* Right: Benefits */}
          <div className="founders-benefits-card">
            <h3 className="benefits-title">Creator Founder's Circle Benefits</h3>
            <ul className="benefits-list">
              <li>
                <span className="benefit-icon">📛</span>
                <div>
                  <strong>HyprLinc :50 Founding Badge (1/50)</strong><br />
                  <span className="benefit-desc">Visible on profile, listings, dashboards, and partner pages—builds authority, exclusivity, and long-term status.</span>
                </div>
              </li>
              <li>
                <span className="benefit-icon">🎁</span>
                <div>
                  <strong>One Year Free Premium features</strong><br />
                  <span className="benefit-desc">Get all Premium account features free for full one year.</span>
                </div>
              </li>
              <li>
                <span className="benefit-icon">🚀</span>
                <div>
                  <strong>Creator-First Visibility</strong><br />
                  <span className="benefit-desc">Show up first in brand results for the first 3 months—guaranteed.</span>
                </div>
              </li>
              <li>
                <span className="benefit-icon">🛠️</span>
                <div>
                  <strong>Beta-Only Tools Access</strong><br />
                  <span className="benefit-desc">Early birds get automatic access to new AI tools before anyone else.</span>
                </div>
              </li>
              <li>
                <span className="benefit-icon">🤝</span>
                <div>
                  <strong>Personalised onboarding & Support</strong><br />
                  <span className="benefit-desc">Our team personally will help your onboarding to the platform & provide one on one support.</span>
                </div>
              </li>
            </ul>
            <div className="benefits-note">
              <span className="note-icon">⚠️</span>
              <span className="note-text"><strong>Not just joining—</strong>you're helping build and directly shape the future of HyprLinc. These benefits are reserved only for the first 50 early adopters. They will never be offered again.</span>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Performance Section */}
      <section className="performance-section">
        <div className="performance-badge"> <span className="performance-badge-icon">📊</span> Platform Performance</div>
        <h2 className="performance-title">
          <span className="blue-text">Transforming Influencer Marketing</span>
        </h2>
        <div className="performance-desc">Our AI-powered platform delivers measurable results for creators and brands alike.</div>
        <div className="performance-stats-row">
          <div className="performance-stat-card">
            <div className="stat-icon">🖼️</div>
            <div className="stat-value">10X</div>
            <div className="stat-desc">Faster Campaign Planning & execution</div>
          </div>
          <div className="performance-stat-card">
            <div className="stat-icon">💬</div>
            <div className="stat-value">3X</div>
            <div className="stat-desc">Higher engagement rate for Campaigns run on HyprLinc</div>
          </div>
          <div className="performance-stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-value">80%</div>
            <div className="stat-desc">Higher Connection rate due to data backed matchmaking & audience profiling</div>
          </div>
          <div className="performance-stat-card">
            <div className="stat-icon">💙</div>
            <div className="stat-value">100%</div>
            <div className="stat-desc">Secure Payments with  All transactions are protected until campaigns milestones are met.</div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Features</h2>
        <div className="features-desc">
          HyprLinc integrates effortlessly with social media platforms like Instagram, YouTube, and TikTok, as well as CRM tools such as HubSpot and Salesforce, allowing brands to sync influencer data directly with marketing strategies. The exclusive influencer marketplace provides influencers with access to top-tier brand deals while giving brands the ability to create custom influencer programs for long-term partnerships
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <div className="feature-name blue-text">Personalized Campaign Suggestions</div>
            <div className="feature-desc">Get matched with brands that align with your content, audience, and vibe.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <div className="feature-name blue-text">Smart campaign Dashboard</div>
            <div className="feature-desc">Track your collaborations, deadlines, submissions, and earnings in a clean, user-friendly interface.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <div className="feature-name blue-text">Real- Time insight</div>
            <div className="feature-desc">Understand your content performance—engagement, reach, and audience insights.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <div className="feature-name blue-text">Advanced Influencer Search Engine</div>
            <div className="feature-desc">Filter creators by niche, engagement rate, location, audience demographics, and more.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <div className="feature-name blue-text">Campaign Brief Builder</div>
            <div className="feature-desc">Launch a campaign in minutes with clearly defined deliverables and budgets.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <div className="feature-name blue-text">Direct Collaboration</div>
            <div className="feature-desc">Manage negotiations, approvals, and communication all within the platform.</div>
          </div>
        </div>
      </section>
      {/* Why Now Section */}
      <section className="why-now-section">
        <div className="why-now-card">
          <div className="why-now-title-row">
            <span className="why-now-bullet">•</span>
            <span className="why-now-title">Why Now</span>
          </div>
          <div className="why-now-points">
            <div className="why-now-point"><span className="why-now-blue">AI-native ad infrastructure</span> is being adopted faster than agencies can adapt — brands now demand real-time personalization, localization, and compliance.</div>
            <div className="why-now-point">The <span className="why-now-blue">creator economy is maturing</span>: 450M+ creators exist globally, yet monetization infrastructure is fragmented, slow, and mostly built for Web2.</div>
            <div className="why-now-point"><span className="why-now-blue">Regulatory pressure is rising</span> — FTC, GDPR, and platform policy shifts will make compliance automation essential, not optional.</div>
            <div className="why-now-point"><span className="why-now-blue">Open-source AI + UGC unlock</span> means Mirao can dominate long-tail scale — before legacy incumbents can pivot.</div>
          </div>
        </div>
        <div className="why-now-investor-btn-row">
          <button className="why-now-investor-btn"><span className="lock-icon">🔒</span> Unlock Investor Access</button>
          <div className="why-now-investor-subtext">Limited Availability – Investment Round Closing Soon</div>
        </div>
      </section>
      {/* Strategic Growth Roadmap Section */}
      <section className="roadmap-section">
        <div className="roadmap-card">
          <div className="roadmap-header-row">
            <span className="roadmap-title">Strategic Growth Roadmap</span>
            <span className="roadmap-milestone-badge">1 of 7 Milestones Completed</span>
          </div>
          <div className="roadmap-timeline">
            {/* Milestone 1 */}
            <div className="roadmap-item roadmap-item-green">
              <div className="roadmap-dot roadmap-dot-green"></div>
              <div className="roadmap-item-content">
                <div className="roadmap-item-row">
                  <span className="roadmap-date roadmap-date-green">April 2025</span>
                  <span className="roadmap-status roadmap-status-green">Completed</span>
                </div>
                <div className="roadmap-item-title roadmap-item-title-green">Rs 100K Founder Capital</div>
                <div className="roadmap-item-desc">Deploy founder capital to build product infrastructure, validate creator-side demand, and assemble initial ops team. 10,000+ creators and 100+ global brands in pre-launch pipeline.</div>
              </div>
            </div>
            {/* Milestone 2 */}
            <div className="roadmap-item roadmap-item-blue">
              <div className="roadmap-dot roadmap-dot-blue"></div>
              <div className="roadmap-item-content">
                <div className="roadmap-item-row">
                  <span className="roadmap-date roadmap-date-blue">August 2025</span>
                </div>
                <div className="roadmap-item-title roadmap-item-title-blue">MVP Alpha Launch + HyprLinc :50</div>
                <div className="roadmap-item-desc">Public alpha with AI Editor v1, licensing engine, and real-time customization. 50 hand-picked creators, brands, and agencies testing features via HyprLinc:50 program.</div>
                <div className="roadmap-badges-row">
                  <span className="roadmap-badge roadmap-badge-green">150+ Pilot Partners</span>
                </div>
              </div>
            </div>
            {/* Milestone 3 */}
            <div className="roadmap-item roadmap-item-pink">
              <div className="roadmap-dot roadmap-dot-pink"></div>
              <div className="roadmap-item-content">
                <div className="roadmap-item-row">
                  <span className="roadmap-date roadmap-date-pink">Q3 2025</span>
                </div>
                <div className="roadmap-item-title roadmap-item-title-pink">Seed Funding Round (Rs 2.5M)</div>
                <div className="roadmap-item-desc">Secure Rs 2.5M Seed to accelerate engineering, go-to-market, and creator onboarding at scale. Targeting 12-month runway and $1M post-Seed ARR.</div>
                <div className="roadmap-badges-row">
                  <span className="roadmap-badge roadmap-badge-pink">Rs 2.5M Target</span>
                </div>
              </div>
            </div>
            {/* Milestone 4 */}
            <div className="roadmap-item roadmap-item-purple">
              <div className="roadmap-dot roadmap-dot-purple"></div>
              <div className="roadmap-item-content">
                <div className="roadmap-item-row">
                  <span className="roadmap-date roadmap-date-purple">Q2 2026</span>
                </div>
                <div className="roadmap-item-title roadmap-item-title-purple">HyprLinc Full v1 Launch</div>
                <div className="roadmap-item-desc">Launch v1 with full dashboard, brand-side analytics, licensing hub, and API access. Reach Rs1.2M ARR through usage-based pricing, transactions, and early enterprise deals.</div>
                <div className="roadmap-badges-row">
                  <span className="roadmap-badge roadmap-badge-purple">Rs 1.2M ARR</span>
                </div>
              </div>
            </div>
            {/* Milestone 5 */}
            <div className="roadmap-item roadmap-item-orange">
              <div className="roadmap-dot roadmap-dot-orange"></div>
              <div className="roadmap-item-content">
                <div className="roadmap-item-row">
                  <span className="roadmap-date roadmap-date-orange">Q4 2026</span>
                </div>
                <div className="roadmap-item-title roadmap-item-title-orange">Global Scale & Integrations</div>
                <div className="roadmap-item-desc">Expand to global markets, integrate with major social and CRM platforms, and scale operations for 100K+ creators and 1K+ brands.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final Call to Action Section */}
      <section className="cta-section">
        <div className="cta-badge">Early Access Ends Soon</div>
        <h2 className="cta-title">
          Secure Your Spot in the <span className="blue-text">AI Creator Economy</span> —<br />Before the Door Closes
        </h2>
        <div className="cta-desc">
          HyprLinc gives you first-mover access to the future of AI-powered influencer marketing. Get early platform perks, preferred placement, and premium tools — before it opens to the public.
        </div>
        <div className="cta-btn-row">
          <button className="cta-btn">Claim Early Access <span className="cta-btn-badge">Limited Spots</span></button>
        </div>
        <div className="cta-subtext">Only 50 spots available. No commitment required.</div>
      </section>
      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-col footer-about">
            Connecting brands, influencers, and agencies through an innovative platform that simplifies collaboration and maximizes results.
          </div>
          <div className="footer-col footer-links">
            <div className="footer-col-title">Platform</div>
            <div className="footer-link">Overview</div>
            <div className="footer-link">Marketplace</div>
            <div className="footer-link">Leaderboard</div>
          </div>
          <div className="footer-col footer-links">
            <div className="footer-col-title">Solutions</div>
            <div className="footer-link">For Creators</div>
            <div className="footer-link">For Brands</div>
            <div className="footer-link">For Agencies</div>
          </div>
          <div className="footer-col footer-links">
            <div className="footer-col-title">Company</div>
            <div className="footer-link">Investors</div>
            <div className="footer-link">Comparison</div>
            <div className="footer-link">Pricing</div>
          </div>
        </div>
        <div className="footer-bottom-row">
          <div className="footer-copyright">© 2025 HyprLinc All rights reserved.</div>
          <div className="footer-bottom-links">
            <span className="footer-bottom-link">Privacy Policy</span>
            <span className="footer-bottom-link">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
