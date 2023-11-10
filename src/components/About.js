import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  const imagePath = `images/${t('main.image')}`;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={imagePath} alt={`${t('main.image')} Profile Pic`} />
        </div>
        <div className="nine columns main-col">
          <h2>{t('about.title')}</h2>
          <p>{t('main.bio')}</p>
          <div className="row">
            <div className="columns contact-details">
              <h3>{t('main.details')}</h3>
              <p className="address">
                <span>{t('main.name')}</span>
                <br />
                {t('main.address.street')}<br />
                {t('main.address.city')}, {t('main.address.state')}, {t('main.address.zip')}
                <br />
                {t('main.phone')}<br />
                {t('main.email')}
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={`./file/mamitina_cv_${t('lang')}.pdf`} target="_blank" rel="noopener noreferrer" className="button">
                  <i className="fa fa-download"></i> {t('main.download_cv')}
                </a>

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default About;