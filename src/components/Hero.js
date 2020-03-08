import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, animateScroll as scroll } from "react-scroll";

const STYLES = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    //display: flex;
    //justify-content: center;
    //align-items: center;
    //background: rgba(32, 32, 32, 0.1);
    //background: rgba(0, 0, 0, 0.7);
    background: #181818;
    //background: #1f1f1f;
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
    //background: rgba(0, 0, 0, 0.8);
    background: rgba(24, 24, 24, .8);
    padding: 2rem;
    margin-top: 10rem;

    .toggle {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .one {
      z-index: 999;
      display: none;
    }

    .two {
      z-index: 1;
      display: none;
    }
    .three  {
      z-index: 2;
      display: none;
    }
     .four {
      z-index: 3;
    }
  
    h1, h2 {
      color: #E8E9F3;
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
    background: #DF2935;
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
                <ScrollAnimation  animateIn="fadeIn" delay="1500" duration="3">
                    <h1>Hi, I'm Nick</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="3000" duration="3">
                    <h2>A  
                        <span className="toggle">
                          <span className="one">  developer </span>
                          <span className="two"> designer </span>
                          <span className="three"> tech blogger </span>
                          <span className="four"> entrepreneur </span>
                        </span>
                       from NYC</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="5000" duration="3">
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