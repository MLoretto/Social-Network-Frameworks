import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfilesService } from '../../services/profiles.service';
import { AuthService } from '../../auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-form-muro',
  templateUrl: './form-muro.component.html',
  styleUrls: ['./form-muro.component.css']
})
export class FormMuroComponent implements OnInit {
  
  reviewForm: FormGroup;
  infoUser:User;
  
  constructor(private formBuilder: FormBuilder, private getProfile: ProfilesService,private getDataUser: AuthService) {
    this.reviewForm = this.formBuilder.group({
      review: ['', Validators.compose([Validators.required])],
    });
    this.getDataUser.getInfoUser().subscribe(info => {
      this.infoUser = info;
    });

   }

  ngOnInit() {
  }
  addReview() {
    console.log(this.infoUser.email);
    console.log(this.infoUser.uid);
    
    console.log(this.infoUser.email.split('@')[0]);
    console.log(this.reviewForm.value.review);
    this.getProfile.addProfile(this.infoUser.email,this.infoUser.uid,this.infoUser.email.split('@')[0],this.reviewForm.value.review );

    //alert('Agregar!!!' + this.reviewForm.value.review);
    this.reviewForm.reset();
  }


}
