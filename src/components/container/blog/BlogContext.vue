<template>
  <div class="blog-context">
    <main class="warpper">
      <section>
        <h1>{{ data.blog?.title }}</h1>
        <el-tag v-for="tag in data.blog?.tags" :key="tag.id">{{ tag.name }}</el-tag>
        <el-button @click="edit">编辑</el-button>
      </section>
      <v-md-preview-html :html="data.blog?.contextHtml" preview-class="vuepress-markdown-body"></v-md-preview-html>
    </main>
  </div>
</template>
<script lang="ts" setup>
import {ref, onMounted, reactive} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {selectByIdApi} from '@/api/blog';
import type {Blog} from '@/api/interface/blog';
const route = useRoute();
const router = useRouter();
const data = reactive({
  blog: null as Blog | null,
});

onMounted(() => {
  const id = route.params.id as string;
  if (id) {
    selectByIdApi(id).then((resp) => {
      if (resp) {
        data.blog = resp[0];
      }
    });
  }
});
const edit = () => {
  router.push({
    path: '/blog/edit',
    query: {
      id: data.blog?.id,
    },
  });
};
</script>
<style lang="less" scoped>
.blog-context {
  display: block;

  .warpper {
    display: block;
    width: 632px;
    margin: 0 auto;
  }
}
</style>
