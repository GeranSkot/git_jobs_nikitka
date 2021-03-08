import React from "react";
import styled from 'styled-components';


const Footer = () => {
    return (
        <StyledFooter>
            <a href="https://rule34.xxx/">COME ON COLLAGE BOY</a>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
  padding: 85px;
  width: 100%;
  text-align: center;
  a {
    font-size: 1.4rem;
    text-decoration: none;
    color: #b9bdcf;
    font-weight: 500;
  }
`;

export default Footer;
