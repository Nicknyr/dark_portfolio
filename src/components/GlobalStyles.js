import { createGlobalStyle } from 'styled-components'
import React, { Component } from 'react';
import Particles from 'react-particles-js';


// #DF2935

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,500|IBM+Plex+Sans:400,500&display=swap');
    //font-family: 'IBM Plex Mono', monospace;
    //font-family: 'IBM Plex Sans', sans-serif;

    body {
        font-family: 'IBM Plex Mono', monospace;
        //background-color: #1F1F1F;
        background-color: #181818;
        color: #E8E9F3;
    }

    h1, h2, h3, h4, h5 {
        font-family: 'IBM Plex Sans', sans-serif;
        color: #20FC8F;
        padding: .5rem;
        color: #E8E9F3;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom: .8rem;
    }

    h4 {
        font-size: 1.5rem;
        margin-bottom: .8rem;
        color: #20FC8F;
    }

    a {
        //color: #20FC8F;
        color: #D81E5B;
        font-family: 'IBM Plex Mono', monospace;
        text-decoration: none;      
    }

    .underline {
        transition: .3s all linear;
        position: relative;
        padding: .3em 0;

        &:before, &:after {
            content: "";
            height: 3px;
            width: 0%;
            background: #D81E5B;
            position: absolute;
            bottom: 0;
            transition: .2s all linear;
        }

        &:before {
            left: 50%;
        }

        &:after {
            right: 50%;
        }
        
        &:hover {
            color: #D81E5B;

            &:before, &:after {
                width: 100%;
            }

            &:before {
                left: 0%;
            }

            &:after {
                right: 0%;
            }
        }

        &:active, &:focus {
            color: darken(#20FC8F, 10%);

            &:before, &:after {
                background: darken(#20FC8F, 10%);

            }
        }
    }

    p {
        line-height: 1.8;
        font-size: 1.1rem;
    }

    .fa-2x {
        &:hover {
            color: #D81E5B;
        }
    }

    button:focus {
        outline: 0 !important;

    }

    @media(min-width: 768px) {
        p {
            font-size: 1.3rem;
        }
    }

`

export default GlobalStyle;