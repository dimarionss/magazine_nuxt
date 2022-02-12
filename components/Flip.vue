<template>
  <section class="flip">
    <div class="swiper-flip">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div v-for="page in magazineObj" :key="page.img" class="swiper-slide">
          <img :src="page.img" />
          <div class="bottom-bar">
            <el-row>
              <el-button type="primary" @click="$parent.modalData(page)"
                >Подробнее</el-button
              >
            </el-row>
          </div>
          <el-card shadow="always" class="flip-soc">
            <el-row>
              <div
                v-if="page.instagram"
                class="flip-soc-item soc-link --inst"
                @click="openLink(page.instagram)"
              ></div>
              <div
                v-if="page.facebook"
                class="flip-soc-item soc-link --fb"
                @click="openLink(page.facebook)"
              ></div>
              <div
                v-if="page.telegram"
                class="flip-soc-item soc-link --tg"
                @click="openLink(page.telegram)"
              ></div>
              <div
                v-if="page.tiktok"
                class="flip-soc-item soc-link --tk"
                @click="openLink(page.tiktok)"
              ></div>
              <el-button
                v-if="page.site"
                type="primary"
                plain
                @click="openLink(page.site)"
                >Сайт</el-button
              >
            </el-row>
            <el-row>
              <!-- <el-rate v-model="value1"></el-rate> -->
            </el-row>
          </el-card>
        </div>
      </div>

      <div class="flip__buttons">
        <el-button
          type="text"
          class="button-prev"
          icon="el-icon-d-arrow-left"
        ></el-button>
        <el-button
          type="text"
          class="button-next"
          icon="el-icon-d-arrow-right"
        ></el-button>
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
  props: ['magazineObj'],
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
      window.location = link
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
    }
    img {
      display: block;
      width: 100%;
      max-width: 450px;
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
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
