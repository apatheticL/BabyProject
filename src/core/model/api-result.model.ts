export class ApiResultModel {
  data: any;
  error?: string;
  status?: boolean;
  message?: string;
  constructor() {
    this.data = null;
    this.error = '';
  }
}
