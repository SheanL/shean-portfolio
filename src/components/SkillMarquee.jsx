import React, { useState } from 'react';

export default function SkillMarquee() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { name: 'C#', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: '.NET / .NET Core', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Spring Boot', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'React & Native', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'SQL / MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'MongoDB (NoSQL)', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Prisma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg', invertDark: true },
    { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Cypress', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg', invertDark: true },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invertDark: true, isMonochrome: true },
  ];

  // We verdubbelen de lijst zodat de loop onzichtbaar doorgaat
  const marqueeItems = [...skills, ...skills];

  return (
    <div
      className={`marquee-container ${selectedSkill !== null ? 'has-selection' : ''}`}
      onClick={(event) => {
        if (!event.target.closest('.marquee-item')) {
          setSelectedSkill(null);
        }
      }}
    >
      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          padding: 2rem 0;
          background: rgba(0, 0, 0, 0.02);
          border-radius: 12px;
          margin: 2rem 0;
          position: relative;
        }
        :global(.dark) .marquee-container {
          background: rgba(255, 255, 255, 0.02);
        }
        
        .marquee-content {
          display: flex;
          width: fit-content;
          animation: marquee 50s linear infinite;
        }

        .marquee-container.has-selection .marquee-content {
          animation-play-state: paused;
        }

        @media (hover: hover) and (pointer: fine) {
          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }
        }

        .marquee-item {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 2rem;
          transition: transform 0.3s ease;
          cursor: pointer;
          position: relative;
          border: 0;
          padding: 0;
          background: transparent;
          color: inherit;
          font: inherit;
          -webkit-tap-highlight-color: transparent;
          appearance: none;
        }

        .marquee-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.65);
          transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
        }

        .marquee-item:hover img {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.25);
        }

        .marquee-item-label {
          position: absolute;
          top: calc(100% + 0.7rem);
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          max-width: 140px;
          color: inherit;
          font-size: 0.8rem;
          line-height: 1.2;
          text-align: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }

        .marquee-item:hover .marquee-item-label,
        .marquee-item:focus-visible .marquee-item-label,
        .marquee-item.selected .marquee-item-label {
          opacity: 1;
        }

        .marquee-item:focus {
          outline: none;
        }

        .marquee-item.selected {
          transform: translateY(-2px);
        }

        .marquee-item.selected img {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.25);
        }

        .marquee-item-label {
          color: rgb(var(--black));
        }

        :global(.dark) .marquee-item-label {
          color: #f8fafc;
        }

        /* Dark Mode: rust = helder lichtgrijs/zilver; hover = volledige originele merk-kleuren */
        :global(.dark) .marquee-item img {
          filter: grayscale(100%) invert(0.45) brightness(1.4) opacity(0.75);
        }

        :global(.dark) .marquee-item:hover img {
          filter: grayscale(0%) invert(0) brightness(1.1) opacity(1);
          transform: scale(1.25);
        }

        /* Logo's met donkere vlakken/letters (zoals Cypress 'cy', Prisma, GitHub): 
           In ruststand: alle elementen egaal lichtgrijs (Light Mode) en helder zilver (Dark Mode).
           In hover: volledige merk-kleuren. */
        .marquee-item.invert-dark img {
          filter: brightness(0) invert(0.45) !important;
          opacity: 0.85 !important;
        }
        .marquee-item.invert-dark:hover img {
          filter: grayscale(0%) opacity(1) !important;
          transform: scale(1.25);
        }

        :global(.dark) .marquee-item.invert-dark img {
          filter: brightness(0) invert(1) !important;
          opacity: 0.75 !important;
        }

        :global(.dark) .marquee-item.invert-dark:hover img {
          filter: grayscale(0%) brightness(1.2) opacity(1) !important;
          transform: scale(1.25);
        }

        /* Puur monochrome logo's zoals GitHub (zwart/wit in hover) */
        .marquee-item.is-monochrome:hover img {
          filter: brightness(0) opacity(1) !important;
        }

        :global(.dark) .marquee-item.is-monochrome:hover img {
          filter: brightness(0) invert(1) !important;
          opacity: 1 !important;
        }

        .marquee-item.selected.invert-dark img {
          filter: grayscale(0%) opacity(1) !important;
          transform: scale(1.25);
        }

        :global(.dark) .marquee-item.selected.invert-dark img {
          filter: grayscale(0%) brightness(1.2) opacity(1) !important;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      
      <div className="marquee-content">
        {marqueeItems.map((skill, index) => (
          <button
            key={index}
            type="button"
            className={`marquee-item ${selectedSkill === index ? 'selected' : ''} ${skill.invertDark ? 'invert-dark' : ''} ${skill.isMonochrome ? 'is-monochrome' : ''}`}
            title={skill.name}
            aria-label={skill.name}
            onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
          >
            <img src={skill.img} alt={skill.name} />
            <span className="marquee-item-label" aria-hidden="true">{skill.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
