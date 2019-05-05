import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

type BtnColorType = 'black' | 'red' | 'blue' | 'orange';

@Component({
  selector: 'app-custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.less']
})
export class CustomBtnComponent implements OnInit {
  @Input() color: BtnColorType = 'black';

  constructor() { }

  ngOnInit() {
  }

}
