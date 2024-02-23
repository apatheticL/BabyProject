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
export class HealthStatusRequest {
  Key: string;
  Value: string;
  constructor() {
    this.Key = '';
    this.Value = '';
  }
}
export class HealthStatus {
  Key: string;
  Value: string;
  Id: string;
  constructor() {
    this.Key = '';
    this.Value = '';
    this.Id = '';
  }
}
