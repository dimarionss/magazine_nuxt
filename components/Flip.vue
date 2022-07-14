<template>
  <section class="flip">
    <div class="swiper-flip">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div v-for="(page, idx) in $store.getters['magazine/GET_ADV']" :key="idx" class="swiper-slide">
          <div class="flip-image">
            <img :src="'data:image/png;base64,'+ page.img" />
            <div class="top-bar">
              <i class="flip-edit el-icon-edit"></i>
              <i class="flip-delete el-icon-delete-solid"></i>
            </div>
          </div>

          <div class="bottom-bar">
            <el-row>
              <el-button type="primary" @click="$parent.modalData(page)">Подробнее</el-button>
            </el-row>
          </div>
          <el-card shadow="always" class="flip-soc">
            <el-row>
              <div v-if="page.instagram" class="flip-soc-item soc-link --inst" @click="openLink(page.instagram)"></div>
              <div v-if="page.facebook" class="flip-soc-item soc-link --fb" @click="openLink(page.facebook)"></div>
              <div v-if="page.telegram" class="flip-soc-item soc-link --tg" @click="openLink(page.telegram)"></div>
              <div v-if="page.tiktok" class="flip-soc-item soc-link --tk" @click="openLink(page.tiktok)"></div>
              <el-button v-if="page.site" type="primary" plain @click="openLink(page.site)">Сайт</el-button>
            </el-row>
            <el-row>
              <!-- <el-rate v-model="value1"></el-rate> -->
            </el-row>
          </el-card>
        </div>
      </div>

      <div class="flip__buttons">
        <el-button type="text" class="button-prev" icon="el-icon-d-arrow-left"></el-button>
        <el-button type="text" class="button-next" icon="el-icon-d-arrow-right"></el-button>
        <div class="swiper-pagination"></div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.css'
export default {
  data() {
    return {
      swiper: null,
      value1: null,
    }
  },
  mounted() {
    this.swiperInit()
  },
  methods: {
    swiperInit() {
      this.swiper = new Swiper(this.$el.children[0], {
        watchSlidesProgress: true,
        slidesPerView: 1,
        effect: 'cards',
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        breakpoints: {
          576: {
            slidesPerView: 1,
          },
          768: {},
          992: {},
        },
      })
    },
    openLink(link) {
      window.location.href = link
    },
  },
}
</script>

<style lang='scss'>
.flip {
  color: #ccc;
  overflow: hidden;
  position: relative;
  .swiper {
    &-wrapper {
      display: flex;
      align-items: center;
      min-height: 250px;
    }
  }
  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: auto;
    &-shadow {
      background: rgba(51, 51, 51, 0.384);
      @include _md {
        background: #333333;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10;
      }
    }
    img {
      display: block;
      width: 100%;
      min-height: 550px;
    }
  }
  &-image {
    position: relative;
    max-width: 450px;
    min-height: 550px;
    max-height: 750px;
  }
  .top-bar {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    i {
      width: 50px;
      height: 50px;
      padding: 10px;
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      font-size: 25px;
    }
  }
  .bottom-bar {
    margin: 20px 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 100%;
    max-width: 450px;
    text-align: center;
    background: rgba(0, 0, 0, 0.301);
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__buttons {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    .el-button--text {
      color: #ffffff;
      font-size: 75px;
    }
    .button-next {
      position: absolute;
      right: 0;
    }
    .button-prev {
      position: absolute;
      left: 0;
    }
  }
  .el-card {
    .el-row {
      margin: 10px;
      text-align: center;
    }
  }
  &-soc {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    max-width: 450px;
    border: none !important;
    background: rgba(0, 0, 0, 0.5) !important;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-row {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-item {
      width: 50px;
      height: 50px;
      cursor: pointer;
      margin: 0 10px;
      @include _md {
        width: 40px;
        height: 40px;
      }
      @include _sm {
        width: 35px;
        height: 35px;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
