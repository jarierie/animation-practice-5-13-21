import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const Card = ({ onMouseOut, image, onMouseOver }) => {
  return (
    <>
      <Container onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        <img src={image} alt=''></img>
      </Container>
    </>
  );
};

export default Card;
