export interface IResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export class IUserProfile {
  id = 0;
  username = '';
  realname = '';
  email = '';
}

export interface IPageRes<T> {
  total: number;
  pageIndex: number;
  pageSize: number;
  items: T[];
}

export class IPageReq {
  pageIndex: number = 1;
  pageSize: number = 10;
  [param: string]: string | number | boolean;
}
