// @ts-nocheck
/**
 * 官网地址：http://ckang1229.gitee.io/vue-markdown-editor/zh/
 */
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';
// highlightjs
import hljs from 'highlight.js';
// 按需引入语言包
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('json', json);
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
  Hljs: hljs,
});
VueMarkdownEditor.use(createEmojiPlugin());
VueMarkdownEditor.use(createMermaidPlugin());
VueMarkdownEditor.use(createTodoListPlugin());
VueMarkdownEditor.use(createLineNumbertPlugin());
VueMarkdownEditor.use(createAlignPlugin());
VueMarkdownEditor.use(createCopyCodePlugin());
export const vueMarkdownEditor = VueMarkdownEditor; // 编辑器
export const vMdPreviewHtml = VMdPreviewHtml; // 展示组件
