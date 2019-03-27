import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from './components/home.vue'
import Projects from './components/projects.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Router);


const routes = [
  {path: "/", component: Home},
  {path: "/projects", component: Projects}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

