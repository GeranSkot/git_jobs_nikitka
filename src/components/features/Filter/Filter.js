import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import styled from 'styled-components';
import {faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import Input from "../../shared/Input/Input";
import Choice from "./Choice";
import {selectAllJobs} from "../../../services/redux/slices/jobs/jobsSlice";
import {paginate} from "../../../paginator";
import {checkFullTime, checkLocation} from "./FilterData";

// TODO импорты так не дели. Обычно просто стили в конце списка импортов идут
// eslint-disable-next-line react/prop-types
const Filter = ({setPaginatedJobs, setDisplayPaginationNumbers, location, setLocation}) => {
    const [fullTime, setFullTime] = useState(false);

    const jobs = useSelector(selectAllJobs);

    const onLocationUpdate = (e) => {
        setLocation(e.target.value.toLowerCase());
    };

    const onJobTypeUpdate = () => {
        // TODO забудь про else
        if (fullTime !== true) {
            setFullTime(true);
        }
    };

    useEffect(() => {
        // TODO дикий по размерам эффект. Разделяй
        let newData = [];
        newData = checkLocation(newData, location, jobs);
        newData = checkFullTime(newData, fullTime, jobs);

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
            <StyledInputWrapper>
                <Input
                    placeholder="City, state, zip code or country"
                    icon={faGlobeEurope}
                    id="location-input"
                    onChange={onLocationUpdate}
                />
            </StyledInputWrapper>
            <StyledChoices>
                {[
                    {value: "london", label: "London"},
                    {value: "amsterdam", label: "Amsterdam"},
                    {value: "newyork", label: "New York"},
                    {value: "berlin", label: "Berlin"},
                ].map((choice) => (
                        <Choice
                            key={choice.value}
                            value={choice.value}
                            label={choice.label}
                            onLocationUpdate={onLocationUpdate}
                        />
                    ))}
            </StyledChoices>
        </StyledFilter>
    );
};

const StyledFilter = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   margin: 0 200px 0 0;
   font-family: "Poppins", sans-serif;
   font-weight: 500;
   
  //
  // @media (max-width: 1300px){
  //   width: 100%;
  //   padding: 0 0;
  // }
  
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
       padding-left: 15px;
`;

const StyledLabel = styled.label`
   padding-left: 5px;
   font-weight: 700;
`;

const StyledLocationLabel = styled.h2`
   text-transform: uppercase;
     color: #b9bdcf;
     font-size: 1.4rem;
     padding: 15px 0;
     user-select: none;
`;

const StyledChoices = styled.div`
    display: block;
    padding-top: 15px;
`;

const StyledInputWrapper = styled.div`
  height: 50px;
  #location-input {
     width: 380px;
     height: 50px;
     margin: 0 0 0 0;
     font-family: "Roboto", sans-serif;
     font-weight: 400;
   }
   //display: block;
  // @media (max-width: 1300px){
  //   width: 550px;
  //   padding: 0 0;
  //   #location-input {
  //     width: 550px;
  // }
  // }
`;
export default Filter;
