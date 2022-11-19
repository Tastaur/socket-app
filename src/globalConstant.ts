import { HistoryItem } from './context/HistoryDataContext/types';


export const bitcoinKey = 'cc-btc-usd-cccagg';

export enum WEB_SOCKET_MESSAGE {
  SUBSCRIBE = 'SUBSCRIBE',
  UNSUBSCRIBE = 'UNSUBSCRIBE',
}

export const WEB_SOCKET_URL = 'wss://wstest.fxempire.com?token=btctothemoon';
export const HISTORY_DATA_URL = 'https://test.fxempire.com/api/v1/en/crypto-coin/chart/candles';


export const APP_PREFIX = 'socket-app';

export const minuteInMillisecond = 60 * 1000;
export const hourInMillisecond = 60 * minuteInMillisecond;
export const dayInMillisecond = 24 * hourInMillisecond;
export const weekInMillisecond = 7 * dayInMillisecond;
export const tableKeys: Array<keyof HistoryItem> = ['Date', 'High', 'Low', 'Open', 'Close'];
