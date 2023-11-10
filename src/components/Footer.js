import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  // Assuming that data.social is an array of social items
  const socialIcons = t('main.social', { returnObjects: true }).map((item) => (
    <li key={item.name}>
      <a href={item.url}>
        <i className={item.className}></i>
      </a>
    </li>
  ));

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{socialIcons}</ul>
          <ul className="copyright">
            <li>
              <span className="love">
                {t('footer.madeWith')} <i className="fa fa-heart pulse"></i> {t('footer.in')}
                <a
                  href="https://www.google.com/maps/place/Montr\xe9al,+QC/@45.5576996,-74.0104841,10z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5016889!4d-73.567256"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                  {t('footer.city')}
                </a>
                <br />
                © {t('footer.copyright')} - Mamitina
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div id="go-top">
        <a className="smoothscroll" title={t('footer.backToTop')} href="#home">
          <i className="icon-up-open"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;