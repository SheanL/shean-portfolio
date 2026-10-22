import React from 'react';

export default function SoftSkills() {
  const skills = [
    { nameEn: 'Communication', nameNl: 'Communicatie', icon: '💬' },
    { nameEn: 'Innovation & Problem Solving', nameNl: 'Innovatie & Probleemoplossing', icon: '💡' },
    { nameEn: 'Team Collaboration', nameNl: 'Samenwerking & Extraversie', icon: '🤝' },
    { nameEn: 'Conscientiousness & Detail', nameNl: 'Nauwkeurigheid & Eigenaarschap', icon: '🎯' },
    { nameEn: 'Altruism & Empathy', nameNl: 'Behulpzaamheid & Empathie', icon: '❤️' },
    { nameEn: 'Analytical Thinking', nameNl: 'Analytisch Denken', icon: '🧠' },
    { nameEn: 'Time & Task Management', nameNl: 'Tijd- en Taakbeheer', icon: '⏱️' },
  ];

  return (
    <div className="soft-skills-container">
      <style>{`
        .soft-skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .soft-skill-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.35rem 0.5rem;
          background: transparent;
          border: none;
          border-radius: 6px;
          font-size: 0.92rem;
          font-weight: 500;
          color: rgb(var(--gray-dark));
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease;
          cursor: default;
        }
        .soft-skill-item:hover {
          color: var(--accent);
          transform: translateX(6px) scale(1.02);
        }
        html.dark .soft-skill-item,
        .dark .soft-skill-item {
          color: #cbd5e1;
        }
        html.dark .soft-skill-item:hover,
        .dark .soft-skill-item:hover {
          color: #93c5fd;
        }
        .soft-skill-icon {
          font-size: 1.25rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .soft-skill-item:hover .soft-skill-icon {
          transform: scale(1.25);
        }
      `}</style>
      <ul className="soft-skills-list">
        {skills.map((skill) => (
          <li key={skill.nameEn} className="soft-skill-item">
            <span className="soft-skill-icon">{skill.icon}</span>
            <span className="lang-en">{skill.nameEn}</span>
            <span className="lang-nl">{skill.nameNl}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
