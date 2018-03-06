// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 新增vue-router  https://router.vuejs.org/zh-cn/
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

const Home = {template:'<div>首页内容</div>'};
const First = {template:'<div>First内容</div>'};
const Second = {template:'<div>Second内容</div>'};

const Firstfirst = {template:'<div>First1.1内容：{{$route.params.msg}}</div>'};
const FirstSecond = {template:'<div>First1.2内容: dongdong还钱 {{$route.params.amount}}</div>'};

const FirstChildren = {template:'<div ><router-view ></router-view></div>'};

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
  {path:'/',name:'Home',component:Home},
  {path:'/first',name:'First',component:FirstChildren,//包含子路由的根路由name属性无效，可通过子路由里获取根路由名
    children:[
      {path:'/',name:'Home-First',component:First},//以 / 开头的嵌套路径会被当作根路径
      {path:'first',name:'Home-First-first',component:Firstfirst},//默认匹配成：/first/first
      {path:'second',name:'Home-First-second',component:FirstSecond}//默认匹配成：/first/second
    ]
  },
  {path:'/second',name:'Home-Second',component:Second}//可以通过$route.name获取name值
];



const router = new VueRouter({
  model:'history',
  routes : routes //可以简写成routes
});

new Vue({
  router,
  template:'<div id="r"><h1>导航</h1>当前路由的名称：{{$route.name}}<ul><li><router-link to="/">Home</router-link></li><li><router-link to="/first">First</router-link><ol><li><router-link :to="{name:\'Home-First-first\',params:{msg:\'dongdong借钱一万块\'}}">First1.1</router-link></li><li><router-link :to="{name:\'Home-First-second\',params:{msg:\'dongdong还钱一万块\', amount:10000}}">First1.2</router-link></li></ol><li><router-link to="/second">Second</router-link></li></ul><router-view ></router-view></div>'
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
