<template>
  <div class="mock_qq_list_container">
    <div class="title">模仿手机QQ的消息列表</div>
    <div
      class="mock_qq_swiper_container swiper-container"
      v-for="(item,index) of Array(16)"
      :key="index"
    >
      <div class="item swiper-wrapper">
        <div class="item_content swiper-slide">
          <div class="head_img" :style="randomBgColor()"></div>
          <div class="msg">这是卡片的内容</div>
        </div>
        <div class="item_menu swiper-slide">删除</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiper: null,
      preSwiper: null,
    };
  },
  methods: {
    randomColorNum() {
      return Math.round(Math.random() * 254);
    },
    randomBgColor() {
      return `background-image: linear-gradient(rgb(${this.randomColorNum()},${this.randomColorNum()},${this.randomColorNum()}),rgb(${this.randomColorNum()},${this.randomColorNum()},${this.randomColorNum()}));`;
    },
  },
  mounted() {
    this.swiper = new this.$Swiper(".mock_qq_swiper_container", {
      slidesPerView: "auto",
      resistanceRatio: 0,
      on: {
        touchEnd: (swiper) => {
          setTimeout(() => {
            if (swiper.snapIndex === 0) return;
            let closeMenu;
            closeMenu = () => {
              swiper.slidePrev();
              document.body.removeEventListener("touchstart", closeMenu);
            };
            document.body.addEventListener("touchstart", closeMenu);
          }, 0);
        },
      },
    });
  },
};
</script>
<style lang="less" scoped>
.mock_qq_list_container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .title {
    font-size: 18px;
  }
  .mock_qq_swiper_container {
    height: 60px;
    line-height: 60px;
    .item {
      .item_content {
        display: flex;
        align-items: center;
        .head_img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 0 10px;
        }
      }
      .item_menu {
        width: 70px;
        background-color: red;
        color: #fff;
      }
    }
  }
}
</style>