import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
})



export class SignInPageComponent implements OnInit {
    public signInForm: FormGroup;
    public loginError: string;


  constructor(public formBuilder:FormBuilder,public userService: UserService,public router: Router) {
    this.signInForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });

  }

  doLogin() {
    this.userService.login(
      this.signInForm.get('username').value,
      this.signInForm.get('password').value).subscribe(loginResponse => {
        this.router.navigate(['tasks']);
      }, error => {
        this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
      })
  }


    ngOnInit() {

  }
}