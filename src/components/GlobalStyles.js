import { createGlobalStyle } from 'styled-components'

// #DF2935

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,500|IBM+Plex+Sans:400,500&display=swap');
    //font-family: 'IBM Plex Mono', monospace;
    //font-family: 'IBM Plex Sans', sans-serif;

    body {
        font-family: 'IBM Plex Sans', sans-serif;
        background-color: #1F1F1F;
        color: #E8E9F3;
    }

    h1, h2, h3, h4, h5 {
        font-family: 'IBM Plex Mono', monospace;
        color: #20FC8F;
        padding: .5rem;
        //color: #E8E9F3;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.9rem;
        margin-bottom: .8rem;
    }

    h4 {
        font-size: 1.5rem;
        margin-bottom: .8rem;
    }

    a {
        color: #20FC8F;
        font-family: 'IBM Plex Mono', monospace;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    p {
        line-height: 1.8;
        font-size: 1.3rem;
        //padding-bottom: 1rem;
    }

    .fa-2x {
        &:hover {
            color: #20FC8F;
        }
    }

    button:focus {
        outline: 0 !important;

    }

`

export default GlobalStyle;