import { PERIOD_TABS } from '../../components/PeriodTabs/constants';
import { GetHistoryDataApiPayload } from '../../api/historyData';
import { hourInMillisecond, minuteInMillisecond, weekInMillisecond } from '../../globalConstant';


export const HISTORY_RANGE_ROUTE = {
  MINUTE : 'histominute',
  HOUR: 'histohour',
  DAY: 'histoday',
};


export const HISTORY_ROUTS_BY_PERIOD: Record<PERIOD_TABS, GetHistoryDataApiPayload> = {
  [PERIOD_TABS.FIVE_MINUTE]: { rangeRoute: HISTORY_RANGE_ROUTE.MINUTE, aggregateCount: 5 },
  [PERIOD_TABS.ONE_MINUTE]: { rangeRoute: HISTORY_RANGE_ROUTE.MINUTE, aggregateCount: 1 },
  [PERIOD_TABS.ONE_HOUR]: { rangeRoute: HISTORY_RANGE_ROUTE.HOUR, aggregateCount: 1 },
  [PERIOD_TABS.ONE_WEEK]: { rangeRoute: HISTORY_RANGE_ROUTE.DAY, aggregateCount: 7 },
};

export const LIFECYCLE_PERIOD_CACHE_TIME: Record<PERIOD_TABS, number> = {
  [PERIOD_TABS.FIVE_MINUTE]: minuteInMillisecond * 5,
  [PERIOD_TABS.ONE_MINUTE]: minuteInMillisecond,
  [PERIOD_TABS.ONE_HOUR]: hourInMillisecond,
  [PERIOD_TABS.ONE_WEEK]: weekInMillisecond,
};
