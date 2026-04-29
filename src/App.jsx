import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import smartersLogo from './assets/smarters-txt.png';
import smartersMonoLogo from './assets/smarters-mono.png';
import dEngageLogo from './assets/dengage-logo.png';
import dashLogo from './assets/20dash-logo.png';
import eventLogo from './assets/nome-evento.png';
import metaLogo from './assets/meta-logo.png';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // 19 de Maio de 2026, 13:30
    const targetDate = new Date('2026-05-19T13:30:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRegistration = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc2Y_ksbJGTS2OvYqTNU_LPTmp11n57f-jw1gbaw9t2d4empQ/viewform', '_blank');
  };

  return (
    <>
      <div className="app-container">
        {/* Top Navbar */}
        <nav className="top-navbar animate-fade-up">
          <div className="partners-logos">
            <a href="https://smarters.ai/pt" target="_blank" rel="noopener noreferrer">
              <img src={smartersLogo} alt="Smarters" className="partner-img smarters-img" />
            </a>
            <div className="divider"></div>
            <a href="https://dengage.com/br/" target="_blank" rel="noopener noreferrer">
              <img src={dEngageLogo} alt="D-engage" className="partner-img dengage-img" />
            </a>
            <div className="divider"></div>
            <a href="https://20dash.com/pt/" target="_blank" rel="noopener noreferrer">
              <img src={dashLogo} alt="20DASH" className="partner-img dash-img" />
            </a>
          </div>
        </nav>

        {/* Dynamic Mesh Background Elements */}
        <div className="bg-mesh-container">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
        </div>

        {/* LEFT PANE - LOGO & IDENTITY */}
        <div className="left-pane">
          <div className="main-logo animate-fade-up delay-1">
            <span className="word-whatsapp">WhatsApp</span>
            <span className="word-toolbox">Toolbox.</span>
          </div>

          <div className="bubbles-container animate-fade-up delay-2">
            <div className="bubble bubble-dark bubble-left">
              SÃO PAULO
            </div>
            <div className="bubble bubble-light bubble-right">
              19 DE MAIO | 13:30
            </div>
            <div className="bubble bubble-dark bubble-left meta-bubble">
              <img src={metaLogo} alt="Meta" className="meta-icon" />
              META OFFICE - SP
            </div>
          </div>
        </div>

        {/* RIGHT PANE - CTA */}
        <div className="right-pane">
          <div className="cta-card animate-fade-up delay-3">
            <h2>Confirme sua presença</h2>
            <p>Confirme sua presença no principal evento sobre a Nova Internet dos Agentes.</p>

            <button onClick={handleRegistration} className="cta-btn">
              Confirmar <ArrowRight size={20} />
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="countdown-container animate-fade-up delay-3">
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="countdown-label">Dias</span>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-label">Horas</span>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">Min</span>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="countdown-label">Seg</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-content animate-fade-up delay-4">
          <img src={smartersMonoLogo} alt="Smarters" className="footer-logo" />
          <p>Transformando conversas em resultados através de agentes de IA conversacionais</p>
          <div className="social-links">
            <a href="https://instagram.com/smarters.ai" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="https://linkedin.com/company/smarters" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
