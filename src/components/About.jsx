import { useEffect, useRef } from 'react';
import { useEditableContent } from '../hooks/useEditableContent';
import './About.css';

const DEFAULT_JOURNEY =
  'MCA graduate with a strong drive and attention to detail, seeking to grow as a Software Developer. Passionate about software development and cloud technologies, with demonstrated skills in Java, SQL, Python, and cloud-based application development using AWS services. Enjoys building real-world, ML-integrated, and cloud-deployed applications.';

function About() {
  const sectionRef = useRef(null);
  const journey = useEditableContent('about_journey', DEFAULT_JOURNEY);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right')
        .forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="section-eyebrow fade-in">
          <span></span><span></span>
        </div>
        <h2 className="section-title fade-in">About Me</h2>

        <div className="about-grid">
          <div className="about-card fade-in-left">
            <div className="card-header">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="card-title">My Journey</h3>
            </div>

            {journey.isEditing ? (
              <div className="editable-field">
                <textarea
                  className="edit-textarea"
                  value={journey.draft}
                  onChange={(e) => journey.setDraft(e.target.value)}
                  rows={6}
                  autoFocus
                />
                <div className="edit-actions">
                  <button className="edit-save-btn" onClick={journey.saveEdit}>Save</button>
                  <button className="edit-cancel-btn" onClick={journey.cancelEdit}>Cancel</button>
                  <button className="edit-reset-btn" onClick={journey.resetToDefault}>Reset</button>
                </div>
              </div>
            ) : (
              <div>
                <p className="card-text">{journey.value}</p>
                <button className="edit-inline-btn" onClick={journey.startEdit}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  Edit
                </button>
              </div>
            )}
          </div>

          <div className="about-card fade-in-right">
            <div className="card-header">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="card-title">Current Status</h3>
            </div>
            <ul className="status-list">
              <li className="status-item">
                <span className="status-label">Role</span>
                <span className="status-value">Full-Stack Developer at HourlyRecruit Tech Labs</span>
              </li>
              <li className="status-item">
                <span className="status-label">Education</span>
                <span className="status-value">MCA — AMC Engineering College, Bengaluru (VTU)</span>
              </li>
              <li className="status-item">
                <span className="status-label">Languages</span>
                <span className="status-value">English (Proficient), Kannada (Native)</span>
              </li>
              <li className="status-item">
                <span className="status-label">Status</span>
                <span className="status-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Open to Full-Time Roles
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
