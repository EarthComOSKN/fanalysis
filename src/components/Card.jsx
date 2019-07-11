/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { Card as AntCard } from 'antd'

import { PieChart, VerticalBarChart, SankyChart, StackChart } from './Chart'

export const Card = styled(AntCard)`
  margin: 1rem 0 5px 0;

  & .ant-card-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const PieCard = ({ data, mountFunc, cardStyle, chartStyle }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    mountFunc()
    setLoading(false)
  }, [mountFunc])

  return (
    <Card
      style={cardStyle}
    >
      <PieChart
        data={data}
        style={chartStyle}
        loading={loading}
      />
    </Card>
  )
}

export const SankyCard = ({ data, link, mountFunc, cardStyle, chartStyle }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // mountFunc()
    setLoading(false)
  }, [mountFunc])

  return (
    <Card
      style={cardStyle}
    >
      <SankyChart
        data={data}
        link={link}
        style={chartStyle}
        loading={loading}
      />
    </Card>
  )
}

export const StackBarCard = ({ data, mountFunc, cardStyle, chartStyle }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // mountFunc()
    setLoading(false)
  }, [mountFunc])

  return (
    <Card
      style={cardStyle}
    >
      <StackChart
        data={data}
        style={chartStyle}
        loading={loading}
      />
    </Card>
  )
}

export const VerticalBarCard = ({ data, mountFunc, cardStyle, chartStyle }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // mountFunc()
    setLoading(false)
  }, [mountFunc])

  return (
    <Card
      style={cardStyle}
    >
      <VerticalBarChart
        data={data}
        style={chartStyle}
        loading={loading}
      />
    </Card>
  )
}

export default null
