import React from "react";
import styled from 'styled-components';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
const Pagination = ({pagesCount, setCurrentPage, currentPage}) => {
    // eslint-disable-next-line no-param-reassign
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

        buttonArray = buttonArray.filter((element) => element !== 0);

        return buttonArray;
    };

    return (
        <StyledPaginationButtons>

            <button type="button"
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

                    <button type="submit"
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

            <button type="submit"
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
       font-size: 12px;
       background-color: transparent;
       border: 1px solid #b7bcce;
       border-radius: 4px;
       width: 36px;
       height: 36px;
       margin-left: 8px;
       color: #b9bdcf;
       transition: all 0.1s;
       cursor: pointer;
      
       &:hover{
         //color: #1e86ff;
         border: 1px solid #1e86ff;
       } 
     }
     .active{
       background-color: #1e86ff;
       color: #fff;
     }
    
  //   @media (max-width: 1300px){
  //    position: center;
  //    text-align: center;
  // }
`;

const StyledDots = styled.i`
       font-size: 18px;
       color: #b9bdcf;
       background-color: #334680;
`;

export default Pagination;