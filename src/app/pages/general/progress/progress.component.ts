import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {
  formatOne = (percent: number) => `${percent} Days`;

  formatTwo = () => `Done`;

  constructor() {}

  ngOnInit() {}
}
