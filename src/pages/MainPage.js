import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Navigator from '../navigator/Navigator';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

const MainPageContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Display children in a column */
  align-items: center; /* Center align children horizontally */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row; /* Display children in a row */
  gap: 20px; /* Add some space between children */
`;

function MainPage() {
  return (
    <MainPageContainer>
      <Header />
      <ContentContainer>
        <AboutMe />
        <Navigator />
      </ContentContainer>
      
      <Footer/>
    </MainPageContainer>
  );
}

export default MainPage;
