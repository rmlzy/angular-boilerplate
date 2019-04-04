import { Component, OnInit } from '@angular/core';
import { APP_MENUS } from '../../../app-menu';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html',
  styleUrls: ['./app-aside.component.less']
})
export class AppAsideComponent implements OnInit {
  menus = APP_MENUS;

  constructor() {}

  ngOnInit() {}

  handleMenuClick(url) {
    console.log(url);
  }
}
