import React, {
  createContext, FC, useCallback, useContext, useEffect, useState,
} from 'react';
import { Nullable } from 'globalTypes';
import { PERIOD_TABS } from 'components/PeriodTabs/constants';
import { getHistoryDataApi } from 'api/historyData';
import { APP_PREFIX } from 'globalConstant';

import { HISTORY_ROUTS_BY_PERIOD } from './constant';
import { CachedData, HistoryContextResponse, HistoryItem } from './types';
import { validateCachedData } from './utils';


const Context = createContext<Nullable<HistoryContextResponse>>(null);

export const useHistoryDataContext = () => {
  const context = useContext(Context);
  
  if (null === context){
    throw new Error('useDndContext must be used within DndContext');
  }
  
  return context;
};


export const HistoryDataContext: FC = ({
  children,
}) => {
  const [currentPeriod, setCurrentPeriod] = useState<PERIOD_TABS>(PERIOD_TABS.ONE_HOUR);
  
  const [data, setCurrentData] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Nullable<Error>>(null);
  const localStorageKey = `${APP_PREFIX}_${currentPeriod}`;
  
  
  const requestData = useCallback(async () => {
    setIsLoading(true);
    const dataInStorage = await localStorage.getItem(localStorageKey);
    const parsedDataFromStorage = validateCachedData(currentPeriod, dataInStorage);
    if (parsedDataFromStorage){
      setCurrentData(parsedDataFromStorage);
      setIsLoading(false);
      return;
    }
    
    const payload = await getHistoryDataApi(HISTORY_ROUTS_BY_PERIOD[currentPeriod]);
    if (payload instanceof Error){
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
  }, [currentPeriod, setCurrentData, setError, setIsLoading, error, localStorageKey]);
  
  useEffect(() => {
    requestData();
  }, [currentPeriod, requestData]);
  
  return (
    <Context.Provider value={{ data, error, isLoading, currentPeriod, setCurrentPeriod }}>
      {children}
    </Context.Provider>
  );
};
