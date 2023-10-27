import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DISMISS_MSG, USER_ADDED_SUCCESS_MSG } from 'src/app/constants';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm : FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {}

  onSubmit() {
    let user: User = this.userForm.getRawValue();
    user['id'] = -1;
    this.userService.addUser(user);
    this.router.navigate(['../view'], {relativeTo: this.activatedRoute})
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      age: [null, [
        Validators.required,
        Validators.min(12)
      ]],
      phone: [null, [
        Validators.required, Validators.pattern(/^\d{10}$/)
      ]]
    });
  }
}
