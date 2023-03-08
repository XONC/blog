<template>
  <ViewContainer class="diary-edit-container" width="530px">
    <textarea v-model="context" name="" id=""></textarea>
    <button @click="submit">确定</button>
  </ViewContainer>
</template>
<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import {insertDiaryApi, getDiaryNowDayApi} from '@/api/diary';
import {ElMessage} from 'element-plus';
const emits = defineEmits<{
  (e: 'submit'): void;
}>();
const context = ref('');

onMounted(() => {
  getDiaryNowDayApi().then((resp) => {
    context.value = (resp && resp.list[0].context) || '';
  });
});

function submit() {
  if (context.value) {
    insertDiaryApi(context.value)
      .then((resp) => {
        resp && ElMessage[resp.code === 0 ? 'success' : 'warning'](resp?.message);
      })
      .finally(() => {
        emits('submit');
      });
  } else {
    ElMessage.warning('请先输入内容');
  }
}
</script>
<style lang="less" scoped>
.diary-edit-container {
  content: '';
  position: absolute;
  bottom: 0;
  width: 520px;
  border: 1px solid @borderColor;
  padding: 20px;
  border-radius: 4px;
  background-color: @colorWhite;
  &:deep(.view-wrapper-container__wrapper) {
    min-width: unset;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    textarea {
      width: 100%;
      height: 50px;
      margin-bottom: 20px;
    }
  }
}
</style>
