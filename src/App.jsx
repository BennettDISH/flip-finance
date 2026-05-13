import { useState } from 'react';
import ApplyModal from './components/ContactModal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import { usePathname, navigate } from './router';
import './App.scss';

function HomePage() {
  const [showApply, setShowApply] = useState(false);

  return (
    <div className="app">
      <section className="hero">
        <div className="hero__top">
          <img src="/images/logo.webp" alt="Flip Finance" className="hero__logo" />
          <p className="hero__tagline">Private Capital Built for Seasoned Fix &amp; Flip Investors</p>
        </div>

        <div className="hero__ticker-wrap">
          <div className="hero__ticker" aria-hidden="true">
            <span>Flip Finance</span>
            <span>Flip Finance</span>
            <span>Flip Finance</span>
            <span>Flip Finance</span>
            <span>Flip Finance</span>
            <span>Flip Finance</span>
          </div>
        </div>

        <img src="/images/mountain-banner.webp" alt="" className="hero__mountain" />
      </section>

      <section className="cta-section">
        <div className="cta-card cta-card--single">
          <h2 className="cta-card__title">Get Approved Now</h2>
          <p className="cta-card__desc">
            Even if you haven't identified a specific property yet, obtaining approval now is the best way to ensure you can move quickly when the right opportunity arises.
          </p>
          <div className="cta-card__actions">
            <button className="btn-sleek" onClick={() => setShowApply(true)}>
              Apply Now
            </button>
            <button className="btn-sleek btn-sleek--disabled" disabled>
              Pay Now — Coming Soon
            </button>
          </div>
        </div>
      </section>

      <section className="about">
        <h2 className="about__title">About <span className="gold">Flip Finance</span></h2>
        <div className="about__grid">
          <div className="about__text">
            <p>
              Flip Finance was founded with a simple mission: give real estate investors access to <span className="gold">fast, reliable capital</span> without the red tape of traditional lending.
            </p>
            <p>
              We're not a bank. We're a team of investors and finance professionals who understand the fix-and-flip game from the inside out. Every member of our team has <span className="gold">real experience</span> in real estate investing — which means we evaluate deals the way you do.
            </p>
            <p>
              Based in <span className="gold">Denver, Colorado</span>, we serve investors across the region who are ready to move fast and close with confidence.
            </p>
          </div>
          <div className="about__stats">
            <div className="stat">
              <span className="stat__number gold">24hr</span>
              <span className="stat__label">Typical Approval Time</span>
            </div>
            <div className="stat">
              <span className="stat__number gold">100%</span>
              <span className="stat__label">Investor-Focused</span>
            </div>
            <div className="stat">
              <span className="stat__number gold">$0</span>
              <span className="stat__label">Upfront Fees</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--money">
        <div className="section__image">
          <img src="/images/monkey.webp" alt="The Money" />
        </div>
        <div className="section__content">
          <h2 className="section__title">The <span className="gold">Money</span></h2>
          <p>
            Unlike traditional hard money lenders that operate like banks — with rigid underwriting, committees, and slow approvals — Flip Finance provides <span className="gold">private capital</span> designed specifically for fix-and-flip investors.
          </p>
          <p>
            Our funding comes from private capital sources, which allows us to focus on the <span className="gold">deal itself</span>, not just paperwork and red tape. That means <span className="gold">faster decisions</span>, flexible structures, and funding that moves at the speed real estate investors actually operate.
          </p>
          <p>
            Where hard money lenders often feel like dealing with another bank, Flip Finance acts more like a <span className="gold">capital partner</span> — providing straightforward financing so you can secure opportunities, renovate quickly, and exit profitably.
          </p>
          <div className="section__taglines">
            <span>Less bureaucracy.</span>
            <span>More speed.</span>
            <span className="gold">Capital built for flippers.</span>
          </div>
        </div>
      </section>

      <section className="section section--investor">
        <div className="section__content">
          <h2 className="section__title">The <span className="gold">Investor</span></h2>
          <p>
            Whether you're closing your first deal or running multiple flips at once, capital is what moves everything.
          </p>
          <p>
            New investors get in the game <span className="gold">faster</span>.<br />
            Growing investors scale <span className="gold">without friction</span>.<br />
            Experienced flippers move on opportunities <span className="gold">instantly</span>.
          </p>
          <p>
            Same advantage at every level:
          </p>
          <p>
            <span className="gold">Speed.</span><br />
            <span className="gold">Access.</span><br />
            <span className="gold">Execution.</span>
          </p>
          <p>
            <span className="gold">No delays.</span> <span className="gold">No missed deals.</span> Just capital when it matters.
          </p>
        </div>
        <div className="section__image">
          <img src="/images/investor.webp" alt="The Investor" />
        </div>
      </section>

      <section className="reviews">
        <h2 className="reviews__title">What Our <span className="gold">Investors</span> Say</h2>
        <div className="reviews__grid">
          <div className="review-card">
            <div className="review-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-card__text">"Flip Finance is a game-changer. Competitive rates, two-day funding, and renovation draws in 48 hours. Plus, real answers are always a phone call away. Best value I've found as an investor. I've used them for my last 3 projects!"</p>
            <span className="review-card__author">— Huy Tran, Fix and Flip Investor</span>
          </div>
          <div className="review-card">
            <div className="review-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-card__text">"The process with Flip Finance was smooth, simple and affordable. From start to finish, the folks I spoke to were professional and kind. It was the fastest draw process I've ever experienced, and my funds were delivered within days. I am looking forward to using them again soon!"</p>
            <span className="review-card__author">— Ben Handler, Fix and Flip Investor</span>
          </div>
          <div className="review-card">
            <div className="review-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-card__text">"I've used Flip Finance on multiple deals here in Colorado and they've been great every time. Quick to fund, easy process, and no unnecessary back and forth. Speed and reliability matter — and they've delivered every time!"</p>
            <span className="review-card__author">— Justin Van Sickle, Fix and Flip Investor</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src="/images/logo.webp" alt="Flip Finance" className="footer__logo" />
        <div className="footer__actions">
          <button className="btn-sleek" onClick={() => setShowApply(true)}>Apply Now</button>
          <button className="btn-sleek btn-sleek--disabled" disabled>Pay Now — Coming Soon</button>
          <a href="https://course.wealthbyre.com/" target="_blank" rel="noopener noreferrer" className="btn-sleek">WBRE Course</a>
        </div>
        <div className="footer__info">
          <div className="footer__col">
            <h4>Location</h4>
            <p>Denver, Colorado</p>
          </div>
          <div className="footer__col">
            <h4>Phone</h4>
            <p><a href="tel:+17202716600">(720) 271-6600</a></p>
          </div>
          <div className="footer__col">
            <h4>Email</h4>
            <p><a href="mailto:info@flipfinance.com">info@flipfinance.com</a></p>
          </div>
        </div>
        <nav className="footer__legal">
          <a
            href="/privacy-policy"
            onClick={(e) => {
              e.preventDefault();
              navigate('/privacy-policy');
            }}
          >
            Privacy Policy
          </a>
          <span aria-hidden="true">·</span>
          <a
            href="/terms-of-use"
            onClick={(e) => {
              e.preventDefault();
              navigate('/terms-of-use');
            }}
          >
            Terms of Use
          </a>
        </nav>
        <p className="footer__copy">&copy; {new Date().getFullYear()} Flip Finance Co. All rights reserved.</p>
      </footer>

      {showApply && <ApplyModal onClose={() => setShowApply(false)} />}
    </div>
  );
}

function App() {
  const pathname = usePathname();

  if (pathname === '/privacy-policy') return <PrivacyPolicy />;
  if (pathname === '/terms-of-use') return <TermsOfUse />;
  return <HomePage />;
}

export default App;
