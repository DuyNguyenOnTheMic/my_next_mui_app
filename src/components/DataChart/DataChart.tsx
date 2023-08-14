import { useTheme } from '@mui/material/styles'
import { Chart, ChartConfiguration, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useEffect, useRef } from 'react'
import { darkOptions, lightOptions } from './Themes'

Chart.register(...registerables, ChartDataLabels)

export default function DataChart(props: ChartConfiguration) {
  const { data, options } = props
  const theme = useTheme()
  const themeOptions = theme.palette.mode === 'light' ? lightOptions : darkOptions
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...themeOptions,
          plugins: {
            ...options?.plugins,
            ...themeOptions?.plugins
          }
        }
      })

      return () => chart.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, themeOptions])

  return <canvas ref={chartRef} />
}
