<template>
  <div class="upload">
    <el-upload action="#" ref="upload" list-type="picture-card" :auto-upload="false" :on-change="toggleUpload" :on-remove="toggleUpload" :class="{ hideUpload: !showUpload }">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="$emit('uploadImg', file)">
            <i class="el-icon-download"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      showUpload: true,
    }
  },
  methods: {
    handleRemove(file) {
      console.log(file)
      this.$refs.upload.clearFiles()
      this.showUpload = !this.showUpload
      this.$emit('uploadImg', null)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    toggleUpload() {
      this.showUpload = !this.showUpload
    },
    handleDownload(file) {
      console.log(file)
    },
  },
}
</script>
<style lang="scss">
.hideUpload > div {
  display: none !important;
}
</style>