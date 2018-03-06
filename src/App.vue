<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <HelloVue/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import HelloVue from './components/HelloVue'

export default {
  name: 'App',
  components: {
    HelloWorld,HelloVue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
