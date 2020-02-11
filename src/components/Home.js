import React from 'react';
import styled, { css } from 'styled-components';
import Navbar from './Navbar';


const STYLES = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    background: #222;
`;


const Home = () => {
    return (
        <STYLES>
            <Navbar />
        </STYLES>
    );
}

export default Home;