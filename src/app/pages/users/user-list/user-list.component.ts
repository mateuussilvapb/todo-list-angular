import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

// =============================================================== //
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  // =============================================================== //
  constructor(public userService: UserService) {}
  // =============================================================== //
  users: Array<User> = [];
  // =============================================================== //
  ngOnInit(): void {
    this.getUsers();
  }
  // =============================================================== //
  getUsers() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {}
    );
  }
}
