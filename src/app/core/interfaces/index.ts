export interface IResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export class IUserProfile {
  id = 0;
  username = "";
  realname = "";
  email = "";
}
