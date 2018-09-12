import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>();
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  addLogin() {
    this.onLogin.emit({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    });
    this.loginForm.reset();
  }

}
