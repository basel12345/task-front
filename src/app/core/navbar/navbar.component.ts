import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, DoCheck{
  token: string;
  constructor() {
  }
  ngOnInit() {
  }

  ngDoCheck() {
    this.token = JSON.parse(localStorage.getItem("token"));
  }

  logOut() {
    localStorage.clear();
  }
}
