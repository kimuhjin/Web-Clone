import React from "react";
import styled from "styled-components";
function Bean() {
  return (
    <div>
      <Container>Bean</Container>
    </div>
  );
}

export default Bean;

const Container = styled.div`
  height: 573px;
  width: auto;
  background-color: skyblue;
`;
