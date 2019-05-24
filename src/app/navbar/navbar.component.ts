import { Component, OnInit } from '@angular/core';
import {ApiService} from '.././api.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   isLoggedIn = false;
   username = ' ';
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.isUserLoggedIn.subscribe(val => {
      console.log(val);
      if(val){
        this.isLoggedIn = val;
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        this.username = user.name;
      }else{
        this.username = 'Guest';
      }
    });
  }
  logout(){
    this.api.logoutUser();
    this.api.isUserLoggedIn
  }

}
