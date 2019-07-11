/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ReactEcharts from 'echarts-for-react'

import { Container } from '../components/Layout'

import data from '../mock/data'

const option = {
  title: {
    text: "WORLD COFFEE RESEARCH SENSORY LEXICON",
    subtext: "Source: https://worldcoffeeresearch.org/work/sensory-lexicon/",
    textStyle: {
      fontSize: 14,
      align: "center"
    },
    subtextStyle: {
      align: "center"
    },
    sublink: "https://worldcoffeeresearch.org/work/sensory-lexicon/"
  },
  series: {
    type: "sunburst",
    highlightPolicy: "ancestor",
    data: data,
    radius: [0, "95%"],
    sort: null,
    levels: [
      {},
      {
        r0: "15%",
        r: "35%",
        itemStyle: {
          borderWidth: 2
        },
        label: {
          rotate: "tangential"
        }
      },
      {
        r0: "35%",
        r: "70%",
        label: {
          align: "right"
        }
      },
      {
        r0: "70%",
        r: "72%",
        label: {
          position: "outside",
          padding: 3,
          silent: false
        },
        itemStyle: {
          borderWidth: 3
        }
      }
    ]
  }
};

const Overview = () => {
  return (
    <Container
      margin='0'
      padding='0'
      css={css`
        height: 100%;
      `}
      id='overview'
    >
      <Container
        margin='0'
        padding='0'
        row
        wrap
      >
        <div
          css={css`
            display: flex;
            flex: 1;
            justify-content: center;
            background-color: gray;
          `}
        >
          <ReactEcharts
            style={{ height: "70vh", width: "100%" }}
            option={option}
          />
        </div>
      </Container>
    </Container>
  )
}

export default Overview
