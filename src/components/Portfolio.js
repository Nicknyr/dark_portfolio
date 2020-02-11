import React from 'react';
import styled, { css } from 'styled-components';
import ParticlesSmall from './ParticlesSmall';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STYLES = styled.div`
    height: auto;
    //width: 100%;
    margin: 0 auto;
    background-color: #181818;
    padding: 3rem;
    margin-bottom: 5rem;
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
    }
`;

const BUTTONCONTAINER = styled.div`
    height: auto;
    width: 100%; 
    display: flex;
    justify-content: space-around;
    background: blue;
`;

const BUTTON = styled.button`
    background-color: #DF2935;
    font-size: 1rem;
    color: #E8E9F3;
    border: none;
    border-radius: 10px;
    margin: 2rem 1rem;
    display: block;
    padding: .5rem 1.5rem;
`;

const Portfolio = () => {
    return (
        <STYLES name="portfolio">
            <CONTAINER>
                <ScrollAnimation  animateIn="fadeIn" duration="3">
                    <H3CONTAINER>
                        <h3>Portfolio</h3>
                        <FontAwesomeIcon
                            icon='gem'
                            size="2x"
                            color="#20FC8F"
                        />
                    </H3CONTAINER>
                    <PROJECTS>
                        <li>
                            <div className="project">
                                <h4>Project One</h4>
                                <img src='https://via.placeholder.com/250.png/09f/fff%20C/O%20https://placeholder.com/' />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Fermentum dui faucibus in ornare quam viverra.
                                </p>
                                <BUTTONCONTAINER>
                                    <BUTTON>View</BUTTON>
                                    <BUTTON>Code</BUTTON>
                                </BUTTONCONTAINER>
                            </div>
                            
                        </li>
                        <li>
                            <div className="project">
                                <h4>Project Two</h4>
                                <img src='https://via.placeholder.com/250.png/09f/fff%20C/O%20https://placeholder.com/' />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Condimentum mattis pellentesque id nibh tortor id.
                                </p>
                                <BUTTONCONTAINER>
                                    <BUTTON>View</BUTTON>
                                    <BUTTON>Code</BUTTON>
                                </BUTTONCONTAINER>
                            </div>
                            
                        </li>
                        <li>
                            <div className="project">
                                <h4>Project Three</h4>
                                <img src='https://via.placeholder.com/250.png/09f/fff%20C/O%20https://placeholder.com/' />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Est pellentesque elit ullamcorper dignissim cras tincidunt.
                                </p>
                                <BUTTONCONTAINER>
                                    <BUTTON>View</BUTTON>
                                    <BUTTON>Code</BUTTON>
                                </BUTTONCONTAINER>
                            </div>
                            
                        </li>
                    </PROJECTS>
                </ScrollAnimation>
            </CONTAINER>
        </STYLES>
    );
}

export default Portfolio;