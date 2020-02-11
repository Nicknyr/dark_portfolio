import React from 'react';
import styled, { css } from 'styled-components';
import ParticlesSmall from './ParticlesSmall';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NPM from '../assets/npm.png';
import Brochure from '../assets/brochure.png';
import Top100 from '../assets/top100.png';

const STYLES = styled.div`
    height: auto;
    width: 100%;
    margin: 0 auto;
    background-color: #181818;
    margin-bottom: 5rem;

    @media(min-width: 768px) {
        width: 70%;
        padding: 3rem;
    }
`;

const CONTAINER = styled.div`
    background-color: #181818;
    width: 100%;
    height: auto;
    text-align: center;
`;

const H3CONTAINER = styled.div`
    background-color: #181818;
    text-align: center;
    margin-bottom: 3rem;
`;

const PROJECTS = styled.ul`
    //display: flex;
    justify-content: space-around;
    padding-left: 0;
    background-color: #181818;

    li {
        list-style-type: none;
        //display: flex;
        margin-top: 3rem;
        //justify-content: center;

        .project {
            padding: 2rem;
            display: flex;
            flex-direction: column;

            p {
                font-size: 1.1rem;
                //text-align: left;
                padding-top: 1rem;
                padding-bottom: 1rem;
                width: 90%;
                margin: 0 auto;
            }
        }
    }


    @media(min-width: 768px) {

        li {
            .project {
                flex-direction: row;

                p {
                    text-align: left;
                }

                .image-container {
                    //background: yellow;
                    flex: 1;
                }

                .image-even {
                    order: 2;
                }

                .details-even {
                    order: 1;
                }

                .details-container {
                    //background: red;
                    flex: 1;
                }
            }
        }
        
     }
`;

const BUTTONCONTAINER = styled.div`
    height: auto;
    width: 100%; 
    display: flex;
    justify-content: space-around;
    //background: blue;
`;

const BUTTON = styled.button`
    background-color: #DF2935;
    font-size: 1rem;
    color: #E8E9F3;
    border: none;
    border-radius: 10px;
    margin: 2rem 1rem;
    display: flex;
    align-items: center;
    //width: 15rem;
    //height: 2.5rem;
    padding: .5rem 1.5rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }

    .fa-sm {
        margin-right: .5rem;
        color: #E8E9F3;
    }
`;

const Portfolio = () => {
    return (
        <STYLES name="portfolio">
            <CONTAINER>
                <ScrollAnimation  animateIn="fadeIn" duration="3">
                    <H3CONTAINER>
                        <h3>Projects</h3>
                        <FontAwesomeIcon
                            icon='gem'
                            size="2x"
                            color=" #20FC8F"
                        />
                    </H3CONTAINER>
                    <PROJECTS>
                        <ScrollAnimation  animateIn="fadeIn" duration="3">
                            <li>
                                <h4>NPM LANDING PAGE CLONE</h4>
                                <div className="project">
                                    <div className="image-container">
                                        <img src={NPM} height="250" width="auto"/>
                                    </div>
                                    <div className="details-container">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Fermentum dui faucibus in ornare quam viverra.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='desktop'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                View
                                            </BUTTON>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='code'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                Code
                                            </BUTTON>
                                        </BUTTONCONTAINER>
                                    </div>
                            </div>
                            </li>
                        </ScrollAnimation>
                        <ScrollAnimation  animateIn="fadeIn" duration="3">
                            <li>
                                <h4>Project Two</h4>
                                <div className="project">
                                    <div className="image-container image-even">
                                        <img src={Brochure} height="250" width="auto" />
                                    </div>
                                    <div className="details-container details-even">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Fermentum dui faucibus in ornare quam viverra.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='desktop'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                View
                                            </BUTTON>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='code'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                Code
                                            </BUTTON>
                                        </BUTTONCONTAINER>
                                    </div>
                            </div>
                            </li>
                        </ScrollAnimation>
                        <ScrollAnimation  animateIn="fadeIn" duration="3">
                            <li>
                                <h4>Project Three</h4>
                                <div className="project">
                                    <div className="image-container">
                                        <img src={Top100} height="250" width="auto"/>
                                    </div>
                                    <div className="details-container">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Fermentum dui faucibus in ornare quam viverra.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='desktop'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                View
                                            </BUTTON>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='code'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                Code
                                            </BUTTON>
                                        </BUTTONCONTAINER>
                                    </div>
                            </div>
                            </li>
                        </ScrollAnimation>
                        <ScrollAnimation  animateIn="fadeIn" duration="3">
                            <li>
                                <h4>Project Two</h4>
                                <div className="project">
                                    <div className="image-container image-even">
                                        <img src='https://via.placeholder.com/250.png/09f/fff%20C/O%20https://placeholder.com/' />
                                    </div>
                                    <div className="details-container details-even">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Fermentum dui faucibus in ornare quam viverra.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='desktop'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                View
                                            </BUTTON>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='code'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                Code
                                            </BUTTON>
                                        </BUTTONCONTAINER>
                                    </div>
                            </div>
                            </li>
                        </ScrollAnimation>
                        <ScrollAnimation  animateIn="fadeIn" duration="3">
                            <li>
                                <h4>Project Three</h4>
                                <div className="project">
                                    <div className="image-container">
                                        <img src='https://via.placeholder.com/250.png/09f/fff%20C/O%20https://placeholder.com/' />
                                    </div>
                                    <div className="details-container">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Fermentum dui faucibus in ornare quam viverra.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='desktop'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                View
                                            </BUTTON>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='code'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                Code
                                            </BUTTON>
                                        </BUTTONCONTAINER>
                                    </div>
                            </div>
                            </li>
                        </ScrollAnimation>
                        <ScrollAnimation  animateIn="fadeIn" duration="3">
                            <li>
                                <h4>Project Two</h4>
                                <div className="project">
                                    <div className="image-container image-even">
                                        <img src='https://via.placeholder.com/250.png/09f/fff%20C/O%20https://placeholder.com/' />
                                    </div>
                                    <div className="details-container details-even">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Fermentum dui faucibus in ornare quam viverra.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='desktop'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                View
                                            </BUTTON>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='code'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                Code
                                            </BUTTON>
                                        </BUTTONCONTAINER>
                                    </div>
                            </div>
                            </li>
                        </ScrollAnimation>
                        <ScrollAnimation  animateIn="fadeIn" duration="3">
                            <li>
                                <h4>Project Three</h4>
                                <div className="project">
                                    <div className="image-container">
                                        <img src='https://via.placeholder.com/250.png/09f/fff%20C/O%20https://placeholder.com/' />
                                    </div>
                                    <div className="details-container">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Fermentum dui faucibus in ornare quam viverra.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='desktop'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                View
                                            </BUTTON>
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='code'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                Code
                                            </BUTTON>
                                        </BUTTONCONTAINER>
                                    </div>
                            </div>
                            </li>
                        </ScrollAnimation>
                    </PROJECTS>
                </ScrollAnimation>
            </CONTAINER>
        </STYLES>
    );
}

export default Portfolio;