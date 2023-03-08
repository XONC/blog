import moment from 'moment';
import http from '@/plugin/axios';
import {hostApi} from './apiPrefix';
import type {Diary} from '@/api/interface/diary';
import type {ReData} from '../global';

// 获取日记
export const getDiaryListApi = async (): Promise<{list: Diary[]} | null> => {
  return http.post(hostApi + '/diary/list', {
    data: {},
  });
};
// 添加日记
export const insertDiaryApi = async (context: string): Promise<ReData | null> => {
  return http.post(
    hostApi + '/diary/insert',
    {
      data: {
        context,
      },
    },
    {
      reFull: true,
    },
  );
};
// 获取当天的日记
export const getDiaryNowDayApi = async (dt = moment().format('YYYYMMDD')): Promise<{list: Diary[]} | null> => {
  return http.post(hostApi + '/diary/getDiaryByDt', {
    data: {
      dt,
    },
  });
};
