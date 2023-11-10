import React from 'react';
import i18n from './i18n';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const switchLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <Header switchLanguage={switchLanguage}/>
      <About/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;