<template>
  <div>
    <div>
      <div id="main" style="width: 1500px; height:1000px"></div>
    </div>
  </div>
</template>
 
<script>
  import * as echarts from "echarts"
  import '../../echarts/map/province/jiangsu'
  export var resorts_data = [
        { name: "常州天目湖", value: [119.443078, 31.307387, 1] },
        { name: "连云港花果山", value: [119.266709, 34.648713, 2] },
        { name: "连云港连岛", value: [119.461821, 34.769036, 3] },
        { name: "南京博物院", value: [118.831895, 32.045183, 4] },
        { name: "南京明孝陵", value: [118.840871, 32.054278, 5] },
        { name: "南京栖霞山", value: [118.9609, 32.152948, 6] },
        { name: "南京侵华日军南京大屠杀遇难同胞纪念馆", value: [118.753464, 32.040967, 7] },
        { name: "南京秦淮河夫子庙", value: [118.796294, 32.02625, 8] },
        { name: "南京玄武湖", value: [118.804884, 32.075442, 9] },
        { name: "南京阅江楼", value: [118.756123, 32.100988, 10] },
        { name: "南京中山陵", value: [118.864712, 32.060424, 11] },
        { name: "南京总统府", value: [118.803014, 32.049071, 12] },
        { name: "苏州寒山寺", value: [120.577312, 31.316918, 13] },
        { name: "苏州虎丘", value: [120.587394, 31.34161, 14] },
        { name: "苏州金鸡湖", value: [120.707796, 31.31043, 15] },
        { name: "苏州锦溪古镇", value: [120.904672,31.181546, 16] },
        { name: "苏州留园", value: [120.598973, 31.321718, 17] },
        { name: "苏州木渎古镇", value: [120.515759, 31.259515, 18] },
        { name: "苏州平江路历史街区", value: [120.64099, 31.319846, 19] },
        { name: "苏州沙家浜", value: [120.800468,31.555764, 20] },
        { name: "苏州山塘街", value: [120.588067, 31.337949, 21] },
        { name: "苏州天平山", value: [120.508946, 31.289298, 22] },
        { name: "苏州同里古镇", value: [120.726853, 31.162624, 23] },
        { name: "苏州网师园", value: [120.640688, 31.303668, 24] },
        { name: "苏州周庄", value: [120.858268, 31.119926, 25] },
        { name: "苏州拙政园", value: [120.634004, 31.329164, 26] },
        { name: "泰州溱湖", value: [120.092989, 32.617536, 27] },
        { name: "无锡蠡园", value: [120.264627, 31.52445, 28] },
        { name: "无锡灵山大佛", value: [120.102894, 31.4364, 39] },
        { name: "无锡梅园", value: [120.229437, 31.558089, 30] },                
        { name: "无锡拈花湾", value: [120.08183, 31.422845, 31] },
        { name: "无锡三国城", value: [120.239237, 31.481725, 32] },
        { name: "无锡鼋头渚", value: [120.229839, 31.532829, 33] },
        { name: "扬州大明寺", value: [119.419216,32.425688, 34] },
        { name: "扬州个园", value: [119.450867, 32.406545, 35] },
        { name: "扬州何园", value: [119.456146, 32.391525, 36] },
        { name: "扬州瘦西湖", value: [119.424085, 32.423829, 37] },
        { name: "镇江焦山", value: [119.495456, 32.237734, 38] },
        { name: "镇江金山", value: [119.416265, 32.227241, 39] },
        { name: "镇江茅山", value: [119.300208, 31.792289, 40] },
        { name: "镇江西津渡", value: [119.436674, 32.219354, 41] },
  ]
  export default {
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine() {
        let myChart = echarts.init(document.getElementById('main'));
        var option = {
          // title: {
          //   text: '江苏景区相关数据',
          //   left: 'center'
          // },
          tooltip: {},
          geo: {
            layoutCenter: ['40%', '30%'],
            layoutSize: 600,
            tooltip: {
            show: true
             },
            map: '江苏',
            label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#fff'
                  }
                }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#99CBF9',
                borderColor: '#fff'
              },
              emphasis: {
                areaColor: '#1492FF'
              }
            }
          }, 
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbolSize: 10,    
              data: resorts_data,
              zlevel: 1,
              itemStyle: {
                color: '#7FFFD4'
              },
              encode: {
                tooltip: 2
              },
              animationDurationUpdate: 1000,
              universalTransition: true,
            }
          ]        
        };
        myChart.setOption(option)
        const that = this
        myChart.on('click', function (params) {
            //console.log(params)
            if (params.componentSubType == 'effectScatter')
            {
              //console.log(this)
              that.$router.push({name: 'resort' + params.value[2]});
            }
            else{}
        });
        myChart.on('dblclick', function(params) {
            if(params.componentType == 'geo')
            {
              option.geo.center = this.convertFromPixel('geo', [params.event.offsetX, params.event.offsetY]);
              option.geo.zoom = 6;
              myChart.setOption(option);
            }
            else{}
        });
      }
    }
  }
</script>
<style scoped>
</style>