export class UserRecord {
  id: number = 0;
  username: string = '';
  realname: string = '';
  email: string = '';
  createdAt: string = '';
  updatedAt: string = '';
}

export class UserForm {
  username: string = '';
  password: string = '';
  realname: string = '';
  email: string = '';
}

export class CreateUserResp {
  id: number = 0;
}
