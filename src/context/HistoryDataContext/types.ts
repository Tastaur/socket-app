import { Nullable } from '../../globalTypes';
import { PERIOD_TABS } from '../../components/PeriodTabs/constants';


export interface HistoryItem {
  Date: string,
  Close: number,
  High: number,
  Low: number,
  Open: number,
}

export interface WithData {
  data: HistoryItem[],
}

export interface HistoryContextResponse extends WithData {
  error: Nullable<Error>,
  isLoading: boolean,
  currentPeriod: PERIOD_TABS,
  setCurrentPeriod: (period: PERIOD_TABS) => void
}

export interface CachedData extends WithData {
  timestamp: number,
}
