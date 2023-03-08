import moment from 'moment';
import http from '@/plugin/axios';
import {xlpApi} from './apiPrefix';
import type {SaveOrUpdateBlogPayload, Blog} from '@/api/interface/blog';
import type {ReData} from '../global';

// // 获取日记
// export const getDiaryListApi = async (): Promise<{list: Diary[]} | null> => {
//   return http.post(hostApi + '/diary/list', {
//     data: {},
//   });
// };
/**
 * 添加或保存博客
 * @param payLoad
 * @returns
 */
export const saveOrUpdateApi = async (payLoad: SaveOrUpdateBlogPayload): Promise<{id: number} | null> => {
  return http.post(xlpApi + '/blog/insertOrUpdate', {
    data: payLoad,
  });
};

/**
 * 根据id查询博客
 * @param id
 * @returns
 */
export const selectByIdApi = async (id: number | string): Promise<Blog[] | null> => {
  return http.post(xlpApi + '/blog/selectById', {
    data: {
      id,
    },
  });
};

/**
 * 添加tag
 * @param id
 * @returns
 */
export const insertTagApi = async (name: string): Promise<{id: string} | null> => {
  return http.post(xlpApi + '/blog/insertTag', {
    data: {
      name,
    },
  });
};
