<template>
  <div id="register">
    <div id="center">
      <div class="centerleft">
        <img src="../assets/loginPhone3.jpg" alt="" />
      </div>
      <div class="centerright">
        <div class="ui centered card" id="card">
          <span class="zhuce">注册</span>
          <div class="content">
            <div class="header" id="header">
              <i class="user icon"></i>
              <input type="text" class="input" id="loginName" placeholder="请输入用户名" />
            </div>
            <div class="header" id="header">
              <i class="lock icon"></i>
              <input type="password" class="input" id="loginPsd" placeholder="请输入密码" />
            </div>
            <div class="header" id="header">
              <i class="lock icon"></i>
              <input type="password" class="input" id="loginPsd2" placeholder="确认密码" />
            </div>
            <div class="header" id="header">
              <i class="phone icon"></i>
              <input type="text" class="input" id="loginPhone" placeholder="电话号码" />
            </div>
            <div class="re">
              <div class="renumber">
                <input type="radio" class="radio" />
                <i class="i">点击表示您同意商城《服务协议》</i>
              </div>
              <div class="register"><router-link to='/login'>登录</router-link></div>
            </div>
            <div class="login">
              <input type="submit" onclick="register()" class="submit" value="注册" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#register {
  width: 1200px;
  margin: 0 auto;
  /* border: 1px red solid; */
}
#center {
  float: left;
  width: 1200px;
  height: 456px;
  /* border: 1px solid blue; */
  /* background: #FD7A72; */
  background: #50b4c3;
}
.centerleft {
  width: 500px;
  height: 450px;
  float: left;
  /* border: 1px red solid; */
  margin-left: 100px;
}
.centerright {
  width: 400px;
  height: 350px;
  float: left;
  /* border: 1px red solid; */
  margin-left: 100px;
  margin-top: 50px;
  background: white;
}
.zhuce{
  margin-left:170px;
}
#header {
  margin-top: 15px;
}
.card {
  width: 400px;
  height: 350px;
}
i{
   margin-left:50px;
}
.i{
  margin:0;
}
span {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 200px;
}
.re {
  width: 300px;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
  /* border:1px red solid; */
}
.renumber {
  /* border:1px red solid; */
  float: left;
  width: 245px;
  height: 20px;
  text-align: left;
}
.register {
  float: left;
  width: 50px;
  height: 20px;
  margin-left:5px;
}
a {
  color: black;
  text-decoration: none;
}
.submit {
  width: 300px;
  height: 30px;
  margin-top: 10px;
  /* border: 1px red solid; */
  margin-left:38px;
  background: #0E90D2;
  color:white;
}
#together{
  margin-top:10px;
  margin-left:38px;
  width:250px;
  height:20px;
  /* border: 1px red solid; */
  text-align:left;
}
#cooperate{
  font-size:15px;
  font-weight: 10px;
}
.qqwechat{
  float:left;
  width:300px;
  height:28px;
  margin-left:35px;
  margin-top:8px;
  /* border:1px red solid; */
}
.qq{
  float:left;
  width:100px;
}
.wechat{
  float:left;
  width:100px;
}
.weibo{
  float:left;
  width:80px;
}
#bottom{
  float:left;
}
</style>
