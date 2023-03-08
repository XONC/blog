import axios, {AxiosError, type AxiosRequestConfig, type AxiosResponse} from 'axios';
import {ElMessage} from 'element-plus';

// 返回的
const re = ({data, config}: AxiosResponse) => {
  console.log('应该返回的格式==>', data);
  if (data.code === 0) {
    return data.data;
  }
  if (data.code === -1) {
    ElMessage.error(data.message);
    console.error(
      `------ 错误日志: -1--------
        path:   ${config.url}
      -------------------------- `,
    );

    return null;
  }
  if (data.code === -2) {
    ElMessage.error(data.message);
    console.error(
      `------ 错误日志: -2--------
        path:   ${config.url}
      -------------------------- `,
    );
    return null;
  }
};

const instance = axios.create({
  baseURL: import.meta.env.VITE_NODE_ENV,
  timeout: 1000,
  headers: {'Content-Type': 'application/json;charset=utf-8'},
});

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对data进行处理
    const {data} = response;
    // 处理code
    const code = Number(data.code);
    data.code = Number.isNaN(code) ? -2 : code;

    if (
      typeof data.data === 'undefined' ||
      data.data === null ||
      (data.data instanceof Array && data.data.length === 0) ||
      (typeof data.data === 'object' && Object.keys(data.data).length === 0)
    ) {
      data.data = null;
    }
    data.message = data.message || data.msg || '前端自定义';

    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    ElMessage.error(`${error.request.status}: ${error.message}`);
    return Promise.reject(error);
  },
);

const post = (path: string, params: any, config?: AxiosRequestConfig & {reFull: boolean}) => {
  return instance.post(path, params, config).then((resp) => {
    console.log('请求返回了==>', resp);
    if (config?.reFull) {
      return resp.data;
    }
    return re(resp);
  });
};

const http = {
  post,
};

export default http;
