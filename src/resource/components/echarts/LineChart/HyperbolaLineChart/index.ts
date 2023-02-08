import HyperbolaLineChartComponent, { componentName } from './config'

export default {
  componentName,
  component: () => import('./HyperbolaLineChart.vue'),
  config: HyperbolaLineChartComponent
}
