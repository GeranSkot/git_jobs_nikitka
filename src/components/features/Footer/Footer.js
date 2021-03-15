import React from "react";
import styled from 'styled-components';

const Footer = () => (
        <StyledFooter>
            <a href="https://www.youtube.com/watch?v=BaGCLYDJEnM&t">COME ON COLLAGE BOY</a>
        </StyledFooter>
    );

const StyledFooter = styled.div`
   padding: 65px;
   
   text-align: center;
   a {
     font-size: 1.4rem;
     text-decoration: none;
     color: #b9bdcf;
     font-weight: 500;
     text-align: center;
   }
  // @media(max-width: 1300px) {
  //   width: 550px;
  // }
`;

export default Footer;
