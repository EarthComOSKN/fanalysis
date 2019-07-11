/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'

import axios from 'axios'

import { Container } from '../components/Layout'
import { PieCard, SankyCard, StackBarCard } from '../components/Card'

const Overview = () => {
  const [gender, setGender] = useState([])

  const fetchGender = async () => {
    const { data } = await axios.get('https://api.sheety.co/22c03d7b-d182-4d71-8b80-0847d7dab456')
    const formatData = []
    data.map(d => 
      formatData.push({
        value: d.number,
        name: d.gender
      })
    )
    setGender(formatData)
  }

  return (
    <Container
      margin='0'
      padding='1rem'
      css={css`
        height: 100%;
        background-color: gray;
      `}
    >
      <Container
        row
        justify='center'
      >
        Overview
      </Container>
      <Container
        margin='0'
        padding='0'
        row
        wrap
      >
        <PieCard
          data={gender}
          mountFunc={fetchGender}
          cardStyle={{
            width: '20%',
            minHeight: '300px'
          }}
          chartStyle={{
            height: '100%',
            width: '100%'
          }}
        />
        <StackBarCard
          data={[
            {
              name: 'new',
              data: [20, 30, 15, 20]
            },
            {
              name: 'old',
              data: [0, -10, -15, -15]
            },
            {
              name: 'resurrent',
              data: [0, 0, 5, 10]
            },
          ]}
          cardStyle={{
            width: '50%',
            minHeight: '400px'
          }}
          chartStyle={{
            height: '100%',
            width: '100%'
          }}
        />
        <SankyCard
          data={[
            { name: 'a' },
            { name: 'b' },
            { name: 'a1' },
            { name: 'a2' },
            { name: 'b1' },
            { name: 'c' }
          ]}
          link={[
            {
              source: 'a',
              target: 'a1',
              value: 5
            },
            {
              source: 'a',
              target: 'a2',
              value: 3
            },
            {
              source: 'b',
              target: 'b1',
              value: 8
            },
            {
              source: 'a',
              target: 'b1',
              value: 3
            },
            {
              source: 'b1',
              target: 'a1',
              value: 1
            },
            {
              source: 'b1',
              target: 'c',
              value: 2
            }
          ]}
          cardStyle={{
            width: '50%',
            minHeight: '400px'
          }}
          chartStyle={{
            height: '100%',
            width: '100%'
          }}
        />
      </Container>
    </Container>
  )
}

export default Overview
