import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from './components/home.vue'
import Projects from './components/projects.vue'
import Gold_Rush from './components/gold_rush.vue'
import Personal from './components/personal.vue'
import Foresight from './components/foresight.vue'
import Engine from './components/engine.vue'
import Typing from './components/typing.vue'
import Snake from './components/snake.vue'
import Media_Server from './components/media_server.vue'
import Monitor from './components/monitor.vue';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Router);


const routes = [
  {path: "/", component: Home},
  {path: "/projects", component: Projects},
  {path: "/gold_rush", component: Gold_Rush},
  {path: "/personal", component: Personal},
  {path: "/foresight", component: Foresight},
  {path: "/engine", component: Engine},
  {path: "/typing", component: Typing},
  {path: "/snake", component: Snake},
  {path: "/media_server", component: Media_Server},
  {path: "/monitor", component: Monitor}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

