import { useEffect, useState, useRef } from 'react';
import { useEditableContent, useEditablePhoto } from '../hooks/useEditableContent';
import './Hero.css';

const DEFAULT_INTRO =
  'MCA graduate with a strong drive and attention to detail, passionate about software development and cloud technologies, with hands-on experience in Java, SQL, Python, and cloud-based application development using AWS services.';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const fullText = 'Software Engineer';
  const heroRef = useRef(null);
  const fileInputRef = useRef(null);

  const intro = useEditableContent('hero_intro', DEFAULT_INTRO);
  const photo = useEditablePhoto('hero_photo', '/images/Sushmitha.jpeg.jpeg');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    if (heroRef.current) {
      heroRef.current.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) photo.handleUpload(file);
  };

  const triggerUpload = () => fileInputRef.current?.click();

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <span className="badge-dot"></span>
            <span className="badge-text"> Available for opportunities</span>
          </div>

          <h1 className="hero-title fade-in">
            Hi, I'm <span className="hero-name">Sushmita Sudhakar</span>
          </h1>

          <div className="hero-subtitle fade-in">
            <span className="subtitle-text">{displayText}</span>
            <span className={`cursor ${isTypingDone ? 'blink' : ''}`}>|</span>
          </div>

          {intro.isEditing ? (
            <div className="editable-field fade-in">
              <textarea
                className="edit-textarea"
                value={intro.draft}
                onChange={(e) => intro.setDraft(e.target.value)}
                rows={4}
                autoFocus
              />
              <div className="edit-actions">
                <button className="edit-save-btn" onClick={intro.saveEdit}>Save</button>
                <button className="edit-cancel-btn" onClick={intro.cancelEdit}>Cancel</button>
                <button className="edit-reset-btn" onClick={intro.resetToDefault}>Reset</button>
              </div>
            </div>
          ) : (
            <div className="hero-description-wrapper fade-in">
              <p className="hero-description">{intro.value}</p>
              <button className="edit-inline-btn" onClick={intro.startEdit} title="Edit intro text">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Edit
              </button>
            </div>
          )}

          <div className="hero-buttons fade-in">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="/Sushmita_Sudhakar_Resume.pdf" download className="btn btn-secondary">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>

          <div className="hero-socials fade-in">
            <a href="https://github.com/sushmitasudhakar30-hue" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/sushmita-developer" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:sushmitasudhakar123@gmail.com" className="social-link" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image fade-in">
          <div className="image-wrapper">
            <div className="image-ring">
              <img
                src={photo.src}
                alt="Sushmita Sudhakar"
                className="profile-image"
              />
              <button className="photo-upload-btn" onClick={triggerUpload} title="Change profile photo">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
                <span>Change Photo</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="file-input-hidden"
                onChange={handleFileChange}
                aria-label="Upload profile photo"
              />
            </div>
            {photo.src !== '/images/Sushmitha.jpeg.jpeg' && (
              <button className="photo-reset-btn" onClick={photo.resetPhoto} title="Reset to original photo">
                Reset photo
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>

      <div className="hero-glow-top"></div>
      <div className="hero-glow-bottom"></div>
    </section>
  );
}

export default Hero;
