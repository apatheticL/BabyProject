export class Schedule {
  Address: string;
  Date: string;
  GestationalWeek: number;
  Id: string;
  Type: number;
  UserId: string;
  constructor() {
    this.Address = '';
    this.Date = '';
    this.GestationalWeek = 0;
    this.Id = '';
    this.Type = 0;
    this.UserId = '';
  }
}

export class ScheduleRequest {
  Address: string;
  Date: string;
  GestationalWeek: number;
  Type: number;
  UserId: string;
  constructor() {
    this.Address = '';
    this.Date = '';
    this.GestationalWeek = 0;
    this.Type = 0;
    this.UserId = '';
  }
}
