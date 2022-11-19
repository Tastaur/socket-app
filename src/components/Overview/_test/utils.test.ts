import { getCurrentDateFormat } from '../utils';
import { PERIOD_TABS } from '../../PeriodTabs/constants';


describe('overview component utils', () => {
  it('should return formatted date', function (){
    const dateHour = getCurrentDateFormat(new Date(1668884086787).toISOString(), PERIOD_TABS.ONE_HOUR);
    const dateMinute = getCurrentDateFormat(new Date(1668884086787).toISOString(), PERIOD_TABS.ONE_MINUTE);
    const dateFiveMinutes = getCurrentDateFormat(new Date(1668884086787).toISOString(), PERIOD_TABS.FIVE_MINUTE);
    const dateWeek = getCurrentDateFormat(new Date(1668884086787).toISOString(), PERIOD_TABS.ONE_WEEK);
    expect('20:54').toEqual(dateHour);
    expect('20:54').toEqual(dateMinute);
    expect('20:54').toEqual(dateFiveMinutes);
    expect('Nov 19').toEqual(dateWeek);
  });
});
