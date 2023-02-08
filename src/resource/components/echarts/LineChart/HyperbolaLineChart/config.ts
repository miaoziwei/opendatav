import { ComponentGroup, FormType } from '@/enum'
import type { PropsType } from '@/types/component'
import { BaseComponent } from '@/resource/models'
import { DataIntegrationMode } from '@/resource/models/data'

export const componentName = 'HyperbolaLineChart'
class HyperbolaLineChartComponent extends BaseComponent {
  constructor(id?: string, name?: string, icon?: string) {
    super({
      component: componentName,
      group: ComponentGroup.LINE,
      name: name ? name : '双曲线图',
      id,
      width: 500,
      height: 170,
      icon,
      dataIntegrationMode: DataIntegrationMode.UNIVERSAL
    })
  }

  _prop: PropsType[] = [
    {
      label: '数据配置',
      prop: 'data',
      children: [
        {
          prop: 'upperLimit',
          label: '上限',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 150
          }
        },
        {
          prop: 'lowerLimit',
          label: '下限',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 0
          }
        }
      ]
    },
    {
      label: '标签配置',
      prop: 'label',
      children: [
        {
          prop: 'axisLabelColor',
          label: 'label颜色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#3DE7C9'
          }
        },
        {
          prop: 'axisColor',
          label: '颜色1',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#3DE7C9'
          }
        }
      ]
    },
    {
      label: '折线配置',
      prop: 'line',
      children: [
        {
          prop: 'lineNumber',
          label: '折现条数',
          type: FormType.NUMBER,
          componentOptions: {
            defaultValue: 2
          }
        }
      ]
    },
    {
      label: '坐标轴配置',
      prop: 'axis',
      children: [
        {
          prop: 'axisColor',
          label: '轴线颜色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#00BAFF'
          }
        },
        {
          prop: 'axisLabelColor',
          label: '轴线文字颜色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#00BAFF'
          }
        },

        {
          prop: 'xshow',
          label: 'X网格线是否显示',
          type: FormType.SWITCH,
          componentOptions: {
            defaultValue: true
          }
        },
        {
          prop: 'yshow',
          label: 'Y网格线是否显示',
          type: FormType.SWITCH,
          componentOptions: {
            defaultValue: true
          }
        },
        {
          prop: 'xLineType',
          label: 'X轴网格线样式',
          type: FormType.SELECT,
          componentOptions: {
            defaultValue: 'dotted',
            options: [
              { value: 'solid', label: 'solid' },
              { value: 'dotted', label: 'dotted' },
              { value: 'dashed', label: 'dashed' }
            ]
          }
        },
        {
          prop: 'yLineType',
          label: 'Y轴网格线样式',
          type: FormType.SELECT,
          componentOptions: {
            defaultValue: 'dotted',
            options: [
              { value: 'solid', label: 'solid' },
              { value: 'dotted', label: 'dotted' },
              { value: 'dashed', label: 'dashed' }
            ]
          }
        },
        {
          prop: 'xAxisLineColor',
          label: 'x轴网格线颜色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#3391E4'
          }
        },
        {
          prop: 'yAxisLineColor',
          label: 'y轴网格线颜色',
          type: FormType.COLOR,
          componentOptions: {
            defaultValue: '#3391E4'
          }
        }
      ]
    }
    // {
    //   label: '系列',
    //   prop: 'series1',
    //   children: [
    //     {
    //       prop: 'lineSeriesName',
    //       label: '系列名字',
    //       type: FormType.TEXT,
    //       componentOptions: {
    //         defaultValue: '类型一'
    //       }
    //     },
    //     {
    //       prop: 'lineArea',
    //       label: '显示区域色',
    //       type: FormType.SWITCH,
    //       componentOptions: {
    //         defaultValue: true
    //       }
    //     },
    //     {
    //       prop: 'lineAreaColor',
    //       label: '区域色颜色',
    //       type: FormType.COLOR,
    //       componentOptions: {
    //         defaultValue: '#22F486'
    //       }
    //     },
    //     {
    //       prop: 'lineSmooth',
    //       label: '平滑曲线显示',
    //       type: FormType.SWITCH,
    //       componentOptions: {
    //         defaultValue: true
    //       }
    //     },
    //     {
    //       prop: 'lineWidth',
    //       label: '折线宽度',
    //       type: FormType.NUMBER,
    //       componentOptions: {
    //         defaultValue: 1
    //       }
    //     },
    //     {
    //       prop: 'lineColor',
    //       label: '折线颜色',
    //       type: FormType.COLOR,
    //       componentOptions: {
    //         defaultValue: '#22F486'
    //       }
    //     },
    //     {
    //       prop: 'lineLinearStart',
    //       label: '渐变起始色',
    //       type: FormType.COLOR,
    //       componentOptions: {
    //         defaultValue: '#3491FA'
    //       }
    //     },
    //     {
    //       prop: 'lineLinearEnd',
    //       label: '渐变结束色',
    //       type: FormType.COLOR,
    //       componentOptions: {
    //         defaultValue: 'transparent'
    //       }
    //     },
    //     {
    //       prop: 'lineSymbol',
    //       label: '标记图形',
    //       type: FormType.TEXT,
    //       componentOptions: {
    //         defaultValue: 'circle'
    //       }
    //     },
    //     {
    //       prop: 'lineSymbolSize',
    //       label: '图形大小',
    //       type: FormType.NUMBER,
    //       componentOptions: {
    //         defaultValue: 5
    //       }
    //     },
    //     {
    //       prop: 'lineSpinodalColor',
    //       label: '图形颜色',
    //       type: FormType.COLOR,
    //       componentOptions: {
    //         defaultValue: '#FFFFFF'
    //       }
    //     },
    //     {
    //       prop: 'lineOutlineColor',
    //       label: '图形描边颜色',
    //       type: FormType.COLOR,
    //       componentOptions: {
    //         defaultValue: '#35F28F'
    //       }
    //     },
    //     {
    //       prop: 'lineOutlineWidth',
    //       label: '图形描边宽度',
    //       type: FormType.NUMBER,
    //       componentOptions: {
    //         defaultValue: 1
    //       }
    //     },
    //     {
    //       prop: 'lineEmphasisWidth',
    //       label: '高亮描边宽度',
    //       type: FormType.NUMBER,
    //       componentOptions: {
    //         defaultValue: 1
    //       }
    //     },
    //     {
    //       prop: 'lineEmphasisColor',
    //       label: '高亮颜色',
    //       type: FormType.COLOR,
    //       componentOptions: {
    //         defaultValue: '#22F486'
    //       }
    //     },
    //     {
    //       prop: 'lineLabelShow',
    //       label: '显示标签',
    //       type: FormType.SWITCH,
    //       componentOptions: {
    //         defaultValue: true
    //       }
    //     },
    //     {
    //       prop: 'lineLabelWidth',
    //       label: '标签宽度',
    //       type: FormType.NUMBER,
    //       componentOptions: {
    //         defaultValue: 57
    //       }
    //     },
    //     {
    //       prop: 'lineLabelHeight',
    //       label: '标签高度',
    //       type: FormType.NUMBER,
    //       componentOptions: {
    //         defaultValue: 19
    //       }
    //     },
    //     {
    //       prop: 'lineLabelColor',
    //       label: '标签字体颜色',
    //       type: FormType.COLOR,
    //       componentOptions: {
    //         defaultValue: '#FF3AA8'
    //       }
    //     },
    //     {
    //       prop: 'lineLabelFontSize',
    //       label: '标签字体大小',
    //       type: FormType.NUMBER,
    //       componentOptions: {
    //         defaultValue: 10
    //       }
    //     },
    //     {
    //       prop: 'lineLabelFontWeight',
    //       label: '标签字体粗细',
    //       type: FormType.TEXT,
    //       componentOptions: {
    //         defaultValue: 'normal'
    //       }
    //     },
    //     {
    //       prop: 'lineLabelLineHeight',
    //       label: '标签行高',
    //       type: FormType.NUMBER,
    //       componentOptions: {
    //         defaultValue: 14
    //       }
    //     },
    //     {
    //       prop: 'lineLabelBackgroundColor',
    //       label: '标签背景色',
    //       type: FormType.COLOR,
    //       componentOptions: {
    //         defaultValue: '#450B29'
    //       }
    //     },
    //     {
    //       prop: 'lineLabelPosition',
    //       label: '标签位置',
    //       type: FormType.TEXT,
    //       componentOptions: {
    //         defaultValue: 'right'
    //       }
    //     },
    //     {
    //       prop: 'lineLabelDistance',
    //       label: '距离图形距离',
    //       type: FormType.NUMBER,
    //       componentOptions: {
    //         defaultValue: 35
    //       }
    //     },
    //     {
    //       prop: 'lineLabelAlign',
    //       label: '标签水平对齐',
    //       type: FormType.TEXT,
    //       componentOptions: {
    //         defaultValue: 'center'
    //       }
    //     },
    //     {
    //       prop: 'lineLabelUnit',
    //       label: '标签单位',
    //       type: FormType.TEXT,
    //       componentOptions: {
    //         defaultValue: 'Mbps'
    //       }
    //     }
    //   ]
    // }
  ]
  _style: PropsType[] = []
  get exampleData() {
    return [
      { label: '秦', value: Math.round(Math.random() * 100) },
      { label: '齐', value: Math.round(Math.random() * 100) },
      { label: '楚', value: Math.round(Math.random() * 100) },
      { label: '赵', value: Math.round(Math.random() * 100) },
      { label: '燕', value: Math.round(Math.random() * 100) },
      { label: '韩', value: Math.round(Math.random() * 100) },
      { label: '魏', value: Math.round(Math.random() * 100) }
    ]
  }
}

export default HyperbolaLineChartComponent
