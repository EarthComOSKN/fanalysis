/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";
import { Slider } from "antd";
import { Container } from "./Layout";
import { useState } from "react";

echarts.registerTheme("my_theme", {
  color: ["#53D6A9", "#8E4AF5", "#3CC9F5", "#CA47CE", "#D28F84"]
});
export const ChartBox = ({ title, children }) => {
  return (
    <Container
      fullWidth
      css={css`
        box-shadow: 5px 10px 18px #888888;
        border-radius: 5px;
        padding: 1rem 1rem 1rem 1rem;
        margin: 1rem 1rem 1rem 1rem;
      `}
    >
      <div css={css``}>{title}</div>
      {children}
    </Container>
  );
};

const marks = {
  0: "10:00",
  10: "11:00",
  20: "12:00",
  30: "13:00",
  40: "14:00",
  50: "15:00",
  60: "16:00",
  70: "17:00",
  80: "18:00",
  90: "19:00",
  100: "20:00"
};

export const HeatMap = ({ num }) => {
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

  return (
    <Container>
      <img src={`st0${num}.png`} width="800px" height="500px" alt="" />
    </Container>
  );
};

export const PieChart = ({ data, style, loading }) => {
  const option = {
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
        name: "pie",
        type: "pie",
        clockwise: true,
        data
      }
    ]
  };

  return (
    <ReactEcharts
      style={style}
      option={option}
      showLoading={loading}
      theme="my_theme"
    />
  );
};

export const SankyChart = ({ data, link, style, loading }) => {
  const option = {
    series: {
      name: "sankey",
      type: "sankey",
      layout: "none",
      focusNodeAdjacency: "allEdges",
      data,
      links: link
    }
  };

  return (
    <ReactEcharts
      style={style}
      option={option}
      showLoading={loading}
      theme="my_theme"
    />
  );
};

export const StackChart = ({ data, style, loading }) => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    xAxis: {
      type: "category",
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
    series: []
  };

  data.map(d =>
    option.series.push({
      name: d.name,
      type: "bar",
      stack: "group",
      data: d.data
    })
  );

  return (
    <ReactEcharts
      style={style}
      option={option}
      showLoading={loading}
      theme="my_theme"
    />
  );
};

export const VerticalBarChart = ({ data, style, loading }) => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    xAxis: {
      type: "category",
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
        name: "data",
        type: "bar",
        data
      }
    ]
  };

  return (
    <ReactEcharts
      style={style}
      option={option}
      showLoading={loading}
      theme="my_theme"
    />
  );
};

export const LineChart = ({ data, style, loading }) => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    xAxis: {
      type: "category",
      data: [],
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
    series: []
  };

  data.data.map((dd, i) => {
    option.xAxis.data.push(`week ${i + 1}`);
  });
  option.series.push({
    type: "line",
    data: data.data
  });

  return (
    <ReactEcharts
      style={style}
      option={option}
      showLoading={loading}
      theme="my_theme"
    />
  );
};

export default null;
