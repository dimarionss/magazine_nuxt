<template>
  <div class="modal">
    <el-dialog
      :title="modalContent.title"
      :visible.sync="$parent.dialogVisible"
    >
      <p v-if="modalContent.text">{{ modalContent.text }}</p>
      <p v-if="modalContent.adress">{{ modalContent.adress }}</p>
      <p v-if="modalContent.sale">{{ modalContent.sale }}</p>
      <p v-if="modalContent.phone">{{ modalContent.phone }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="$parent.dialogVisible = false">Cancel</el-button>
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
// .el-modal{
//   @include _md{
//     width: 100%;
//   }
// }
</style>