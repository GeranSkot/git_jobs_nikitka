import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {faClock, faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types,camelcase
const JobCard = ({companyLogo, company, title, type, location, created_at, id,}) => {
    // eslint-disable-next-line camelcase,no-param-reassign,react/prop-types
    created_at = created_at.split(" ");

    // eslint-disable-next-line no-param-reassign
    delete created_at[3];
    // eslint-disable-next-line no-param-reassign
    delete created_at[4];
    return (
        <StyledWrapper>
            <StyledPositionInfo>
                <StyledLogo>
                    <img src={companyLogo} alt="not found"/>
                </StyledLogo>
                <StyledPositionDetails>
                    <h5>{company}</h5>
                    <Link to={`/${id}`}>
                        <h2>{title}</h2>
                    </Link>
                </StyledPositionDetails>
            </StyledPositionInfo>

            <StyledApplicationInfo>
                <button type="submit">{type}</button>
                <StyledAppInfo>
                    <div className="location">
                        <FontAwesomeIcon icon={faGlobeEurope}/>
                        {location}
                    </div>

                    <div className="created">
                        <FontAwesomeIcon icon={faClock}/>
                        {/* eslint-disable-next-line react/prop-types */}
                        {created_at.join(" ")}
                    </div>
                </StyledAppInfo>
            </StyledApplicationInfo>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
   height: 115px;
   //width: 753px;
   display: flex;
   flex-direction: column;
   background: #fff;
   padding: 15px 15px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
   
   border-radius: 4px;
   margin-bottom: 32px;
`;

const StyledPositionInfo = styled.div`
   display: flex;
   height: 55px;
`;

const StyledLogo = styled.div`
   border-radius: 4px;
       overflow: hidden;
       height: 90px;
       width: 90px;
       background: #f2f2f2;
       color: #bdbdbd;
       img {
         object-fit: contain;
         height: 90px; 
         width: 90px;
       }
`;

const StyledPositionDetails = styled.div`
   padding: 0 16px;
       a {
         text-decoration: none;
       }
       h5 {
         font-size: 1.2rem;
         font-weight: 700;
         color: #282538;
       }

       h2 {
         font-size: 1.8rem;
         color: #334680;
         font-weight: 400;
         margin-top: 8px;
         text-decoration: none;
       }
`;

const StyledApplicationInfo = styled.div`
   color: #b9bdcf;
     font-size: 12px;
     display: flex;
     justify-content: space-between; 
     margin-left: 106px;
     i {
       margin-right: 8.5px;
     }
     button{
           border: 1px solid #334680;
           border-radius: 4px;
           padding: 4px 6px;
           font-size: 14px;
           cursor: pointer;
           font-weight: 700;
           opacity: 0.75;
           color: #334680;
           background-color: #fff;
           &:hover{
             color: #1e86ff;
             border: 1px solid #1e86ff;
           }      
       }
     .created{
      padding-left: 28.5px;
     }     
`;

const StyledAppInfo = styled.div`
  display: flex;
  flex-direction: row;
  text-align: right;
  
`;


export default JobCard;
