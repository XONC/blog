import {createApp} from 'vue';
import {createPinia} from 'pinia';
// import {fileURLToPath, URL} from 'node:url';
import './assets/css/index.less';
import './assets/icon/./iconfont.js';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

/* 注册自定义插件 */
import {cPlugin} from './plugin/cPlugin';
/* 注册makerdown插件 */
import {vueMarkdownEditor, vMdPreviewHtml} from './plugin/markdown';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(cPlugin);
app.use(vueMarkdownEditor);
app.use(vMdPreviewHtml);
app.mount('#app');
