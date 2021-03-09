import React, {useState} from "react";

import JobList from "../components/JobList/JobList";
import Input from "../components/Input/Input";
import Filter from "../components/Filter/Filter";

import {store} from "../services/redux/store/store.js";

import {fetchJobs} from "../services/redux/slices/jobs/jobsSlice";
import styled from 'styled-components';

const Main = () => {
    const [description, setDescription] = useState("");
    const [paginatedJobs, setPaginatedJobs] = useState([]);
    const [displayPaginationNumbers, setDisplayPaginationNumbers] = useState(
        true
    );
    const [location, setLocation] = useState("");

    const searchData = () => {
        store.dispatch(fetchJobs({description}));
        setDisplayPaginationNumbers(true);
        setLocation("null");
    };

    return (
        <StyledMainPage>
            <StyledInputWrapper>
                <Input
                    placeholder="Title, companies, expertise or benefits"
                    icon="fas fa-briefcase"
                    buttonText="Search"
                    extraButtonClass="input-button"
                    onButtonClick={searchData}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
            </StyledInputWrapper>

            <StyledMainWrapper>
                <Filter
                    setPaginatedJobs={setPaginatedJobs}
                    setDisplayPaginationNumbers={setDisplayPaginationNumbers}
                    location={location}
                    setLocation={setLocation}
                />
                <JobList
                    paginatedJobs={paginatedJobs}
                    setPaginatedJobs={setPaginatedJobs}
                    displayPaginationNumbers={displayPaginationNumbers}
                />
            </StyledMainWrapper>
        </StyledMainPage>
    );
};

const StyledInputWrapper = styled.div`
  height: 10%;
  width: 95%;
  border-radius: 8px;
  margin-top: 30px;
  
  //background-image: url("../assets/images/backgroundImg.png");
  background-image: url(https://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80);
  padding: 41px 40px;
  position: center;
  text-align: center;
  display: block;
  
  Input{
    width: 80%;
  }
  
`;

const StyledMainWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const StyledMainPage = styled.div`
  padding: 0;
  width: 100%;
`;

export default Main;
