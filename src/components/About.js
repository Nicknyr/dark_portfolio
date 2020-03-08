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
        font-size: 1.1rem;
        font-weight: 500;
        text-transform: uppercase;
        color: #DF2935;
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
    //margin-left: 20px;
    //margin-right: 20px;

    .particles-container {
        height: 300px;
        width: 300px;
        position: absolute;
        top: 0;
        right: 0;
        //background: yellow;

        canvas {
            //width: 100px;
            //height: 100px;
            z-index: 999;
        }
    }
  
    p {
        margin: 1rem auto;
        //background: yellow;
        width: 80%;
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
        padding: .5rem;

        h3 {
            text-align: center;
        }

        p {
            
        }
    }
`;

const H3CONTAINER = styled.div`
    //background: #181818;
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 3rem;
`;


const About = () => {
    return (
        <STYLES>
            <CONTAINER name="about-me">
                {/*
                <div className="particles-container">
                    <ParticlesSmall />
                </div>
                */}
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
                    <p>I also publish web development related articles on <span className="highlight underline"><a href="#">Hackernoon</a></span></p>
                    <p>I am passionate about all things web development, New York Rangers hockey, crypto-currency, and entrepreneurship.</p>
                    <p>Currently I am seeking a front-end role in the NYC metro area.</p>
                </ScrollAnimation>
                <ScrollAnimation  animateIn="fadeIn" duration="3">
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
                
                {/*
                <ul>
                    
                        <FontAwesomeIcon
                            icon={['fab', 'react']}
                            size="2x"
                            color="#DF2935"
                        />
                    
                    
                        <FontAwesomeIcon
                            icon={['fab', 'javascript-square']}
                            size="2x"
                            color="#DF2935"
                        />
                    
                    
                        <FontAwesomeIcon
                            icon={['fab', 'html5']}
                            size="2x"
                            color="#DF2935"
                        />
                    
                    
                        <FontAwesomeIcon
                            icon={['fab', 'css3-alt']}
                            size="2x"
                            color="#DF2935"
                        />
                    
                    
                        <FontAwesomeIcon
                            icon={['fab', 'node']}
                            size="2x"
                            color="#DF2935"
                        />
                    
                    
                        <FontAwesomeIcon
                            icon={['fab', 'git']}
                            size="2x"
                            color="#DF2935"
                        />
                    
                    
                        <FontAwesomeIcon
                            icon={['fab', 'sass']}
                            size="2x"
                            color="#DF2935"
                        />
                    
                    
                        <FontAwesomeIcon
                            icon={['fab', 'npm']}
                            size="2x"
                            color="#DF2935"
                        />
                    
                    
                        <FontAwesomeIcon
                            icon={['fab', 'linux']}
                            size="2x"
                            color="#DF2935"
                        />
                    
                </ul>
                */}
            </CONTAINER>
        </STYLES>
    );
}

export default About;