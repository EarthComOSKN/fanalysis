/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import axios from "axios";
import CountUp from "react-countup";

import { Container, Flex } from "../components/Layout";
import {
  Card,
  PieCard,
  VerticalBarCard,
  SankyCard,
  StackBarCard
} from "../components/Card";
import { Title } from "../components/Title";

const Overview = () => {
  const [gender, setGender] = useState([]);

  const fetchGender = async () => {
    const { data } = await axios.get(
      "https://api.sheety.co/22c03d7b-d182-4d71-8b80-0847d7dab456"
    );
    const formatData = [];
    data.map(d =>
      formatData.push({
        value: d.number,
        name: d.gender
      })
    );
    setGender(formatData);
  };

  return (
    <Container
      margin="0"
      padding="2rem"
      css={css`
        height: 100%;
      `}
    >
      <Title>OVERVIEW</Title>
      <Container margin="0" padding="0">
        <Flex>
          <Card
            title="VISITORS"
            style={{
              width: "40%",
              minHeight: "300px"
            }}
          >
            <CountUp
              end={45678}
              css={css`
                font-size: 2rem;
              `}
            />
          </Card>
          <PieCard
            title="GENDER"
            data={gender}
            mountFunc={fetchGender}
            cardStyle={{
              width: "20%",
              minHeight: "300px"
            }}
            chartStyle={{
              height: "100%",
              width: "100%"
            }}
          />
          <VerticalBarCard
            title="DURATION"
            data={[40, 100, 50, 10]}
            cardStyle={{
              width: "40%",
              minHeight: "300px"
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
                value: 5
              },
              {
                source: "a",
                target: "a2",
                value: 3
              },
              {
                source: "b",
                target: "b1",
                value: 8
              },
              {
                source: "a",
                target: "b1",
                value: 3
              },
              {
                source: "b1",
                target: "a1",
                value: 1
              },
              {
                source: "b1",
                target: "c",
                value: 2
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
