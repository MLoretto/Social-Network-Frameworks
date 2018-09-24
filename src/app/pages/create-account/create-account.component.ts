import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private addProfileFirestore: ProfilesService, private signupFirebase: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onNewCreateAccount(data): void {
    this.signupFirebase.signup(data.email, data.password).then(
      info => {
        this.addProfileFirestore.addProfileData(info.user.email, info.user.uid).then(
          infoFS => {
            this.router.navigate(['/muro']);
          }
        ).catch(
          error => {
            console.log("No se creo el perfil correctamente", error);
          }
        )
        console.log(info.user.uid, info.user.email);
      }
    ).catch(
      error => {
        this.router.navigate(['/crearcuenta'])
        console.log(error);
      }
    )
  }
}
