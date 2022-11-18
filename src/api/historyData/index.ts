import axios from 'axios';

import { HISTORY_DATA_URL } from '../../globalConstant';
import { HistoryContextData } from '../../context/HistoryDataContext/types';


export interface GetHistoryDataApiPayload {
  rangeRoute: string,
  aggregateCount: number,
}


const historyDataApiInstance = axios.create({
  baseURL: HISTORY_DATA_URL,
});

export const getHistoryDataApi =  ({ aggregateCount, rangeRoute }: GetHistoryDataApiPayload) =>{
  return historyDataApiInstance.get<HistoryContextData>(`/${rangeRoute}`, {
    params:{
      aggregate: aggregateCount,
      limit: 30,
      e: 'CCCAGG',
      fsym: 'BTC',
      tsym: 'USD',
    },
  }).then(data => data.data).catch(e => new Error(e));
};
