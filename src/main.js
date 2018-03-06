// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 新增vue-router  https://router.vuejs.org/zh-cn/
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

const Home = {template:'<div>首页内容</div>'};
const First = {template:'<div>First内容</div>'};
const Second = {template:'<div>Second内容</div>'};

const Firstfirst = {template:'<div>First1.1内容</div>'};
const FirstSecond = {template:'<div>First1.2内容</div>'};

const FirstChildren = {template:'<div ><router-view ></router-view></div>'}

//子路由配置方式一 ：思想---> 每一个对象对应一个单独的组件
// const routes = [
//   {path:'/',component:Home},
//   {path:'/first',component:First},
//   {path:'/second',component:Second},
//   {path:'/first/first',component:Firstfirst},
//   {path:'/first/second',component:FirstSecond},
// ];
//子路由配置方式二 ：思想---> 组合思想
const routes = [
  {path:'/',component:Home},
  {path:'/first',component:FirstChildren,
    children:[
      {path:'/',component:First},//以 / 开头的嵌套路径会被当作根路径
      {path:'first',component:Firstfirst},//默认匹配成：/first/first
      {path:'second',component:FirstSecond}//默认匹配成：/first/second
    ]
  },
  {path:'/second',component:Second}
];



const router = new VueRouter({
  model:'history',
  routes : routes //可以简写成routes
});

new Vue({
  router,
  template:'<div id="r"><h1>导航</h1><ul><li><router-link to="/">Home</router-link></li><li><router-link to="/first">First</router-link><ol><li><router-link to="/first/first">First1.1</router-link></li><li><router-link to="/first/second">First1.2</router-link></li></ol><li><router-link to="/second">Second</router-link></li></ul><router-view ></router-view></div>'
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
