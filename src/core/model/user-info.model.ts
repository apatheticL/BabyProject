export class UserInfo {
  DueDate: string;
  GestationalAge: any;
  Name: string;
  Phone: string;
  UserId: string;
  Avatar?: string;
  Email?: string;
  Address?: string;
  constructor() {
    this.DueDate = '';
    this.GestationalAge = 0;
    this.Name = '';
    this.Phone = '';
    this.UserId = '';
    this.Address = '';
  }
}
