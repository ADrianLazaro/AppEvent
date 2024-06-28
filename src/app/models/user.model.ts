export interface User{
  _id: string;
  name: string;
  last_name: string;
  email: string;
  password: string;
  contact_info: {
     phone: number;
     address: string;
  };
}
