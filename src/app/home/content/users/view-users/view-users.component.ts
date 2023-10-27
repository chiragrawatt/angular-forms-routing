import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { USER_DISPLAY_COLUMNS } from 'src/app/constants';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})

export class ViewUsersComponent {
  users : User[] = [];
  @ViewChild(MatTable) userTable?: MatTable<any>;


  constructor(private userService: UserService, private router: Router) {
    this.users = userService.getAllUsers();
  }

  displayedColumns: string[] = USER_DISPLAY_COLUMNS;

  refreshData() {
    this.users = this.userService.getAllUsers();
    this.userTable?.renderRows();
  }

  editUser(user: User) {
    this.router.navigate([`home/user/edit/${user.id}`])
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id);
    this.refreshData();
  }
}
