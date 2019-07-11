/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ReactEcharts from 'echarts-for-react'
import styled from "@emotion/styled";

export const ChartBox = ({ children, title }) => {
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
      <ReactEcharts style={{ width: "100%" }} option={option} />
    </div>
  );
};

export const PieChart = ({ data, style, loading }) => {
  const option = {
    tooltip: {
      show: true,
      formatter: (params) => {
        let res = ''
        res += `Value : ${params.value.toLocaleString()}</br>`
        res += `Percent : ${params.percent}%`
        return res;
      }
    },
    series: [{
      name: 'pie',
      type: 'pie',
      selectedMode: 'single',
      selectedOffset: 30,
      clockwise: true,
      data
    }]
  }
  
  return (
    <ReactEcharts
      style={style}
      option={option}
      showLoading={loading}
    />
  )
}

export default null
