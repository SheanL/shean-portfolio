import React, { useState, useEffect } from 'react';
import { CONTACT_EMAIL } from '../consts';
import './ContactForm.css';

export default function ContactForm() {
  const [lang, setLang] = useState('en');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);

    const handleLangChange = (e) => {
      if (e.detail && e.detail.lang) {
        setLang(e.detail.lang);
      }
    };
    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.target;
    const name = form.naam.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.bericht.value.trim();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject || `Nieuw bericht van ${name} via Portfolio`,
          message: message,
          from_name: `${name} (Portfolio)`,
          replyto: email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setToastVisible(true);
        form.reset();
        // Sluit de toast automatisch na 7 seconden
        setTimeout(() => {
          setToastVisible(false);
        }, 7000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setStatus('error');
    }
  };

  const placeholders = {
    name: lang === 'nl' ? 'bijv. Alex Janssens' : 'e.g. Alex Janssens',
    email: 'alex.janssens@example.com',
    subject: lang === 'nl' ? 'bijv. Stageaanbod / Samenwerking Full-Stack' : 'e.g. Internship Inquiry / Collaboration',
    message: lang === 'nl' 
      ? 'Hallo Shean, ik neem graag contact met je op over een opportuniteit...' 
      : 'Hi Shean, I would like to get in touch regarding an opportunity...',
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-row">
          <div className="contact-field">
            <label htmlFor="naam">
              <span className="lang-en">Name *</span>
              <span className="lang-nl">Naam *</span>
            </label>
            <input
              type="text"
              id="naam"
              name="naam"
              required
              autoComplete="name"
              placeholder={placeholders.name}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="email">
              <span className="lang-en">Email *</span>
              <span className="lang-nl">E-mail *</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              placeholder={placeholders.email}
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="subject">
            <span className="lang-en">Subject *</span>
            <span className="lang-nl">Onderwerp *</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder={placeholders.subject}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="bericht">
            <span className="lang-en">Message *</span>
            <span className="lang-nl">Bericht *</span>
          </label>
          <textarea
            id="bericht"
            name="bericht"
            rows="8"
            required
            placeholder={placeholders.message}
          />
        </div>

        <div className="contact-footer-bar">
          <p className="contact-note">
            <span className="lang-en">🔒 Your data is processed securely and directly.</span>
            <span className="lang-nl">🔒 Je gegevens worden veilig en rechtstreeks verwerkt.</span>
          </p>

          <button
            type="submit"
            className={`contact-submit ${status === 'loading' ? 'loading' : ''}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <span className="submit-loading-content">
                <span className="spinner-icon" />
                <span className="lang-en">Sending...</span>
                <span className="lang-nl">Verzenden...</span>
              </span>
            ) : (
              <span className="submit-normal-content">
                <span className="lang-en">Send Message →</span>
                <span className="lang-nl">Verstuur Bericht →</span>
              </span>
            )}
          </button>
        </div>

        {status === 'error' && (
          <div className="contact-error-banner">
            <span className="lang-en">⚠️ Something went wrong while sending. Please try again or reach out directly at {CONTACT_EMAIL}.</span>
            <span className="lang-nl">⚠️ Er ging iets mis bij het verzenden. Probeer het opnieuw of contacteer me rechtstreeks via {CONTACT_EMAIL}.</span>
          </div>
        )}
      </form>

      {/* Toast Popup onderaan het scherm */}
      {toastVisible && (
        <div className="contact-toast-popup" role="status" aria-live="polite">
          <div className="toast-content">
            <span className="toast-icon">✅</span>
            <div className="toast-text">
              <strong className="toast-title">
                <span className="lang-en">Message Received!</span>
                <span className="lang-nl">Bericht Ontvangen!</span>
              </strong>
              <p className="toast-desc">
                <span className="lang-en">Thanks for reaching out. I'll get back to you as soon as possible!</span>
                <span className="lang-nl">Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.</span>
              </p>
            </div>
            <button
              type="button"
              className="toast-close-btn"
              onClick={() => setToastVisible(false)}
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
