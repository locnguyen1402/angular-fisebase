import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormControl, Validators, ValidatorFn, Validator } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  password: string;
  repassword: string;
  constructor(private Auth: AuthenticationService, private router: Router) { }
  ngOnInit() {
    this.formRegister = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),
    });
    const repassword = new FormControl('', Validators.compose([
      Validators.required,
      this.sameValueAs(this.formRegister, 'password')
    ]));
    this.formRegister.addControl('repassword', repassword);
  }
  onSubmit(form) {
    // console.log(form);
    this.Auth.isExistAccount(form).then((s) => {
      if (s !== null) {
        // account da ton tai
        alert('That username is taken. Try another!');
      } else {
        this.Auth.register(form).then(() => {
          alert('The account is created');
          this.router.navigateByUrl('auth/login');
        });
      }
    });
  }
  sameValueAs(group: FormGroup, controlName: string): ValidatorFn {
    return (control: FormControl) => {
      const myValue = control.value;
      const compareValue = group.controls[controlName].value;
      return (myValue === compareValue) ? null : { valueDifferentFrom: controlName };
    };
  }
}
