import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.less']
})
export class CustomComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleBtnClick(evt) {
    console.log(evt);
  }
}
