import React from "react";
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const Choice = ({onLocationUpdate, value, label}) => (
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

const StyledChoice = styled.div`
   margin-top: 15px;
   label {
   padding-left: 15.5px;
         align-items: center;
         margin-bottom: 18px;
         font-size: 14px;
         color: #334680;
         font-weight: 500;
         cursor: pointer;
       }    
`;
export default Choice;