import { Component } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(
    public accountService: AccountService
  ) {}
}
