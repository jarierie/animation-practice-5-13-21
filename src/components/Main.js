import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Header from "./Header";
import image from "../assets/iu.jpg";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #1b2021;
`;

const Main = () => {
  const [headerText, setHeaderText] = useState("Starting Text");
  const [start, setStart] = useState(false);

  return (
    <>
      <Header startState={start} headerText={headerText} />
      <Container>
        <Card
          onMouseOver={() => {
            setStart(!start);
            setHeaderText("Stream Blueming");
          }}
          onMouseOut={() => {
            setStart(!start);
            setHeaderText("Pangalawang text");
          }}
          image={image}
        />
      </Container>
    </>
  );
};
export default Main;
