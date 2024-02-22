export class Health {
  Date: string;
  Description: string;
  Id: string;
  UserId: string;
  timestamp: number;
  iconId?: number;
  constructor() {
    this.Date = '';
    this.Description = '';
    this.Id = '';
    this.UserId = '';
    this.timestamp = 0;
  }
}

export class HealthRequest {
  Date: string;
  Description: string;
  UserId: string;
  iconId?: number;
  constructor() {
    this.Date = '';
    this.Description = '';
    this.UserId = '';
  }
}
export class HealthStatus {
  Key: number;
  Value: string;
  constructor() {
    this.Key = 0;
    this.Value = '';
  }
}
