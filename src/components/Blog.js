import React from 'react';
import styled, { css } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NHL from '../assets/nhl.jpeg';
import Formik from '../assets/formik.png';

const STYLES = styled.div`
    height: auto;
    width: 100%;

    /*
    .article {
        display: flex;
        background-image: cover;
        background-size: 100% auto;
        background-repeat: no-repeat;
        overflow: none;
        height: 200px;
        width: 40%;
    }
    
    .nhl {
        background-image: url(${NHL});
        max-height: 300px;
        max-width: 300px;
    }

    .formik {
        background-image: url(${Formik});
        max-height: 300px;
        max-width: 300px;
    }
    */

    .article {
        display: flex;
        justify-content: center;
        height: 100%;
        width: 100%;

        img {
            width: 250px;
            height: 250px;
            object-fit: cover;
            object-position: 150 150;
            margin: 2rem;

            &:hover {
                opacity: .5;
            }
        }
    }

    @media(min-width: 768px) {
        .article img {
            width: 450px;
            cursor: pointer;
        }
    }
`;


const CONTAINER = styled.div`
    height: auto;
    width: auto;
    padding: 1.5rem;
    //position: absolute;
    //background: red;
    background: #181818;

    p {
        margin: 1.4rem auto;
        text-align: center;
    }

    .highlight {
        color: #20FC8F;
    }

    .highlight-2 {
        //color: #DF2935;
        color: #20FC8F;
    }

    .fa-2x {
        margin: 0 auto;
    }

    @media(min-width: 992px) {
        width: 70%;
        margin: 5rem auto;

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

/*
const ARTICLE = styled.div `
    background-image: cover;
    background-size: 100% auto;
    background-repeat: no-repeat;
    height: 200px;
    width: 200px;

    .nhl {
        background-image: url(${NHL});
    }

    .formik {
        background-image: url(${Formik});
    }
`;
*/


const Blog = () => {
    return (
        <STYLES>
            <CONTAINER name="blog">
                <ScrollAnimation  animateIn="fadeIn" duration="3">
                    <H3CONTAINER>
                        <h3>Recent Articles</h3>
                        <FontAwesomeIcon
                                    icon='gem'
                                    size="2x"
                                    color="#20FC8F"
                                />
                    </H3CONTAINER>
                    <p>Check out my recent blog articles on <span className="highlight-2">Hacker Noon</span>.</p>
                </ScrollAnimation>
                {/*
                <div className="article nhl">

                </div>
                <div className="article formik">

                </div>
                */}
                <div className="article">
                    <a href="https://hackernoon.com/retrieving-hockey-stats-from-the-nhls-undocumented-api-zz3003wrw">
                        <img src={NHL} />
                    </a>
                </div>
                <div className="article">
                    <a href="https://hackernoon.com/building-react-forms-with-formik-yup-and-react-bootstrap-with-a-minimal-amount-of-pain-and-suffering-1sfk3xv8">
                        <img src={Formik} />
                    </a>
                </div>
            </CONTAINER>
        </STYLES>
    );
}


export default Blog;