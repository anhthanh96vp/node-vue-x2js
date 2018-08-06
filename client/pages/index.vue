<template>
  <section class="container">
    <div>
      <top-bar/>
      <nav-bar/>
      <div>
      <el-row :gutter="20">
        <el-col :span="16">
            <el-carousel :interval="4000"  height="270px">
                <el-carousel-item v-for="item in 6" :key="item">
                <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </el-col>
        <el-col  :span="8" type="flex" align="center">
           <div>
              <a href="https://cdn2.tgdd.vn/qcao/01_08_2018_07_02_05_j7proplus-Thang8_398-110.png"><img src="https://cdn2.tgdd.vn/qcao/01_08_2018_07_02_05_j7proplus-Thang8_398-110.png" alt=""></a>
           </div>
           <div>
               <a href="https://cf.shopee.vn/file/8e04c39a125c61fc45f462752c17c1b9"><img src="https://cf.shopee.vn/file/8e04c39a125c61fc45f462752c17c1b9" alt=""></a>
           </div>
        </el-col>
      </el-row>
    </div>
      <promo/>
      
      
          </div>
  </section>
</template>

<script>
import TopBar from "~/components/TopBar.vue"
import NavBar from "~/components/NavBar.vue"
import Promo from "~/components/Promo.vue"
import SliderPhone from "~/components/SliderPhone.vue"

export default {
	components: {
		TopBar,
		NavBar,
		Promo,
		SliderPhone
	}
}
</script>

<style>
.el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 200px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
</style>