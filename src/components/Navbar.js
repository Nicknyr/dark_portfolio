import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { render } from '@testing-library/react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STYLES = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: black;
    position: fixed;
    z-index: 999;

    .name {
        font-size: 1.2rem;
        color: #E8E9F3;
        font-family: 'IBM Plex Mono', monospace;
        font-weight: bold;
        margin-left: 1rem;
        
    }
    
    .navigation {
        display: none;

        li {
            list-style-type: none;
            margin-right: 2rem;
            
            a {
                color: #E8E9F3;
                font-weight: bold;
                font-size: 1.2rem;
                cursor: pointer;

                &:hover {
                    color: #20FC8F;
                    text-decoration: none;
                }
            }
        }

        @media(min-width: 768px) {
            display: flex;
            //position: fixed;
            //z-index: 999;
        }
    }
`;

const CONTAINER = styled.div`
    height: 3rem;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HAMBURGER = styled.div`
    display: flex;

    @media(min-width: 769px) {
        display: none;
    }
`;

const MENU = styled.div`
    position: absolute;
    background: #181818;
    height: 100vh;
    width: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein .5s; /* Firefox < 16 */
        -ms-animation: fadein .5s; /* Internet Explorer */
         -o-animation: fadein .5s; /* Opera < 12.1 */
            animation: fadein .5s;

    .fa-2x {
        position: absolute;
        top: 30px;
        right: 30px;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    ul {
        //background: yellow;

        li {
            margin-top: 3rem;
            font-size: 1.3rem;
            padding-bottom: 10px;
            border-bottom: 1px solid #20FC8F;
        }
    }

    @media(min-width: 769px) {
        display: none;
    }
`;

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        };
    }

    showSettings = (event) => {
        event.preventDefault();
    }

    showMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
    

    render() {
        return (
            <div>
                <STYLES>
                    <CONTAINER>
                        <span>
                            <FontAwesomeIcon
                                icon='gem'
                                size="lg"
                                color="#20FC8F"
                            />
                            <span className="name">Nick Kinlen</span>
                        </span>
                        <ul className="navigation">
                            <li>
                                <Link
                                    activeClass="active"
                                    to="about-me"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    className="underline"
                                >ABOUT</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    className="underline"
                                >PORTFOLIO</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="blog"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    className="underline"
                                >BLOG</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="footer"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    className="underline"
                                >CONTACT</Link>
                            </li>
                        </ul>
                        <HAMBURGER>
                            <FontAwesomeIcon
                                icon="bars"
                                size="2x"
                                color="snow"
                                onClick={this.showMenu}
                            />
                        </HAMBURGER>
                    </CONTAINER>
                </STYLES>
                {this.state.showMenu ?
                    <MENU>
                        <FontAwesomeIcon
                                icon="times"
                                size="2x"
                                color="snow"
                                onClick={this.showMenu}
                            />
                        <ul>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="about-me"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    className="underline"
                                    onClick={this.showMenu}
                                >ABOUT</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    className="underline"
                                    onClick={this.showMenu}
                                >PORTFOLIO</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="blog"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    className="underline"
                                    onClick={this.showMenu}
                                >BLOG</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="footer"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    className="underline"
                                    onClick={this.showMenu}
                                >CONTACT</Link>
                            </li>
                        </ul>
                    </MENU>
                :null}
            </div>
        );
    }
}

export default Navbar;