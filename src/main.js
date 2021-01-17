// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import router from './routers/index'
import store from './store/index'
import Axios from 'axios'


Vue.use(VueMaterial)
Vue.prototype.$http = Axios
Vue.config.productionTip = false

const token = localStorage.getItem('token')

if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    router: router,
    store: store,
    components: { App }
})


// https://github.com/christiannwamba/vue-auth-vuex