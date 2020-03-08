import React from 'react';
import styled, { css } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STYLES = styled.div`

`;

const CONTAINER = styled.div`
     height: auto;
    //width: auto;
    padding: 1rem;
    background: #181818;
    margin-top: 5rem;
    margin-left: 2rem;
    margin-right: 2rem;

    @media(min-width: 992px) {
        width: 70%;
        margin: 5rem auto;
        padding: 3rem;

        h3 {
            text-align: center;
        }

        p {
            
        }
    }
`;

const H3CONTAINER = styled.div`
    background: #181818;
    text-align: center;
    margin-bottom: 3rem;
`;

const Skills = () => {
    return (
        <STYLES>
            <CONTAINER name="skills">
                <ScrollAnimation  animateIn="fadeIn" duration="3">
                    <H3CONTAINER>
                        <h3>Skills</h3>
                        <FontAwesomeIcon
                                    icon='gem'
                                    size="2x"
                                    color="#20FC8F"
                                />
                    </H3CONTAINER>
                </ScrollAnimation>
            </CONTAINER>
        </STYLES>
    );
}


export default Skills;