export class ExaminationResult {
  Id: string;
  Image: any;
  Result: string;
  UserId: string;
  scheduleId: string;
  timestamp: number;
  Date: string;
  Note: string;
  Description: string;
  HeartbeatBaby: number;
  constructor() {
    this.Image = '';
    this.Result = '';
    this.UserId = '';
    this.scheduleId = '';
    this.timestamp = 0;
    this.Note = '';
    this.Description = '';
    this.Id = '';
    this.Date = '';
    this.HeartbeatBaby = 0;
  }
}

export class ExaminationResultRequest {
  Image: any;
  Result: string;
  UserId: string;
  scheduleId: string;
  timestamp: number;
  Note: string;
  Date: string;
  Description: string;
  HeartbeatBaby: number;
  constructor() {
    this.Image = '';
    this.Result = '';
    this.UserId = '';
    this.scheduleId = '';
    this.timestamp = 0;
    this.Note = '';
    this.Description = '';
    this.Date = '';
    this.HeartbeatBaby = 0;
  }
};