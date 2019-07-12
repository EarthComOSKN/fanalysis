/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { ChartBox, HeatMap } from "../components/Chart";
import { Container } from "../components/Layout";
import Filter from "../components/Filter";
import { Title } from "../components/Title";
import Timeline from "../components/Timeline";
import CountUp from "react-countup";
import { Card } from "../components/Card";

const Circle = ({ color }) => {
  return (
    <spa
      css={css`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${color};
        margin-right: 1rem;
        margin-left: 1rem;
      `}
    />
  );
};

const User = () => {
  const [activeTime, setActiveTime] = useState("10:00");
  const [oldUser, setOldUser] = useState(200);
  const [newUser, setNewUser] = useState(100);
  const [num, setNum] = useState(1);

  useEffect(() => {
    const t1 = (Math.floor(Math.random() * 10000) % 400) + 100;
    const t2 = (Math.floor(Math.random() * 10000) % 200) + 100;
    setOldUser(t1);
    setNewUser(t2);
  }, [num]);
  return (
    <Container
      margin="0"
      padding="0.5rem"
      css={css`
        width: 100%;
        max-width: 1500px;
        margin: 0 2rem;
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
          <Timeline
            setNum={setNum}
            activeTime={activeTime}
            setActiveTime={setActiveTime}
          />
        </div>
        <div css={css``}>
          <Container
            padding="1rem 1rem 1rem 1rem"
            margin="1rem 1rem 1rem 1rem"
            row
            fullwidth
            justify="center"
          >
            <Card
              title="OLD USERS"
              style={{
                width: "50%",
                minHeight: "200px"
              }}
            >
              <CountUp
                end={oldUser}
                css={css`
                  font-size: 3rem;
                `}
              />
            </Card>
            <Card
              title="NEW USERS"
              style={{
                width: "50%",
                minHeight: "200px"
              }}
            >
              <CountUp
                end={newUser}
                css={css`
                  font-size: 3rem;
                `}
              />
            </Card>
          </Container>
          <Card>
            <Container row>
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  color: white;
                  font-size: 1.5rem;
                  font-weight: 500;
                `}
              >
                {" "}
                <Circle color="rgb(166,165,40)" />
                <div>Men New User</div>
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  color: white;
                  font-size: 1.5rem;
                  font-weight: 500;
                `}
              >
                {" "}
                <Circle color="rgb(160,60,50)" />
                <div>Women New User</div>
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  color: white;
                  font-size: 1.5rem;
                  font-weight: 500;
                `}
              >
                {" "}
                <Circle color="rgb(53,123,42)" />
                <div>Men Old User</div>
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  color: white;
                  font-size: 1.5rem;
                  font-weight: 500;
                `}
              >
                {" "}
                <Circle color="rgb(70,60,112)" />
                <div>Women Old User</div>
              </div>
            </Container>
            <HeatMap num={num} />
          </Card>
        </div>
      </Container>
    </Container>
  );
};

export default User;
