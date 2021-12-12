<template>
    <div style="background:#eee;padding: 20px;margin-bottom:10px;overflow-y:scroll;overflow-x:hidden;height:100%">
        <div>
            <Card :bordered="false" style="margin-bottom:10px">
            <p id="title" slot="title"><Icon type="ios-contacts" ></Icon> </p>
            <p>无锡蠡园的游客超过一半来自江苏本地，其余来自周围省市。游客以中老年群体最多，其次是青年人。大部分游客选择结伴出游。游玩过程中的消费支出超过一半用于文创纪念品。
            游客的消费水平接近一半在200元以下，绝大部分在500元以下。大部分游客只游玩了一次。</p>
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
            <p>蠡园以湖光水色闻名，以水景见长，园区面积很大，但主要以休闲为主，娱乐项目不多，所以更多会吸引老年人来游玩。应更贴近平民化旅游，增加观光游览步道，便于茶余饭后的休闲游完，以增加重游率。</p>
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