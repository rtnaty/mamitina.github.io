import React, { useEffect } from 'react';
import i18n from './i18n';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const switchLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };

  // Set the initial language based on the stored preference or default to 'fr'
  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
      i18n.changeLanguage(storedLang);
    } else {
      i18n.changeLanguage('fr');
    }
  }, []);

  return (
    <div>
      <Header switchLanguage={switchLanguage} />
      <About />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;