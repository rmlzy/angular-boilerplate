import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {
  constructor(private message: NzMessageService) {}

  ngOnInit() {}

  createMessage(type: string = 'info'): void {
    this.message.create(type, `This is a message of ${type}`);
  }
}
