/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useState } from "react";
import { ChartBox, HeatMap } from "../components/Chart";
import { Container } from "../components/Layout";
import Filter from "../components/Filter";
import { Title } from "../components/Title";
import Timeline from "../components/Timeline";

const User = () => {
  const [activeTime, setActiveTime] = useState("10:00");
  return (
    <Container
      margin="0"
      padding="2rem"
      css={css`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      `}
    >
      <Title>VISITORS</Title>
      <Filter />
      <Container row>
        <div
          css={css`
            padding: 32px;
            margin-right: 24px;
          `}
        >
          <Timeline activeTime={activeTime} setActiveTime={setActiveTime} />
        </div>
        <div>
          <Container padding="0" row fullwidth justify="center">
            <ChartBox title="Customer Enter">Enter</ChartBox>
            <ChartBox title="Customer Exit">Exit</ChartBox>
          </Container>
          <ChartBox title="HeatMap">
            <HeatMap />
          </ChartBox>
          <ChartBox title="HeatMap">
            <HeatMap />
          </ChartBox>
        </div>
      </Container>
    </Container>
  );
};

export default User;
