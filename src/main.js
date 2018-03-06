// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 新增vue-router  https://router.vuejs.org/zh-cn/
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

const Home = {template:'<div>首页内容</div>'};
const First = {template:'<div>First内容</div>'};
const Second = {template:'<div>Second内容</div>'};


const routes = [
  {path:'/',component:Home},
  {path:'/first',component:First},
  {path:'/second',component:Second}
];

const router = new VueRouter({
  model:'history',
  routes : routes //可以简写成routes
});

new Vue({
  router,
  template:'<div id="r"><h1>导航</h1><ul><li><router-link to="/">Home</router-link></li><li><router-link to="/first">First</router-link><li><router-link to="/second">Second</router-link></li></ul><router-view class="abc"></router-view></div>'
}).$mount('#app');

// import Vue from "vue"
// import App from './App'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   // components: { App },
//   // template: '<App/>', Vue2.x可使用render函数代替
//   render:x => x(App)
// })
