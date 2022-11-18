import { parseJsonSafely } from '../../utils';
import { CachedData, HistoryItem } from './types';
import { Nullable } from '../../globalTypes';
import { LIFECYCLE_PERIOD_CACHE_TIME } from './constant';
import { PERIOD_TABS } from '../../components/PeriodTabs/constants';


//todo test
export const validateCachedData = (period: PERIOD_TABS, data: Nullable<string>): Nullable<HistoryItem[]> => {
  if (!data) {
    return null;
  }
  const parsedData = parseJsonSafely(data, {} as CachedData);
  if (parsedData.data && parsedData.timestamp) {
    if (Math.floor(Date.now() - parsedData.timestamp) < LIFECYCLE_PERIOD_CACHE_TIME[period]) {
      return parsedData.data;
    }
    return null;
  }
  return null;
};
