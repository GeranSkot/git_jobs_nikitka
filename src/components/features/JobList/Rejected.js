import React from "react";
import styled from 'styled-components';

const Rejected = () => (
        <StyledRejected>
            <h1>ОПА БЛЯ, ШОСЦИ СЛУЧЫЛАСЯ</h1>
            <h3>
                Ну кароч пизда, все, приехали. 403 лови бро. заходи на url и разблокируй, смотри консоль&nbsp;
                <a href="https://www.youtube.com/watch?v=NdqbI0_0GsM">(КЛИКНИ МЕНЯ)</a> к просмотру обязательно.
            </h3>
        </StyledRejected>
    );

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
          font-size: 2.8rem;
        }
      }
      
      @media(max-width: 1300px) {
        margin: 30px;
      }
      
`;

export default Rejected;
