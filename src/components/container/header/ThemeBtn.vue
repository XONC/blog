<template>
  <div class="theme-btn-container">
    <button @click="useDefineTheme(1)">
      <SvgIcon icon="icon-taiyang" />
    </button>
    <button @click="useDefineTheme(2)">切换主题2</button>
  </div>
</template>
<script lang="ts" setup>
import {onMounted} from 'vue';
import {useDefineTheme} from '@/components/hooks/useDefineTheme.service';
import customTheme1 from './theme/custom-theme1.json';
import customTheme2 from './theme/custom-theme2.json';
onMounted(() => {
  // changeTheme(1)
  useDefineTheme(1);
});

// function changeTheme(val: number) {
//   const root = document.documentElement;
//   const customTheme = val === 1 ? customTheme1 : customTheme2;
//   for (const key in customTheme) {
//     root.style.setProperty(key, customTheme[key as keyof typeof customTheme]);
//   }
// }
</script>
<style lang="less" scoped></style>
