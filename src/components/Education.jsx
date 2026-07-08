import { useEffect, useRef } from 'react';
import './Education.css';

function Education() {
  const sectionRef = useRef(null);

  const educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'AMC Engineering College, Bengaluru (VTU)',
      period: '2022 – 2024',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Chetana BCA and BBA College, Belagavi (Rani Channamma University)',
      period: '2019 – 2022',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education section" ref={sectionRef}>
      <div className="container">
        <div className="section-eyebrow fade-in">
          <span></span>
          <span></span>
        </div>
        <h2 className="section-title fade-in">Education</h2>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`education-card fade-in-${index === 0 ? 'left' : 'right'}`}
            >
              <div className="education-icon">
                {edu.icon}
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <span className="education-period">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
