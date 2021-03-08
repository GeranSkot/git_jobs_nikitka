import React from "react";
import styled from 'styled-components';

const Rejected = () => {
    return (
        <StyledRejected>
            <h1>Upss! Something went wrong. Please check back later</h1>
            <h3>
                If this takes longer than 1 hour, please open an&nbsp;
                <a href="https://www.youtube.com/watch?v=NdqbI0_0GsM">issue</a> to
                inform us.
            </h3>
        </StyledRejected>
    );
};

const StyledRejected = styled.div`
    display: block;
    
    background: #1e86ff;
      color: #fff;
      padding: 16px;
      margin: 100px;
      min-width: 350px;
      h3 {
        margin-top: 35px;

        a {
          color: white;
        }
      }
`;

export default Rejected;
