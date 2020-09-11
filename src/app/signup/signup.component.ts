import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  model: any = {};
  mustMatch: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.model = {
      fname: form.value.fName,
      lname: form.value.lName,
      email: form.value.email,
    };
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password,
    });
    console.log(form);
  }
}
