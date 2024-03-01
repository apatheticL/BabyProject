import {Schedule} from '../model/schedule.model';
import RNCalendarEvents from 'react-native-calendar-events';
import {getEndDate, getStartDateSend} from '../utils/formater';
export class CalendarService {
  private static instance: CalendarService;
  private constructor() {}
  static getInstance() {
    if (!CalendarService.instance) {
      CalendarService.instance = new CalendarService();
    }
    return CalendarService.instance;
  }
  public async saveEvent(schedule: Schedule) {
    await RNCalendarEvents.requestPermissions(false);
    RNCalendarEvents.saveEvent(
      `Pregnancy checkup ${schedule.GestationalWeek.week} weeks`,
      {
        calendarId: schedule.Id,
        startDate: getStartDateSend(schedule.Date).toISOString(),
        endDate: getEndDate(schedule.Date).toISOString(),
        location: schedule.Address,
        notes: schedule.Note,
        description: schedule.Note,
        alarms: [
          {
            date: getStartDateSend(schedule.Date).toISOString(),
          },
          {
            date: getEndDate(schedule.Date).toISOString(),
          },
        ],
      },
    );
  }
}
