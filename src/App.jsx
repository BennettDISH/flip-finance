import { useState } from 'react';
import ApplyModal from './components/ContactModal';
import './App.scss';

function App() {
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
            Regardless if you have a property in mind yet, getting approved now is the best way to be able to close quickly.
          </p>
          <button className="btn-sleek" onClick={() => setShowApply(true)}>
            Apply Now
          </button>
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
            Whether you’re closing your first deal or running multiple flips at once, capital is what moves everything.
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

      <section className="reviews">
        <h2 className="reviews__title">What Our <span className="gold">Investors</span> Say</h2>
        <div className="reviews__grid">
          <div className="review-card">
            <div className="review-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-card__text">"Fastest funding I've ever experienced. I had approval within hours and closed in under a week. These guys actually understand the flip game."</p>
            <span className="review-card__author">— Jordan M., Denver CO</span>
          </div>
          <div className="review-card">
            <div className="review-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-card__text">"No committees, no runaround. Just straight answers and fast money. Flip Finance is the only lender I'll use going forward."</p>
            <span className="review-card__author">— Marcus T., Aurora CO</span>
          </div>
          <div className="review-card">
            <div className="review-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-card__text">"I've worked with hard money lenders who took weeks to close. Flip Finance had my back from day one. Real investors funding real investors."</p>
            <span className="review-card__author">— Sarah K., Lakewood CO</span>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2 className="contact__title">Get In <span className="gold">Touch</span></h2>
        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__item">
              <h3>Location</h3>
              <p>Denver, Colorado</p>
            </div>
            <div className="contact__item">
              <h3>Phone</h3>
              <p><a href="tel:+13035551234">(303) 555-1234</a></p>
            </div>
            <div className="contact__item">
              <h3>Email</h3>
              <p><a href="mailto:info@flipfinance.com">info@flipfinance.com</a></p>
            </div>
          </div>
          <div className="contact__cta">
            <p>Ready to get started? Get approved today and be ready to close on your next deal.</p>
            <button className="btn-sleek" onClick={() => setShowApply(true)}>
              Apply Now
            </button>
            <button className="btn-sleek btn-sleek--disabled" disabled>
              Pay Now — Coming Soon
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src="/images/logo.webp" alt="Flip Finance" className="footer__logo" />
        <div className="footer__actions">
          <button className="btn-sleek" onClick={() => setShowApply(true)}>Apply Now</button>
          <button className="btn-sleek btn-sleek--disabled" disabled>Pay Now — Coming Soon</button>
        </div>
        <p className="footer__copy">&copy; {new Date().getFullYear()} Flip Finance. All rights reserved.</p>
      </footer>

      {showApply && <ApplyModal onClose={() => setShowApply(false)} />}
    </div>
  );
}

export default App;
