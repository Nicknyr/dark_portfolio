import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import ParticlesSmall from './ParticlesSmall';

const STYLES = styled.div`
    background-color: #181818;
    //background-color: #1F1F1F;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

const CONTAINER = styled.div`
    background: #1f1f1f;
    //background-color: #181818;
    width: 100%;
    height: auto;
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 3rem;

    p {
        width: 80%;
        margin: 0 auto;
        font-size: 1rem;
        line-height: 1.4;
    }

    .email {
        margin-top: 2rem;
        margin-bottom: 2rem;
        color: #D81E5B;
        font-style: italic;
        text-decoration: underline;
        font-size: 1rem;
        
        &:hover {
            cursor: pointer;
        }
    }

    .social {
        display: flex;
        justify-content: space-evenly;
        margin-top: 4rem;
        margin-bottom: 4rem;

        li {
            list-style-type: none;
        }

        .fa-2x {
            &:hover {
                color: #D81E5B;
            }
         }
    }

    @media(min-width: 768px) {
        width: 50%;
        padding-top: 2rem;
        padding-bottom: 2rem;

        p {
            width: 50%;
        }

        .social {
            width: 50%;
            margin: 0 auto;
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
            <CONTAINER name="footer">
                <ScrollAnimation  animateIn="fadeIn" duration="3">
                    <H3CONTAINER>
                        <h3>Get in touch</h3>
                        <FontAwesomeIcon
                            icon='gem'
                            size="2x"
                            color="#20FC8F"
                        />
                    </H3CONTAINER>
                    <p>If you're interesting in working together shoot me an email or find me on social media</p>
                    <p className="email">nick_kinlen@hotmail.com</p>
                    <ul className="social">
                        <li>
                            <a href="https://www.linkedin.com/in/nicholas-kinlen/">
                                <FontAwesomeIcon
                                    icon={['fab', 'linkedin']}
                                    size="2x"
                                    color="snow"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Nicknyr">
                                <FontAwesomeIcon
                                    icon={['fab', 'github']}
                                    size="2x"
                                    color="snow"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/3875620/nick-kinlen">
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