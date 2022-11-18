import React, {
  createContext, FC, useCallback, useContext, useEffect, useState,
} from 'react';

import { Nullable } from '../../globalTypes';
import { CachedData, HistoryContextResponse, HistoryItem } from './types';
import { PERIOD_TABS } from '../../components/PeriodTabs/constants';
import { getHistoryDataApi } from '../../api/historyData';
import { HISTORY_ROUTS_BY_PERIOD } from './constant';
import { APP_PREFIX } from '../../globalConstant';
import { validateCachedData } from './utils';


const Context = createContext<Nullable<HistoryContextResponse>>(null);

export const useHistoryDataContext = () => {
  const context = useContext(Context);
  
  if (null === context) {
    throw new Error('useDndContext must be used within DndContext');
  }
  
  return context;
};

export interface HistoryDataContextProp {
  currentPeriod: PERIOD_TABS,
}

export const HistoryDataContext: FC<HistoryDataContextProp> = ({
  children,
  currentPeriod,
}) => {
  const [data, setCurrentData] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Nullable<Error>>(null);
  const localStorageKey = `${APP_PREFIX}_${currentPeriod}`;
  
  
  const requestData = useCallback(async () => {
    setIsLoading(true);
    const dataInStorage = await localStorage.getItem(localStorageKey);
    const parsedDataFromStorage = validateCachedData(currentPeriod, dataInStorage);
    if (parsedDataFromStorage) {
      setCurrentData(parsedDataFromStorage);
      setIsLoading(false);
      return;
    }
    
    const payload = await getHistoryDataApi(HISTORY_ROUTS_BY_PERIOD[currentPeriod]);
    if (payload instanceof Error) {
      setError(error);
      setIsLoading(false);
      return;
    }
    const preparedData: CachedData = {
      timestamp: Date.now(),
      data: payload.data,
    };
    await localStorage.setItem(localStorageKey, JSON.stringify(preparedData));
    setCurrentData(payload.data);
    setIsLoading(false);
  }, [currentPeriod]);
  
  useEffect(() => {
    requestData();
  }, [currentPeriod]);
  
  return (
      <Context.Provider value={{ data, error, isLoading }}>
          {children}
      </Context.Provider>
  );
};
