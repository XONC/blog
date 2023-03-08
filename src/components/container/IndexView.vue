<template>
  <div class="home-view-container">
    <div class="home-view-container__wrapper">
      <!-- <AppHeader /> -->
      <section class="home-view-container__img">
        <img :src="logoPng" alt="" />
        <h1>
          <i>S</i>
          <i>O</i>
          <i>S</i>
        </h1>
        <p>让世界变得热闹一点吧!</p>
      </section>
      <section class="home-view-container__context">
        <div class="wrapper"></div>
      </section>
      <RouterLink :to="{name: 'blogList'}">博客</RouterLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from 'vue';
// import AppHeader from '@header/AppHeader.vue';

import logoPng from '@img/logo.png';
</script>
<style lang="less" scoped>
.home-view-container {
  &__img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 110px;
    margin-bottom: 68px;
    h1 {
      margin-top: 32px;
      font-size: 48px;
      font-weight: bolder;
      i {
        margin-right: 5px;
      }
    }
    p {
      margin-top: 4px;
      font-size: 25px;
      color: @textLight2;
    }
  }
  &__context {
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
      display: block;
      width: 912px;
      height: 20px;
      border-top: 1px solid @borderColor;
    }
  }
}
</style>
