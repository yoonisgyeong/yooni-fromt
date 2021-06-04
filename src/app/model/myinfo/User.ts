export interface User{
  no: number;
  userid: string;
  name: string;
  provider: string;
  roles: string[];
  createAt: Date;
  modifiedAt: Date;
}
