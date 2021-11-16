
<template>
  <div>
    <div>
      <div id="main" style="width: 1000px; height:1000px"></div>
    </div>
  </div>
</template>
 
<script>
  import * as echarts from "echarts"
  import '../../echarts/map/province/jiangsu'
  export default {
    mounted(){
      this.drawLine();
    },
    methods: {
 
      //开始画图了
      drawLine() {
 
        let myChart = echarts.init(document.getElementById('main'));
 
        let option = {
          title: {
            text: '江苏景区相关数据',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
              let value = (params.value + '').split('.');
              value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
              return params.seriesName + '<br/>' + params.name + ': ' + value;
            }
          },
          visualMap: {
            left: 'left',
            min: 500000,
            max: 3800000,
            inRange: {
              color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            text:['High','Low'],
            calculable: true,
            show: false
          },
          series: [
            {
              name: 'Test',
              type: 'map',
              roam: true,
              map: '江苏',
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: 'rgba(0, 255, 0, 1)'
                  }
                }
              },
              itemStyle:{
                emphasis:{label:{show:true}}
              },
              // 文本位置修正
              textFixed: {
                Alaska: [20, -20]
              },
              data:[
                {name: '南京市', value: 4822023},
                {name: '常州市', value: 731449},
                {name: '徐州市', value: 6553255},
                {name: '淮安市', value: 2949131},
                {name: '南通市', value: 38041430},
                {name: '宿迁市', value: 5187582},
                {name: '无锡市', value: 3590347},
                {name: '扬州市', value: 917092},
                {name: '盐城市', value: 632323},
                {name: '苏州市', value: 1931751},
                {name: '泰州市', value: 9919945},
                {name: '镇江市', value: 1392313},
                {name: '连云港市', value: 1595728}
              ]
            }
          ]
        };
        myChart.setOption(option)
      }
    }
  }
</script>
<style scoped>
</style>