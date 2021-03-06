/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import axios from "axios";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";
import { ReactComponent as OverviewIcon } from "../icons/tiles.svg";
import { ReactComponent as UserIcon } from "../icons/user.svg";
import { ReactComponent as CarlendarIcon } from "../icons/calendar.svg";
import { Container, Flex } from "../components/Layout";

import { Card, SankyCard } from "../components/Card";
import { Title } from "../components/Title";
import styled from "@emotion/styled";
import {
  SimpleLineChart,
  GenderTimeChart,
  DurationChart,
  ConvertionChart
} from "../components/Chart";
import Filter from "../components/Filter";

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
              MOST ACTIVE USERS
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
              MOST ACTIVE DAY
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
              LEAST ACTIVE DAY
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
const Customer = () => {
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
      padding="1rem"
      css={css`
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
      `}
    >
      <Title>CUSTOMER JOURNEY</Title>
      <Filter />
      <SankyCard
        cardStyle={{
          width: "100%",
          minHeight: "600px"
        }}
        chartStyle={{ width: "100%", height: "600px" }}
        title="CUSTOMER JOURNEY"
        data={[
          { name: "entrance1" },
          { name: "entrance2" },
          { name: "men" },
          { name: "kid & baby" },
          { name: "women" },
          { name: "cashier" },
          { name: "exit" },
          { name: "fitting room" }
        ]}
        link={[
          {
            source: "entrance1",
            target: "women",
            value: 5,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "entrance1",
            target: "kid & baby",
            value: 2,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "entrance1",
            target: "men",
            value: 3,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "entrance2",
            target: "women",
            value: 8,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "entrance2",
            target: "kid & baby",
            value: 3,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "women",
            target: "cashier",
            value: 3,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "kid & baby",
            target: "fitting room",
            value: 3,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "women",
            target: "fitting room",
            value: 5,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "fitting room",
            target: "cashier",
            value: 2,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "fitting room",
            target: "exit",
            value: 3,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "men",
            target: "cashier",
            value: 3,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "cashier",
            target: "exit",
            value: 8,
            lineStyle: { color: "#e0e0e0" }
          },
          {
            source: "entrance1",
            target: "exit",
            value: 2,
            lineStyle: { color: "#e0e0e0" }
          }
        ]}
      />
      <Card
        nonebg
        title="Duration of customers"
        style={{
          width: "100%",
          minHeight: "600px"
        }}
      >
        <GenderTimeChart />
      </Card>
      <Card
        nonebg
        title="Conversion Rate"
        style={{
          width: "100%",
          minHeight: "600px"
        }}
      >
        <ConvertionChart />
      </Card>
      <Card
        nonebg
        title="Group of customers"
        style={{
          width: "100%",
          minHeight: "600px"
        }}
      >
        <ReactEcharts
          style={{
            width: "100%",
            height: "600px"
          }}
          option={{
            tooltip: {
              show: true,
              formatter: params => {
                let res = "";
                res += `Value : ${params.value.toLocaleString()}</br>`;
                res += `Percent : ${params.percent}%`;
                return res;
              }
            },
            series: [
              {
                type: "pie",
                radius: ["50%", "70%"],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    formatter:
                      "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
                    backgroundColor: "#eee",
                    borderColor: "#aaa",
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                      a: {
                        color: "#999",
                        lineHeight: 22,
                        align: "center"
                      },
                      hr: {
                        borderColor: "#aaa",
                        width: "100%",
                        borderWidth: 0.5,
                        height: 0
                      },
                      b: {
                        fontSize: 16,
                        lineHeight: 33
                      },
                      per: {
                        color: "#eee",
                        backgroundColor: "#334455",
                        padding: [2, 4],
                        borderRadius: 2
                      }
                    }
                  }
                },
                data: [
                  { value: 335, name: "1 คน" },
                  { value: 310, name: "2 คน" },
                  { value: 500, name: "3 คนขึ้นไป(เพื่อน)" },
                  { value: 200, name: "3 คนขึ้นไป(ครอบครัว)" }
                ]
              }
            ]
          }}
          theme="my_theme"
        />
      </Card>
      <Card
        nonebg
        title="Decision of customers"
        style={{
          width: "100%",
          minHeight: "600px"
        }}
      >
        <ReactEcharts
          style={{
            width: "100%",
            height: "600px"
          }}
          option={{
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            xAxis: {
              type: "value",
              name: "เปอร์เซ็น (%)",
              axisLine: {
                lineStyle: { color: "#e0e0e0" }
              }
            },
            yAxis: {
              type: "category",
              data: ["1 คน", "2 คน", "เพื่อน", "ครอบครัว"],
              axisLine: {
                lineStyle: { color: "#e0e0e0" }
              }
            },
            series: [
              {
                name: "buy",
                type: "bar",
                stack: "group",
                data: [80, 40, 60, 90]
              },
              {
                name: "not buy",
                type: "bar",
                stack: "group",
                data: [20, 60, 40, 10]
              }
            ]
          }}
          theme="my_theme"
        />
      </Card>
    </Container>
  );
};

export default Customer;
