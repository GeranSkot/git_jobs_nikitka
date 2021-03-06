import React from "react";
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const Button = ({buttonText, onClick = null}) => (
        <>
            <StyledButton onClick={onClick}>
                {buttonText}
            </StyledButton>
        </>
    );

// TODO компоненты дели на features/shared. Сейчас у тебя всё в одной папке

const StyledButton = styled.button`
   border: 0;
   border-radius: 4px;
   font-size: 16px;
   font-weight: 500;
   color: #fff;
   background-color: #1e86ff;
   padding: 15px 35px;
   cursor: pointer;
   position: absolute;
   margin-left: -330px;
   margin-top: 45px;
  //
  // @media (max-width: 1300px){
  //    margin-left: -77px;
  //    padding: 15px 10px;   
  // }
`;

export default Button;
