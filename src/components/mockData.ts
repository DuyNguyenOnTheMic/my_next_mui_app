import * as Utils from '@/helpers/Utils'

export const lineChartData = {
  labels: Utils.months({ count: 12 }),
  datasets: [
    {
      label: 'Transactions',
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
}

const DATA_COUNT = 5
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 }
export const doughnutChartData = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Object.values(Utils.CHART_COLORS)
    }
  ]
}
