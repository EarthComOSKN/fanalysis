/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Container } from "./Layout";
import ReactEcharts from "echarts-for-react";

export const ChartBox = ({ children }) => {
  return (
    <Container
      css={css`
        background-color: gray;
        border-radius: 50px;
        padding-top: 5rem;
        padding-bottom: 5rem;
      `}
    >
      {children}
    </Container>
  );
};

export const HeatMap = () => {
  var xData = [];
  var yData = [];
  function generateData(theta, min, max) {
    var data = [];
    for (var i = 0; i <= 200; i++) {
      for (var j = 0; j <= 100; j++) {
        data.push([i, j, i / 400 + j / 200]);
        // data.push([i, j, normalDist(theta, x) * normalDist(theta, y)]);
      }
      xData.push(i);
    }
    for (var j = 0; j < 100; j++) {
      yData.push(j);
    }
    return data;
  }
  var data = generateData(2, -5, 5);

  const option = {
    tooltip: {},
    xAxis: {
      type: "category",
      data: xData
    },
    yAxis: {
      type: "category",
      data: yData
    },
    visualMap: {
      min: 0,
      max: 1,
      calculable: true,
      realtime: false,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026"
        ]
      }
    },
    series: [
      {
        name: "Gaussian",
        type: "heatmap",
        data: data,
        itemStyle: {
          emphasis: {
            borderColor: "#333",
            borderWidth: 1
          }
        },
        progressive: 1000,
        animation: false
      }
    ]
  };
  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
};
