import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Particles from 'react-particles-js';
import ParticlesSmall from './ParticlesSmall';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STYLES = styled.div`
    height: auto;
    width: auto;
    position: relative;
`;


const CONTAINER = styled.div`
    height: auto;
    width: auto;
    padding: 1.5rem;
    //position: absolute;
    //background: red;
    background: #181818;

    p {
        margin: 1.4rem auto;
    }

    .highlight {
        color: #20FC8F;
    }

    .highlight-2 {
        //color: #DF2935;
        color: #20FC8F;
    }

    .fa-2x {
        margin: 0 auto;
    }

    @media(min-width: 992px) {
        width: 70%;
        margin: 5rem auto;

        h3 {
            text-align: center;
        }

        p {
            
        }
    }
`;

const H3CONTAINER = styled.div`
    background: #181818;
    text-align: center;
    margin-bottom: 3rem;
`;


const About = () => {
    return (
        <STYLES>
            {/*<ParticlesSmall />*/}
            <CONTAINER name="about-me">
                <ScrollAnimation  animateIn="fadeIn" duration="3">
                    <H3CONTAINER>
                        <h3>About Me</h3>
                        <FontAwesomeIcon
                                    icon='gem'
                                    size="2x"
                                    color="#20FC8F"
                                />
                    </H3CONTAINER>
                    <p>I am a front-end developer from <span className="highlight-2">NYC</span>.</p>
                    <p>I build modern, responsive web apps with React.js and am proficient in the core web languages <span className="highlight-2">HTML5/CSS3/Javascript</span>, as well as many other libraries and frameworks such as <span className="highlight-2">Redux, Sass, Styled-Components, Mapbox, Leaflet, D3</span>, etc... </p>
                    <p>I also publish web development related articles on <span className="highlight"><a href="#">Hackernoon</a></span></p>
                    <p>I am passionate about all things web development, New York Rangers hockey, crypto-currency, and entrepreneurship.</p>
                    <p>Currently I am seeking a front-end role in the NYC metro area.</p>
                </ScrollAnimation>
            </CONTAINER>
        </STYLES>
    );
}

export default About;