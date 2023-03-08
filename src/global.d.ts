declare module 'node';
declare module 'vue-virtual-scroller';

export interface window {
  $require: () => string;
}

// 接口返回值
export interface ReData {
  code: 0 | -1 | -2;
  data: any | null;
  message: string;
}
