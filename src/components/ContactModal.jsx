import { useState } from 'react';
import { navigate } from '../router';
import './Modal.scss';

function ApplyModal({ onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience_level: '',
    property_address: '',
    estimated_budget: '',
    message: '',
    sms_consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const goTo = (path) => (e) => {
    e.preventDefault();
    onClose?.();
    navigate(path);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>&times;</button>
        {submitted ? (
          <div className="modal__success">
            <h2>Application Received!</h2>
            <p>Our team will review your application and get back to you within hours.</p>
            <button className="btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2 className="modal__title">Get Approved Now</h2>
            <p className="modal__desc">
              Fill out the application below and our team will have you approved within hours.
            </p>
            <form className="modal__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <select
                name="experience_level"
                value={form.experience_level}
                onChange={handleChange}
              >
                <option value="">Investment Experience</option>
                <option value="first_time">First Time Investor</option>
                <option value="1_5_deals">1-5 Deals Completed</option>
                <option value="5_plus">5+ Deals Completed</option>
              </select>
              <input
                type="text"
                name="property_address"
                placeholder="Property Address (if applicable)"
                value={form.property_address}
                onChange={handleChange}
              />
              <input
                type="text"
                name="estimated_budget"
                placeholder="Estimated Loan Amount"
                value={form.estimated_budget}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Additional Details"
                value={form.message}
                onChange={handleChange}
                rows={3}
              />
              <label className="modal__consent">
                <input
                  type="checkbox"
                  name="sms_consent"
                  checked={form.sms_consent}
                  onChange={handleChange}
                  required
                />
                <span>
                  By checking this box, I agree to receive SMS messages from Flip Finance Co regarding my inquiry and services. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. See our{' '}
                  <a href="/privacy-policy" onClick={goTo('/privacy-policy')}>Privacy Policy</a>{' '}
                  and{' '}
                  <a href="/terms-of-use" onClick={goTo('/terms-of-use')}>Terms of Use</a>.
                </span>
              </label>
              <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Apply Now'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ApplyModal;
