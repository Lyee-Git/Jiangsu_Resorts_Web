import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        menuItems: [
            {
                name: 'home', 
                size: 18, 
                type: 'md-home', 
                text: '主页', 
            },
            {
                name: 'location', 
                size: 18, 
                type: 'ios-locate-outline', 
                text: '按景区位置查看', 
            },
            {
                text: '按景区名称查看',
                type: 'ios-paper',
                children: [
                    {
                        text: '常州',
                        type: 'ios-grid',
                        children: [
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort1',
                                text: '常州天目湖'},
                        ],
                    },
                    {
                        text: '连云港',
                        type: 'ios-grid',
                        children: [
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort2',
                                text: '连云港花果山'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort3',
                                text: '连云港连岛'},
                        ]
                    },
                    {
                        text: '南京',
                        type: 'ios-grid',
                        children: [
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort4',
                                text: '南京博物院'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort5',
                                text: '南京明孝陵'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort6',
                                text: '南京栖霞山'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort7',
                                text: '南京侵华日军南京大屠杀遇难同胞纪念馆'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort8',
                                text: '南京秦淮河夫子庙'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort9',
                                text: '南京玄武湖'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort10',
                                text: '南京阅江楼'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort11',
                                text: '南京中山陵'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort12',
                                text: '南京总统府'}
                        ]
                    },
                    {
                        text: '苏州',
                        type: 'ios-grid',
                        children: [
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort13',
                                text: '苏州寒山寺'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort14',
                                text: '苏州虎丘'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort15',
                                text: '苏州金鸡湖'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort16',
                                text: '苏州锦溪古镇'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort17',
                                text: '苏州留园'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort18',
                                text: '苏州木渎古镇'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort19',
                                text: '苏州平江路历史街区'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort20',
                                text: '苏州沙家浜'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort21',
                                text: '苏州山塘街'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort22',
                                text: '苏州天平山'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort23',
                                text: '苏州同里古镇'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort24',
                                text: '苏州网师园'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort25',
                                text: '苏州周庄'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort26',
                                text: '苏州拙政园'},
                        ]
                    },
                    {
                        text: '泰州',
                        type: 'ios-grid',
                        children: [
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort27',
                                text: '泰州溱湖'},
                        ]
                    },
                    {
                        text: '无锡',
                        type: 'ios-grid',
                        children: [
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort28',
                                text: '无锡蠡园'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort29',
                                text: '无锡灵山大佛'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort30',
                                text: '无锡梅园'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort31',
                                text: '无锡拈花湾'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort32',
                                text: '无锡三国城'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort33',
                                text: '无锡鼋头渚'},
                        ]
                    },
                    {
                        text: '扬州',
                        type: 'ios-grid',
                        children: [
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort34',
                                text: '扬州大明寺'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort35',
                                text: '扬州个园'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort36',
                                text: '扬州何园'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort37',
                                text: '扬州瘦西湖'},
                        ]
                    },
                    {
                        text: '镇江',
                        type: 'ios-grid',
                        children: [
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort38',
                                text: '镇江焦山'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort39',
                                text: '镇江金山'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort40',
                                text: '镇江茅山'},
                            {
                                type: 'md-checkmark-circle-outline',
                                name: 'resort41',
                                text: '镇江西津渡'},
                        ]
                    },
                ],
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store