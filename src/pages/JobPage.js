import React from "react";
import {Link, useParams} from "react-router-dom";

import {useSelector} from "react-redux";
import {selectJobById} from "../services/redux/slices/jobs/jobsSlice";

import Loading from "../components/JobList/Loading";
import styled from 'styled-components';
import {faClock, faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const JobPage = () => {
    const {id} = useParams();

    const job = useSelector((state) => selectJobById(state, id));

    const HowTo = () => {
        return (
            <StyledHowToApply dangerouslySetInnerHTML={{__html: job.how_to_apply}}/>
        );
    };
    const Description = () => {
        return (
            <StyledDescription dangerouslySetInnerHTML={{__html: job.description}}/>
        );
    };

    if (job === undefined) {
        return <Loading/>;
    }

    return (
        <StyledJobPageWrapper>
            <StyledHowToWrapper>
                <Link to="/" className="back-to-search">
                    &larr;&nbsp;&nbsp; Back to search
                </Link>

                <StyledLabel>How to apply</StyledLabel>
                <HowTo/>
            </StyledHowToWrapper>

            <StyledJobWrapper>

                <StyledTop>
                    <h2>{job.title}</h2>

                    <button>
                        {job.type}
                    </button>
                </StyledTop>
                <StyledGrayLabel>
                    <FontAwesomeIcon icon={faClock}/>
                    {job.created_at.split(" ").join(" ")}
                </StyledGrayLabel>

                <StyledCompanyInfo>
                    <StyledFlex>
                        <StyledLogo>
                            <img
                                src={job.company_logo}
                                alt="Company logo"
                                height="42px"
                                width="42px"
                            />
                        </StyledLogo>

                        <StyledInfo>
                            <p>{job.company}</p>
                            <StyledGrayLabel>
                                <FontAwesomeIcon icon={faGlobeEurope}/>
                                {job.location}
                            </StyledGrayLabel>
                        </StyledInfo>
                    </StyledFlex>
                    <StyledDescriptionWrapper>
                        <Description/>
                    </StyledDescriptionWrapper>
                </StyledCompanyInfo>
            </StyledJobWrapper>
        </StyledJobPageWrapper>
    );
};

const StyledJobPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  @media (max-width: 1300px){
     display: flex;
     flex-direction: column;
     width: 100%;
    }
  
`;

const StyledHowToApply = styled.div`
  font-size: 1.4rem;
      a {
        color: #1e86ff;
      }
`;

const StyledDescription = styled.div`
  margin-top: 30px;
      font-weight: 400;
      font-size: 1.6rem;
      color: #334680;

      ul {
        margin: 20px;
      }
      @media (max-width: 1300px){
         position: center;
         width: 100%;
    }
`;

const StyledHowToWrapper = styled.div`
  display: block;
  width: 30%;
    .back-to-search {
      color: #1e86ff;
      font-size: 1.4rem;
      font-weight: 500;
    }
`;

const StyledJobWrapper = styled.div`
  display: block;
  width: 100%;
    height: 600px;
    overflow: auto;
    margin: 0 0 0 0;
    h2 {
      font-size: 2.4rem;
      color: #334680;
      font-weight: 700;
      margin-top: 8px;
      text-decoration: none;
    }
      p {
        font-size: 1.8rem;
        color: #334680;
        font-weight: 700;
      }
      button{
          border: 1px;
          border-radius: 4px;
          font-size: 1.4rem;
          margin: 10px 0 0 0;
          cursor: pointer;
          font-weight: 500;
          opacity: 0.75;
          color: #334680;
          background-color: transparent;
          padding: 5px 5px;
      }
`;

const StyledGrayLabel = styled.div`
  color: #b9bdcf;
      font-size: 1.2rem;
      margin-top: 10px;
      i {
        margin-right: 8.5px;
      }
`;

const StyledCompanyInfo = styled.div`
  display: block;
      height: 42px;
      margin-top: 30px;
      p {
        font-size: 1.8rem;
        color: #334680;
        font-weight: 700;
      }
      margin-right: 8vh;
`;

const StyledLogo = styled.div`
  height: 42px;
        width: 42px;
        border-radius: 4px;
        overflow: hidden;
        margin-right: 12px;
        
        img {
        object-fit: contain;
      }
`;

const StyledFlex = styled.div`
  display: flex;
`;

const StyledInfo = styled.div``;

const StyledDescriptionWrapper = styled.div`
    margin-top: 30px;
          font-weight: 400;
          font-size: 1.6rem;
          color: #334680;
    
          ul {
            margin: 20px;
          }
`;

const StyledLabel = styled.h2`
  text-transform: uppercase;
    color: #b9bdcf;
    font-size: 1.4rem;
    padding: 15px 0;
    user-select: none;
    margin-top: 15px;
`;

const StyledTop = styled.div`
  display: flex;
  flex-direction: row;
  button {
    font-size: 1.2rem;
      background-color: transparent;
      border: 1px solid #334680;
      border-radius: 4px;
      line-height: 30px;
      padding: 0 10px;
      margin-left: 8px;
      color: #334680;
      transition: all 0.1s;
      cursor: pointer;
  }
`;

export default JobPage;
