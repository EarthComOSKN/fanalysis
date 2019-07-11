/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import axios from "axios";
import CountUp from "react-countup";
import { ReactComponent as OverviewIcon } from "../icons/tiles.svg";
import { ReactComponent as UserIcon } from "../icons/user.svg";
import { ReactComponent as CarlendarIcon } from "../icons/calendar.svg";
import { Container, Flex } from "../components/Layout";

import {
  Card,
  PieCard,
  VerticalBarCard,
  SankyCard,
  StackBarCard
} from "../components/Card";
import { Title } from "../components/Title";
import styled from "@emotion/styled";

const Col = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: ${props => props.grow || 1};
  height: 100px;
  ${props => (props.divide ? `border-right: 1px solid white;` : "")}
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-grow: ${props => props.grow || 1};
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container row fullWidth>
      <Col divide>
        <UserIcon />
        <Col>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <div
              css={css`
                font-size: 1.5rem;
                color: #7681a4;
              `}
            >
              MOST ACTIVE USER
            </div>
            <div
              css={css`
                padding-left: 1rem;
                font-size: 1rem;
                color: white;
              `}
            >
              FEMALE
            </div>
            <div
              css={css`
                padding-left: 1rem;
                font-size: 1rem;
                color: white;
              `}
            >
              20 - 25 YRS OLD
            </div>
          </div>
        </Col>
      </Col>
      <Col
        divide
        css={css`
          padding-left: 1.5rem;
        `}
      >
        <CarlendarIcon />
        <Col>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <div
              css={css`
                font-size: 1.5rem;
                color: #7681a4;
              `}
            >
              MOST ACTIVE USER
            </div>
            <div
              css={css`
                padding-left: 1rem;
                font-size: 1rem;
                color: white;
              `}
            >
              16:00 PM
            </div>
            <div
              css={css`
                padding-left: 1rem;
                font-size: 1rem;
                color: white;
              `}
            >
              SUNDAY
            </div>
          </div>
        </Col>
      </Col>
      <Col
        css={css`
          padding-left: 1.5rem;
        `}
      >
        <CarlendarIcon />
        <Col>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <div
              css={css`
                font-size: 1.5rem;
                color: #7681a4;
              `}
            >
              MOST ACTIVE USER
            </div>
            <div
              css={css`
                padding-left: 1rem;
                font-size: 1rem;
                color: white;
              `}
            >
              10:00 AM
            </div>
            <div
              css={css`
                padding-left: 1rem;
                font-size: 1rem;
                color: white;
              `}
            >
              MONDAY
            </div>
          </div>
        </Col>
      </Col>
    </Container>
  );
};
const Overview = () => {
  const [gender, setGender] = useState([]);

  const fetchGender = async () => {
    const { data } = await axios.get(
      "https://api.sheety.co/22c03d7b-d182-4d71-8b80-0847d7dab456"
    );
    let i = 0;
    const formatData = [];
    data.map((d, idx) => {
      formatData.push({
        value: d.number,
        label: d.gender,
        name: i === 0 ? "Male" : "Female"
      });
      i++;
    });
    setGender(formatData);
  };

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
      <Title>OVERVIEW</Title>
      <Header />
      <Container margin="0" padding="0">
        <Flex>
          <Card
            title="TOTAL VISITORS"
            style={{
              width: "25%",
              minHeight: "300px"
            }}
          >
            <CountUp
              end={45678}
              css={css`
                font-size: 3rem;
              `}
            />
          </Card>
          <PieCard
            title="GENDER"
            data={gender}
            mountFunc={fetchGender}
            cardStyle={{
              width: "30%",
              minHeight: "300px"
            }}
            chartStyle={{
              height: "100%",
              width: "100%"
            }}
          />
          <VerticalBarCard
            title="DURATION"
            data={[40, 100, 50, 10, 40, 100, 50]}
            cardStyle={{
              width: "45%",
              minHeight: "350px"
            }}
            chartStyle={{
              height: "100%",
              width: "100%"
            }}
          />
        </Flex>
        <Flex>
          <StackBarCard
            title="RETENTION"
            data={[
              {
                name: "new",
                data: [20, 30, 15, 20]
              },
              {
                name: "old",
                data: [0, -10, -15, -15]
              },
              {
                name: "resurrent",
                data: [0, 0, 5, 10]
              }
            ]}
            cardStyle={{
              width: "50%",
              minHeight: "400px"
            }}
            chartStyle={{
              height: "100%",
              width: "100%"
            }}
          />
          <SankyCard
            title="CUSTOMER JOURNEY"
            data={[
              { name: "a" },
              { name: "b" },
              { name: "a1" },
              { name: "a2" },
              { name: "b1" },
              { name: "c" }
            ]}
            link={[
              {
                source: "a",
                target: "a1",
                value: 5,
                lineStyle: { color: "#e0e0e0" }
              },
              {
                source: "a",
                target: "a2",
                value: 3,
                lineStyle: { color: "#e0e0e0" }
              },
              {
                source: "b",
                target: "b1",
                value: 8,
                lineStyle: { color: "#e0e0e0" }
              },
              {
                source: "a",
                target: "b1",
                value: 3,
                lineStyle: { color: "#e0e0e0" }
              },
              {
                source: "b1",
                target: "a1",
                value: 1,
                lineStyle: { color: "#e0e0e0" }
              },
              {
                source: "b1",
                target: "c",
                value: 2,
                lineStyle: { color: "#e0e0e0" }
              }
            ]}
            cardStyle={{
              width: "50%",
              minHeight: "400px"
            }}
            chartStyle={{
              height: "100%",
              width: "100%"
            }}
          />
        </Flex>
      </Container>
    </Container>
  );
};

export default Overview;
