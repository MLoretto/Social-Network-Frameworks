import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginFirebase: AuthService) { }

  ngOnInit() {
  }

  onNewLogin(data): void {

    this.loginFirebase.login(data.email, data.password).then(
      info => {
        // routing al muro
        console.log(JSON.stringify(info.user, null, 4));
      }
    ).catch(
      error => {
        if (error.code === "auth/user-not-found") {
          alert("Usuario o Contraseña Incorrecta")
        }
        else if (error.code === "auth/wrong-password") {
          alert("Usuario o Contraseña Incorrecta")
        }
        else {
          alert("Error desconocido")
        }
      }
    )

  }

}
