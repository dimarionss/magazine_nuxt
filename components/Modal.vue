<template>
  <div class="modal">
    <el-dialog :title="modalContent.title" :visible.sync="$parent.dialogVisible">
      <div class="modal-text">
        <h2>Информация</h2>
        <textarea disabled v-if="modalContent.text">{{ modalContent.text }}</textarea>
      </div>

      <div class="modal-adress" v-if="modalContent.adress">
        <h2>Адресс</h2>
        <p>{{ modalContent.adress }}</p>
      </div>
      <div class="modal-sale" v-if="modalContent.sale">
        <h2>Скидки / Акции</h2>
        <p>{{ modalContent.sale }}</p>
      </div>
      <div class="modal-contact" v-if="modalContent.phone && modalContent.phone !== 'null'">
        <h2>Номер телефона</h2>
        <p class="modal-tel">{{ modalContent.phone }}</p>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="$parent.dialogVisible = false">Отмена</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
export default {
  props: ['modalContent'],
  data() {
    return {
      modalContentMain: {
        title: 'Antonovitch',
        text: 'С 10:00 до 23:00 <br> 0983893954 <br> Бронь столиков <br> Европейская кухня <br> мангал меню <br> <br> уютный интерьер <br> живая музыка <br> <a href="https://www.instagram.com/kafe_lesnaya_polyana/"></a>',
      },
    }
  },

  methods: {},
}
</script>

<style lang="scss">
.el-dialog__header {
  background: black;
}
.el-dialog__title {
  font-size: 25px !important;
  font-weight: 700 !important;
  color: white !important;
}
.el-dialog {
  @include _md {
    width: 100% !important;
  }
}
</style>
<style lang="scss" scoped>
.modal {
  h2 {
    font-weight: 700;
    margin: 0 0 10px;
  }
  &-sale {
    p {
      font-size: 18px;
      font-weight: 700;
      background: chartreuse;
      padding: 20px;
      border-radius: 30px;
      box-shadow: 0px 0px 4px 0px #000000;
    }
  }
  &-text {
    textarea {
      width: 100%;
      min-height: 250px;
      border: none;
      background: beige;
      border-radius: 10px;
      padding: 20px;
      font-style: italic;
      color: black;
      font-size: 14px;
      border: 2px dashed;
    }
  }
  &-tel {
    font-size: 25px;
    font-weight: 600;
    color: crimson;
  }
}
</style>