/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";
import { ChartBox, HeatMap } from "../components/Chart";
import { Container, Flex } from "../components/Layout";
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
      <Container
        margin='0'
        padding='0'
      >
        <Flex>
        <Card
            title="TOTAL VISITORS"
            style={{
              width: "50%",
              minHeight: "600px"
            }}
          >
            <ReactEcharts
              style={{
                height: "100%",
                width: "100%"
              }}
              option={{
                tooltip: {
                  trigger: "axis",
                  axisPointer: {
                    type: "shadow"
                  }
                },
                legend: {
                  data: ['7-14', '15-20', '41-60', '60+'],
                  textStyle: {
                    color: '#fff'
                  }
                },
                xAxis: {
                  type: "category",
                  data: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
                  axisLine: {
                    lineStyle: { color: "#e0e0e0" }
                  }
                },
                yAxis: {
                  type: "value",
                  axisLine: {
                    lineStyle: { color: "#e0e0e0" }
                  }
                },
                series: [
                  {
                    name:'7-14',
                    type:'bar',
                    stack: 'group',
                    data:[5, 2, 13, 4, 9, 11, 1, 5, 9, 2]
                  },
                  {
                    name:'15-20',
                    type:'bar',
                    stack: 'group',
                    data:[3, 8, 12, 4, 12, 3, 8, 3, 11, 6]
                  },
                  {
                    name:'41-60',
                    type:'bar',
                    stack: 'group',
                    data:[14, 1, 13, 1, 7, 7, 5, 2, 4, 6]
                  },
                  {
                    name:'60+',
                    type:'bar',
                    stack: 'group',
                    data:[2, 6, 7, 5, 1, 10, 0 ,8, 6, 9]
                  },
                ]
              }}
            />
          </Card>
          <Card
            title="TOTAL VISITORS"
            style={{
              width: "50%",
              minHeight: "600px"
            }}
          >
            <ReactEcharts
              style={{
                height: "100%",
                width: "100%"
              }}
              option={{
                tooltip: {
                  trigger: 'item',
                  formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                  orient: 'vertical',
                  x: 'left',
                  textStyle: {
                    color: '#fff'
                  }
                },
                series: [
                  {
                    name:'gender',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
        
                    label: {
                      normal: {
                        position: 'inner'
                      }
                    },
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    data:[
                        {value:75, name:'men', selected:true},
                        {value:69, name:'female'},
                    ]
                  },
                  {
                      name:'age',
                      type:'pie',
                      radius: ['40%', '55%'],
                      label: {
                        normal: {
                          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                          backgroundColor: '#eee',
                          borderColor: '#aaa',
                          borderWidth: 1,
                          borderRadius: 4,
                          rich: {
                            a: {
                              color: '#999',
                              lineHeight: 22,
                              align: 'center'
                            },
                            hr: {
                              borderColor: '#aaa',
                              width: '100%',
                              borderWidth: 0.5,
                              height: 0
                            },
                            b: {
                              fontSize: 16,
                              lineHeight: 33
                            },
                            per: {
                              color: '#eee',
                              backgroundColor: '#334455',
                              padding: [2, 4],
                              borderRadius: 2
                            }
                          }
                        }
                      },
                      data:[
                        {value:21, name:'7-14'},
                        {value:13, name:'15-20'},
                        {value:4, name:'41-60'},
                        {value:37, name:'60+'},
                        {value:14, name:'7-14'},
                        {value:12, name:'15-20'},
                        {value:28, name:'41-60'},
                        {value:15, name:'60+'}
                      ]
                  }
                ]
              }}
            />
          </Card>
        </Flex>
      </Container>
    </Container>
  );
};

export default User;
