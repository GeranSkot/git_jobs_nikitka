import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import styled from 'styled-components';
import Main from "./pages/Main";
import JobPage from "./pages/JobPage";
import Logo from "./components/shared/Logo/Logo";
import Footer from "./components/features/Footer/Footer";

const App = () => (
        <Router>
            <StyledContainer>
                <Logo/>
                <Switch>
                    <Route path="/:id">
                        <JobPage/>
                    </Route>
                    <Route path="/">
                        <Main/>
                    </Route>
                </Switch>
                <Footer/>
            </StyledContainer>
        </Router>
    );

const StyledContainer = styled.div`
  padding: 0;
  margin-left: 15vh;
  @media(max-width: 1300px) {
    margin: 0 0 0 0;
    padding: 0 0;
    width: border-box 550px;
  }
`;

export default App;
