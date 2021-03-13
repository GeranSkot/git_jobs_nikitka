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
  margin-top: 32px;
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    user-select: none;
    color: #282538;
`;

const StyledGithub = styled.p`
  padding-right: 5px;
  font-weight: 700;
`;

const StyledJobs = styled.p`
  font-weight: 300;
`;

export default Logo;
