import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Main from "./pages/Main";
import JobPage from "./pages/JobPage";

import Logo from "./components/Logo/Logo";
import Footer from "./components/Footer/Footer";
import styled from 'styled-components';


const App = () => {
    return (
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
};

const StyledContainer = styled.div`
  padding: 0;
  margin-left: 15vh;
`;

export default App;
