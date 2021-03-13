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
        <StyledInputGroup>
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
  
  width: 100%;
  input {
    border: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px 40px;
    width: 100%;
    border-radius: 4px;
    font-size: 1.2rem;
    color: darken(#b9bdcf, 10%);
    position: center;  
  }
  
  @media (max-width: 1300px){
     position: center;
     width: 100%;
  }
  
`;

const StyledIcon = styled.i`
    color: #b9bdcf;
    display: none;
    margin-left: 20px;
    width: 5%;
`;

export default Input;