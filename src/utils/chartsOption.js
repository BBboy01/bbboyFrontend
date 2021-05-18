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
        name: "访问次数",
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

function categoryRatioOption(dataList) {
  return {
    title: {
      text: "类别占比",
      left: "center",
      top: "10%",
    },
    legend: {
      top: "bottom",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "种类占比",
        type: "pie",
        radius: [50, 150],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: dataList,
      },
    ],
  };
}

export { visitsOption, categoryRatioOption };
