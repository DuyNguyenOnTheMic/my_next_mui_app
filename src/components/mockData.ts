import * as Utils from '@/helpers/Utils'

const LINE_DATA_COUNT = 12
const LINE_NUMBER_CFG = { count: LINE_DATA_COUNT, min: 0, max: 120 }
export function getLineChartData() {
  return {
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
}

const DOUGHNUT_DATA_COUNT = 5
const DOUGHNUT_NUMBER_CFG = { count: DOUGHNUT_DATA_COUNT, min: 0, max: 100 }
export function getDoughnutChartData() {
  return {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(DOUGHNUT_NUMBER_CFG),
        backgroundColor: Object.values(Utils.CHART_COLORS)
      }
    ]
  }
}
