<template>
    <div style="background:#eee;padding: 20px;margin-bottom:10px;overflow-y:scroll;overflow-x:hidden;height:100%">
        <div>
            <Card :bordered="false" style="margin-bottom:10px">
            <p id="title" slot="title"><Icon type="ios-contacts" ></Icon> </p>
            <p>苏州拙政园的游客来自江苏本地的较多，但仍有大多数来自周围其他省份，还有不少山东省、河南省的游客前来游玩。游客以中老年群体为主。大部分游客选择结伴出游。游玩过程中的消费支出超过一半用于特色小吃。游客的消费水平在200元以下的较多，大部分在500元以下。接近一半的游客重游了拙政园。</p>
            </Card>
        </div>
        <Card style="width:1200px;margin-bottom:20px">
            <p slot="title">
            <Icon type="ios-pricetags-outline" ></Icon>
            事实标签
            </p>
            <div style="text-align:center">
                <img id="1" width="600px">
                <h3>出游方式</h3>
            </div>
        </Card>
        <Row>
            <Col span="10">
                <Card style="width:540px;margin-bottom:20px">
                <div>
                    <img id="2" width=500px >
                    <h3 style="text-align:center">地域来源</h3>
                </div>
                </Card>
            </Col>
            <Col span="12" offset="1">
                <Card style="width:650px;margin-bottom:20px;height=450px">
                <div>
                    <img id="3" width=620px height=385px >
                    <h3 style="text-align:center">购物品类</h3>
                </div>
                </Card>
            </Col>
        </Row>
        <Card style="width:1200px;margin-bottom:20px">
            <p slot="title">
            <Icon type="ios-pricetags-outline" ></Icon>
            事实标签
            </p>
            <div style="text-align:center">
                <img id="4" width="600px">
                <h3>景区游玩次数分布</h3>
            </div>
        </Card>
        <Row>
            <Col span="10">
                <Card style="width:540px;margin-bottom:20px">
                <div>
                    <img id="5" width=500px >
                    <h3 style="text-align:center">性别比例</h3>
                </div>
                </Card>
            </Col>
            <Col span="12" offset="1">
                <Card style="width:650px;margin-bottom:20px;height=450px">
                <div>
                    <img id="6" width=620px height=385px >
                    <h3 style="text-align:center">旅游时段选择</h3>
                </div>
                </Card>
            </Col>
        </Row>
        <Card style="width:1200px;margin-bottom:20px">
            <p slot="title">
            <Icon type="ios-pricetags-outline" ></Icon>
            事实标签
            </p>
            <div style="text-align:center">
                <img id="7" width="600px">
                <h3>年龄分布</h3>
            </div>
        </Card>
        <Card style="width:1200px;margin-bottom:20px">
            <p slot="title">
            <Icon type="ios-pricetags-outline" ></Icon>
            事实标签
            </p>
            <div style="text-align:center">
                <img id="8" width="600px">
                <h3>消费水平</h3>
            </div>
        </Card>
        <div>
            <Card :bordered="false" style="margin-bottom:10px">
            <p id="advice" slot="title"><Icon type="ios-pin-outline" ></Icon> </p>
            <p>作为中国四大名园的拙政园，相比留园来说游客来源地更广，消费也更低，更能吸引游客。应保持现有的景观格局，同时推出其他旅游项目，结合历史、人文等要素，提高重游率。</p>
            </Card>
        </div>
    </div>
</template>
<script>
    import { resorts_data } from '../Home.vue';
    export default {      
        mounted(){
            this.CreatePath();
        },
        methods: {
            CreatePath() {
                let img_name = ["出游方式", "地域来源", "购物品类","景区游玩次数", "性别比例","旅游时段选择","年龄分布", "消费水平"];
                var resort_idx = this.$route.name.slice(6) - 1;
                let division = resort_idx > 0 && resort_idx < 3 ? 3 : 2;
                var city = resorts_data[resort_idx].name.slice(0, division);
                var resort_name = resorts_data[resort_idx].name.slice(division);
                //document.getElementById("1").src = require("../../assets/imgs/常州/常州天目湖/事实标签/出游方式/出游方式.png")
                img_name.forEach(function(value, index){
                    const file_path = "/static/imgs/" + city + "/" + city + resort_name + "/事实标签/" + value + "/" + value + ".png";
                    //console.log(file_path);
                    let pic_id = index + 1;
                    document.getElementById(pic_id.toString()).src = file_path;
                });
                document.getElementById("title").innerHTML = resort_name + ": 游客画像";
                document.getElementById("advice").innerHTML = resort_name + ": 发展建议";
            }
        }    
    }
</script>