<template>
  <div class="edit-blog">
    <el-form ref="formRef">
      <el-form-item label="标题">
        <el-input v-model="data.payload.title" />
      </el-form-item>
      <el-form-item label="标签">
        <!-- <el-input v-model="data.tag" /> -->
        {{ data.tagNm }}
        <el-tag
          @click="
            data.tag = '5';
            data.tagNm = '面试';
          "
        >
          面试
        </el-tag>
        <el-tag
          @click="
            data.tag = '4';
            data.tagNm = '微信小程序';
          "
        >
          微信小程序
        </el-tag>
      </el-form-item>
    </el-form>

    <v-md-editor
      v-model="data.payload.context"
      :height="data.textHeight"
      @copy-code-success="handleCopyCodeSuccess"
      @save="save"
    ></v-md-editor>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref, onMounted} from 'vue';
import {saveOrUpdateApi, selectByIdApi} from '@/api/blog';
import {ElMessage, type FormInstance} from 'element-plus';

import {useRoute, useRouter} from 'vue-router';
import {debounce} from '@/utils';
import type {SaveOrUpdateBlogPayload} from '@/api/interface/blog';
const router = useRouter();
const route = useRoute();
const formRef = ref<FormInstance>();
const data = reactive({
  textHeight: '0px',
  tag: '',
  tagNm: '',
  payload: {
    id: undefined,
    title: '',
    context: '',
    picture: '',
    contextHtml: '',
    tagIds: null,
  } as SaveOrUpdateBlogPayload,
});

onMounted(() => {
  const height = formRef.value?.$el.clientHeight;
  data.textHeight = `calc( 100vh - 40px - 20px - ${height}px)`;

  const id = route.query.id as string;
  if (id) {
    selectByIdApi(id).then((resp) => {
      if (resp) {
        data.tag = resp[0].tags[0]?.id + '';
        data.tagNm = resp[0].tags[0]?.name;
        data.payload.context = resp[0].context;
        data.payload.contextHtml = resp[0].contextHtml;
        data.payload.title = resp[0].title;
        data.payload.id = resp[0].id;
      }
    });
  }
});

/* 复制代码 */
function handleCopyCodeSuccess(code: string) {
  console.log(code);
}
/* 保存文档 */
const save = debounce(async (text: string, html: string) => {
  // if (data.tag) {
  //   data.payload.tagIds = (await insertTagApi(data.tag))?.id || null;
  // }
  data.payload.tagIds = data.tag;
  data.payload.contextHtml = html;
  const resp = await saveOrUpdateApi(data.payload);
  if (resp?.id) {
    ElMessage.success('保存成功');
    router.push(`/blog/context/${resp.id}`);
  }
}, 500);
</script>
<style lang="less" scoped>
.edit-blog {
  padding: 20px;
}
</style>
