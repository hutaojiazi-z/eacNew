/**
 * 
 * @param {*} option={
 * id 放echarts的div
 * grid ：[]
 * xAxis : {}
 * yAxis:{}
 * series: []
 * }
 */
export const line = function(vm, option) { //折线图
  let myChart = vm.$echarts.init(document.getElementById(option.id))
  // 绘制图表
  /**
   * 
   * @param {*} obj 
   * obj=[{
   *  
   * },{
   * 
   * }]
   */
  // let series = 
  
  myChart.setOption({
    grid: {
      top: option.grid?option.grid[0]:"0",
      left: option.grid?option.grid[3]:"0",
      right: option.grid?option.grid[1]:"0",
      bottom: option.grid?option.grid[2]:"0",
    },
    xAxis: [{
      show: true || option.xAxis.show,
      type:  'category' || option.xAxis.type,
      boundaryGap: false || option.xAxis.boundaryGap ,
      data:  option.xAxis.data || [],
      ...option.xAxis.others
    }],
    yAxis: [{ 
      ...option.yAxis
    }],
    series: (function(obj){
      let serArr = [];
      obj.forEach(ele => {
        let serOPt = {
          name: ele.name || "",
          type: 'line',
          symbol:  ele.symbol || "none",
          smooth: ele.smooth || true, //是否平滑
          itemStyle: {
            normal: {
              lineStyle: {
                color: ele.mainColor || 'rgba(107, 127, 219, 1)',
                width: 2
              }
            }
          },
          areaStyle: ele.areaStyle? {
            normal: {
              color: new vm.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: ele.mainColor8 || 'rgba(107, 127, 219, 0.8)'
                },
                {
                  offset: 1,
                  color: 'rgba(107, 127, 219, 0)'
                }
              ], false),
            },
            ...ele.areaStyle.others
          } : {},
          data: ele.data,
          ...ele.others
        }
        serArr.push(serOPt)
      });
      return serArr;
    })((option.series))
  })
  option = {}
}

export const chartsLine = function(vm, option){
  let myChart = vm.$echarts.init(document.getElementById(option.id))
  myChart.setOption({
    grid: {
      top: "15%",
      left: "2%",
      right: "2%",
      bottom: "15%",
    },
    xAxis: [{
      show: true,
      type:  'category',
      boundaryGap: false,
      data:  option.xAxis.data || [],
      axisLabel: {
        rotate: 25,
        color: "#B9C0CA",
        fontSize: 12 ,
        formatter: function(value) {
          return value;
        }
      },
      
      axisLine: null,
      axisTick: null,
    }],
    yAxis: [{
      axisLabel: {
        color: "#B9C0CA",
        "inside": true,
      },
      axisLine: null,
      axisTick: null,
      splitLine: null
    }],
    series:[
      {
        name: option.series.name,
        type: 'line',
        symbol: "none",
        smooth: true,
        itemStyle: {
          normal: {
            lineStyle: {
              color: 'RGBA(24, 56, 178, 1)',
              width: 2
            }
          }
        },
        areaStyle: {
          normal: {
            color: new vm.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'RGBA(24, 56, 178, 0.5)'
              },
              {
                offset: 1,
                color: 'rgba(24, 56, 178, 0)'
              }
            ], false),
          }
        },
        data: option.series.data
      }
    ]
  })
}

export const chartsDBLine = function(vm, option){
  let myChart = vm.$echarts.init(document.getElementById(option.id))
  myChart.setOption({
    color: ['#0022A9', '#962013'],
    grid: {
      top: "15%",
      left: "2%",
      right: "2%",
      bottom: "15%",
    },
    legend:{
      show: true,
      data: option.legend.data,
      right: '4%',
      icon: "circle",
    },
    xAxis: [{
      show: true,
      type:  'category',
      boundaryGap: false,
      data:  option.xAxis.data || [],
      axisLabel: {
        rotate: 25,
        color: "#B9C0CA",
        fontSize: 12 ,
        formatter: function(value) {
          return value;
        }
      },
      
      axisLine: null,
      axisTick: null,
    }],
    yAxis: [{
      axisLabel: {
        color: "#B9C0CA",
        "inside": true,
      },
      axisLine: null,
      axisTick: null,
      splitLine: null
    }],
    series:[
      {
        name: option.series[0].name,
        type: 'line',
        symbol: "none",
        smooth: true,
        areaStyle: {
          normal: {
            color: new vm.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(24, 56, 178, 0.3)'
              },
              {
                offset: 1,
                color: 'rgba(24, 56, 178, 0)'
              }
            ], false),
          }
        },
        data: option.series[0].data,
        
      },{
        name: option.series[1].name,
        type: 'line',
        symbol: "none",
        smooth: true,
        areaStyle: {
          normal: {
            color: new vm.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(150, 32, 19, 0.3)'
              },
              {
                offset: 1,
                color: 'rgba(107, 127, 219, 0)'
              }
            ], false),
          }
        },
        data: option.series[1].data
      }
    ]
  })
}
export const chartsPie = function(vm, option){
  let myChart = vm.$echarts.init(document.getElementById(option.id))
  myChart.setOption({
    color: ["#0A9BE6", "#01569C", "#0277BE", "#0088D0"],
    series: [{
      name: option.series[0].name,
      type: 'pie',
      selectedMode: 'single',
      radius: ["75%", '90%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: option.series[0].data
    },
    {
      name: option.series[1].name,
      type: 'pie',
      radius: ['0', '60%'],
      label: {
        position: 'inner'
      },
      data: option.series[1].data
    }
    ]
  })
}
