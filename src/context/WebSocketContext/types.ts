import { Nullable } from 'globalTypes';


export interface BitcoinData {
  last: number,
  change: number,
  percentChange: number,
  lastUpdate: string,
  quoteSymbol: string,
}

export interface WebSocketContextInterface {
  data: Nullable<BitcoinData>,
  isLoading: boolean,
  error: Nullable<Error>,
}
