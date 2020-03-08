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
    margin-top: 5rem;
    margin-bottom: 5rem;
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
        margin-top: 10rem;
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

            .image-container img {
                //background-image: cover;
                //background-size: 100% auto;
                //background-repeat: no-repeat;
                //background-position: 50%;
                //height: 150px;      
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: 150 150;
                //margin: 2rem;
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
                    padding-top: 0;
                }

                .image-container {
                    //background: yellow;
                    height: 400px;
                    width: 500px;
                }

                .image-container img{
                    height: 100%;
                    width: 100%;
                    object-fit: contain;
                    object-position: top;
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
    //margin: 2rem 1rem;
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
                                        <img src={NPM} />
                                    </div>
                                    <div className="details-container">
                                        <p>
                                            My implementation of the npmjs.com website landing page. Built using React and styled-components.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <a href="https://npmclone.surge.sh/">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='desktop'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    View
                                                </BUTTON>
                                            </a>
                                            <a href="https://github.com/Nicknyr/npm_clone">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='code'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    Code
                                                </BUTTON>
                                            </a>
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
                                        <img src={Brochure} height="250" width="auto" />
                                    </div>
                                    <div className="details-container details-even">
                                        <p>
                                            A brochure styled website for a ficticious web development agency built with React and Styled-Components.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <a href="https://brochure-site.surge.sh/">
                                            <BUTTON>
                                                <FontAwesomeIcon
                                                    icon='desktop'
                                                    size="sm"
                                                    color="#E8E9F3"
                                                />
                                                View
                                            </BUTTON>
                                            </a>
                                            <a href="https://github.com/Nicknyr/Brochure_SIte">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='code'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    Code
                                                </BUTTON>
                                            </a>
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
                                        <img src={Top100} height="250" width="auto"/>
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
                                            <a href="https://github.com/Nicknyr/Top100">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='code'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    Code
                                                </BUTTON>
                                            </a>
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
                                        <img src={EuroMedium} height="250" width="auto" />
                                    </div>
                                    <div className="details-container details-even">
                                        <p>
                                            A choropleth map that shows European Gross Domestic Product by country. Built with Mapbox and Leaflet.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <a href="https://eurogdp.herokuapp.com/">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='desktop'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    View
                                                </BUTTON>
                                            </a>
                                            <a href="https://github.com/Nicknyr/Europe_Choropleth">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='code'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    Code
                                                </BUTTON>
                                            </a>
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
                                        <img src={SpaceX} height="250" width="auto"/>
                                    </div>
                                    <div className="details-container">
                                        <p>
                                            A React app that plots SpaceX and NASA facilities on a map of the U.S. using a Mapbox map and Leaflet.js. 
                                        </p>
                                        <BUTTONCONTAINER>
                                            <a href="https://launchfacilities.herokuapp.com/">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='desktop'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    View
                                                </BUTTON>
                                            </a>
                                            <a href="https://github.com/Nicknyr/NASA-Space_Steemit_Tutorial">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='code'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    Code
                                                </BUTTON>
                                            </a>
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
                                        <img src={BitcoinMedium} height="250" width="auto" />
                                    </div>
                                    <div className="details-container details-even">
                                        <p>
                                            A D3 line graph that plots Bitcoin prices by date.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <a href="https://codepen.io/nick_kinlen/full/yEYmxy/">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='desktop'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    View
                                                </BUTTON>
                                            </a>
                                            <a href="https://codepen.io/nick_kinlen/pen/yEYmxy">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='code'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    Code
                                                </BUTTON>
                                            </a>
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
                                        <img src={RecipeMedium} height="250" width="auto" />
                                    </div>
                                    <div className="details-container">
                                        <p>
                                            A simple React to-do-list style app that allows users to add/edit/delete recipes in state. Built using React-Bootstrap.
                                        </p>
                                        <BUTTONCONTAINER>
                                            <a href="https://fcc-recipebox.surge.sh/">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='desktop'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    View
                                                </BUTTON>
                                            </a>
                                            <a href="https://github.com/Nicknyr/FCC_Recipe_Box">
                                                <BUTTON>
                                                    <FontAwesomeIcon
                                                        icon='code'
                                                        size="sm"
                                                        color="#E8E9F3"
                                                    />
                                                    Code
                                                </BUTTON>
                                            </a>
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