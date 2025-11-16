export type TitleOption = 'Mr' | 'Mrs';

export interface IPersonalInfoData {
  title?: TitleOption;
  name: string;
  password: string;
  day?: string;
  month?: string;
  year?: string;
  newsletter?: boolean;
  optin?: boolean;
}

export interface IAddressInfoData {
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}