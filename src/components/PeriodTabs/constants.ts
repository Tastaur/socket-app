export enum PERIOD_TABS {
  ONE_MINUTE = 'ONE_MINUTE',
  FIVE_MINUTE = 'FIVE_MINUTE',
  ONE_HOUR = 'ONE_HOUR',
  ONE_WEEK = 'ONE_WEEK',
}

export const PERIOD_TABS_NAME_RECORD: Record<PERIOD_TABS, string> = {
  [PERIOD_TABS.ONE_MINUTE]: '1 Minute',
  [PERIOD_TABS.FIVE_MINUTE]: '5 Minutes',
  [PERIOD_TABS.ONE_WEEK]: '1 Week',
  [PERIOD_TABS.ONE_HOUR]: '1 Hour',
};
