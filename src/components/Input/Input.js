import React from "react";

import Button from "../Button/Button";
import styled from 'styled-components';

const Input = ({
                   placeholder,
                   icon,
                   id = "default",
                   onChange = null,
                   buttonText,
                   onButtonClick = null,
               }) => {
    const Icon = () => {
        if (icon) {
            return (
                <React.Fragment>
                    <StyledIcon className={icon}></StyledIcon>
                </React.Fragment>
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
  input {
    border: 0;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px 40px;
    width: 50vh;
    border-radius: 4px;
    font-size: 1.2rem;
    color: darken(#b9bdcf, 10%);
    
  }
`;

const StyledIcon = styled.i`
  color: #b9bdcf;
    font-size: 1.8rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 22px;
`;

export default Input;