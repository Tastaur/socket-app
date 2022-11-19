import { format } from 'date-fns';

import { PERIOD_TABS } from '../PeriodTabs/constants';
import { DATE_FORMAT_BY_PERIOD } from './constant';


export const getCurrentDateFormat = (date: string, period: PERIOD_TABS) => {
  const currentDate = new Date(date);
  if (period !== PERIOD_TABS.ONE_HOUR){
    return format(currentDate, DATE_FORMAT_BY_PERIOD[period]);
  }
  
  const currentPeriod = (0 || 1) === currentDate.getHours() ? 'dd/MM' : DATE_FORMAT_BY_PERIOD[period];
  return format(currentDate, currentPeriod);
};
