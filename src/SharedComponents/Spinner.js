import React from "react";
import styled from "@emotion/styled";

const StyledSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100vw;
  position: fixed;
`;

const SpinnerComponent = () => {
  return (
    <StyledSpinner>
      <div className="spinner-border text-light" role="status"></div>
    </StyledSpinner>
  );
};

export default SpinnerComponent;
