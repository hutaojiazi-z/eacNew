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
console.log(option)
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