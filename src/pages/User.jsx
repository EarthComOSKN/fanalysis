/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { ChartBox, HeatMap } from "../components/Chart";
import { Container } from "../components/Layout";
const User = () => {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
};

export default User;
