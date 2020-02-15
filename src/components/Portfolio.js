import React from 'react';
import styled, { css } from 'styled-components';
import ParticlesSmall from './ParticlesSmall';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NPM from '../assets/npm.png';
import Brochure from '../assets/brochure.png';
import Top100 from '../assets/top100.png';
import EuroMedium from '../assets/euro-medium.png';
import SpaceX from '../assets/spacex.png';
import BitcoinMedium from '../assets/bitcoin-medium.png';
import RecipeMedium from '../assets/recipe-box-medium.png';

const STYLES = styled.div`
    height: auto;
    width: 90%;
    margin: 0 auto;
    //background-color: #181818;
    margin-top: 10rem;
    margin-bottom: 10rem;
    position: relative;

    img {
        height: 300px;
        width: auto;
    }

    @media(min-width: 768px) {
        width: 80%;
        padding: 3rem;
    }
`;

const CONTAINER = styled.div`
    //background-color: #181818;
    width: 100%;
    height: auto;
    text-align: center;
    margin: 0 auto;
`;

const H3CONTAINER = styled.div`
    //background-color: #181818;
    text-align: center;
    margin-bottom: 3rem;
`;

const PROJECTS = styled.ul`
    //display: flex;
    justify-content: space-around;
    padding-left: 0;
    //background-color: #181818;

    li {
        list-style-type: none;
        //display: flex;
        margin-top: 3rem;
        //justify-content: center;

        h4 {
            position: relative;
        }

        h4::after {
            content: "";
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            height: 100px;
            width: 100%;
            transform: rotate(-2deg);
        }

        .project {
            padding: 1.2rem;
            display: flex;
            flex-direction: column;

            p {
                font-size: 1.1rem;
                //text-align: left;
                padding-top: 1rem;
                padding-bottom: 1rem;
                //width: 90%;
                margin: 0 auto;
            }

            .image-container {
                background-image: cover;
                background-size: 100% auto;
                background-repeat: no-repeat;
                //background-position: 50%;
                //height: 150px;      
            }

            .npm {
                background-image: url(${NPM});
            }

            .brochure {
                background-image: url(${Brochure});
            }

            .itunes {
                background-image: url(${Top100});
            }

            .euro {
                background-image: url(${EuroMedium});
            }

            .spacex {
                background-image: url(${SpaceX});
            }

            .bitcoin {
                background-image: url(${BitcoinMedium});
            }

            .recipebox {
                background-image: url(${RecipeMedium});
            }
        }
    }


    @media(min-width: 768px) {

        li {
            margin-top: 8rem;

            .project {
                flex-direction: row;

                p {
                    text-align: left;
                    margin: 0 1rem;
                }

                .image-container {
                    flex: 1;
                    height: 300px;
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

    @media(min-width: 768px) {
        justify-content: flex-start;
        margin: 0 1rem;
    }
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

    @media(min-width: 768px) {
        margin: .5rem;
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
                                    <div className="image-container npm">
                                        {/*<img src={NPM} height="250" width="auto"/>*/}
                                    </div>
                                    <div className="details-container">
                                        <p>
                                            My implementation of the npmjs.com website landing page. Built using React and styled-components.
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
                                <h4>Web Dev Agency Site</h4>
                                <div className="project">
                                    <div className="image-container image-even brochure">
                                        {/*<img src={Brochure} height="250" width="auto" />*/}
                                    </div>
                                    <div className="details-container details-even">
                                        <p>
                                            A brochure styled website for a ficticious web development agency built with React and Styled-Components.
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
                                <h4>iTunes Top 100 Albums</h4>
                                <div className="project">
                                    <div className="image-container itunes">
                                        {/*<img src={Top100} height="250" width="auto"/>*/}
                                    </div>
                                    <div className="details-container">
                                        <p>
                                            React app that pulls data from the iTunes API and displays the top 100 albums being purchased on iTunes. Displays the top 100 albums in descending order or sorted by release date.
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
                                <h4>European GDP Map</h4>
                                <div className="project">
                                    <div className="image-container image-even euro">
                                        {/*<img src={EuroMedium} height="250" width="auto" />*/}
                                    </div>
                                    <div className="details-container details-even">
                                        <p>
                                            A choropleth map that shows European Gross Domestic Product by country. Built with Mapbox and Leaflet.
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
                                <h4>Space X Facilities</h4>
                                <div className="project">
                                    <div className="image-container spacex">
                                        {/*<img src={SpaceX} height="250" width="auto"/>*/}
                                    </div>
                                    <div className="details-container">
                                        <p>
                                            A React app that plots SpaceX and NASA facilities on a map of the U.S. using a Mapbox map and Leaflet.js. 
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
                                <h4>Bitcoin Price Line Graph</h4>
                                <div className="project">
                                    <div className="image-container image-even bitcoin">
                                        {/*<img src={BitcoinMedium} height="250" width="auto" />*/}
                                    </div>
                                    <div className="details-container details-even">
                                        <p>
                                            A D3 line graph that plots Bitcoin prices by date.
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
                                <h4>React Recipe Box</h4>
                                <div className="project">
                                    <div className="image-container recipebox">
                                        {/*<img src={RecipeMedium} height="250" width="auto" />*/}
                                    </div>
                                    <div className="details-container">
                                        <p>
                                            A simple React to-do-list style app that allows users to add/edit/delete recipes in state. Built using React-Bootstrap.
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