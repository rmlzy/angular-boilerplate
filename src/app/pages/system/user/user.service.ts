import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResponse } from "~/core";
import { UserRecord } from "./user.interface";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  async fetchUserRecords(): Promise<UserRecord[]> {
    const res = await this.http.get<IResponse<UserRecord[]>>("/user").toPromise();
    return res.data;
  }
}
