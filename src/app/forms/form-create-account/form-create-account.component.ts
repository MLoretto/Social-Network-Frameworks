import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-account',
  templateUrl: './form-create-account.component.html',
  styleUrls: ['./form-create-account.component.css']
})
export class FormCreateAccountComponent implements OnInit {

  @Output() onCreAccount: EventEmitter<any> = new EventEmitter<any>();
  createaccountForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createCreateaccountForm();
  }

  ngOnInit() {
  }

  createCreateaccountForm() {
    this.createaccountForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  addCreAccount() {
    this.onCreAccount.emit({
      email: this.createaccountForm.value.email,
      password: this.createaccountForm.value.password,
    });
    this.createaccountForm.reset();
  }

}
