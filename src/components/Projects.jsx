import { useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const sectionRef = useRef(null);

  const projectsData = [
    {
      title: 'Multi-Disease Prediction Web App',
      tech: ['Python', 'Flask', 'Machine Learning'],
      description: [
        'Built an ML-based web app to predict diseases (diabetes, heart disease)',
        'Developed REST API backend using Flask',
        'Structured user input and real-time prediction output',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    {
      title: 'Cloud-Based Web App Deployment',
      tech: ['AWS', 'Flask', 'Linux'],
      description: [
        'Deployed a Flask web application on an AWS EC2 instance',
        'Configured IAM roles and managed secure access',
        'Stored static assets and data backups in S3',
        'Set up Linux server environment and handled deployment using SSH',
        'Ensured application availability and basic monitoring',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
    },
    {
      title: 'Image Steganography Application',
      tech: ['Python', 'PIL', 'NumPy', 'Tkinter'],
      description: [
        'Implemented data hiding in images using PIL and NumPy',
        'Developed encoding/decoding logic with a Tkinter GUI',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
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
      const elements = sectionRef.current.querySelectorAll('.fade-in');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="container">
        <div className="section-eyebrow fade-in">
          <span></span>
          <span></span>
        </div>
        <h2 className="section-title fade-in">Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="project-description">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
