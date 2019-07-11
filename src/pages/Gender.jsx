/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useState } from "react";
import { ChartBox, HeatMap } from "../components/Chart";
import { Container } from "../components/Layout";
import Filter from "../components/Filter";
import { Title } from "../components/Title";
import Timeline from "../components/Timeline";
import CountUp from "react-countup";
import { Card } from "../components/Card";

const Gender = () => {
  const [activeTime, setActiveTime] = useState("10:00");
  return (
    <Container
      margin="0"
      padding="1rem"
      css={css`
        width: 100%;
        max-width: 1200px;
        margin: 0 4rem;
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
          <Container
            padding="1rem 1rem 1rem 1rem"
            margin="1rem 1rem 1rem 1rem"
            row
            fullwidth
            justify="center"
          >
            <Card
              title="OLD USER"
              style={{
                width: "50%",
                minHeight: "200px"
              }}
            >
              <CountUp
                end={100}
                css={css`
                  font-size: 3rem;
                `}
              />
            </Card>
            <Card
              title="NEW USER"
              style={{
                width: "50%",
                minHeight: "200px"
              }}
            >
              <CountUp
                end={200}
                css={css`
                  font-size: 3rem;
                `}
              />
            </Card>
          </Container>
          <ChartBox title="HeatMap">
            <HeatMap />
          </ChartBox>
        </div>
      </Container>
    </Container>
  );
};

export default Gender;
