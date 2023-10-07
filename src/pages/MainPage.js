// src/pages/MainPage.js
import React from 'react';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';

import Contact from '../components/Contact';

function MainPage() {
  return (
    <div>
      <Header  />
      <Skills />
      <Portfolio />
      
      <Contact />
    </div>
  );
}

export default MainPage;
