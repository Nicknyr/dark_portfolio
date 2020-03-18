import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STYLES = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    background: #181818;
    overflow: auto;

    canvas {
        display: block;
        height: 100vh !important;
  
    }

    @media(min-width: 768px) {
        canvas {
            display: block;
        }
    }
`;

const CONTAINER = styled.div`
    position: absolute;
    background: rgba(24, 24, 24, .8);
    padding: 2rem;
    margin-top: 10rem;

    h1, h2 {
      color: #E8E9F3;
    }

    .icon-span {
      padding-right: .3em;
      padding-left: .3em;
    }
   
    @media(min-width: 768px) {
        width: 50%;
        margin-top: 10rem;
        margin-left: 5rem;

    }
`;

const BUTTON = styled.button`
    height: 3rem;
    width: 7rem;
    background: #D81E5B;
    border-radius: 10px;
    border: none;
    color: #E8E9F3;
    font-size: 16px;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: bold;
    margin-top: 2rem;
    cursor: pointer;

    &:hover {
        opacity: .9;
    }
`;

const Hero = () => {
    return (
        <STYLES>
            <CONTAINER>
                <ScrollAnimation  animateIn="fadeIn" delay="1500" duration="3" animateOnce="true">
                    <h1>Hi, I'm Nick</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="3000" duration="3" animateOnce="true">
                    <h2>A front-end web developer 
                      <span className="icon-span">
                        <FontAwesomeIcon
                              icon='code'
                              size="md"
                              color="#D81E5B"
                          />
                      </span>
                    </h2>
                    <h2>
                      from NYC
                        <span className="icon-span">
                          <FontAwesomeIcon
                                icon='city'
                                size="md"
                                color="#D81E5B"
                            />
                        </span>
                    </h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="5000" duration="3" animateOnce="true">
                    <Link
                        activeClass="active"
                        to="about-me"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >
                      <BUTTON>ABOUT ME</BUTTON>
                    </Link>
                </ScrollAnimation>
            </CONTAINER>
            <Particles
                params={{
                     "particles": {
                        "number": {
                          "value": 50,
                          "density": {
                            "enable": true,
                            "value_area": 700 // Denser the smaller the number.
                          }
                        },
                        "color": { // The color for every node, not the connecting lines.
                          "value": "#20FC8F" // Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
                        },
                        "shape": {
                            "type": "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
                            "stroke": { // The border
                              "width": 1,
                              "color": "##20FC8F"
                            }
                        },
                        "opacity": {
                          "value": 0.5,
                          "random": true
                        },
                        "size": {
                          "value": 6,
                          "random": true
                        },
                        "line_linked": {
                          "enable": true,
                          "distance": 200, // The radius before a line is added, the lower the number the more lines.
                          "color": "#20FC8F",
                          "opacity": 0.5,
                          "width": 2
                        },
                        "move": {
                          "enable": true,
                          "speed": 2,
                          "direction": "bottom", // Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
                          "random": true,
                          "straight": false, // Whether they'll shift left and right while moving.
                          "out_mode": "out", // What it'll do when it reaches the end of the canvas, either "out" or "bounce".
                          "bounce": false, 
                          "attract": { // Make them start to clump together while moving.
                            "enable": true,
                            "rotateX": 600,
                            "rotateY": 1200
                          }
                        }
                      },
                      "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "bubble"
                      },
            }} />
        </STYLES>
    );
}

export default Hero;