import Vue from 'vue'
import axios from 'axios'
import ViewUI from 'view-design'
import App from './App'
import store from './store'
import router from './router'
import 'view-design/dist/styles/iview.css'
import './permission'

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.prototype.$axios = axios
const echarts = require('echarts')
Vue.prototype.$echarts = echarts

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})