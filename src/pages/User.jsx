/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useState } from "react";
import { ChartBox, HeatMap } from "../components/Chart";
import { Container } from "../components/Layout";
import { Filter } from "../components/Navbar";
import Timeline from "../components/Timeline";
const User = () => {
  const [activeTime, setActiveTime] = useState("10:00");
  return (
    <div>
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
    </div>
  );
};

export default User;
