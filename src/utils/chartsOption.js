function visitsOption(xVal, yVal) {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function(params) {
        var tar = params[0];
        return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      max: "dataMax",
    },
    yAxis: {
      type: "category",
      data: xVal,
      inverse: true,
    },
    series: [
      {
        realtimeSort: true,
        name: "笔记访问量",
        data: yVal,
        type: "bar",
        color: "#3596B5",
      },
    ],
    legend: {
      show: true,
    },
  };
}

export { visitsOption };
