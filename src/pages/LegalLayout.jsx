import { navigate } from '../router';
import './Legal.scss';

export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div className="legal-page">
      <header className="legal-page__header">
        <a
          href="/"
          className="legal-page__back"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <img src="/images/logo.webp" alt="Flip Finance" className="legal-page__logo" />
        </a>
      </header>
      <main className="legal-page__main">
        <h1 className="legal-page__title">{title}</h1>
        <p className="legal-page__updated">Last Updated: {lastUpdated}</p>
        <div className="legal-page__body">{children}</div>
      </main>
      <footer className="legal-page__footer">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          &larr; Back to Home
        </a>
        <p>&copy; {new Date().getFullYear()} Flip Finance Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
