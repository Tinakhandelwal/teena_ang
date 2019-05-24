import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api: ApiService) { }
  registered = false;
  ngOnInit() {
  }
  onFormSubmit(e){
    if(e.controls.password.value !== e.controls.c_password.value)
    {
    console.log("Password Does Not Match");
    return false;
    }
    console.log(e.controls.password.value);
    const user = {
      name:e.controls.name.value,
      email:e.controls.email.value,
      username:e.controls.username.value,
      password:e.controls.password.value
    };
    this.registered = this.api.registerUser(user) ? true:false;

    }

}
