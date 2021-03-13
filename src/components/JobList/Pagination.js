import React from "react";
import styled from 'styled-components';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Pagination = ({pagesCount, setCurrentPage, currentPage}) => {
    currentPage = Number(currentPage);

    const buttons = () => {
        let buttonArray = [];

        buttonArray.push(currentPage);

        if (currentPage > 1) {
            buttonArray.unshift(currentPage - 1);
        }

        if (currentPage < pagesCount) {
            buttonArray.push(currentPage + 1);
        }

        if (!buttonArray.includes(pagesCount)) {
            buttonArray.push(pagesCount);
        }
        if (currentPage < pagesCount - 1) {
            buttonArray.pop();
            buttonArray.push("dots");
            buttonArray.push(pagesCount);
        }

        buttonArray = buttonArray.filter((element) => {
            return element !== 0;
        });

        return buttonArray;
    };

    return (
        <StyledPaginationButtons>
            <button
                onClick={() => {
                    setCurrentPage(currentPage - 1);
                }}
                disabled={currentPage < 2 && "disabled"}
            >
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>

            {buttons().map((pageNumber) => {
                if (pageNumber === "dots") {
                    return (
                        <StyledDots key={pageNumber}/>
                    );
                }

                return (
                    <button
                        key={pageNumber}
                        onClick={(e) => {
                            setCurrentPage(e.target.textContent);
                        }}
                        className={currentPage === pageNumber ? "active" : ""}
                    >
                        {pageNumber}
                    </button>
                );
            })}

            <button
                onClick={() => {
                    setCurrentPage(currentPage + 1);
                }}
                disabled={
                    (currentPage === pagesCount && "disabled") ||
                    (currentPage + 1 > pagesCount && "disabled")
                }
            >
                <FontAwesomeIcon icon={faChevronRight}/>

            </button>
        </StyledPaginationButtons>
    );
};

const StyledPaginationButtons = styled.div`
  text-align: right;
    margin-top: 32px;
    display: block;
    flex-direction: row;
    button {
      font-size: 1.2rem;
      background-color: transparent;
      border: 1px solid #b7bcce;
      border-radius: 4px;
      line-height: 30px;
      padding: 0 10px;
      margin-left: 8px;
      color: #b9bdcf;
      transition: all 0.1s;
      cursor: pointer;
      
      &:hover{
        color: #1e86ff;
        border: 1px solid #1e86ff;
      } 
    }
    .active{
      background-color: #1e86ff;
      color: #fff;
    }
    
    @media (max-width: 1300px){
     position: center;
     text-align: center;
  }
`;

const StyledDots = styled.i`
      font-size: 1.8rem;
      color: #b9bdcf;
      background-color: #334680;
`;

export default Pagination;