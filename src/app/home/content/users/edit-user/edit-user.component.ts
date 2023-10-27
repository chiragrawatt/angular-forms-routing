import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent {
  userForm: FormGroup = this.fb.group({});
  userId: number = -1;

  constructor(private fb: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute) {

  }

  onSubmit() {
    let user: User = this.userForm.getRawValue();
    console.log(user);
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id');
      if(id!=null) {
        this.userId = parseInt(id);
      }
    })

    let user: User | null = this.userService.getUserById(this.userId);
    console.log(this.userId, user);

    this.userForm = this.fb.group({
      name: [user?.name, [
        Validators.required
      ]],
      email: [user?.email, [
        Validators.required,
        Validators.email
      ]],
      age: [user?.age, [
        Validators.required,
        Validators.min(12)
      ]],
      phone: [user?.phone, [
        Validators.required, this.phoneNumberValidator()
      ]]
    });
  }
  // Validators.pattern(/^\d{10}$/)

  phoneNumberValidator() : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
      let input = new String(control.value);
      return input.length === 10 ? null : {invalidPhone: true};
    }
  }
}
