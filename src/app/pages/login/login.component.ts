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
        alert(JSON.stringify(info.user, null, 4));
        console.log(JSON.stringify(info.user, null, 4));
      }
    ).catch(
      error => {
        alert(JSON.stringify(error, null, 4));
        console.log(JSON.stringify(error, null, 4));
      }
    )

  }

}
