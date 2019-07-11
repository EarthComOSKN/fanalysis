/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { ChartBox, HeatMap } from "../components/Chart";
import { Container } from "../components/Layout";
const User = () => {
  return (
    <div>
      <Container>
        <ChartBox>
          <HeatMap />
        </ChartBox>
        <ChartBox>
          <HeatMap />
        </ChartBox>
      </Container>
    </div>
  );
};

export default User;
