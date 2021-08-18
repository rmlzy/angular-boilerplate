import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userProfile$ = this.http.get("/profile").pipe(shareReplay(1));

  constructor(private http: HttpClient) {}
}
