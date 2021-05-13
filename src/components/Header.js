import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 1;
`;
const HeaderContainer = styled.div`
  font-size: 12rem;
  color: white;
  overflow: hidden;

  p {
    display: inline-block;
    margin: 0;
  }
`;

const Header = ({ headerText, startState }) => {
  const ref = useRef(null);
  const [localState, setLocalState] = useState("Starting Text");

  //animation

  const animation = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      ref.current.childNodes,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
      }
    );
  };

  const fadeAnimation = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ref.current.childNodes,
      { y: 0, opacity: 1 },
      {
        y: 200,
        opacity: 0,
        duration: 0.2,
        stagger: 0.2,
        onComplete: () => setLocalState(headerText),
      }
    );
  };

  useEffect(() => {
    animation();
  }, [localState]);

  useEffect(() => {
    if (startState === false) {
      fadeAnimation();
    } else {
      animation();
    }
  }, [startState]);

  useEffect(() => {
    console.log(startState);
  }, [startState]);
  return (
    <>
      <Container>
        <HeaderContainer ref={ref}>
          {localState.split("").map((letter) => {
            return (
              <>
                <p>{letter}</p>
              </>
            );
          })}
        </HeaderContainer>
      </Container>
    </>
  );
};

export default Header;
