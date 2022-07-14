<template>
  <el-card class="admin_page" v-loading="loading">
    <el-row>
      <h2>Заголовок</h2>
      <el-input placeholder="Заголовок" v-model="dataAdvert.title" clearable />
    </el-row>

    <el-row>
      <h2>Изображение</h2>
      <PartialsUpload ref="img" @uploadImg="uploadFile" />
    </el-row>

    <el-row>
      <h2>Описание</h2>
      <el-input type="textarea" :rows="5" placeholder="Описание" v-model="dataAdvert.text" maxlength="30" show-word-limit />
    </el-row>

    <div class="admin_page-col">
      <el-col :span="11">
        <h2>Номер Телефона</h2>
        <el-input placeholder="Заголовок" v-model="dataAdvert.phone" clearable />
      </el-col>
      <el-col :span="11">
        <h2>Адресс</h2>
        <el-input placeholder="Заголовок" v-model="dataAdvert.adress" clearable />
      </el-col>
    </div>

    <el-row>
      <h2>Скидка</h2>
      <el-input placeholder="Заголовок" v-model="dataAdvert.sale" clearable />
    </el-row>

    <el-row>
      <h2>Сайт</h2>
      <el-input placeholder="Заголовок" v-model="dataAdvert.site" clearable />
    </el-row>

    <div class="admin_page-col">
      <el-col :span="11">
        <h2>Instagram</h2>
        <el-input placeholder="Заголовок" v-model="dataAdvert.instagram" clearable />
      </el-col>
      <el-col :span="11">
        <h2>Facebook</h2>
        <el-input placeholder="Заголовок" v-model="dataAdvert.facebook" clearable />
      </el-col>
    </div>
    <div class="admin_page-col">
      <el-col :span="11">
        <h2>Tiktok</h2>
        <el-input placeholder="Заголовок" v-model="dataAdvert.tiktok" clearable />
      </el-col>
      <el-col :span="11">
        <h2>Telegram</h2>
        <el-input placeholder="Заголовок" v-model="dataAdvert.telegram" clearable />
      </el-col>
    </div>
    <button type="submit" @click="sendAdv">Добавить</button>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      dataAdvert: {
        title: '',
        img: null,
        text: '',
        phone: null,
        sale: '',
        adress: '',
        instagram: '',
        facebook: '',
        tiktok: '',
        telegram: '',
        site: '',
      },
    }
  },
  methods: {
    async sendAdv() {
      this.loading = true
      const response = await this.$store.dispatch(
        'magazine/addAdvertising',
        this.dataAdvert
      )
      if (response.text) {
        this.$alert(response.text, 'Title', {
          confirmButtonText: 'OK',
        })
        this.loading = false
      }
    },
    uploadFile(file) {
      if (file !== null) {
        const reader = new FileReader()
        reader.readAsDataURL(file.raw)
        reader.onload = () => {
          const base64Image = reader.result.split('data:image/png;base64,')[1]
          this.dataAdvert.img = base64Image
        }
      } else {
        this.dataAdvert.img = file
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.admin_page {
  width: 100%;
  h2 {
    margin: 10px 0;
    font-size: 23px;
    font-weight: 400;
  }
  &-col {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    margin: 20px 0;
    background: rgb(91, 91, 255);
    color: #fff;
  }
}
</style>