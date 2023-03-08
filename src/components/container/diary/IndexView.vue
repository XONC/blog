<template>
  <ViewContainer class="diary-view-contianer" width="600px">
    <ul class="diary-view-contianer__list">
      <li v-for="item in diaryList" :key="item.id" class="diary-view-contianer__item">
        <h6>{{ moment(item.date).format('YYYY-MM-DD') }}</h6>
        <p>{{ item.context }}</p>
      </li>
      <DiaryEdit @submit="init()" />
    </ul>
  </ViewContainer>
</template>
<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import moment from 'moment';
import {getDiaryListApi} from '@/api/diary';
import DiaryEdit from './DiaryEdit.vue';
const diaryList = ref([
  {
    id: 1,
    context: '这是一段测试内容',
    date: '2022-12-11',
  },
]);
onMounted(() => {
  init();
});
function init() {
  getDiaryListApi().then((resp) => {
    if (resp) {
      diaryList.value = resp.list;
    }
  });
}
</script>
<style lang="less" scoped>
.diary-view-contianer {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &__list {
    margin-top: 20px;
    padding: 0 20px;
    position: relative;
    min-height: 100vh;
  }
  &__item {
    padding-bottom: 10px;
    border-bottom: 1px solid var(--el-border-color);
    h6 {
      position: relative;
      height: 16px;
      line-height: 16px;
      font-size: 16px;
      font-weight: bold;
      &::before {
        position: absolute;
        top: 0;
        left: -20px;
        content: '';
        display: block;
        width: 6px;
        height: 16px;
        background-color: @colorPrimary;
      }
    }
    p {
      margin-top: 20px;
      word-wrap: break-word;
      word-break: break-all;
    }
  }
}
</style>
