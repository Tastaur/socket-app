import { validateCachedData } from '../utils';
import { PERIOD_TABS } from '../../../components/PeriodTabs/constants';
import { HistoryItem } from '../types';
import { minuteInMillisecond } from '../../../globalConstant';


describe('HistoryDataContext utils test',  () => {
  it('should return null',  () => {
    expect(validateCachedData(PERIOD_TABS.ONE_HOUR, null)).toEqual(null);
    expect(validateCachedData(PERIOD_TABS.ONE_HOUR, '[null]')).toEqual(null);
    expect(validateCachedData(PERIOD_TABS.ONE_HOUR, JSON.stringify({ timestamp: 0, data: [] }))).toEqual(null);
    expect(validateCachedData(PERIOD_TABS.ONE_WEEK, JSON.stringify({ timestamp: 0, data: [] }))).toEqual(null);
    expect(validateCachedData(PERIOD_TABS.ONE_MINUTE, JSON.stringify({ timestamp: 0, data: [] }))).toEqual(null);
    expect(validateCachedData(PERIOD_TABS.ONE_HOUR, JSON.stringify({ timestamp: 0, data: [] }))).toEqual(null);
  });
  it('should return data',  () => {
    Date.now = jest.fn().mockImplementationOnce(() => 1668884086787);
    const mockItem: HistoryItem = {
      Date: '12',
      Close: 1,
      Low: 1,
      Open: 1,
      High: 1,
    };
    const data = [mockItem];
    const fnPayload = {
      timestamp: 1668884086787 - minuteInMillisecond + 1,
      data,
    };
    
    const fnPayloadWithExpiredTimestamp = {
      timestamp: 1668884086787 - minuteInMillisecond - 1,
      data,
    };
    expect(validateCachedData(PERIOD_TABS.ONE_MINUTE, JSON.stringify(fnPayload))).toEqual(data);
    expect(validateCachedData(PERIOD_TABS.ONE_MINUTE, JSON.stringify(fnPayloadWithExpiredTimestamp))).toEqual(null);
  });
});
