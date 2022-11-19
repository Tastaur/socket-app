import { Nullable } from '../../globalTypes';


export interface HistoryItem {
  Date: string,
  Close: number,
  High: number,
  Low: number,
  Open: number,
  Volume: number,
}

export interface HistoryContextData {
  timeForm: number,
  data: HistoryItem[],
}

export interface HistoryContextResponse {
  data: HistoryItem[],
  error: Nullable<Error>,
  isLoading: boolean,
}

export interface CachedData {
  data: HistoryItem[],
  timestamp: number,
}
