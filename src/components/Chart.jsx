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
      data: ["week1", "week2", "week3", "week4"],
      axisLine: {
        lineStyle: { color: "#e0e0e0" }
      },
      name: "Weeks"
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: { color: "#e0e0e0" }
      },
      name: "Total"
    },
    legend: {
      textStyle: {
        color: "#fff"
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

export const SimpleLineChart = () => {
  const option = {
    textStyle: {
      color: "white"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "24:00"
      ]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320,
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320,
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320,
          820,
          932,
          901,
          934
        ],
        type: "line",
        areaStyle: {}
      }
    ]
  };
  return (
    <ReactEcharts
      option={option}
      style={{ width: "100%", height: "600px" }}
      theme="my_theme"
    />
  );
};

export const GenderTimeChart = () => {
  const option = {
    textStyle: {
      color: "white"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["old", "new", "transaction"],
      textStyle: {
        color: "#fff"
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      data: ["20", "40", "60", "80", "100", "120", "140", "160", "180"],
      name: "Time"
    },
    yAxis: {
      type: "value",
      name: "Total"
    },
    series: [
      {
        name: "old",
        type: "bar",

        data: [20, 100, 80, 10, 50, 70, 120, 40, 130]
      },
      {
        name: "new",
        type: "bar",

        data: [5, 20, 15, 50, 120, 100, 90, 75, 30]
      }
      // {
      //   name: "transaction",
      //   type: "line",
      //   data: [20, 95, 70, 30, 100, 105, 80, 50, 10],
      //   itemStyle: {
      //     color: "yellow"
      //   }
      // }
    ]
  };
  return (
    <ReactEcharts
      option={option}
      style={{ width: "100%", height: "600px" }}
      theme="my_theme"
    />
  );
};

export const ConvertionChart = () => {
  const option = {
    textStyle: { color: "white" },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["20", "40", "60", "80", "100", "120", "140", "160", "180"],
      name: "MIN"
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [29, 90, 15, 32, 53, 42, 23, 10, 5, 13],
        type: "line",
        areaStyle: {},
        smooth: true
      }
    ]
  };
  return (
    <ReactEcharts
      option={option}
      style={{ width: "100%", height: "600px" }}
      theme="my_theme"
    />
  );
};

export const DurationChart = () => {
  const option = {
    textStyle: {
      color: "white"
    },
    color: ["#3398DB"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["20", "40", "60", "80", "100"],
        axisTick: {
          alignWithLabel: true
        },
        name: "People"
      }
    ],
    yAxis: [
      {
        name: "Minutes",
        type: "value"
      }
    ],
    series: [
      {
        name: "Avg Time Spend",
        type: "bar",
        barWidth: "60%",
        data: [69, 220, 160, 434, 120]
      }
    ]
  };
  return (
    <ReactEcharts option={option} style={{ width: "100%", height: "600px" }} />
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
      data: ["20", "40", "60", "80", "100", "120", ">120"],
      axisLine: {
        lineStyle: { color: "#e0e0e0" }
      },
      name: "minute"
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: { color: "#e0e0e0" }
      },
      name: "total"
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
      },
      name: "number of week"
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: { color: "#e0e0e0" }
      },
      name: "total customers"
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
