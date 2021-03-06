import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

import {UserService}from '../../services/user.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {

  private userForm: FormGroup;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }


  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      image: ''
    });
  }

  onSubmit() {
    this.userService.create(
      this.userForm.get('username').value,
      this.userForm.get('email').value,
      this.userForm.get('password').value,
      this.userForm.get('firstname').value,
      this.userForm.get('lastname').value,
      this.userForm.get('image').value
      ).subscribe(response => {
        this.router.navigate(['users']);
      }, error => {
        console.log('Error Posting in: ' + (error && error.message ? error.message : ''));
      })

    }




}