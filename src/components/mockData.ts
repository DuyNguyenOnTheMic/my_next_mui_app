import * as Utils from '@/helpers/Utils'

const LINE_DATA_COUNT = 12
const LINE_NUMBER_CFG = { count: LINE_DATA_COUNT, min: 0, max: 120 }
export const lineChartData = {
  labels: Utils.months({ count: 12 }),
  datasets: [
    {
      label: 'Transactions',
      data: Utils.numbers(LINE_NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5)
    }
  ]
}

const DOUGHNUT_DATA_COUNT = 5
const DOUGHNUT_NUMBER_CFG = { count: DOUGHNUT_DATA_COUNT, min: 0, max: 100 }
export const doughnutChartData = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(DOUGHNUT_NUMBER_CFG),
      backgroundColor: Object.values(Utils.CHART_COLORS)
    }
  ]
}
