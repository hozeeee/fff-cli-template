<template>
  <div class="home_container">
    <!-- ------------------------ PC 端 ------------------------ -->
    <!-- <span style="font-size:60px; line-height:160px;">home</span> -->
    <!-- ------------------------------------------------------- -->
    <!-- ------------------------ 移动端 ------------------------ -->
    <div class="home_swiper_container swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) of sliderList" :key="index">
          <!-- <exampleSlide text="Slide 1" :bgColor="'#ddd'" /> -->
          <component
            :is="item.component"
            :text="`Slide ${index+1}`"
            :bgColor="`rgb(${220-index*10},${220-index*10},${220-index*10})`"
          ></component>
        </div>
      </div>
    </div>
    <div class="tab_bar">
      <div
        class="item"
        v-for="(item,index) of sliderList"
        :key="index"
        @click="homeSwiper.slideTo(index, 0, false)"
        :class="swiperIndex===index? 'active': ''"
      >
        <a-icon class="icon" :type="item.icon" />
        <span class="label">{{ item.name }}</span>
      </div>
    </div>
    <!-- ------------------------------------------------------- -->
  </div>
</template>
<script>
import exampleSlide from "@/components/home/exampleSlide";
import mockQqList from "@/components/home/mockQqList";

export default {
  /* ********************* 移动端 ********************* */
  data() {
    return {
      homeSwiper: null,
      swiperIndex: 0,
      sliderList: [
        { name: "1", icon: "android", component: "exampleSlide" },
        { name: "2", icon: "apple", component: "exampleSlide" },
        { name: "3", icon: "qq", component: "mockQqList" },
      ],
    };
  },
  // computed: {
  //   swiperIndex: {
  //     get() {
  //       if (!this.homeSwiper) return 0;
  //       return this.homeSwiper.realIndex;
  //     },
  //     set(index) {
  //       this.homeSwiper.slideTo(index, 0, false);
  //     },
  //   },
  // },
  mounted() {
    this.homeSwiper = new this.$Swiper(".home_swiper_container", {
      lazy: true,
      on: {
        slideChangeTransitionEnd: (swiper) => {
          this.swiperIndex = swiper.realIndex;
        },
      },
    });
    console.log("this.homeSwiper", this.homeSwiper);
  },
  // watch: {
  //   // 为了演示QQ列表的左侧滑动，禁用滑动事件
  //   swiperIndex(index) {
  //     if (index === 2) {
  //       // this.homeSwiper.allowSlideNext = false;
  //       // this.homeSwiper.allowSlidePrev = false;
  //       this.homeSwiper.allowTouchMove = false;
  //     } else {
  //       // this.homeSwiper.allowSlideNext = true;
  //       // this.homeSwiper.allowSlidePrev = true;
  //       this.homeSwiper.allowTouchMove = true;
  //     }
  //   },
  // },
  components: { exampleSlide, mockQqList },
  /* ************************************************* */
};
</script>
<style lang="less" scoped>
.home_container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: rgb(240, 240, 240);
  /* ******* 移动端 ******* */
  display: flex;
  flex-direction: column;
  .home_swiper_container {
    width: 100%;
    flex: 1;
    overflow: hidden;
  }
  .tab_bar {
    display: flex;
    background-color: #fff;
    .item {
      flex: 1;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .icon {
        font-size: 20px;
      }
      &.active {
        color: blue;
      }
    }
  }
  /* ********************* */
}
</style>