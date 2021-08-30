import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';
import { IPageReq, IPageRes, IResponse } from '~/core';
import { CreateUserResp, UserForm, UserRecord } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  async fetchPageList(params: IPageReq): Promise<IPageRes<UserRecord>> {
    const res = await this.http
      .get<IResponse<IPageRes<UserRecord>>>('/user', { params })
      .toPromise();
    return res.data;
  }

  async fetchDetail(id: number) {
    const res = await this.http
      .get<IResponse<UserRecord>>(`/user/${id}`)
      .toPromise();
    return res.data;
  }

  async create(body: UserForm): Promise<number> {
    const res = await this.http
      .post<IResponse<CreateUserResp>>('/user', body)
      .toPromise();
    return res.data.id;
  }

  async update(id: number, body: UserForm): Promise<void> {
    await this.http
      .patch<IResponse<CreateUserResp>>(`/user/${id}`, body)
      .toPromise();
  }

  async removeUser(id: number): Promise<void> {
    await this.http
      .delete<IResponse<CreateUserResp>>(`/user/${id}`)
      .toPromise();
  }

  async refill(id: number) {
    const user = await this.fetchDetail(id);
    const form = new UserForm();
    return _.pick(user, Object.keys(form));
  }
}
