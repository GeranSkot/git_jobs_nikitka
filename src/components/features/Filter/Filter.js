import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import styled from 'styled-components';
import {faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import Input from "../../shared/Input/Input";
import Choice from "./Choice";
import {selectAllJobs} from "../../../services/redux/slices/jobs/jobsSlice";
import {paginate} from "../../../paginator";

// TODO импорты так не дели. Обычно просто стили в конце списка импортов идут

const Filter = ({
                    // TODO что с отступами??? В начале любого проекта настраивается линтер и прописываются правила. Обычно вместе с airbnb
                    // eslint-disable-next-line react/prop-types
                    setPaginatedJobs,
                    // eslint-disable-next-line react/prop-types
                    setDisplayPaginationNumbers,
                    // eslint-disable-next-line react/prop-types
                    location,
                    // eslint-disable-next-line react/prop-types
                    setLocation,
                }) => {
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

    let newData = [];

    const checkLocation = () => {
        if (location) {
            const newJobList = jobs.filter((job) => job.location.toLowerCase().includes(location));
            newData = [...newData, ...newJobList];
        }
        return newData;
    }

    const checkFullTime = () => {
        if (fullTime === true) {
            if (newData.length === 0) {
                newData = [...jobs];
            }
            const newJobList = newData.filter((job) => job.type.toLowerCase().includes("full time"));
            newData = [...newJobList]
        }
        return newData;
    }

    useEffect(() => {
        // TODO дикий по размерам эффект. Разделяй
        checkLocation();
        checkFullTime();
        if ((location !== null && location !== "") || fullTime === true) {
            setPaginatedJobs(newData);
            setDisplayPaginationNumbers(false);
            return;
        }
        setDisplayPaginationNumbers(true);
        setPaginatedJobs(paginate(jobs, 1).items);
    }, [location, fullTime, jobs, setPaginatedJobs, setDisplayPaginationNumbers]);
    // });

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
  margin: 30px 60px 0 0;
  #location-input {
    width: 140%;
  }
  
  @media (max-width: 1300px){
    width: 100%;
    padding: 0 0;
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

const StyledInputWrapper = styled.div`
  width: 20vh;
  @media (max-width: 1300px){
    width: 550px;
    padding: 0 0;
    #location-input {
      width: 550px;
  }
  }
`;
export default Filter;
