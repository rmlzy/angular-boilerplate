import { Component, OnInit } from "@angular/core";
import { UserRecord } from "../user.interface";
import { UserService } from "../user.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.less"],
})
export class ListComponent implements OnInit {
  loading: boolean = false;
  userRecords: UserRecord[] = [];

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.loading = true;
    this.userRecords = await this.userService.fetchUserRecords();
    this.loading = false;
  }
}
