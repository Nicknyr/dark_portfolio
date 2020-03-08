import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const STYLES = styled.div`

`;


class HeroToggle extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    toggle = () => {
        setTimeout()
    }

    render() {
        return(
            <STYLES>
                <h2>A  
                <span className="toggle">
                    <span className="one">  developer </span>
                    <span className="two"> designer </span>
                    <span className="three"> tech blogger </span>
                    <span className="four"> entrepreneur </span>
                </span>
                from NYC</h2>
            </STYLES>
        );
    }
}

export default HeroToggle;