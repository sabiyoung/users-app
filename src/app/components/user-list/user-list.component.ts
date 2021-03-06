import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
public searchTerm = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.users = [];
  }
get users (){
  return this.userService.getFilteredUsers(this.searchTerm)
}

}
