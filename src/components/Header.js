import React from 'react';
import { useTranslation } from 'react-i18next';

function Header({ switchLanguage }) {
  const { t, i18n } = useTranslation();

  // Assuming that data.main.social is an array of social items
  const socialIcons = t('main.social', { returnObjects: true }).map((item) => (
    <li key={item.name}>
      <a href={item.url}>
        <i className={item.className}></i>
      </a>
    </li>
  ));

  return (
    <header id="home">
      <div id="toggle" className="toggle noselect" onClick={switchLanguage}>
        <img
          id="flag"
          src={`/images/flags/${i18n.language}.svg`}
          alt="flag"
          className={`flag-icon ${i18n.language}`}
        />
      </div>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            HELLO,
            <br />
            I'm {t('main.name')}.
          </h1>
          <h3>
            <span>{t('main.occupation')}</span> {t('main.basedIn')} {t('main.address.city')}.
            <br />
            {t('main.description')}.
          </h3>
          <hr />
          <ul className="social">{socialIcons}</ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;
