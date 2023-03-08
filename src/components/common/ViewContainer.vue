<template>
  <div class="view-wrapper-container">
    <div class="view-wrapper-container__wrapper" :style="{width: width}">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  width: string;
}

// eslint-disable-next-line vue/no-setup-props-destructure
const {width = '1200px'} = defineProps<Props>();
</script>
<style lang="less" scoped>
/* 页面居中展示 */
.view-wrapper-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__wrapper {
    max-width: 1200px;
    min-width: 600px;
    width: 1200px;
  }
}
</style>
