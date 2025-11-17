// types/UserData.ts
export interface PersonalInfo {
  title: 'Mr' | 'Mrs';
  password: string;
  day?: string;
  month?: string;
  year?: string;
  newsletter?: boolean;
  optin?: boolean;
}

export interface AddressInfo {
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  country: string;
  state?: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export interface UserDataType {
  username: string;
  email?: string;
  password?: string;
  personalInfo: PersonalInfo;
  addressInfo: AddressInfo;
}
