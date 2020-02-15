import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithub, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import { faGem, faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Reset } from 'styled-reset';

library.add(fab, faLinkedin, faGithub, faStackOverflow, faGem, faCode, faDesktop);


function App() {
  return (
    <React.Fragment>
      <Reset />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <Footer />
      <GlobalStyle />
    </React.Fragment>

  );
}

export default App;
