import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Particles from 'react-particles-js';


const STYLES = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    z-index: -10;
`;

const ParticlesSmall = () => {
    return (
        <STYLES>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 20
                        },
                        "size": {
                            "value": 3
                        },
                        "line_linked": {
            				"shadow": {
            					"enable": true,
            					"color": "#20FC8F",
            					"blur": 1
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
                    }
            }} />
        </STYLES>
    );
}

export default ParticlesSmall;