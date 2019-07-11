/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, useEffect } from 'react'
import { Card } from 'antd'

import { PieChart } from './Chart'

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

export default null
