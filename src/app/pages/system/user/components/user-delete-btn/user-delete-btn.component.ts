import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'user-delete-btn',
  templateUrl: './user-delete-btn.component.html',
  styleUrls: ['./user-delete-btn.component.less'],
})
export class UserDeleteBtnComponent implements OnInit {
  @Input() id: number = 0;
  @Output() refresh = new EventEmitter<string>();

  loading: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  async confirm() {
    this.loading = true;
    try {
      await this.userService.removeUser(this.id);
      this.refresh.emit();
    } catch (e) {
      // ignore
    }
    this.loading = false;
  }

  cancel() {}
}
