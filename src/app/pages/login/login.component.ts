import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginFirebase: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onNewLogin(data): void {

    this.loginFirebase.login(data.email, data.password).then(
      info => {
        this.router.navigate(['/muro']);
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
