/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ReactCohortGraph from 'react-cohort-graph'

import { Container } from '../components/Layout'
import { LineChart } from '../components/Chart'
import { Card } from '../components/Card'

const DATA = {
  weeks: {
      "week1": [200, 70, 20, 18, 17, 16, 17, 17],
      "week2": [300, 200, 150, 140, 80, 50, 40],
      "week3": [200, 100, 50, 10, 8, 7]
  },
}

const lineData = [
  {
    name: 'week1',
    data: [200, 70, 20, 18, 17, 16, 17, 17],
  },
  {
    name: 'week2',
    data: [300, 200, 150, 140, 80, 50, 40],
  },
  {
    name: 'week3',
    data: [200, 100, 50, 10, 8, 7]
  }
]

const Retention = () => {
  return (
    <Container
      margin='0'
      padding='1rem'
      css={css`
        height: 100%;
      `}
    >
      <Container
        margin='0'
        padding='0'
        justify='center'
        align='center'
      >
        <Card
          css={css`
            width: 50%;
          `}
        >
          <LineChart
            data={lineData}
            style={{
              width: '100%',
              height: '300px'
            }}
          />
        </Card>
        <div
          css={css`
            width: 80%;
            overflow: scroll;
          `}
        >
          <ReactCohortGraph
            data={DATA}
            showHeaderValues
          />
        </div>
      </Container>
    </Container>
  )
}

export default Retention
