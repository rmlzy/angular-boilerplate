import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  visible1 = false;

  visible2 = false;

  constructor(private modalService: NzModalService) {}

  ngOnInit() {}

  showModal1(): void {
    this.visible1 = true;
  }

  handleOk1() {
    console.log('Button ok clicked!');
    this.visible1 = false;
  }

  handleCancel1(): void {
    console.log('Button cancel clicked!');
    this.visible1 = false;
  }

  showModal2(): void {
    this.visible2 = true;
  }

  handleOk2() {
    console.log('Button ok clicked!');
    this.visible2 = false;
  }

  handleCancel2(): void {
    console.log('Button cancel clicked!');
    this.visible2 = false;
  }

  info(): void {
    this.modalService.info({
      nzTitle: 'This is a notification message',
      nzContent:
        '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
      nzOnOk: () => console.log('Info OK')
    });
  }

  success(): void {
    this.modalService.success({
      nzTitle: 'This is a success message',
      nzContent: 'some messages...some messages...'
    });
  }

  error(): void {
    this.modalService.error({
      nzTitle: 'This is an error message',
      nzContent: 'some messages...some messages...'
    });
  }

  warning(): void {
    this.modalService.warning({
      nzTitle: 'This is an warning message',
      nzContent: 'some messages...some messages...'
    });
  }

  createModal(): void {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: 'string, will close after 1 sec',
      nzClosable: false,
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000))
    });
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'Bla bla ...',
      nzOkText: 'OK',
      nzCancelText: 'Cancel'
    });
  }
}
