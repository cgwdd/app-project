<template>
    <div class="side-bar">
        <ul class="menu-level-1">
            <li v-for="category in categories" :key="category" @mouseenter="showMenuLevel2(category)" @mouseleave="showMenuLevel2(category)">
                <div class="menu-container">
                    <span class="category-icon"></span>
                    <p class="category-name">
                        {{ category.name }}
                        <span class="gt">&gt;</span>
                    </p>
                </div>
                <div class="menu-level-2" v-show="category.show">
                    <h3><a href="#">{{ category.name }}</a></h3>
                    <div class="product-list">
                        <router-link
                            v-for="id in getCategoryProductIds(category.index)" :key="id"
                            :to="{name: 'ProductDetails', params: {id:id}}"
                            tag="span">
                            {{ getProductInfo(id).name }}
                        </router-link >
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import products from '../../static/products'
export default {
  name: 'SideBar',
  data () {
    return {
      categories: [
        {
          index: 0,
          show: false,
          name: '咖啡与茶'
        },
        {
          index: 1,
          show: false,
          name: '茶瓦纳'
        },
        {
          index: 2,
          show: false,
          name: '咖啡器具'
        },
        {
          index: 3,
          show: false,
          name: '卡券类'
        },
        {
          index: 4,
          show: false,
          name: '其他周边'
        }
      ],
      allProducts: products
    }
  },
  computed: {
    hotChoice: function (productList) {
      return productList.slice(0, 3)
    }
  },
  methods: {
    showMenuLevel2: function (obj) {
      obj.show = !obj.show
    },
    // 获取每个类别的商品的id数组
    getCategoryProductIds: function (index) {
      var tempArr = []
      for (var i = 1; i <= 10; i++) {
        tempArr.push(index * 10 + i)
      }
      return tempArr
    },
    // 获取商品信息
    getProductInfo: function (id) {
      return this.allProducts[id - 1]
     
    }
  }
}
</script>

<style scoped>

    /* 左边侧栏导航栏 */
    .side-bar {
        width: 20%;
        height: 322px;
        background-color: #ff5555;
        position: absolute;
        top: 150px;
        background-color: #fff;
        z-index: 2;
        border:1px solid red;

    }
    .side-bar .menu-level-1{
        margin-top: 0px;
        padding-left: 0px;
    }

    .side-bar ul li {
        box-sizing: border-box;
        height: 64.4px;
        width: 100%;
        list-style: none; 
    }
    .side-bar ul li .menu-container {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        line-height: 30px;
        position: relative;
        padding: 12px 0px 12px 48px;
        background-color: #eee;
        z-index: 2;
        border: 1px solid #eee;
        border-top: 1px dotted #999;
    }
    .side-bar ul li:hover .menu-container {
        background-color: #fff;
        border-right: 1px solid #fff;
    }
    .side-bar ul li:first-child .menu-container {
        border: none;
    }
    .side-bar ul li .category-icon {
        display: inline-block;
        width: 30px;
        height: 30px;
        background:  url('../assets/main-view/icons/fruit.png') no-repeat 0 0;
        background-size: 30px;
        position: absolute;
        top: 18px;
        left: 8px;
    }
    .side-bar ul li:nth-child(2) .category-icon {
        background-image: url(../assets/main-view/icons/seafood.png);
    }
    .side-bar ul li:nth-child(3) .category-icon {
        background-image: url(../assets/main-view/icons/meat.png);
    }
    .side-bar ul li:nth-child(4) .category-icon {
        background-image: url(../assets/main-view/icons/juice.png);
    }
    .side-bar ul li:nth-child(5) .category-icon {
        background-image: url('https://gdp.alicdn.com/imgextra/i4/2634283647/O1CN01gXgq621coN1IOtBXF_!!2634283647.jpg');
    }
    .side-bar ul li:nth-child(1):hover .category-icon {
        background-image: url('https://gdp.alicdn.com/imgextra/i2/2634283647/TB2XADHaOMnBKNjSZFzXXc_qVXa-2634283647.jpg');
    }
    .side-bar ul li:nth-child(2):hover .category-icon {
        background-image: url('https://gdp.alicdn.com/imgextra/i3/2634283647/O1CN01BitU6u1coN45lhI67_!!2634283647.jpg');
    }
    .side-bar ul li:nth-child(3):hover .category-icon {
        background-image: url('https://gdp.alicdn.com/imgextra/i2/2634283647/O1CN01gLIu0D1coN63B1Jwv_!!2634283647.jpg');
    }
    .side-bar ul li:nth-child(4):hover .category-icon {
        background-image: url('https://gdp.alicdn.com/imgextra/i2/2634283647/TB2puTHb7fb_uJkHFCcXXXagFXa-2634283647.jpg');
    }
    .side-bar ul li:nth-child(5):hover .category-icon {
        background-image: url('https://gdp.alicdn.com/imgextra/i2/2634283647/O1CN01AaDm2m1coN64tcyXd_!!2634283647.jpg');
    }
    .side-bar ul li .category-name {
        /*background: red;*/
        font-weight: bold;
        font-size: 20px;
    }
    .side-bar ul li .category-name:hover {
        /*padding-left: 5px;*/
        cursor: pointer;
        color: #12ab34;
    }
    .side-bar ul li .category-name .gt {
        float: right;
        font-weight: lighter;
        margin-right: 10px;
    }
    .side-bar ul li .hot-choice span:hover {
        color: #12ab34;
        font-weight: bold;
    }
    .side-bar ul li .menu-level-2 {
        position: absolute;
        top: 168px;
        left: 179px;
        width: 240px;
        height: 252px;
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #ddd;
        z-index: 1;
        padding: 0 20px;
        margin-left: 40px;
        
    }
    .side-bar ul li:nth-child(1) .menu-level-2 {
        top: 0px;
    }
    .side-bar ul li:nth-child(2) .menu-level-2 {
        top: 84px;
    }
    .side-bar ul li .menu-level-2 h3 {
        height: 35px;
        line-height: 52px;
        padding-left: 10px;
    }
    .side-bar ul li .menu-level-2 h3 a {
        color: #12ab34;
        text-decoration: none;
    }
    .side-bar ul li .menu-level-2 .product-list span {
        display: inline-block;
        margin: 10px 12px 10px 12px;
        box-sizing: border-box;
        text-align: center;
        font-size: 14px;
    }
    .side-bar ul li .menu-level-2 .product-list span:hover {
        color: #12ab34;
        cursor: pointer;
    }
</style>
