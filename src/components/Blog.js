import React from 'react';
import styled, { css } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NHL from '../assets/nhl.jpeg';
import Formik from '../assets/formik.png';

const STYLES = styled.div`
    height: auto;
    width: 100%;

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
            width: 350px;
            cursor: pointer;
        }
    }
`;


const CONTAINER = styled.div`
    height: auto;
    width: auto;
    padding: 1rem;
    background: #181818;
    margin-top: 10rem;
    //margin-left: 20px;
    //margin-right: 20px;
    margin-bottom: 10rem;


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
        margin: 10rem auto;

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

const ARTICLECONTAINER = styled.div`
    height: auto;
    width: auto;
    //background: yellowgreen;
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
        flex-direction: row;
    }
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
                    <p>Check out my recent blog articles on <a href="https://hackernoon.com/@nick_kinlen"><span className="highlight-2">Hacker Noon</span></a>.</p>
                    <ARTICLECONTAINER>
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
                    </ARTICLECONTAINER>
                </ScrollAnimation>
            </CONTAINER>
        </STYLES>
    );
}


export default Blog;