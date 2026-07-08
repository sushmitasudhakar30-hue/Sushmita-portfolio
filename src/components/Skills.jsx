import { useEffect, useRef } from 'react';
import './Skills.css';

function Skills() {
  const sectionRef = useRef(null);

  const skillsData = [
    {
      category: 'Programming Languages',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Java'],
    },
    {
      category: 'Frameworks & Libraries',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      skills: ['React.js', 'Node.js', 'Express.js', 'Bootstrap'],
    },
    {
      category: 'Databases',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: ['MongoDB', 'MySQL', 'SQLite'],
    },
    {
      category: 'Tools & Technologies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
    },
    {
      category: 'Development Practices',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <path d="M6 21V9a9 9 0 0 0 9 9"></path>
        </svg>
      ),
      skills: ['REST APIs', 'JWT Auth', 'CRUD', 'Version Control'],
    },
    {
      category: 'Soft Skills',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l1.9 4.6L19 8l-4.1 3.3L16 17l-4-3-4 3 1.1-5.7L5 8l5.1-1.4L12 2z"></path>
        </svg>
      ),
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Fast Learner'],
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
      const elements = sectionRef.current.querySelectorAll('.fade-in');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <div className="section-eyebrow fade-in">
          <span></span>
          <span></span>
        </div>
        <h2 className="section-title fade-in">
          Skills & Expertise
          <span className="section-subtitle">
            A curated toolkit honed across internships and projects.
          </span>
        </h2>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="skill-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">
                {category.icon}
              </div>
              <h3 className="skill-category">{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;