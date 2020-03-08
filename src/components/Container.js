import React from 'react';
import styled, { css } from 'styled-components';

const STYLES = styled.div`
        background-color: pink !important;
        min-height: 100%;
        width: 100%;
`;

const Container = () => {
    return (
        <STYLES>
            hi
        </STYLES>
    );
}

export default Container;