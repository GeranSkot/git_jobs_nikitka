import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
const Input = ({placeholder, icon, id = "default", onChange = null, buttonText, onButtonClick = null,}) => {
    const Icon = () => {
        if (icon) {
            return (
                <>
                    <StyledIcon>
                        <FontAwesomeIcon icon={icon}/>
                    </StyledIcon>
                </>
            );
        }
        return null;
    };

    const ButtonComponent = () => {
        if (buttonText) {
            return (
                <Button
                    buttonText={buttonText}
                    onClick={onButtonClick}
                />
            );
        }
        return null;
    };

    return (
        <StyledInputGroup >
            <input
                type="text"
                placeholder={placeholder}
                id={id}
                onChange={onChange}
            />
            <Icon/>
            <ButtonComponent/>
        </StyledInputGroup>

    );
};

const StyledInputGroup = styled.div`
   display: block; 
   font-family: "Roboto", sans-serif;
   width: 1200px;
   height: 140px;
   input {
    margin: 42px 205px 42px 205px;
    width: 790px;
    height: 55px;
    border: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding-left: 42px;
    font-size: 12px;
    color: darken(#b9bdcf, 10%); 
   }
  //
  // @media (max-width: 1300px){
  //    position: center;
  //    width: 100%;
  // }
  
`;

const StyledIcon = styled.i`
    position: absolute; 
    color: #b9bdcf;
    font-size: 15px;
    margin-left: -975px;
    margin-top: 60px;
`;

export default Input;