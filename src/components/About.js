import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Particles from 'react-particles-js';
import ParticlesSmall from './ParticlesSmall';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import D3 from '../assets/d3.svg';

const STYLES = styled.div`
    height: auto;
    width: 100%;
    position: relative;
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,500|IBM+Plex+Sans:400,500&display=swap');

`;

const SKILLS = styled.div`
    margin: 3rem auto;

    p {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        margin: 0 auto;
        font-size: 1.3rem;
        font-weight: 500;
        text-transform: uppercase;
        color: #20FC8F;
        margin: .3rem;
        font-family: 'IBM Plex Mono', monospace;
        text-align: center;
    }

    @media(min-width: 768px) {
        width: 60%;
    }
`;

const CONTAINER = styled.div`
    height: auto;
    width: auto;
    padding: 1rem;
    background: #181818;
    margin-top: 5rem;
    position: relative;

    .icon-span {
      padding-right: .5em;
      padding-left: .5em;
    }

    .particles-container {
        height: 300px;
        width: 300px;
        position: absolute;
        top: 0;
        right: 0;

        canvas {
            //width: 100px;
            //height: 100px;
            z-index: 999;
        }
    }
  
    p {
        margin: 1rem auto;
        width: 80%;
    }

    .highlight {
        color: #20FC8F;
    }

   .underline {
       text-decoration: underline;
   }

    .fa-2x {
        margin: 0 auto;
    }

    @media(min-width: 992px) {
        width: 70%;
        margin: 5rem auto;
        padding: .5rem;

        h3 {
            text-align: center;
        }

        p {
            
        }
    }
`;

const H3CONTAINER = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 3rem;
`;


const About = () => {
    return (
        <STYLES>
            <CONTAINER name="about-me">
                <ScrollAnimation  animateIn="fadeIn" duration="3" animateOnce="true">
                    <H3CONTAINER>
                        <h3>About Me</h3>
                        <FontAwesomeIcon
                            icon='gem'
                            size="2x"
                            color="#20FC8F"
                        />
                    </H3CONTAINER>
                    <p>I am a front-end developer from NYC.</p>
                    <p>I build modern, responsive web apps with React.js and am proficient in the core web languages HTML5, CSS3, Javascript, as well as many other libraries and frameworks such as Redux, Sass, Styled-Components, Mapbox, Leaflet, D3, etc... </p>
                    <p>I also publish web development related articles on <span className="highlight underline"><a href="https://hackernoon.com/@nick_kinlen">Hackernoon</a></span>.</p>
                    <p>I am passionate about all things web development, New York Rangers hockey, crypto-currency ,and entrepreneurship.</p>
                    <p>Currently I am seeking a front-end role in the NYC metro area.</p>
                </ScrollAnimation>
                <ScrollAnimation  animateIn="fadeIn" duration="3" animateOnce="true">
                    <SKILLS>
                        <H3CONTAINER>
                            <h3>Skills</h3>
                            <FontAwesomeIcon
                                icon='gem'
                                size="2x"
                                color="#20FC8F"
                            />
                        </H3CONTAINER>
                        <p>
                            HTML -
                            CSS -
                            Javascript -
                            React -
                            Redux -
                            Sass
                            Styled-Components -
                            Node -
                            Express -
                            Mapbox
                            Leaflet -
                            D3 -
                            Jquery
                        </p>
                    </SKILLS>
                </ScrollAnimation>
            </CONTAINER>
        </STYLES>
    );
}

export default About;