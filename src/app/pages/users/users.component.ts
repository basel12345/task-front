import { User } from './../../shared/Interfaces/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'users-root',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  Users: User;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.data.subscribe(res => {
     this.Users = res.Users;
    });
  }
}
