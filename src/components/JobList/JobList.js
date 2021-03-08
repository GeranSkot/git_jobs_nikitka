import React, {useState, useEffect} from "react";

import JobCard from "../JobCard/JobCard";
import Pagination from "./Pagination";
import Loading from "./Loading";
import Rejected from "./Rejected";

import {useSelector} from "react-redux";
import {selectAllJobs} from "../../services/redux/slices/jobs/jobsSlice";

import {paginate} from "../../paginator";
import styled from 'styled-components';


const JobList = ({
                     paginatedJobs,
                     setPaginatedJobs,
                     displayPaginationNumbers,
                 }) => {
    const [currentPage, setCurrentPage] = useState("1");
    const [pagesCount, setPagesCount] = useState(0);
    const [jobs, setJobs] = useState([]);

    const jobsSelector = useSelector(selectAllJobs);
    const requestStatus = useSelector((state) => state.jobs.status);

    useEffect(() => {
        setJobs(jobsSelector);
    }, [jobsSelector]);

    // Handle what jobs are displayed
    useEffect(() => {
        const {items: paginatedJobs, pages} = paginate(jobs, currentPage);

        setPaginatedJobs(paginatedJobs);
        setPagesCount(pages);
    }, [currentPage, jobs, setPaginatedJobs]);

    if (requestStatus === "loading") {
        return <Loading/>;
    }

    if (requestStatus === "rejected") {
        return <Rejected/>;
    }

    if (paginatedJobs.length === 0 || jobs.length === 0) {
        return <StyledNoResult>No results</StyledNoResult>;
    }

    const PaginationButtons = () => {
        if (displayPaginationNumbers) {
            return (
                <Pagination
                    pagesCount={pagesCount}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            );
        }

        return null;
    };

    return (
        <StyledJobList>
            <div>
                {paginatedJobs.map((job) => {
                    if (job) {
                        return (
                            <JobCard
                                companyLogo={job.company_logo}
                                company={job.company}
                                title={job.title}
                                type={job.type}
                                location={job.location}
                                created_at={job.created_at}
                                key={job.id}
                                id={job.id}
                            />
                        );
                    }
                    return null;
                })}
            </div>

            <PaginationButtons/>
        </StyledJobList>
    );
};

const StyledJobList = styled.div`
    
    display: block;
    width: 100%;
    padding: 20px 40px;
    
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
    }
`;

const StyledNoResult = styled.h1`
  color: #1e86ff;
  text-align: center;
  margin-top: 50px;
`;

export default JobList;
