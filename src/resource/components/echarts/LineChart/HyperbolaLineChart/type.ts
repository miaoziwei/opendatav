type ZRLineType = 'solid' | 'dotted' | 'dashed' | number | number[]
export interface HyperbolaLineChart {
  data: {
    upperLimit: number
    lowerLimit: number
    min: number
    max: number
  }
  label: {
    axisLabelColor: string
    axisColor: string
  }
  line: {
    lineNumber: number
  }
  axis: {
    xshow: boolean
    xcolor: string
    yshow: boolean
    ycolor: string
    xLineType: ZRLineType
    yLineType: ZRLineType
    yAxisLineColor: string
    xAxisLineColor: string
    axisLabelColor: string
    axisColor: string
    axisYShow: boolean
    axisXShow: boolean
    tickXShow: boolean
    tickYShow: boolean
  }
  series1: {
    lineSymbol: string
    lineSymbolSize: number
    lineSmooth: boolean
    lineColor: string
    lineLinearStart: string
    lineLinearEnd: string
    lineSeriesName: string
    lineArea: boolean
    lineAreaColor: string
    lineWidth: number
    lineSpinodalColor: string
    lineOutlineWidth: number
    lineOutlineColor: string
    lineEmphasisColor: string
    lineEmphasisWidth: number
    lineLabelShow: boolean
    lineLabelWidth: number
    lineLabelHeight: number
    lineLabelColor: string
    lineLabelFontSize: number
    lineLabelFontWeight: number
    lineLabelLineHeight: number
    lineLabelBackgroundColor: string
    lineLabelPosition: string
    lineLabelDistance: number
    lineLabelAlign: string
    lineLabelUnit: string
  }
}
