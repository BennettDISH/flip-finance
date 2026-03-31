import { useState } from 'react';
import ContactModal from './components/ContactModal';
import FinancingForm from './components/FinancingForm';
import './App.scss';

function App() {
  const [showContact, setShowContact] = useState(false);
  const [showFinancing, setShowFinancing] = useState(false);
  const mainSiteUrl = import.meta.env.VITE_MAIN_SITE_URL || 'https://wealth-by-real-estate-production.up.railway.app/#platforms';

  return (
    <div className="app">
      <header className="header">
        <img src="/images/logo.webp" alt="Flip Finance" className="header__logo" />
        <nav className="header__nav">
          <a href={mainSiteUrl} className="header__link">Back to Main Site</a>
        </nav>
      </header>

      <section className="hero">
        <img src="/images/mountain-banner.webp" alt="" className="hero__bg" />
        <div className="hero__content">
          <h1 className="hero__title">Flip Finance</h1>
          <p className="hero__tagline">Private Capital for Real Estate Investors</p>
          <div className="hero__actions">
            <button className="btn" onClick={() => setShowFinancing(true)}>
              Apply for Financing
            </button>
            <button className="btn btn--outline" onClick={() => setShowContact(true)}>
              Get in Touch
            </button>
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
            Flip Finance is built for real estate investors who move fast.
          </p>
          <p>
            Unlike traditional hard money lenders that operate like banks — with rigid underwriting, committees, and slow approvals — Flip Finance provides private capital designed specifically for fix-and-flip investors.
          </p>
          <p>
            Our funding comes from private capital sources, which allows us to focus on the deal itself, not just paperwork and red tape. That means faster decisions, flexible structures, and funding that moves at the speed real estate investors actually operate.
          </p>
          <p>
            Where hard money lenders often feel like dealing with another bank, Flip Finance acts more like a capital partner — providing straightforward financing so you can secure opportunities, renovate quickly, and exit profitably.
          </p>
          <div className="section__taglines">
            <span>Less bureaucracy.</span>
            <span>More speed.</span>
            <span>Capital built for flippers.</span>
          </div>
          <button className="btn" onClick={() => setShowFinancing(true)}>
            Apply Now
          </button>
        </div>
      </section>

      <section className="section section--investor">
        <div className="section__content">
          <h2 className="section__title">The <span className="gold">Investor</span></h2>
          <p>
            Flip Finance is built for real estate investors who move fast.
          </p>
          <p>
            Unlike traditional hard money lenders that operate like banks — with rigid underwriting, committees, and slow approvals — Flip Finance provides private capital designed specifically for fix-and-flip investors.
          </p>
          <p>
            Our funding comes from private capital sources, which allows us to focus on the deal itself, not just paperwork and red tape. That means faster decisions, flexible structures, and funding that moves at the speed real estate investors actually operate.
          </p>
          <p>
            Where hard money lenders often feel like dealing with another bank, Flip Finance acts more like a capital partner — providing straightforward financing so you can secure opportunities, renovate quickly, and exit profitably.
          </p>
          <div className="section__taglines">
            <span>Less bureaucracy.</span>
            <span>More speed.</span>
            <span>Capital built for flippers.</span>
          </div>
          <button className="btn" onClick={() => setShowContact(true)}>
            Get in Touch
          </button>
        </div>
        <div className="section__image">
          <img src="/images/investor.webp" alt="The Investor" />
        </div>
      </section>

      <footer className="footer">
        <img src="/images/logo.webp" alt="Flip Finance" className="footer__logo" />
        <div className="footer__actions">
          <button className="btn" onClick={() => setShowFinancing(true)}>Apply for Financing</button>
          <button className="btn btn--outline" onClick={() => setShowContact(true)}>Contact Us</button>
          <a href={mainSiteUrl} className="btn btn--outline">Visit Our Website</a>
        </div>
        <p className="footer__copy">&copy; {new Date().getFullYear()} Flip Finance. All rights reserved.</p>
      </footer>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      {showFinancing && <FinancingForm onClose={() => setShowFinancing(false)} />}
    </div>
  );
}

export default App;
