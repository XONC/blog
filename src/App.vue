<template>
  <!-- <RouterView /> -->
  <h1>测试</h1>
</template>
<script lang="ts" setup>
import {inject} from 'vue';
import {useDefineTheme} from '@/components/hooks/useDefineTheme.service';
useDefineTheme(1);
const $gProp = inject('$gProp');
console.log($gProp);
</script>
