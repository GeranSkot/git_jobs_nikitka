import React from "react";
import styled from 'styled-components';

const Button = ({buttonText, onClick = null}) => {
    return (
        <React.Fragment>
            <StyledButton onClick={onClick}>
                {buttonText}
            </StyledButton>
        </React.Fragment>
    );
};

const StyledButton = styled.button`
  border: 0;
  border-radius: 4px;
  font-size: 1.4rem;
  color: #fff;
  background-color: #1e86ff;
  padding: 15px 35px;
  cursor: pointer;
  font-weight: 500;
  position: absolute;
  margin-left: -125px;
  margin-top: 3px;
`;

export default Button;
