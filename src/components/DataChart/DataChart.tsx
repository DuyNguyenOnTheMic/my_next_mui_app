import { Chart, ChartConfiguration, registerables } from 'chart.js'
import { useEffect, useRef } from 'react'
import { darkOptions } from './Themes'

Chart.register(...registerables)

export default function DataChart(props: ChartConfiguration) {
  const { data, options } = props
  const chartRef = useRef<HTMLCanvasElement>(null)

  // const labels = months({ count: 7 })
  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...darkOptions
        }
      })

      return () => chart.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return <canvas ref={chartRef} />
}
