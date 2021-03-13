import React, {useState, useEffect} from "react";

import Input from "../Input/Input";
import Choice from "./Choice";

import {useSelector} from "react-redux";
import {selectAllJobs} from "../../services/redux/slices/jobs/jobsSlice";

import {paginate} from "../../paginator";
import styled from 'styled-components';

import {faGlobeEurope} from '@fortawesome/free-solid-svg-icons';

const Filter = ({
                    setPaginatedJobs,
                    setDisplayPaginationNumbers,
                    location,
                    setLocation,
                }) => {
    const [fullTime, setFullTime] = useState(false);

    const jobs = useSelector(selectAllJobs);

    const onLocationUpdate = (e) => {
        setLocation(e.target.value.toLowerCase());
    };

    const onJobTypeUpdate = () => {
        if (fullTime !== true) {
            setFullTime(true);
        } else {
            setFullTime(false);
        }
    };

    useEffect(() => {
        let newData = [];
        if (location) {
            const newJobList = jobs.filter((job) => {
                return job.location.toLowerCase().includes(location);
            });

            newData = [...newData, ...newJobList];
        }

        if (fullTime === true) {
            if (newData.length === 0) {
                newData = [...jobs];
            }

            const newJobList = newData.filter((job) => {
                return job.type.toLowerCase().includes("full time");
            });

            newData = [...newJobList];
        }

        if ((location !== null && location !== "") || fullTime === true) {
            setPaginatedJobs(newData);
            setDisplayPaginationNumbers(false);

            return;
        }

        setDisplayPaginationNumbers(true);
        setPaginatedJobs(paginate(jobs, 1).items);
    }, [location, fullTime, jobs, setPaginatedJobs, setDisplayPaginationNumbers]);

    return (
        <StyledFilter>
            <StyledCheckBox>
                <input
                    type="checkbox"
                    name="type"
                    id="job-type"
                    onChange={onJobTypeUpdate}
                />

                <StyledLabel htmlFor="job-type">
                    Full time
                </StyledLabel>
            </StyledCheckBox>

            <StyledLocationLabel>Location</StyledLocationLabel>
            <Input
                placeholder="City, state, zip code or country"
                icon={faGlobeEurope}
                id="location-input"
                onChange={onLocationUpdate}
            />
            <StyledChoices>
                {[
                    {value: "london", label: "London"},
                    {value: "amsterdam", label: "Amsterdam"},
                    {value: "newyork", label: "New York"},
                    {value: "berlin", label: "Berlin"},
                ].map((choice) => {
                    return (
                        <Choice
                            key={choice.value}
                            value={choice.value}
                            label={choice.label}
                            onLocationUpdate={onLocationUpdate}
                        />
                    );
                })}
            </StyledChoices>
        </StyledFilter>
    );
};

const StyledFilter = styled.div`
  padding: 42px 0;
  display: flex;
  flex-direction: column;
  width: auto;
  margin-right: 20px;
  #location-input {
    width: 140%;
  }
  
  @media (max-width: 1300px){
     #location-input {
    width: 96%;
  }
  }
  
`;

const StyledCheckBox = styled.div`
  font-size: 1.4rem;
      color: #334680;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      user-select: none;
      margin-bottom: 0;
`;

const StyledLabel = styled.label`
  padding-left: 0.5rem;
`;

const StyledLocationLabel = styled.h2`
  text-transform: uppercase;
    color: #b9bdcf;
    font-size: 1.4rem;
    padding: 15px 0;
    user-select: none;
`;

const StyledChoices = styled.div`
   margin-top: 25px; 
`;
export default Filter;
