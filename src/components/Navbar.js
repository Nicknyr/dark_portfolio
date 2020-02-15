import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { bubble as Menu } from 'react-burger-menu'
import { render } from '@testing-library/react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STYLES = styled.div`
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #181818;
    //background: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: 999;


    /* Position and sizing of burger button */
    .bm-burger-button {
        position: sticky;
        width: 2rem;
        height: 1.8rem;
        right: 2rem;
        top: 1.7rem;

        @media(min-width: 768px) {
            display: none;
        }
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
        background: #20FC8F;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
        background: snow;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: #bdc3c7;
    }

    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
        position: fixed;
        height: 100%;
    }

    /* General sidebar styles */
    .bm-menu {
        background-color: #181818;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
        fill: #181818;
    }

    /* Wrapper for item list */
    .bm-item-list {
        color: #181818;
        padding: 0.8em;
    }

    /* Individual item */
    .bm-item {
        display: inline-block;
    }

    /* Styling of overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }

    .navigation {
        display: none;

        li {
            list-style-type: none;
            margin-right: 2rem;
            
            a {
                color: #20FC8F;
                font-weight: bold;
                font-size: 1.2rem;
                cursor: pointer;

                &:hover {
                    color: #E8E9F3;
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


class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    showSettings = (event) => {
        event.preventDefault();
    }
    

    render() {
        return (
            <STYLES>
                <CONTAINER>
                    <span>
                        <FontAwesomeIcon
                            icon='gem'
                            size="lg"
                            color="#20FC8F"
                        />
                    </span>
                    <Menu right>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                    </Menu>
                    <ul className="navigation">
                        <li>
                            <Link
                                activeClass="active"
                                to="about-me"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
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
                            >CONTACT</Link>
                        </li>
                    </ul>
                </CONTAINER>
            </STYLES>
        );
    }
}

export default Navbar;