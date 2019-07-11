/** @jsx jsx */
import { jsx } from '@emotion/core'
import ReactEcharts from 'echarts-for-react'

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
