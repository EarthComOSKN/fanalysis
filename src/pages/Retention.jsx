/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ReactCohortGraph from 'react-cohort-graph'

import { Container } from '../components/Layout'

const DATA = {
  weeks: {
      "week1": [200, 10, 20],
      "week2": [300, 200],
      "week3": [200]
  },
}

const Retention = () => {
  return (
    <Container
      margin='0'
      padding='1rem'
      css={css`
        height: 100%;
      `}
    >
      <ReactCohortGraph
        data={DATA}
        showHeaderValues
      />
    </Container>
  )
}

export default Retention
