import {GestationalWeek} from './gestational-week.model';

export class Schedule {
  Address: string;
  Date: string;
  GestationalWeek: GestationalWeek;
  Id: string;
  UserId: string;
  Note?: string;
  constructor() {
    this.Address = '';
    this.Date = '';
    this.GestationalWeek = new GestationalWeek();
    this.Id = '';
    this.UserId = '';
  }
}

export class ScheduleRequest {
  Address: string;
  Date: string;
  GestationalWeek: GestationalWeek;
  UserId: string;
  Note?: string;
  constructor() {
    this.Address = '';
    this.Date = '';
    this.GestationalWeek = new GestationalWeek();
    this.UserId = '';
  }
}
