export class User {
  displayName?: string | null;
  email: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: any;
  phoneNumber?: string | null;
  photoURL?: string | null;
  uid: string;
  providerId?: string;
  constructor() {
    this.displayName = '';
    this.email = '';
    this.emailVerified = false;
    this.isAnonymous = false;
    this.metadata = {};
    this.phoneNumber = '';
    this.photoURL = '';
    this.uid = '';
    this.providerId = '';
  }
}
