import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm : FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private userService: UserService) {}

  onSubmit() {
    let user: User = this.userForm.getRawValue();
    console.log(user);
    this.userService.addUser(user);
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['Chirag', [
        Validators.required
      ]],
      email: ['chirag@gmail.com', [
        Validators.required,
        Validators.email
      ]],
      age: [22, [
        Validators.required,
        Validators.min(12)
      ]],
      phone: this.fb.control(null, [Validators.required, Validators.pattern(/^\d{10}$/)])
    });
  }
}
