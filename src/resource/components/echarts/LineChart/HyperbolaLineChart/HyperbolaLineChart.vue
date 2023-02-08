<template>
  <div ref="chartEl" v-resize="resizeHandler"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProp, useData } from '@/resource/hooks'
import type HyperbolaLineChartComponent from './config'
import type { HyperbolaLineChart } from './type'
import type { EChartsOption, LineSeriesOption, XAXisComponentOption } from 'echarts'
import { compareResetValue } from '../../utils'
import { useEchart } from '../../hooks'
import type { DataType } from '@/resource/models'
import type { RequestResponse } from '@/resource/models/type'
import { FormType } from '@/enum'

const chartEl = ref<ElRef>(null)
let globalOption: EChartsOption
const props = defineProps<{
  component: HyperbolaLineChartComponent
}>()
let chartData:
  | Array<{ label: string; value: number }>
  | RequestResponse<Array<{ label: string; value: number }>>['afterData'] = []
const dataChange = (resp: any, _: DataType) => {
  if (resp.status >= 0) {
    chartData = resp.afterData
    updateData(chartData)
  }
}

useData(props.component, dataChange)

const propValueChange = () => {
  updateData(chartData)
}

const { updateEchart, resizeHandler } = useEchart(chartEl)
const { propValue } = useProp<HyperbolaLineChart>(props.component, propValueChange)
onMounted(async () => {
  globalOption = getOption()
  updateEchart(globalOption)
})

const getOption = () => {
  let series: LineSeriesOption[] = []
  const option: EChartsOption = {
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis'
    },
    // legend: {
    //   itemWidth: propValue.legend.legendWidth || 16,
    //   itemHeight: propValue.legend.legendHeight || 4,
    //   itemGap: propValue.legend.legendGap || 24,
    //   left: propValue.legend.legendLeft || 'right',
    //   top: propValue.legend.legendTop || 'top',
    //   textStyle: {
    //     color: '#FFFFFF',
    //     fontSize: 12,
    //     fontWeight: 400,
    //     lineHeight: 17
    //   },
    //   data: [
    //     {
    //       name: propValue.series1.lineSeriesName || `'类型一'`,
    //       icon: 'rect',
    //       itemStyle: {
    //         color: '#35F28F',
    //         borderWidth: 0
    //       }
    //     },
    //     {
    //       name: propValue.series2.lineSeriesName || '类型二',
    //       icon: 'rect',
    //       itemStyle: {
    //         color: '#24BAE2',
    //         borderWidth: 0
    //       }
    //     }
    //   ]
    // },
    xAxis: {
      type: 'category',
      data: [],
      splitLine: {
        show: propValue.axis.xshow,
        lineStyle: {
          type: propValue.axis.xLineType,
          color: propValue.axis.xAxisLineColor
        }
      },
      axisLine: {
        show: propValue.axis.axisXShow,
        lineStyle: {
          color: propValue.axis.axisColor || '#fff'
        }
      },
      axisTick: {
        show: propValue.axis.tickXShow,
        lineStyle: {
          color: propValue.axis.axisColor || '#fff'
        }
      },
      axisLabel: {
        color: propValue.axis.axisLabelColor || '#fff'
      }
    },
    yAxis: {
      type: 'value',
      max: propValue.data.max ? propValue.data.max : 'dataMax',
      splitLine: {
        show: propValue.axis.yshow,
        lineStyle: {
          type: propValue.axis.yLineType,
          color: propValue.axis.yAxisLineColor
        }
      },
      axisLine: {
        show: propValue.axis.axisYShow,
        lineStyle: {
          color: propValue.axis.axisColor || '#fff'
        }
      },
      axisTick: {
        show: propValue.axis.tickYShow,
        lineStyle: {
          color: propValue.axis.axisColor || '#fff'
        }
      },
      axisLabel: {
        color: propValue.axis.axisLabelColor || '#fff'
      }
    },
    series: []
  }
  /*
    这样写_prop里能配置上，_propValue里没有，
    是不是这个原因报的  Cannot read properties of undefined (reading 'lineSeriesName')这种错误？
    我当时想的是 操作_prop  添加每条折线对应的系列  然后发现取不到值 _propValue里面就没有添加的系列
    我写的代码太少了 很多时候我想的方向是错的 有时候甚至不知道从哪儿下手
    真的真的非常非常感谢前辈的耐心指导
  */
  let _prop = props.component._prop
  // 增删折线条数
  for (let i = 0; i < propValue.line.lineNumber; i++) {
    let s = {
      label: '系列',
      prop: 'series1',
      children: [
        {
          prop: 'lineSeriesName',
          label: '系列名字',
          type: FormType.TEXT,
          componentOptions: {
            defaultValue: '类型一'
          }
        },
        {
          prop: 'lineArea',
          label: '显示区域色',
          type: FormType.SWITCH,
          componentOptions: {
            defaultValue: true
          }
        },
        {
          prop: 'lineAreaColor',
          label: '区域色颜色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#22F486'
          }
        },
        {
          prop: 'lineSmooth',
          label: '平滑曲线显示',
          type: FormType.SWITCH,
          componentOptions: {
            defaultValue: true
          }
        },
        {
          prop: 'lineWidth',
          label: '折线宽度',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 1
          }
        },
        {
          prop: 'lineColor',
          label: '折线颜色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#22F486'
          }
        },
        {
          prop: 'lineLinearStart',
          label: '渐变起始色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#3491FA'
          }
        },
        {
          prop: 'lineLinearEnd',
          label: '渐变结束色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: 'transparent'
          }
        },
        {
          prop: 'lineSymbol',
          label: '标记图形',
          type: FormType.TEXT,
          componentOptions: {
            defaultValue: 'circle'
          }
        },
        {
          prop: 'lineSymbolSize',
          label: '图形大小',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 5
          }
        },
        {
          prop: 'lineSpinodalColor',
          label: '图形颜色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#FFFFFF'
          }
        },
        {
          prop: 'lineOutlineColor',
          label: '图形描边颜色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#35F28F'
          }
        },
        {
          prop: 'lineOutlineWidth',
          label: '图形描边宽度',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 1
          }
        },
        {
          prop: 'lineEmphasisWidth',
          label: '高亮描边宽度',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 1
          }
        },
        {
          prop: 'lineEmphasisColor',
          label: '高亮颜色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#22F486'
          }
        },
        {
          prop: 'lineLabelShow',
          label: '显示标签',
          type: FormType.SWITCH,
          componentOptions: {
            defaultValue: true
          }
        },
        {
          prop: 'lineLabelWidth',
          label: '标签宽度',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 57
          }
        },
        {
          prop: 'lineLabelHeight',
          label: '标签高度',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 19
          }
        },
        {
          prop: 'lineLabelColor',
          label: '标签字体颜色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#FF3AA8'
          }
        },
        {
          prop: 'lineLabelFontSize',
          label: '标签字体大小',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 10
          }
        },
        {
          prop: 'lineLabelFontWeight',
          label: '标签字体粗细',
          type: FormType.TEXT,
          componentOptions: {
            defaultValue: 'normal'
          }
        },
        {
          prop: 'lineLabelLineHeight',
          label: '标签行高',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 14
          }
        },
        {
          prop: 'lineLabelBackgroundColor',
          label: '标签背景色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#450B29'
          }
        },
        {
          prop: 'lineLabelPosition',
          label: '标签位置',
          type: FormType.TEXT,
          componentOptions: {
            defaultValue: 'right'
          }
        },
        {
          prop: 'lineLabelDistance',
          label: '距离图形距离',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 35
          }
        },
        {
          prop: 'lineLabelAlign',
          label: '标签水平对齐',
          type: FormType.TEXT,
          componentOptions: {
            defaultValue: 'center'
          }
        },
        {
          prop: 'lineLabelUnit',
          label: '标签单位',
          type: FormType.TEXT,
          componentOptions: {
            defaultValue: 'Mbps'
          }
        }
      ]
    }
    _prop[_prop.length + i] = s
    let obj = [
      { label: '秦', value: Math.round(Math.random() * 100) },
      { label: '齐', value: Math.round(Math.random() * 100) },
      { label: '楚', value: Math.round(Math.random() * 100) },
      { label: '赵', value: Math.round(Math.random() * 100) },
      { label: '燕', value: Math.round(Math.random() * 100) },
      { label: '韩', value: Math.round(Math.random() * 100) },
      { label: '魏', value: Math.round(Math.random() * 100) }
    ]
    let sub = {
      data: obj,
      name: propValue.series1.lineSeriesName || `类型一`,
      type: 'line',
      symbol: propValue.series1.lineSymbol || 'circle',
      symbolSize: propValue.series1.lineSymbolSize || 5,
      smooth: propValue.series1.lineSmooth,
      markLine: {
        data: []
      },
      areaStyle: {
        opacity: propValue.series1.lineArea ? 0.6 : 0,
        color: propValue.series1.lineAreaColor || '#22F486'
      },
      lineStyle: {
        width: propValue.series1.lineWidth || 1,
        color: propValue.series1.lineColor || '#3491FA'
      },
      itemStyle: {
        color: propValue.series1.lineSpinodalColor || '#FFFFFF',
        borderColor: propValue.series1.lineOutlineColor || '#35F28F',
        borderWidth: propValue.series1.lineOutlineWidth || 1
      },
      emphasis: {
        itemStyle: {
          color: propValue.series1.lineEmphasisColor || '#22F486',
          borderWidth: propValue.series1.lineEmphasisWidth || 1
        },
        label: {
          show: propValue.series1.lineLabelShow,
          width: propValue.series1.lineLabelWidth || 57,
          height: propValue.series1.lineLabelLineHeight || 19,
          color: propValue.series1.lineLabelColor || '#FF3AA8',
          fontSize: propValue.series1.lineLabelFontSize || 10,
          fontWeight: propValue.series1.lineLabelFontWeight || 'normal',
          lineHeight: propValue.series1.lineLabelLineHeight || 14,
          backgroundColor: propValue.series1.lineLabelBackgroundColor || '#450B29',
          position: propValue.series1.lineLabelPosition || 'right',
          distance: propValue.series1.lineLabelDistance || 35,
          align: propValue.series1.lineLabelAlign || 'center',
          formatter: function (params) {
            return `${params.value}${propValue.series1.lineLabelUnit}`
          }
        }
      }
    }
    series[i] = sub
  }
  option.series = [...series]
  return option as EChartsOption
}

const updateData = (resp) => {
  const upperLimit = propValue.data.upperLimit
  const lowerLimit = propValue.data.lowerLimit
  const data = resp.map((ele) => {
    return {
      value: compareResetValue(Number(ele.value), upperLimit, lowerLimit),
      label: ele.label
    }
  })
  globalOption = getOption()
  globalOption.xAxis = {
    ...globalOption.xAxis,
    data: data.map((el) => el.label)
  } as XAXisComponentOption
  updateEchart(globalOption)
}
</script>
