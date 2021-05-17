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
        name: "笔记访问次数",
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

function categoryRatioOption() {
  return {
    title: {
      text: "南丁格尔玫瑰图",
      subtext: "纯属虚构",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      left: "center",
      top: "bottom",
      data: [
        "rose1",
        "rose2",
        "rose3",
        "rose4",
        "rose5",
        "rose6",
        "rose7",
        "rose8",
      ],
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
        name: "半径模式",
        type: "pie",
        radius: [20, 140],
        center: ["25%", "50%"],
        roseType: "radius",
        itemStyle: {
          borderRadius: 5,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { value: 40, name: "rose 1" },
          { value: 33, name: "rose 2" },
          { value: 28, name: "rose 3" },
          { value: 22, name: "rose 4" },
          { value: 20, name: "rose 5" },
          { value: 15, name: "rose 6" },
          { value: 12, name: "rose 7" },
          { value: 10, name: "rose 8" },
        ],
      },
      {
        name: "面积模式",
        type: "pie",
        radius: [20, 140],
        center: ["75%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 5,
        },
        data: [
          { value: 30, name: "rose 1" },
          { value: 28, name: "rose 2" },
          { value: 26, name: "rose 3" },
          { value: 24, name: "rose 4" },
          { value: 22, name: "rose 5" },
          { value: 20, name: "rose 6" },
          { value: 18, name: "rose 7" },
          { value: 16, name: "rose 8" },
        ],
      },
    ],
  };
}

export { visitsOption, categoryRatioOption };
