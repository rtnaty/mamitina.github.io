// Resume.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  
  const projects = t('portfolio.projects', { returnObjects: true }).map((item) => (
    <div key={item.school}>
      <h3>{item.title}</h3>
      <p className="info">
        {item.category} <span>•</span> <em className="date">{item.graduated}</em>
      </p>
      <p>{item.description}</p>
    </div>
  ));

  return (
    <section id="portfolio">
      <div className="row projects">
        <div className="three columns header-col">
          <h1>
            <span>{t('portfolio.title')}</span>
          </h1>
        </div>
        <div className="nine columns main-col">{projects}</div>
      </div>
    </section>
  );
};

export default Portfolio;
