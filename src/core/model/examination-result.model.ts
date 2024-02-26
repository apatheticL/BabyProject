export class ExaminationResult {
  Id: string;
  Image: any;
  UserId: string;
  scheduleId: string;
  timestamp: number;
  Date: string;
  Note: string;
  Description: string;
  HeartbeatBaby: number;
  BabyWeight: number;
  MotherArm?: string;
  MotherWeight?: number;
  constructor() {
    this.Image = '';
    this.UserId = '';
    this.scheduleId = '';
    this.timestamp = 0;
    this.Note = '';
    this.Description = '';
    this.Id = '';
    this.Date = '';
    this.HeartbeatBaby = 0;
    this.BabyWeight = 0;
  }
}

export class ExaminationResultRequest {
  Image?: string[];
  UserId: string;
  scheduleId: string;
  Note: string;
  Date: string;
  Description: string;
  HeartbeatBaby: number;
  BabyWeight: number;
  MotherArm?: string;
  MotherWeight?: number;
  constructor() {
    this.Image = [];
    this.UserId = '';
    this.scheduleId = '';
    this.Note = '';
    this.Description = '';
    this.Date = '';
    this.HeartbeatBaby = 0;
    this.BabyWeight = 0;
  }
}
