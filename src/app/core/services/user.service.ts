import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { IResponse, IUserProfile } from '~/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userProfile$ = this.http
    .get<IResponse<IUserProfile>>('/profile')
    .pipe(shareReplay(1));

  constructor(private http: HttpClient) {}
}
