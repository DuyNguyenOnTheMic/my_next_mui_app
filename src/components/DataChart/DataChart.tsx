import { Chart, ChartConfiguration, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useEffect, useRef } from 'react'
import { darkOptions } from './Themes'

Chart.register(...registerables, ChartDataLabels)

export default function DataChart(props: ChartConfiguration) {
  const { data, options } = props
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...darkOptions,
          plugins: {
            ...options?.plugins,
            ...darkOptions?.plugins
          }
        }
      })

      return () => chart.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return <canvas ref={chartRef} />
}
