/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ReactEcharts from "echarts-for-react";
import { Slider } from "antd";
import { Container } from "./Layout";

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
    <Container>
      <Container>
        <img src="https://dummyimage.com/600x400/000/fff" alt="" />
      </Container>
      <div>
        <Slider
          marks={marks}
          step={10}
          defaultValue={37}
          css={css`
            .ant-slider-mark-text {
              color: white;
            }
          `}
        />
      </div>
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

  return <ReactEcharts style={style} option={option} showLoading={loading} />;
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

  return <ReactEcharts style={style} option={option} showLoading={loading} />;
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
        lineStyle: {color: '#e0e0e0'}
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {color: '#e0e0e0'}
      },
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

  return <ReactEcharts style={style} option={option} showLoading={loading} />;
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
        lineStyle: {color: '#e0e0e0'}
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {color: '#e0e0e0'}
      },
    },
    series: [
      {
        name: "data",
        type: "bar",
        data
      }
    ]
  };

  return <ReactEcharts style={style} option={option} showLoading={loading} />;
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
        lineStyle: {color: '#e0e0e0'}
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {color: '#e0e0e0'}
      },
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

  return <ReactEcharts style={style} option={option} showLoading={loading} />;
};

export default null;
