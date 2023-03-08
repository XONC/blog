<template>
  <div class="app-header-container">
    <div class="app-header-container__wrapper">
      <div class="app-header-container__logo">XLP</div>
      <div class="app-header-container__link">
        <RouterLink class="nav-link pointer" to="/">链接</RouterLink>
      </div>
      <div class="app-header-container__avatar">
        <ThemeBtn />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import {RouterLink} from 'vue-router';
import ThemeBtn from './ThemeBtn.vue';
const name = ref('xlp');
</script>
<style lang="less" scoped>
.app-header-container {
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: @colorPrimary;
  &__wrapper {
    max-width: 1200px;
    min-width: 600px;
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    color: @colorWhite;
    font-size: 20px;
    font-weight: bold;
    margin-right: 135px;
  }
  &__link {
    flex: 1;
    text-align: end;

    a {
      color: @colorWhite;

      transition: all 0.3s;
      &:hover {
        color: @colorPrimary;
      }
    }
  }
}
</style>
