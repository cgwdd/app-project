<template>
  <div id="header" >
    
    <div id="container">
      <div class="topbar-fl">
        <ul class="navbar-nav">
          <li><router-link to='/login'>登录</router-link></li>
          <li><router-link to='/register'>注册</router-link></li>
          <li><router-link to='/home'>手机逛淘宝</router-link></li>
        </ul>
      </div>
      <div calss="topbar-fr">
        <ul>
          <li><router-link to='/home'>淘宝网首页</router-link></li>
          <li><router-link to='/home'>我的淘宝</router-link></li>
          <li><router-link to='/cart'>购物车</router-link></li>
        </ul>
      </div>
    </div>
    <div id="container-low">
      
      <div calss="topcenter" style="float:left;margin-left:400px;">
        <input type="text" placeholder="输入搜索内容" class="input" style="width:400px;" />
      </div>
      <div class="topright" style="float:left ">
        <input type="submit" class="submit" value="搜索" />
      </div>
      <div class="topleft" style="float:left;margin-left:0px;">
        <img src="../assets/header2.jpg">
      </div>
      <div>
          <div></div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
html body {
  width: 1200px;
  margin: 0;
  padding: 0;
}
#header {
  width: 1200px;
  margin: 0 auto;
  background:url('../assets/header1.1.jpg');
  border:1px solid red;
 
}
#container {
  min-width: 800px;
  width: 1200px;
  height: 30px;
  /* border: 1px solid red; */
  margin: 0 auto;
  
  clear: both;
}
.topbar-fl {
  width: 900px;
  height: 30px;
  float: left;
  /* border: 1px solid blue */
}
.topbar-fr {
  width: 100px;
  height: 30px;
  float: right;
  /* border: 1px solid red; */
}
#container li {
  float: left;
  line-height: 35px;
  padding: 0 8px;
  list-style: none;
}
#container a {
  color: black;
  text-decoration: none;
}
#container a:hover {
  color: red;
}
#container-low {
  float:left;
  width: 1200px;
  height:100px;
  margin: 0 auto;
  /* border:1px red solid; */
  margin-top:10px;
}
#container-low .topleft {
  margin-left:200px;
  width: 200px;
  height: 76px;
  /* border: 1px solid red; */
}
#container-low .topcenter {
  width:450px;
  height: 80px;
  /* border: 1px solid blue; */
}
.input {
  width: 450px;
  height: 50px;
  border-color: red;
  outline: none;
}
#container-low .topright {
  width: 100px;
  height: 80px;
}
.submit{
  width: 100px;
  height: 50px;
  background-color: red;
  color: white;
  font-size: 20px;
  border-color: red;
}
hr{
    color:red;
    width:100%;
}
</style>
