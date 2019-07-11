import { white } from "ansi-colors";

import { relative } from "upath";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import styled from "@emotion/styled";

const TIME = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00"
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 32px;
`;
const Dot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  overflow: hidden;
  border: 2px #ffffff solid;
  transition: all 0.6s;
  cursor: pointer;
  &:hover {
    border-width: 8px;
    background-color: #ffffff;
  }
  ${p =>
    p.active
      ? `
    background-color: #ffffff;
  `
      : ``};
`;
const Line = styled.div`
  width: 2px;
  height: 48px;
  background-color: #ffffff;
`;
const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  position: absolute;
  ${"" /* top: 0; */}
  right: 24px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  ${p =>
    p.active
      ? `
  font-size: 28px;
  color: rgba(255,255,255,1);`
      : `
  font-size: 18px;
  color: rgba(255,255,255,0.7);`};
`;

const Timeline = ({ activeTime, setActiveTime }) => {
  return (
    <Container>
      {TIME.map((time, idx) => (
        <>
          <Row>
            <Dot
              active={time === activeTime}
              onClick={() => setActiveTime(time)}
            />
            <Text
              active={time === activeTime}
              onClick={() => setActiveTime(time)}
            >
              {time}
            </Text>
          </Row>
          {idx < TIME.length - 1 && <Line />}
        </>
      ))}
    </Container>
  );
};

export default Timeline;
