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
const FirstSecond = {template:'<div>First1.2内容（使用query传值）: {{$route.query.msg}}  {{$route.query.amount}}</div>'};

const FirstChildren = {template:'<div ><router-view ></router-view></div>'};

const User = {
  template:'<div>User : {{$route.params.id}} : {{$route.params.name}}</div>'
}
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
  {path:'/second',name:'Home-Second',component:Second,alias:['/dongdong','/bingbing']},//可以通过$route.name获取name值, 给路由添加别名
  {path:'/third',components:{ //同时控制多个视图多个组件
    default:Home,
    third:First,
    forth:Second
  }},{path:'/forth',components:{
    default:Home,
    third:Second,
    forth:First
  }},
  {path:'/user/:id',component:User}, // url传参
  {path:'/user/:id/:name',component:User}, // url传参
  {path:'/aaa',redirect:'/second'}, // 重定向
  {path:'/bbb/:id',redirect:'/user/:id'}, // 重定向
  {path:'/bbb/:id',redirect:{name:Home-Second}}, // 重定向到一个命名路由
  {path:'/ccc/:id',redirect:to=>{
      const {hash,params,query} = to
      if(params.id == '007'){
        return '/'
      }
  }}, // 动态方法重定向


];

const router = new VueRouter({
  model:'history',
  routes : routes //可以简写成routes
});

new Vue({
  router,
  template:`<div id="r">
                <h1>导航</h1>当前路由的名称：{{$route.name}}
                <ul>
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/first">First</router-link>
                    <ol>
                      <li><router-link :to="{name:\'Home-First-first\',params:{msg:\'dongdong借钱一万块\'}}">First1.1</router-link></li>
                      <li><router-link :to="{path:'/first/second',query:{msg:\'dongdong还钱\', amount:10000}}">First1.2</router-link></li>
                    </ol>
                  <li><router-link to="/second">Second</router-link></li>
                  <li><router-link to="/third">Third</router-link></li>
                  <li><router-link to="/forth">forth</router-link></li>
                  <li><router-link to="/user/222">User: 编号222</router-link></li>
                  <li><router-link to="/user/666/jason">User: 编号222 jason</router-link></li>
                  <li><router-link to="/aaa">aaa重定向到second</router-link></li>
                  <li><router-link to="/bbb/123">/bbb/123重定向到/user/123</router-link></li>
                  <li><router-link to="/ccc/456">/ccc/456重定向到home</router-link></li>
                  <li><router-link to="/dongdong">second的别名dongdong</router-link></li>
                  <li><router-link to="/bingbing">second的别名bingbing</router-link></li>
                </ul>
                <router-view ></router-view>
                <router-view name="third" style="width: 30%;height: 200px;background-color: aqua"></router-view>
                <router-view name="forth" style="width: 30%;height: 200px;background-color: bisque"></router-view>
              </div>`
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
