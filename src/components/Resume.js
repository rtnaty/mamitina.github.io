// Resume.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t } = useTranslation();
  
  const education = t('resume.education', { returnObjects: true }).map((item) => (
    <div key={item.school}>
      <h3>{item.school}</h3>
      <p className="info">
        {item.degree} <span>•</span> <em className="date">{item.graduated}</em>
      </p>
      <p>{item.description}</p>
    </div>
  ));

  const work = t('resume.work', { returnObjects: true }).map((item) => ( 
    <div key={item.company}>
      <h3>{item.company}</h3>
      <p className="info">
        {item.title} <span>•</span> <em className="date">{item.years}</em>
      </p>
      <p>{item.description}</p>
    </div>
  ));

  const skills = t('resume.skills', { returnObjects: true }).map((item) => ( 
    <li key={item.name}>
      <span style={{ width: item.level }} className={`bar-expand ${item.name.toLowerCase()}`} />
      <em>{item.name}</em>
    </li>
  ));

  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>{t('resume.experience')}</span>
          </h1>
        </div>
        <div className="nine columns main-col">{work}</div>
      </div>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>{t('resume.education')}</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>{t('resume.skills')}</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>{t('resume.skillmessage')}</p>
          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
