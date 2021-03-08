import React from "react";
import styled from "styled-components";

const Loading = () => {
    return (
        <StyledLoading>
            <img src="loading.svg" alt="loading gif"/>
        </StyledLoading>
    );
};

const StyledLoading = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 100px;
`;

export default Loading;
