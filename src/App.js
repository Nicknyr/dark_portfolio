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
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Global from './components/GlobalStyles';
import Container from './components/Container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithub, faStackOverflow, faJsSquare, faHtml5, faCss3Alt, faReact, faNode, faNpm, faGit, faSass, faLinux, faBitcoin} from '@fortawesome/free-brands-svg-icons';
import { faGem, faLaptop, faCode, faDesktop, faBars, faTimes, faCity, faHockeyPuck, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Reset } from 'styled-reset';
import ParticlesSmall from './components/ParticlesSmall';

library.add(fab, faLinkedin, faGithub, faStackOverflow, faGem, faCode, faDesktop, faJsSquare, faHtml5, faCss3Alt, faReact, faNode, faNpm, faGit, faSass, faLinux, faBars, faTimes, faCity, faBitcoin, faHockeyPuck, faBriefcase, faLaptop);


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
      <Global />
    </React.Fragment>

  );
}

export default App;
