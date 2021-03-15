import React from "react";
import styled from 'styled-components';

const Logo = () => (
        <div>
            <StyledLogo>
                <StyledGithub>Github</StyledGithub>
                <StyledJobs>jobs</StyledJobs>
            </StyledLogo>
        </div>
    );

const StyledLogo = styled.div`
     display: flex;
     font-size: 36px;
     font-family: "Poppins", sans-serif;
     user-select: none;
     color: #282538;
`;

const StyledGithub = styled.p`
   padding-right: 10px;
   font-weight: 700;
`;

const StyledJobs = styled.p`
   font-weight: 300;
`;

export default Logo;
