import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {
  // 控制目录的展开/折叠
  collapsed = false;

  constructor() {}

  ngOnInit() {}

  // onToggleCollapsed(evt) {
  //   console.log('执行了 onToggleCollapsed');
  //   this.collapsed = !this.collapsed;
  // }
}
