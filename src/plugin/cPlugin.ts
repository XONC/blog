/**
 * 自定义插件
 */
import type {App, Component} from 'vue';

export const cPlugin = {
  install(app: App, options: any) {
    // 注册全局属性
    app.config.globalProperties.$translate1 = (key: string) => {
      console.log('options==》', options);

      return 'a';
    };

    // 将vue的全局属性暴露出去
    app.provide('$gProp', app.config.globalProperties);

    // 注册全局组件
    getGlobalCompontents().forEach((o) => {
      app.component(o.name, o.instance);
    });

    // 注册全局指令
  },
};

function getGlobalCompontents() {
  const commonFiles = import.meta.globEager('../components/common/*.vue') as Record<string, any>;

  return Object.keys(commonFiles).map((o) => {
    const name = o.split('/').pop()?.split('.')[0] || '';
    return {
      name,
      instance: commonFiles[o].default || commonFiles[0].render,
    };
  });
}
