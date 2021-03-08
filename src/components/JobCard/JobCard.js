import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const JobCard = ({
                     companyLogo,
                     company,
                     title,
                     type,
                     location,
                     created_at,
                     id,
                 }) => {
    created_at = created_at.split(" ");

    delete created_at[3];
    delete created_at[4];
    return (
        <StyledWrapper>
            <StyledPositionInfo>
                <StyledLogo>
                    <img src={companyLogo} alt="not found" height="90px" width="90px"/>
                </StyledLogo>
                <StyledPositionDetails>
                    <h5>{company}</h5>
                    <Link to={"/" + id}>
                        <h2>{title}</h2>
                    </Link>

                    <button className="transparent-button">{type}</button>
                </StyledPositionDetails>
            </StyledPositionInfo>

            <StyledApplicationInfo>
                <div className="location">
                    <i className="fas fa-globe-europe"></i>
                    {location}
                </div>

                <div className="created">
                    <i className="far fa-clock"></i>
                    {created_at.join(" ")}
                </div>
            </StyledApplicationInfo>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  padding: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  flex-direction: column;
  justify-content: left;
  margin-top: 25px;
  border-radius: 4px;
`;

const StyledPositionInfo = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const StyledLogo = styled.div`
  border-radius: 4px;
      overflow: hidden;
      height: 90px;
      width: 90px;
      background: #f2f2f2;
      color: #bdbdbd;
      font-weight: 600;
      font-size: 1.2rem;
      text-align: center;
      min-width: 90px;
      margin-top: 0;
      img {
        line-height: 90px;
        object-fit: cover;
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
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin-left: 106px;
    width: auto;

    i {
      margin-right: 8.5px;
    }
`;


export default JobCard;