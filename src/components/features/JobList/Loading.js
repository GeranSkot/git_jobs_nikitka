import React from "react";
import styled from "styled-components";

const Loading = () => (
        <StyledLoading>
            <img src="loading.svg" alt="loading gif"/>
        </StyledLoading>
    );

const StyledLoading = styled.div`
  margin-left: 360px;
   text-align: center;
   margin-top: 100px;
`;

export default Loading;
