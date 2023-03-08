export const blog = [
  {
    path: '/blog/edit',
    name: 'blogEdit',
    meta: {
      title: '博客-编辑',
    },
    component: () => import('@/components/container/blog/EditBlog.vue'),
  },
  {
    path: '/blog/list',
    name: 'blogList',
    meta: {
      title: '博客-列表',
    },
    component: () => import('@/components/container/blog/EditBlog.vue'),
  },
  {
    path: '/blog/context/:id',
    name: 'blogContext',
    meta: {
      title: '博客-正文',
    },
    component: () => import('@/components/container/blog/BlogContext.vue'),
  },
];
