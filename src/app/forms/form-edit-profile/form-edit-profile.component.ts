import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-edit-profile',
  templateUrl: './form-edit-profile.component.html',
  styleUrls: ['./form-edit-profile.component.css']
})
export class FormEditProfileComponent implements OnInit {

  @Output() onCreAccount: EventEmitter<any> = new EventEmitter<any>();
  createEditProfileForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.createCreateEditProfileForm();
  }

  ngOnInit() {
  }

  createCreateEditProfileForm() {
    this.createEditProfileForm = this.formBuilder.group({
      email: ['',Validators.required, Validators.email],
      //password: ['', Validators.required, Validators.minLength(6)],
      nombre:['',Validators.required]
    });
  }

  addCreEditProfileForm() {
    this.onCreAccount.emit({
      email: this.createEditProfileForm.value.email,
      nombre: this.createEditProfileForm.value.nombre
    });
    this.createEditProfileForm.reset();
  }

}
