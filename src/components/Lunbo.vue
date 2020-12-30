<template>
  <div class="lunbo">
      <div class="banner">
          <img v-for="(v,i) in img" :key="i" :src="v" v-show="i==n">
          <div class="banner-circle">
              <ul>
                  <li v-for="(v,i) in img" :key="i" :class="i==n ? 'selected' : ''"></li>
              </ul>
          </div>
      </div>

      <!-- <div class="index-category">
          <div class="iconfont" :class="list.icon" :style="{background:list.color}"></div>
          <label >{{list.title</label>
      </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      n: 0,
      img: [
        
        require('../assets/lunbo2.2.jpg'),
        require('../assets/lunbo1.2.jpg'),
        require('../assets/lunbo3.jpg')

      ]
    }
  },
  methods: {
    fun: function () {
      setInterval(this.play, 3000)
    },
    play: function () {
      this.n++
      if (this.n === this.img.length) {
        this.n = 0
      }
    }
  },
  mounted: function () {
    this.fun()
  }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
.lunbo{
  width:832px;
  height:282px;
  margin:0 auto;
  border:1px red solid
}
ul{
    list-style-type: none;
}
body{
    font-size: 14px;
    background:#fff;
    overflow-y:scroll;
    overflow-x: hidden;
}
html,body{
    max-width:1200px;
    height:100%;
    margin:0 auto;
    white-space:nowrap;
}
.banner{
    position:relative;
}
.banner .banner-circle{
    position:absolute;
    bottom:5px;
    left:0;
    right:0;
    color:#fff;
}
.banner .banner-circle li{
    display: inline-block;
    background:rgba(0, 0, 0, .3);
    border-radius: 50%;
    padding:5px;
    margin:2px;
}
.banner .banner-circle ul{
    text-align: center;
}
.banner .banner-circle .selected {
    background: rgba(0, 0, 0, .9);
}
.banner img{
    margin:0;
    padding:0;
}

</style>
