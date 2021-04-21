import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-ajax",
  templateUrl: "./ajax.component.html",
  styleUrls: ["./ajax.component.less"],
})
export class AjaxComponent implements OnInit {
  loading = false;
  result = "";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  fetchTodayOfHistory() {
    this.loading = true;
    this.result = "";
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    this.http.get(url).subscribe((res) => {
      this.loading = false;
      this.result = JSON.stringify(res, null, "\t");
    });
  }

  reset() {
    this.loading = false;
    this.result = "";
  }
}
