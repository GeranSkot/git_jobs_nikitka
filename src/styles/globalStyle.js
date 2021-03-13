import {createGlobalStyle} from 'styled-components';

// TODO лучше создавать папку styles в src и туда кида всё, что связано со стилями. Дальше это могут быть темы, миксины и тд

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
  
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: darkgrey;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  
  @media (max-width: 1300px){
    font-size: 75%;
  }
  
}

body {
  background-color: #f6f7fb;
}

a {
  text-decoration: none;
}    
`;

export default GlobalStyles;