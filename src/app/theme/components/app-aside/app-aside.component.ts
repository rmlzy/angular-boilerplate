import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { APP_MENUS } from '../../../app-menu';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html',
  styleUrls: ['./app-aside.component.less']
})
export class AppAsideComponent implements OnInit {
  @Input() collapsed: boolean;
  @Output() toggleCollapsed = new EventEmitter();

  menus = APP_MENUS;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.toggleCollapsed.emit();
  }
}
