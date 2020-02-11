import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';

const STYLES = styled.div`
    background-color: #181818;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

const CONTAINER = styled.div`
    background: #1f1f1f;
    width: 100%;
    height: auto;
    text-align: center;

    @media(min-width: 768px) {
        width: 50%;
    }

    p {
        width: 80%;
        margin: 0 auto;
        font-size: 1.2rem;
        line-height: 1.4;
    }

    .email {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .social {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;

        li {
            list-style-type: none;
            margin-right: 3rem;
        }
    }
`;

const H3CONTAINER = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`;

const Footer = () => {
    return (
        <STYLES>
            <CONTAINER>
                <ScrollAnimation  animateIn="fadeIn" duration="3">
                    <H3CONTAINER>
                        <h3 name="contact">Get in touch</h3>
                        <FontAwesomeIcon
                            icon='gem'
                            size="2x"
                            color="#20FC8F"
                        />
                    </H3CONTAINER>
                    <p>If you're interesting in working together shoot me an email or find me on social media</p>
                    <p className="email">email goes here</p>
                    <ul className="social">
                        <li>
                            <a href="#">
                                <FontAwesomeIcon
                                    icon={['fab', 'linkedin']}
                                    size="2x"
                                    color="snow"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon
                                    icon={['fab', 'github']}
                                    size="2x"
                                    color="snow"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon
                                    icon={['fab', 'stack-overflow']}
                                    size="2x"
                                    color="snow"
                                />
                            </a>
                        </li>
                    </ul>
                </ScrollAnimation>
            </CONTAINER>
        </STYLES>
    );
}

export default Footer;