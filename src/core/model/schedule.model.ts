import {ExaminationResult} from './examination-result.model';
import {GestationalWeek} from './gestational-week.model';

export class Schedule {
  Address: string;
  Date: string;
  GestationalWeek: GestationalWeek;
  Id: string;
  UserId: string;
  Note?: string;
  Status: number;
  Results?: ExaminationResult;
  constructor() {
    this.Address = '';
    this.Date = '';
    this.GestationalWeek = new GestationalWeek();
    this.Id = '';
    this.UserId = '';
    this.Status = 1;
  }
}

export class ScheduleRequest {
  Address: string;
  Date: string;
  GestationalWeek: GestationalWeek;
  UserId: string;
  Status: number;
  Note?: string;
  constructor() {
    this.Address = '';
    this.Date = '';
    this.GestationalWeek = new GestationalWeek();
    this.UserId = '';
    this.Status = 1;
  }
}
