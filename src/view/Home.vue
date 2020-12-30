<template>
  <div id="Home">
    <el-container class="Home">
      <el-container>
        <el-aside width="300px">
         
          <div>
            <Side></Side>
          </div>
        </el-aside>
        <el-main>
          <Lunbo></Lunbo>
        </el-main>
      </el-container>
    </el-container>
    <el-container>
      <el-header> 推荐商品 </el-header>
      <el-main>
         <product v-for="item in filteredAndOrderedList" :info="item" :key="item.id"></product>
        <div class="product-not-found" v-show="!filteredAndOrderedList.length">暂无相关商品</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Side from './Side'
import Item from '../components/Item'
import Lunbo from '../components/Lunbo'
import product from '../components/product'
export default {
  components: {
    Lunbo,
    Side,
    Item,
    product
  },
  data() {
    return {
      value: "",
      curActive: "i1",
      filterBrand: '',
                filterColor: '',
                order: ''
    }
  },
  methods: {
    test(e) {
      console.log(e);
    },
     handleFilterBrand (brand) {
                if (this.filterBrand === brand) {
                    this.filterBrand = '';
                } else {
                    this.filterBrand = brand;
                }
            },
            handleFilterColor (color) {
                if (this.filterColor === color) {
                    this.filterColor = '';
                } else {
                    this.filterColor = color;
                }
            },
            handleOrderDefault () {
                this.order = '';
            },
            handleOrderSales () {
                this.order = 'sales';
            },
            handleOrderCost () {
                if (this.order === 'cost-desc') {
                    this.order = 'cost-asc';
                } else {
                    this.order = 'cost-desc';
                }
            }
   
  },
   computed: {
            list () {
                return this.$store.state.productList;
            },
            brands () {
                return this.$store.getters.brands;
            },
            colors () {
                return this.$store.getters.colors;
            },
            filteredAndOrderedList () {
                let list = [...this.list];
                // 按品牌过滤
                if (this.filterBrand !== '') {
                    list = list.filter(item => item.brand === this.filterBrand);
                }
                // 按颜色过滤
                if (this.filterColor !== '') {
                    list = list.filter(item => item.color === this.filterColor);
                }
                // 排序
                if (this.order !== '') {
                    if (this.order === 'sales') {
                        list = list.sort((a, b) => b.sales - a.sales);
                    } else if (this.order === 'cost-desc') {
                        list = list.sort((a, b) => b.cost - a.cost);
                    } else if (this.order === 'cost-asc') {
                        list = list.sort((a, b) => a.cost - b.cost);
                    }
                }
                return list;
            }
        },
        mounted () {
            this.$store.dispatch('getProductList');
        }
}
</script>

<style scoped>
#Home {
  width: 1200px;
  margin: 0 auto;
}
div {
  width: 300px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 30px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 30px;
  float: left;
}

.el-main {
  background-color: #05A369;
  color: #333;
  text-align: center;
  /* line-height: 150px; */
  float: left;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
