import { PERIOD_TABS } from '../PeriodTabs/constants';


export const DATE_FORMAT_BY_PERIOD: Record<PERIOD_TABS, string> = {
  [PERIOD_TABS.FIVE_MINUTE]: 'k:mm',
  [PERIOD_TABS.ONE_MINUTE]: 'k:mm',
  [PERIOD_TABS.ONE_HOUR]: 'k:mm',
  [PERIOD_TABS.ONE_WEEK]: 'MMM dd',
};
