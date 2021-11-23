<template>
    <div style="background:#eee;padding: 20px;margin-bottom:10px;overflow-y:scroll;overflow-x:hidden;height:100%">
        <div>
            <Card :bordered="false" style="margin-bottom:10px">
            <p id="title" slot="title"><Icon type="ios-contacts" ></Icon> </p>
            <p>侵华日军南京大屠杀遇难同胞纪念馆位于南京市建邺区水西门大街418号，通称江东门纪念馆，选址于南京大屠杀江东门集体屠杀遗址及遇难者丛葬地，是中国首批国家一级博物馆，首批全国爱国主义教育示范基地，全国重点文物保护单位，首批国家级抗战纪念设施、遗址名录，也是国际公认的二战期间三大惨案纪念馆之一。<br>
            江东门纪念馆是为铭记侵华日军攻占中国首都南京后制造了惨无人道的南京大屠杀的暴行而筹建，是中国人民承段全民族灾难的实证性、遗址型专史纪念馆，也是中国唯一一座有关侵华日军南京大屠杀的专史陈列馆及国家公祭日主办地。</p>
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
                var resort_idx = this.$route.name.slice(-1) - 1;
                let division = resort_idx > 0 && resort_idx < 3 ? 3 : 2;
                var city = resorts_data[resort_idx].name.slice(0, division);
                var resort_name = resorts_data[resort_idx].name.slice(division);
                //document.getElementById("1").src = require("../../assets/imgs/常州/常州天目湖/事实标签/出游方式/出游方式.png")
                document.getElementById("title").innerHTML = resort_name + ": 景区简介";
            }
        }    
    }
</script>