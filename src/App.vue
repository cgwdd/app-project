<template>
  <div id="app">
    <el-container>
      <Header></Header>
    </el-container>
    <el-container>
      <router-view />
    </el-container>
    <el-container>
      <Banner></Banner>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'
import Banner from './components/Banner'
export default {
  name: 'App',
  components: {
    Header,
    Banner
  }
}
</script>

<style>
html,body{
  width:1200px;
  /* border:1px solid red; */
  margin:0 auto;
  background: #053420;
}
</style>
