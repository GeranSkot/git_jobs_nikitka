import React, {useState} from "react";
import styled from 'styled-components';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import JobList from "../components/features/JobList/JobList";
import Input from "../components/shared/Input/Input";
import Filter from "../components/features/Filter/Filter";
import store from "../services/redux/store/store";
import {fetchJobs} from "../services/redux/slices/jobs/jobsSlice";

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
                    icon={faBriefcase}
                    buttonText="Search"
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
  border-radius: 8px;
  background-image: url(https://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80);
  margin-bottom: 40px;
  width: 1200px;
  
  // @media (max-width: 1300px){
  //    flex-direction: column;
  //    width: 550px;
  //   }
  
`;

const StyledMainWrapper = styled.div`
  display: flex;
  
  // @media (max-width: 1300px){
  //    flex-direction: column;
  //   }
`;

const StyledMainPage = styled.div`  
  // padding: 0 0;
  // width: 100%;
  // @media (max-width: 1300px){
  //    flex-direction: column;
  //    margin-right: 30px;
  //    width: border-box;
  //   }
`;

export default Main;
