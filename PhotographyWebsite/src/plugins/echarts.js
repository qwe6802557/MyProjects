export const myEchartsOne = {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {
  },
  legend: {
    data: [ // 图列内容
      {
        name: '点赞数',
        icon: 'circle',
        textStyle: {
          /* color: 'red', */ // 单独设置某一个图列的颜色
          backgroundColor: '#fff' // 单独设置某一个图列的字体背景色
        }
      }
    ]
  },
  // 工具箱
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {
        show: true
      },
      restore: {
        show: true
      },
      dataView: {
        show: true
      },
      dataZoom: {
        show: false
      },
      magicType: {
        type: ['line', 'bar']
      }
    }
  },
  series: [{
    name: '点赞数',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20],
    markPoint: {
      data: [
        { type: 'max', name: '最大值' },
        { type: 'min', name: '最小值' }
      ]
    },
    markLine: {
      data: [
        { type: 'average', name: '平均值' }
      ]
    }
  }],
  color: '#0092F1'
}
export const myEchartsTwo = {
  tooltip: {
    trigger: 'axis'
  },
  aria: {
    show: true
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {
  },
  legend: {
    data: [ // 图列内容
      {
        name: '粉丝数',
        icon: 'circle',
        textStyle: {
          /* color: 'red', */ // 单独设置某一个图列的颜色
          backgroundColor: '#fff' // 单独设置某一个图列的字体背景色
        }
      }
    ]
  },
  // 工具箱
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {
        show: true
      },
      restore: {
        show: true
      },
      dataView: {
        show: true
      },
      dataZoom: {
        show: false
      },
      magicType: {
        type: [ 'line', 'bar' /* 'stack', 'tiled' */]
      }
    }
  },
  series: [{
    name: '粉丝数',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20],
    markPoint: {
      data: [
        { type: 'max', name: '最大值' },
        { type: 'min', name: '最小值' }
      ]
    },
    markLine: {
      data: [
        { type: 'average', name: '平均值' }
      ]
    }
  }],
};
export const provincePie = {

};
