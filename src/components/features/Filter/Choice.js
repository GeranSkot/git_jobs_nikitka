import React from "react";
import styled from 'styled-components';

const Choice = ({onLocationUpdate, value, label}) => {
    return (
        <StyledChoice>
            <input
                type="radio"
                name="location"
                onChange={onLocationUpdate}
                id={value}
                value={value}
            />
            <label htmlFor={value}>{label}</label>
        </StyledChoice>
    );
};

const StyledChoice = styled.div`
  margin-top: 25px;
  label {
  padding-left: 0.5rem;
        align-items: center;
        margin-bottom: 18px;
        font-size: 1.4rem;
        color: #334680;
        font-weight: 500;
        cursor: pointer;
        font-style: normal;
      }    
`;


export default Choice;
